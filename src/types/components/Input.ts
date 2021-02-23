export default interface Input {
  label: string;
  type?: string | undefined | null;
  name: string;
  value: string;
  error: string | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}
