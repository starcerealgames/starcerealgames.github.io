import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import Typography from "@mui/material/Typography";

const GameCard = (props: any) => {
  return (
    <Card
      sx={{
        width: 400,
        height: 400,
        padding: "10px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        style={{
          imageRendering: "crisp-edges",
          textAlign: "center",
          overflow: "visible",
          width: 400,
        }}
        onClick={(e) => {
            e.preventDefault();
            window.open(props.game.link);
          }}
        alt={props.game.imageDesc}
        src={require(`../Static/sprites/${props.game.imageDesc}.png`)}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.game.name}
        </Typography>
        <Typography sx={{ flexGrow: 1 }}>
            {props.game.description}
        </Typography>
        <Typography>Check it out: </Typography>
        <Button
          size="small"
          onClick={(e) => {
            e.preventDefault();
            window.open(props.game.link);
          }}
        >
        {props.game.name}
        </Button>
      </CardContent>
    </Card>
  );
};

export default GameCard;
