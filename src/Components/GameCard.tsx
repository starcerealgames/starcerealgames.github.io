import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grow from "@mui/material/Grow";

const GameCard = (props: any) => {
  return (
    <Grow in={true} appear style={{ transitionDelay: "150ms" }}>
      <Card
        sx={{
          width: 400,
          height: 500,
          // padding: "10px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px",
          marginTop: '10px',
        }}
      >
        <img
          style={{
            imageRendering: "crisp-edges",
            textAlign: "center",
            overflow: "visible",
            width: 400,
            userSelect: "none",
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.preventDefault();
            window.open(props.game.link);
          }}
          alt={props.game.imageDesc}
          src={require(`../Static/sprites/${props.game.imageDesc}.png`)}
        />
        <CardContent>
          <Typography
            style={{ userSelect: "none" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {props.game.name}
          </Typography>
          <Typography style={{ userSelect: "none",  }} sx={{ flex: 1 }}>
            {props.game.description}
          </Typography>
          <Typography style={{ userSelect: "none" }}>Check it out: </Typography>
          <Button
            style={{ color: "#89376D" }}
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
    </Grow>
  );
};

export default GameCard;
