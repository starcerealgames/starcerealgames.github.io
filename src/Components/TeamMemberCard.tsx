import {
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import Typography from "@mui/material/Typography";

const TeamMemberCard = (props: any) => {
  return (
    <Card
      sx={{
        width: 200,
        height: 320,
        padding: "10px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img
        style={{
          imageRendering: "pixelated",
          textAlign: "center",
          overflow: "visible",
          height: 120,
          width: 120,
          userSelect: "none"
        }}
        alt={props.member.imageDesc}
        src={require(`../Static/sprites/${props.member.imageDesc}.png`)}
      />
      <CardContent>
        <Typography style={{ userSelect: "none" }} gutterBottom variant="h5" component="div">
          {props.member.name}
        </Typography>
        <Typography style={{ userSelect: "none" }} variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
          {props.member.blurb}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ bottom: 0, left: 0, mt: "auto" }}>
        <Typography style={{ userSelect: "none" }}>Socials: </Typography>
        <Button
          size="small"
          onClick={(e) => {
            e.preventDefault();
            window.open(props.member.link);
          }}
        >
          {props.member.socials}
        </Button>
      </CardActions>
    </Card>
  );
};

export default TeamMemberCard;
