import React from 'react';
import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button';
import './NavBar.css';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

// const useStyles = makeStyles((theme) => ({
//     h3: {
//       fontSize: '48px',
//       fontWeight: '600'
//     },
//   })
//   )

function NavBar() {
    return (
        <div>

<div className="navbar">
      <nav>
        <ul>
          <li>
            <NavLink to="/home"> <span>SmartContracts</span> </NavLink>
          </li>
          <li>
            <NavLink to="/home">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/contratos">Contratos</NavLink>
          </li>
          <li>
            <NavLink to="/aboutus">Quiénes Somos</NavLink>
          </li>
          <li>
          <Button variant="contained">Regístrate</Button>
          </li>
        </ul>
      </nav>
      </div>
            {/* <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
        color="transparent"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" 
          component="div" sx={{ flexGrow: 1 }}>
        <NavLink exact to="/" className="enlace">SmartContracts</NavLink>   
        </Typography>   
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

        <NavLink exact to="/" className="enlace">Inicio</NavLink>
        </Typography>   
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

        <NavLink exact to="/contratos" className="enlace">Contratos</NavLink>
        </Typography>   
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

        <NavLink exact to="/aboutus" className="enlace">Quienes somos</NavLink>
        </Typography>   

          <Button color="inherit"  >Regístrate</Button>
        </Toolbar>
      </AppBar>
    </Box> */}
  
        
        {/* <NavLink exact to="/home" className="enlace">SmartContracts</NavLink>
        <NavLink exact to="/home" className="enlace">Inicio</NavLink>
        <NavLink exact to="/contratos" className="enlace">Contratos</NavLink>
        <NavLink exact to="/aboutus" className="enlace">Quienes somos</NavLink>
        <button className="">Regístrate</button>
        <Button variant="contained">Regístrate</Button> */}

        




            
        </div>
    )
}

export default NavBar
