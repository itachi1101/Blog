import loader from "../../Photo/loader.gif";
export default function LoadingPage() {
  return (
    <div
      style={{
        width: "100%",
        height: "900px",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <img style={{marginTop:"200px",width:"100%",height:"50%"}}src={loader} />
    </div>
  );
}
