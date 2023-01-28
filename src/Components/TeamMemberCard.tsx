import { Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import Typography from "@mui/material/Typography";

const TeamMemberCard = (props: any) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 120, width: 120, imageRendering: "crisp-edges" }}
        image={require("../Static/sprites/regeneration.png")}
        title="regeneration"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          MoldyCereal
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Hi y'all! I'm a front end developer eager to develop splendid games for all.
        </Typography>
      </CardContent>
      <CardActions>
        <Typography>Socials: </Typography>
        <Button size="small">Twitter</Button>
      </CardActions>
    </Card>
  );
};

export default TeamMemberCard;
