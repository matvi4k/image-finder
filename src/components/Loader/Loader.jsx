import { Grid } from "react-loader-spinner";

export function Loader() {
  return (
    <Grid
      visible={true}
      height="80"
      width="80"
      color="#4354b0"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 25
      }}
      wrapperClass="grid-wrapper"
    />
  );
}