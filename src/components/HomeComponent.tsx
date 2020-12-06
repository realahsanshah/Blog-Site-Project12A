import { Grid ,makeStyles,createStyles,Theme,Button} from '@material-ui/core';
import * as React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
    topRight:{
        fontSize:'56px',
        margin:'200px 0 50px',
        textAlign:'center',
        color:'#003A7B'
    }

  }),
);

export interface HomeComponentProps {
    
}
 
const HomeComponent: React.SFC<HomeComponentProps> = () => {
    const classes=useStyles();
    return ( 
        <div>
            <Grid container className={classes.root}>
                <Grid container xs={12}>
                    <Grid item xs={12} md={6}>
                        <img src="../../images/topPic.svg" alt="Gatsby Blogs" />
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <h1 className={classes.topRight}>
                            Gatsby Blogs <br/>by Ahsan Shah
                            <br/>
                            <Button variant="outlined" color="primary">Goto Blogs</Button>
                        </h1>
                    </Grid>
                </Grid>
            </Grid>
        </div>
     );
}
 
export default HomeComponent;