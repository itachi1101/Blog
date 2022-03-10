import "./settings.css";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const { token ,dispatch} = useContext(Context);
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await axios
      .post(
        "http://localhost:5000/api/user/updateUser",
        { username: username, password: password },
        config
      )
      .then(()=>{dispatch({type:"LOGOUT"});history.push("/")})
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const getUser = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/user/getUser",
          config
        );
        setCurrentUser(data);
      } catch (err) {
        console.log({ error: err.message });
      }
    };
    getUser();
  }, [token]);
  return (
    <div className="settings" style={{ marginTop: "60px" }}>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
        </div>
        <form className="settingsForm" type="submit" onSubmit={handleSubmit}>
          <label>Enter New Username</label>
          <input
            type="text"
            placeholder={currentUser?.username || "hello"}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={currentUser?.email || "hello"}
            disabled
          />
          <label>Enter New Password</label>
          <input
            type="password"
            placeholder="New Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
    </div>
  );
}
