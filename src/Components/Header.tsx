import AppBar from "@mui/material/AppBar";
import { Button, IconButton, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar sx={{ background: "black" }} position="relative">
      <Toolbar>
        <img
          src={require(`../Static/sprites/logo192.png`)}
          alt="logo"
          style={{ width: "50px", height: "50px" }}
        />
        <Typography
          variant="h4"
          style={{ color: "#F2D100", userSelect: "none" }}
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
            window.open("https://discord.gg/VK3hNKjCrf");
          }}
        >
          Discord
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
