import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import axios from "axios";
function Copyright(props) {
  
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Stock Price Predictor
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function DisplayResult() {
  const [open,SetOpen] = useState(0)
  const [close,setClose] = useState(0)
  const [high,setHigh] = useState(0)
  const [low,setLow] = useState(0)
  const [volume,setVolume]=useState(0)
const handleSubmit =async(e)=>
{
  e.preventDefault()
  
  const values=[Number(close),
  Number(volume),
  Number(open),
  Number(high),
  Number(low)]
  const res = await axios.post("http://127.0.0.1:5000/predict",values)
  console.log(res.data.message[1])
  if(res.data.message[1]==='0')
  {
    alert("buy the stock")
  }
 else if(res.data.message[1]==='1')
  {
    alert("ignore the stock")
  }
}
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
          component="form"
          
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
           
            <Typography component="h1" variant="h5">
              Stock Price Prediction
            </Typography>
            <Box component="form"  sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                type="text"
                color="primary"
                id="open"
                label="Open"
                name="open"
               value={open}
               onChange={(e)=> SetOpen(e.target.value)}
                autoFocus
              />
              <TextField
                margin="normal"
                type="text"
                required
                fullWidth
                name="high"
                label="High"
                
                id="high"
                onChange={(e)=> setHigh(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                type="text"
                name="low"
                label="Low"
                
                id="low"
                onChange={(e)=> setLow(e.target.value)}
               
              />
              <TextField
              margin="normal"
              required
              type="text"
              fullWidth
              name="close"
              label="Close"
              
              id="close"
              onChange={(e)=> setClose(e.target.value)}
            />
            <TextField
            margin="normal"
            required
            fullWidth
            name="volume"
            label="Volume"
            type="text"
            id="volume"
            onChange={(e)=> setVolume(e.target.value)}
          />
              <Button
                type="submit"
                fullWidth
                onClick={handleSubmit}
                variant="contained"
                style={{
                    borderRadius:"99999px"
                }}
                color="secondary"
                sx={{ mt: 3, mb: 2 }}
              >
                Buy/No?
              </Button>
              
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}