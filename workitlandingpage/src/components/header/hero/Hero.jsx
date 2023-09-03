/*React imports */

/*Custom imports */
import Button from '../../UI/button/Button'

/*CSS imports */
import global from '../../../sass/_global.module.scss'
import classes from './Hero.module.scss'

/*Assets imports */
import leftSvg from '../../../assets/images/bg-pattern-1.svg'
import rightSvg from '../../../assets/images/bg-pattern-2.svg'

const Hero = () => {
    return(
        <div className={classes.heroContainer}>
            <img className={`${classes.svg} ${classes.left}`} src={leftSvg} alt="left decoration" />
            <img className={`${classes.svg} ${classes.right}`} src={rightSvg} alt="right decoration" />

                <div className={classes.heroHeadingContainer}>
                    <div className={`${classes.heroHeading} ${global.headingText} ${global.l}`}>Data <span className={global.underline}>tailored</span> to your needs.</div>
                    <Button btnText = "Learn more" btnStyle="primary" btnType="button"/>
                </div>      
                       
            
        </div>
    )
}


export default Hero