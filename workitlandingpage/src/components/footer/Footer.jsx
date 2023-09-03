/*React imports */

/*Custom imports */


/*CSS imports */

import classes from './Footer.module.scss'

/*Assets imports */
import fbImg from '../../assets/images/icon-facebook.svg'
import twImg from '../../assets/images/icon-twitter.svg'
import inImg from '../../assets/images/icon-instagram.svg'
import darkLogo from '../../assets/images/logo-dark.svg'

const Footer = () => {
    return(
    <div className={classes.footer}>
        <div className={classes.logo}>
            <img src={darkLogo} alt="" />
        </div>
        <div className={classes.media}>
            <div className={classes.fb}>
                <img src={fbImg} alt="" />
            </div>
            <div className={classes.tw}>
                <img src={twImg} alt="" />
            </div>
            <div className={classes.in}>
                <img src={inImg} alt="" />
            </div>
        </div>
    </div>
        
    )
}


export default Footer
