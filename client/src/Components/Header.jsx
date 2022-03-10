import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../context/Context";
import { useEffect, useContext, useState } from "react";
import axios from "axios";
const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { token, dispatch } = useContext(Context);
  const [currentUser, setCurrentUser] = useState(null);
  const history=useHistory()
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    
    handleCloseUserMenu();
    history.push('/')
  };
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const fetchUser = async () => {
      const {data} = await axios.get(
        "http://localhost:5000/api/user/getUser",
        config
      );
      setCurrentUser(data.id);
    };
    fetchUser();
  }, [token]);
  return (
    <AppBar position="fixed" style={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              THE BLOG
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              style={{ color: "black" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Link
                to={currentUser ? `/myposts` : "/login"}
                style={{ color: "black", textDecoration: "none" }}
              >
                <MenuItem key="myposts" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">My Posts</Typography>
                </MenuItem>
              </Link>
              <Link
                to={currentUser === null ? `/login` : "/write"}
                style={{ color: "black", textDecoration: "none" }}
              >
                <MenuItem key="write" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Write</Typography>
                </MenuItem>
              </Link>
              <Link
                to={`/about`}
                style={{ color: "black", textDecoration: "none" }}
              >
                <MenuItem key="about" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">About</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 2, display: { xs: "flex", md: "none" } }}
          >
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              THE BLOG
            </Link>
          </Typography>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            style={{ justifyContent: "center" }}
          >
            <Link
              to={currentUser ? `/myposts` : "/login"}
              style={{ color: "black", textDecoration: "none" }}
            >
              <MenuItem key="myposts" onClick={handleCloseNavMenu}>
                <Typography variant="h6" textAlign="center">
                  My Posts
                </Typography>
              </MenuItem>
            </Link>
            <Link
              to={currentUser ? `/write` : "/login"}
              style={{ color: "black", textDecoration: "none" }}
            >
              <MenuItem key="write" onClick={handleCloseNavMenu}>
                <Typography variant="h6" textAlign="center">
                  Write
                </Typography>
              </MenuItem>
            </Link>
            <Link
              to={`/about`}
              style={{ color: "black", textDecoration: "none" }}
            >
              <MenuItem key="about" onClick={handleCloseNavMenu}>
                <Typography variant="h6" textAlign="center">
                  About
                </Typography>
              </MenuItem>
            </Link>
          </Box>
          {currentUser != null ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src={
                      currentUser
                        ? `http://localhost:5000/api/user/${currentUser}/avatar`
                        : ""
                    }
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem key={"profile"} onClick={handleCloseUserMenu}>
                  <Link
                    to={`/profile`}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <Typography textAlign="center">PROFILE</Typography>
                  </Link>
                </MenuItem>
                <MenuItem key={"logout"} onClick={handleLogout}>
                  <Typography textAlign="center">LOGOUT</Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <div>
              <Link
                to="/login"
                style={{ color: "black", textDecoration: "none" }}
              >
                LOGIN
              </Link>
            </div>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
