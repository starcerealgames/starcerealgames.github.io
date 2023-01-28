import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Box } from '@mui/material';
import Header from './Components/Header';
import TeamMemberCard from './Components/TeamMemberCard';

const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <TeamMemberCard />
        </Box>
      </Container>
    </div>
  );
}

export default App;