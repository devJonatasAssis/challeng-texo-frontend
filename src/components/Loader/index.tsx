import { TailSpin } from "react-loader-spinner";

import "./styles.css";

export default function Loader() {
  return (
    <div data-testid="loader">
      <TailSpin color="#6a5ca6" height="60" width="60" />
      <span>Carregando...</span>
    </div>
  );
}
