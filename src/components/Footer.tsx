import * as React from 'react';
import {makeStyles,createStyles,Theme} from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    footer:{
        background:'#002348',
        color:'white',
        height:'350px',
        paddingTop:'300px',
        marginTop:'150px'
    },
    footerH1:{
        textAlign:'center',
        fontSize:'60px',
    },
    footerH3:{
        textAlign:'center',
    },
  })
);


export interface FooterProps {
    
}
 
const Footer: React.SFC<FooterProps> = () => {
    const classes=useStyles();
    return ( 
        <div className={classes.footer}>
        <div>
            <h1 className={classes.footerH1}>Care To Join Us?</h1>
            <h3 className={classes.footerH3}>Embark on an exciting career with us to learn and grow alongside the best in the industry</h3>
        </div>
    </div>
     );
}
 
export default Footer;