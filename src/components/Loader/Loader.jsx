import { Grid } from "react-loader-spinner";
import style from "./Loader.module.css";

export function Loader() {
  return (
    <Grid
      visible={true}
      height="80"
      width="80"
      color="#4354b0"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperClass={style.wrapper}
    />
  );
}