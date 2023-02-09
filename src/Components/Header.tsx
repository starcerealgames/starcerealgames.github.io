import AppBar from "@mui/material/AppBar";
import StadiumIcon from "@mui/icons-material/Stadium";
import StarIcon from "@mui/icons-material/Star";
import { Button, IconButton, Toolbar, Typography } from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <StarIcon />
          <SportsEsportsIcon />
        </IconButton> */}
        <img
          src={require(`../Static/sprites/logo192.png`)}
          alt="logo"
          style={{ width: "50px", height: "50px", background: "black" }}
        />
        <Typography
          variant="h6"
          style={{ userSelect: "none" }}
          textAlign={"center"}
          component="div"
          sx={{ flexGrow: 1 }}
        >
          star cereal games
        </Typography>
        <Button
          color="inherit"
          onClick={(e) => {
            e.preventDefault();
            window.open("https://discord.gg/VK3hNKjCrf")
          }}
        >
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
