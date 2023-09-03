/*React imports */

/*Custom imports */
import Button from '../UI/button/Button'

/*CSS imports */
import global from '../../sass/_global.module.scss'
import classes from './Testimony.module.scss'

/*Assets imports */
import founderImg from '../../assets/images/image-founder.webp'
import bacgroundSvg from '../../assets/images/bg-pattern-3.svg'

const Testimony = () => {
    return(
    <div className={classes.testimony}>
        <div className={classes.testimonyImgContainer}>
            <img className={classes.testimonyImg} src={founderImg} alt="" />
        </div>
        <div className={classes.content}>
            <div className={`${classes.title} ${global.headingText} ${global.s}`}><p>Be the first to test</p></div>
            <div className={`${classes.text} ${global.bodyText}`}><p>Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I’ll be in touch to schedule a call.</p></div>
            <Button btnType="button" btnStyle="primary" btnText="Apply for access"/>
            <div className={classes.backgroundImgContainer}>
                <img className={classes.backgroundImg} src={bacgroundSvg} alt="" />
            </div>
        </div>
    </div>
        
    )
}


export default Testimony
