import { Grid } from "react-loader-spinner";
import style from "./Loader.module.css";

export function Loader() {
  return (
    <Grid
      visible={true}
      height="50"
      width="50"
      color="#000000"
      ariaLabel="grid-loading"
      radius="8"
      wrapperClass={style.wrapper}
    />
  );
}