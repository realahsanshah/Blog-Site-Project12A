import * as React from 'react';
import {AppBar,Toolbar,Typography,createStyles,makeStyles,Theme} from '@material-ui/core';
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
    hover:'pointer'
    },
  }),
);

const Navbar=({title}:NavbarInterface)=>{
    const classes=useStyles();
    return(
        <div>
           <AppBar position="static">
               <Toolbar>
                   <Typography variant="h6" onClick={()=>{
                       navigate('/')
                   }}>{title}</Typography>
               </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;