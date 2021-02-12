import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "api";
import { createContext, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface UserData {
  id: number;
  username: string;
  nome: string;
  email: string;
}

interface UserContextGlobal {
  userLogin: (username: string, password: string) => void;
  userLogout: () => void;
  data: UserData | null;
  error: string | null;
  loading: boolean;
  login: boolean | null;
}

export const UserContext = createContext<UserContextGlobal | undefined>(
  undefined
);

export function UserStorage({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const [data, setData] = useState<UserData | null>(null);
  const [login, setLogin] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  async function getUser(token: string) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username: string, password: string) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const tokenRes = await fetch(url, options);

      if (!tokenRes.ok) {
        throw new Error(`Error: Usuário inválido.`);
      }

      const { token } = await tokenRes.json();

      window.localStorage.setItem("token", token);
      await getUser(token);
      navigate("/conta");
    } catch (error) {
      setError(error.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  const userLogout = useCallback(
    async function () {
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);

      window.localStorage.removeItem("token");
      navigate("/login");
    },
    [navigate]
  );

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");

      if (token) {
        try {
          setLoading(true);
          setError(null);
          setLogin(false);

          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);

          if (!response.ok) {
            throw new Error("O token é inválido");
          }
          await getUser(token);
          setLogin(true);
        } catch (error) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogout, userLogin, data, error, login, loading }}
    >
      {children}
    </UserContext.Provider>
  );
}
