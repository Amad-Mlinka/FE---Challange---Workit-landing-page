/*React imports */

/*Custom imports */

/*CSS imports */
import classes from './Footer.module.scss'
import globals from '../../global.module.scss'

/*Assets imports */
import darkLogo from '../../assets/images/logo-dark.svg'
import fbImage from '../../assets/images/icon-facebook.svg'
import inImage from '../../assets/images/icon-instagram.svg'
import twImage from '../../assets/images/icon-twitter.svg'

const Footer = () => {

    return(
       <div className={classes.footerContainer}>
            <div className={classes.logo}>
                <img src={darkLogo} alt="darkLogo" />
            </div>
            <div className={classes.media}>
                <img src={fbImage} alt="facebook" />
                <img src={inImage} alt="instagram" />
                <img src={twImage} alt="twitter" />
            </div>
       </div>
    )
}


export default Footer