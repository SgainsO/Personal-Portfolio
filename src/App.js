import logo from './logo.svg';
import Button from '@mui/material/Button';
import FacePic from './media/FaceShot.png';
import theme from './MUItheme';
import {ThemeProvider} from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="Start-Screen">
        <h1>Welcome to Jas's Portfolio</h1>
        <h3>My Projects</h3>
          <div className="Buttons-Holder"> {/*Make These Buttons Azure*/}
            <Button  style={{height: '40%'}} variant = "contained" size='large'>Profesional Projects</Button>
            <Button  style={{height: '40%'}} variant = "contained" size='large'>Personal Projects</Button>
          </div>
        <h3>About Me</h3>
        <img className='face-shot' src={FacePic} alt = "Face Picture" />
          <Paper className='Abme-Con' sx={{backgroundColor: '#e0f2f1'}}>
            <p style={{padding: "1%"}}> I am a Computer Science student at Florida State University who has a strong interest in Data Science and Software Engineering. I have a wide variaty of experience sources including working as a research assistant, attending various hackathons, and general class projects. I have coded in many coding languages, and can quickly pick-up on the languages that I have less experience in. I hope to work on projects where I can have a meaningful effect on peoples lives.</p>
          </Paper>
      </div>
    </ThemeProvider>

  );
}

export default App;
