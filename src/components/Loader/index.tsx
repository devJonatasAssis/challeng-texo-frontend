import { TailSpin } from "react-loader-spinner";

import "./styles.css";

export default function Loader() {
  return (
    <div>
      <TailSpin color="#6a5ca6" height="60" width="60" />
    </div>
  );
}
