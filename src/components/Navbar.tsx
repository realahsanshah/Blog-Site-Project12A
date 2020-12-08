import * as React from 'react';
import {AppBar,Toolbar,Typography,createStyles,makeStyles,Theme,Button, Box} from '@material-ui/core';
import {navigate} from 'gatsby';

interface NavbarInterface{
    title:String
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
        textAlign:'center',
        '&:hover': {
          cursor:'pointer',
       },
    },
    navLinks:{
      marginLeft: 'auto',
    },
    navLink:{
      marginRight:'10px',
      marginLeft:'10px'
    }
  
  }),
);

const Navbar=({title}:NavbarInterface)=>{
    const classes=useStyles();
    return(
        <div>
           <AppBar position="static">
               <Toolbar>
                   <Typography className={classes.title} variant="h6"  onClick={()=>{
                       navigate('/')
                   }}>{title}</Typography>
                   <div className={classes.navLinks}>
                    <Button className={classes.navLink} color="inherit" onClick={()=>{
                      navigate('/login')
                    }}>Login</Button>
                    <Button className={classes.navLink} color="inherit" onClick={()=>{
                      navigate('/signup')
                    }}>Sign Up</Button>
                   </div>
               </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;