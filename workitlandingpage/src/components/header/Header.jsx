/*React imports */

/*Custom imports */
import Navbar from "./navbar/Navbar";
import Button from "../UI/Button/Button";
/*CSS imports */
import classes from './Header.module.scss'
import globals from '../../global.module.scss'
/*Assets imports */
import heroImg from '../../assets/images/image-hero.webp'

const Header = () => {
    return(
        <div className={classes.header}>
            <Navbar/>
            <div className={classes.Heading}>
                <div className={`${classes.headingTextContainer}`}>
                    <h1 className={`${globals.headingText} ${globals.l} ${classes.headingText}`}>
                        Data <span className={globals.underline}>tailored</span> to<br/> your needs
                    </h1>
                </div>
                <div className={classes.headingButton}><Button text ="Learn more" type ="button" buttonStyle= "primary"/></div>
                <div className={classes.headingImageContainer}><img className={classes.headingImage} src={heroImg} alt="" /></div>
            </div>
        </div>
    )
}



export default Header;