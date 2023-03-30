import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, Box, Grid, Divider, Zoom } from "@mui/material";
import Header from "./Components/Header";
import TeamMemberCard from "./Components/TeamMemberCard";
import { Typography } from "@mui/material";
import GameCard from "./Components/GameCard";

// in order to add to git hub page
// 1) npm run deploy

interface teamMemberInfo {
  name: string;
  image: string;
  imageDesc: string;
  blurb: string;
  discord: string;
}

const gameCardInfo = [
  {
    name: "Amara",
    imageDesc: "amara1",
    description: "Our group's first game, created for Metroidvania 19! Ranked Top 10% and #12 out of 133 submissions.",
    link: "https://starcerealgames.itch.io/amara",
  },
  {
    name: "Slime RPG",
    imageDesc: "slimerpg",
    description: "Upcoming collab between starcereal and honeybeebs, based off early 2000s flash game, Stick RPG.",
    link: "https://starcerealgames.itch.io/",
  },
  {
    name: "Goblin Runner 1077",
    imageDesc: "goblinrunner",
    description: "starcereal's first solo game based on Vampire Survivors.",
    link: "https://starcerealgames.itch.io/goblin-runner-1077",
  },
];

const teamMemberInfo = [
  {
    name: "starcereal",
    role: "Game Director/ Programmer",
    imageDesc: "fire_spell_2",
    blurb: "certified gamer",
    socials: "itch.io",
    link: "https://starcerealgames.itch.io/",
  },
  {
    name: "jolteons",
    role: "Artist",
    imageDesc: "regeneration",
    blurb: "potatoes",
    socials: "Discord",
    link: "https://discord.gg/VK3hNKjCrf",
  },
  {
    name: "honeybeebs",
    role: "Coordinator/Artist",
    imageDesc: "lucky_boost",
    blurb: "wha-",
    socials: "Discord",
    link: "https://discord.gg/VK3hNKjCrf",
  },
  {
    name: "Jimmy2Hands",
    role: "Programmer",
    imageDesc: "attack_boost",
    blurb: "SKOL",
    socials: "Discord",
    link: "https://discord.gg/VK3hNKjCrf",
  },
  {
    name: "Nexthy",
    role: "Programmer",
    imageDesc: "critical_boost",
    blurb: "안녕하세요! TFT gamer :)",
    socials: "Discord",
    link: "https://discord.gg/VK3hNKjCrf",
  },
  {
    name: "Ashmasterc",
    role: "Artist",
    imageDesc: "negative_status_resistance",
    blurb: "In the interest of time I won't tell you anything.",
    socials: "Discord",
    link: "https://discord.gg/VK3hNKjCrf",
  },
  {
    name: "Boney",
    role: "Composer",
    imageDesc: "magic_amplification",
    blurb: "shiba lover",
    socials: "Discord",
    link: "https://discord.gg/VK3hNKjCrf",
  },
  {
    name: "dankleen",
    role: "QA Tester",
    imageDesc: "swiftness",
    blurb: "I LOVE MY SON ATTICUS",
    socials: "Discord",
    link: "https://discord.gg/VK3hNKjCrf",
  },
];

const App = () => {
  return (
    <div
      style={{ backgroundColor: "#F2F4FA", height: "100%", minHeight: "100vh" }}
    >
      <Header />
      <Container sx={{ paddingTop: "15px" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            style={{ userSelect: "none" }}
            sx={{ textAlign: "center" }}
            variant="h4"
          >
            Our Projects
          </Typography>
          <Divider variant="middle" />
          <Box>
            <Grid
              container
              spacing={1}
              direction="row"
              style={{
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingTop: "20px",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: "10px",
              }}
              sx={{ flexGrow: 1 }}
            >
              {gameCardInfo.map((game) => (
                <Grid
                  sx={{
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                >
                  <GameCard game={game} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Typography
            style={{ userSelect: "none" }}
            sx={{ textAlign: "center", paddingTop: "20px" }}
            variant="h4"
          >
            About Us
          </Typography>
          <Divider variant="middle" />
          <Grid
            container
            spacing={1}
            direction="row"
            style={{
              minHeight: "90vh",
              paddingLeft: "20px",
              paddingRight: "20px",
              paddingTop: "20px",
              paddingBottom: "10px",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            sx={{ flexGrow: 1 }}
          >
            {teamMemberInfo.map((member) => (
              <Grid
                sx={{
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                item
                xs={12}
                sm={6}
                md={6}
                lg={3}
              >
                <TeamMemberCard member={member} />
              </Grid>
            ))}
          </Grid>
          <Typography
            style={{ userSelect: "none", color: "#89376D" }}
            sx={{ textAlign: "center" }}
          >
            Page by Pat 2023
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default App;
