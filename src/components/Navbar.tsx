import * as React from 'react';
import {AppBar,Toolbar,Typography,createStyles,makeStyles,Theme} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const Navbar=()=>{
    const classes=useStyles();
    return(
        <div>
           <AppBar position="static">
               <Toolbar>
                   <Typography variant="h6">Gatsby Blog</Typography>
               </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;