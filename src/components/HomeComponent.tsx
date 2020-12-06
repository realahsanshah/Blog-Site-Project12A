import { Grid ,makeStyles,createStyles,Theme,Button} from '@material-ui/core';
import * as React from 'react';
import {navigate} from 'gatsby';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontSize: '22px'
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
    },
    topAnimation :{
        marginTop: '70px'
    }

  }),
);

export interface HomeComponentProps {
    author:string,
    link:string
}
 
const HomeComponent: React.SFC<HomeComponentProps> = ({author,link}) => {
    const classes=useStyles();
    return ( 
        <div>
            <Grid container className={classes.root}>
                <Grid container xs={12}>
                    <Grid item xs={12} md={6}>
                        <img className={classes.topAnimation} src="../../images/topPic.svg" alt="Gatsby Blogs" />
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <h1 className={classes.topRight}>
                            Gatsby Blogs <br/>by {author}
                            <br/>
                            <Button variant="outlined" color="primary" onClick={()=>{
                                navigate(link);
                            }}>Goto Blogs</Button>
                        </h1>
                    </Grid>
                </Grid>
            </Grid>
        </div>
     );
}
 
export default HomeComponent;