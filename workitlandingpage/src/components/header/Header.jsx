/*React imports */

/*Custom imports */
import Navbar from "./navbar/Navbar"
/*CSS imports */
import classes from './Header.module.scss'
import Hero from "./hero/Hero"
import heroImg from '../../assets/images/image-hero.webp'
/*Assets imports */

const Header = () => {
    return(
        <>
            <Navbar/>
            <Hero/>
            <div className={classes.heroImgContainer}>
                <img className={classes.heroImg} src={heroImg} alt="" />
            </div>   
        </>

        
    )
}


export default Header