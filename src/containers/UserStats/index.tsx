import { STATS_GET } from "api";
import ErrorMessage from "components/ErrorMessage";
import Head from "components/Head";
import Loading from "components/Loading";
import useFetch from "hooks/useFetch";
import { lazy, Suspense, useEffect } from "react";
import { UserStatsData } from "types/components/UserStatsGraphs";

const UserStatsGraphs = lazy(
  () => import("./../../components/UserStatsGraphs/index")
);

function UserStats() {
  const { data, error, loading, request } = useFetch<UserStatsData[]>();

  useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }

    getData();
  }, [request]);

  if (loading) return <Loading />;

  if (error) return <ErrorMessage error={error} />;

  if (data)
    return (
      <Suspense fallback={<Loading />}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </Suspense>
    );
  else return null;
}

export default UserStats;
