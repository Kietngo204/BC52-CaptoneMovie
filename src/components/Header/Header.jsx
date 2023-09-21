import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import { AccountCircle, ExitToApp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { SigninAndSignup, SpanHeader } from "./stylesHeader";
import { useUserContext } from "../../contexts/UserContext/UserContext";

const pages = [
  { id: "showing", label: "Lịch chiếu" },
  { id: "cumrap", label: "Cụm rạp" },
  { id: "tintuc", label: "Tin tức" },
  { id: "ungdung", label: "Ứng dụng" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const navigate = useNavigate();
  const { currentUser, handleSignout } = useUserContext();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    navigate(`/`);
    const element = document.getElementById(`${page.id}`);
    element.scrollIntoView({ behavior: "smooth" });
  };

  const handleCloseUserMenu = (setting) => {
    setAnchorElUser(null);
    if (setting === "Logout") {
      handleSignout();
    }
  };

  return (
    <AppBar position="fixed" color="default">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MovieFilterIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            color="error"
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#d32f2f",
              textDecoration: "none",
            }}
          >
            Movie
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              {pages.map((page) => (
                <MenuItem
                  key={page.id}
                  onClick={() => handleCloseNavMenu(page)}
                >
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <MovieFilterIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            color="error"
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#d32f2f",
              textDecoration: "none",
            }}
          >
            Movie
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
            justifyContent="center"
          >
            {pages.map((page) => (
              <Button
                key={page.id}
                onClick={() => handleCloseNavMenu(page)}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  margin: "0 10px",
                }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          {/* Account */}
          {currentUser ? (
            <>
              <Box
                sx={{ flexGrow: 0, borderRight: 1, pr: 2 }}
                display={"inline-block"}
              >
                <Tooltip title="User">
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{
                      p: 0,
                      "&:hover": {
                        color: "rgb(211, 47, 47) ",
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    <AccountCircle fontSize="large" />
                    <Typography>{currentUser.hoTen}</Typography>
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
                  {settings.map((setting) => (
                    <MenuItem
                      key={setting}
                      onClick={() => handleCloseUserMenu(setting)}
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <IconButton
                sx={{
                  "&:hover": {
                    color: "rgb(211, 47, 47) ",
                    backgroundColor: "transparent",
                  },
                }}
                onClick={handleSignout}
              >
                <ExitToApp />
                <Typography>Đăng xuất</Typography>
              </IconButton>
            </>
          ) : (
            <>
              {/* Signin */}
              <Box sx={{ flexGrow: 0 }}>
                <SigninAndSignup
                  onClick={() => navigate(`/signin`)}
                  borderRight="1px solid #9e9e9e"
                >
                  <Tooltip title="Đăng nhập">
                    <AccountCircle fontSize="large" />
                  </Tooltip>
                  <SpanHeader>Đăng nhập</SpanHeader>
                </SigninAndSignup>
              </Box>

              {/* Signup */}
              <Box sx={{ flexGrow: 0 }}>
                <SigninAndSignup onClick={() => navigate(`/signup`)}>
                  <Tooltip title="Đăng kí">
                    <AccountCircle fontSize="large" />
                  </Tooltip>
                  <SpanHeader>Đăng kí</SpanHeader>
                </SigninAndSignup>
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
