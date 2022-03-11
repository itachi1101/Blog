import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./notPresent.styles.css";

export default function NotPresent() {
  return (
    <Card
      style={{
        width: "60%",
        height: "450px",
        marginTop: "100px",
        marginRight: "90px",
      }}
      className="fontNot"
    >
      <h1 style={{textAlign:"center"}}>No Posts To Show</h1>
      <h2 style={{ textAlign: "center",marginTop:"40px",color:"grey" }}>Write you very first Post</h2>
      <button
        style={{
          cursor: "pointer",
          borderRadius: "0px",
          outline: "none",
          padding: "10px",
          marginTop: "20px",
          backgroundColor: "white",
          border:"none"
        }}
      >
        <Link to="/write"
          style={{
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "3rem",
          }}
        >
          Start Here
        </Link>
      </button>
    </Card>
  );
}
