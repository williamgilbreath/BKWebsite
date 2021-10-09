import React from "react";
import Grid from "@material-ui/core/Grid"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import { makeStyles } from "@material-ui/core/styles";
import background from '../images/backgroundImage.jpg'
import Button from "@material-ui/core/Button";
import logo from '../images/Logo.png'

const useStyles = makeStyles({
    headerContainer: {
        position: 'absolute',
        width: '100vw',
        height: '50vh',
        mixBlendMode: 'darken',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.37), rgba(0, 0, 0, 0.37)), url(${background})`,
        fontFamily: 'Raleway',
    },
    gridContainer: {
        color: 'white',
        marginTop: '20px'
    },
    logo: {
        width: '60px',
        marginRight: '10px'
    },
    links: {
        margin: '0 0 0 7vw',
        fontSize: '24px',
        lineHeight: '30px',
        letterSpacing: '0.1em',
        fontFamily: 'Quicksand'
    },
    link: {
        marginLeft: '5px',
        marginRight: '5px',
    },
    icons: {
        margin: '0 7vw 0 0',
    },
    icon: {
        marginLeft: '5px',
        marginRight: '5px'
    },
    headingText: {
        textAlign: 'left',
        color: 'white',
        marginLeft: '7vw',
        fontSize: '64px',
        marginTop: '10vh',
        letterSpacing: '0.1em',
        fontWeight: '700'
    },
    button: {
        width: '300px',
        marginLeft: '7vw',
        justifyContent: 'flex-start',
        background: 'linear-gradient(90deg, #E43A15 0%, #E65245 100%)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '50px',
        height: '70px',
    },
    buttonText: {
        color: 'white',
        margin: '0 10px',
        fontWeight: 'bold',
        lineHeight: '28px',
        letterSpacing: '0.1em',
        fontSize: '20px'
    },
    contactInfo:{
        color: 'white',
        marginLeft: '7vw',
        fontSize: '24px',
        marginTop: '20px'
    },
    phoneEmailTag: {
        marginRight: '5px'
    },
    dividerTag: {
        margin: '0 10px'
    },
});

const Home = () => {
    const classes = useStyles();
    return(
        <div>
            <div className={classes.headerContainer}>
                <Grid container item xs direction="row" justifyContent="center" alignItems="center" className={classes.gridContainer}>
                    <Grid item xs container direction="row" justifyContent="flex-start" alignItems="center" className={classes.links}>
                        <img src={logo} className={classes.logo}/>
                        <a className={classes.link}>Home</a>
                        <p>|</p>
                        <a className={classes.link}>About</a>
                        <p>|</p>
                        <a className={classes.link}>For Sale</a>
                        <p>|</p>
                        <a className={classes.link}>Contact</a>
                    </Grid>
                    <Grid item xs container direction="row" justifyContent="flex-end" alignItems="center" className={classes.icons}>
                        <FacebookRoundedIcon sx={{ fontSize: 51 }} className={classes.icon}/>
                        <PhoneIphoneRoundedIcon sx={{ fontSize: 51 }} className={classes.icon}/>
                        <AlternateEmailRoundedIcon sx={{ fontSize: 51 }} className={classes.icon}/>
                    </Grid>
                </Grid>
                <Grid container direction="column" justifyContent="flex-start">
                    <Grid item xs>
                        <h1 className={classes.headingText}>B&K Equipment Solutions</h1>
                    </Grid>
                    <Button className={classes.button}>
                        <p className={classes.buttonText}>Get Started</p>
                    </Button>
                    <Grid container direction="row" justifyContent="flex-start" alignItems="center" className={classes.contactInfo}>
                        <p className={classes.phoneEmailTag}>Phone: </p>
                        <a>(806) 789-3355</a>
                        <p className={classes.dividerTag}>|</p>
                        <p className={classes.phoneEmailTag}>Email: </p>
                        <a>williamgilbreath28@gmail.com</a>
                    </Grid>
                </Grid>
            </div>
            <div> {/*gallery div*/}

            </div>
        </div>
    )
}

export default Home