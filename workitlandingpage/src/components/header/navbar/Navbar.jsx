/*React imports */

/*Custom imports */

/*CSS imports */
import classes from './Navbar.module.scss'
import globals from '../../../global.module.scss'
/*Assets imports */
import lightLogo from '../../../assets/images/logo-light.svg'

const Navbar = () => {
    return(
        <div className={classes.navbar}>
            <div className={`${classes.navbarItem}`}>
                <img src={lightLogo} alt="workit logo" />
            </div>
            <div className={`${globals.underline} ${globals.bodyText} ${classes.navbarItem} underline`}>
                Apply for Access
            </div>
        </div>
    )
}


export default Navbar;