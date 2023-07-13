import { AppBar, IconButton, Toolbar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HomeButton = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  const handleClick = () => {
    if (userInfo) {
      navigate("/scores"); // Navigate to "/scores" if userInfo exists
    } else {
      navigate("/"); // Navigate to "/" if userInfo doesn't exist
    }
  };

  return (
    <AppBar position="sticky" sx={{ background: "#005e23", boxShadow: "none" }}>
      <Toolbar sx={{ flexGrow: 1, display: "flex", justifyContent: "right" }}>
        <IconButton sx={{ ml: "auto" }} onClick={handleClick}>
          <HomeIcon sx={{ color: "white", fontSize: 40 }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default HomeButton;
