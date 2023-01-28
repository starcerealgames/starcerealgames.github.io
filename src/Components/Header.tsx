import AppBar from "@mui/material/AppBar";
import StadiumIcon from "@mui/icons-material/Stadium";
import StarsIcon from '@mui/icons-material/Stars';
import { Button, IconButton, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <StadiumIcon />
        </IconButton>
        <Typography variant="h6" style={{ userSelect:"none"}} textAlign={"center"} component="div" sx={{ flexGrow: 1 }}>
          star cereal games
        </Typography>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
