/*React imports */

/*Custom imports */
import Button from '../../UI/button/Button'
/*CSS imports */
import classes from './Navbar.module.scss'
/*Assets imports */
import lightLogo from '../../../assets/images/logo-light.svg'

const Navbar = () => {
    return(
        <div className={classes.navbarContainer}>
            <img src={lightLogo} alt="" />
            <Button btnType="button" btnStyle="secondary" btnText="Apply for access"/>
        </div>
    )
}


export default Navbar