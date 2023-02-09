import AppBar from "@mui/material/AppBar";
import { Button, IconButton, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <img
          src={require(`../Static/sprites/logo192.png`)}
          alt="logo"
          style={{ width: "50px", height: "50px", background: "black" }}
        />
        <Typography
          variant="h4"
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
