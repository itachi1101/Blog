import { Badge } from "react-bootstrap";
import "./sidebar.styles.scss";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">Advertisment</span>
        <img
          src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
        <Badge style={{ cursor: "pointer" }} bg="success">
          Buy Now
        </Badge>
      </div>
      <div style={{ marginTop: "30px" }} className="sidebarItem">
        <img
          src="https://images.unsplash.com/photo-1561069934-eee225952461?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />
        <Badge style={{ cursor: "pointer" }} bg="success">
          Buy Now
        </Badge>
      </div>
    </div>
  );
}
