/*React imports */

/*Custom imports */
import Button from '../UI/Button/Button'
/*CSS imports */
import classes from './Statements.module.scss'
import globals from '../../global.module.scss'

/*Assets imports */
import founderImg from '../../assets/images/image-founder.webp'

const Statements = () => {

    return(
        <div className={classes.container}>
            <div className={classes.imgContainer}>
                <img className={classes.img} src={founderImg} alt="Founder img" />
            </div>
            <div className={classes.statement}>
                <div className={`${globals.headingText} ${globals.m} ${classes.heading}`}>Be the first to test</div>
                <div className={`${globals.bodyText} ${classes.content}`}>Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I’ll be in touch to schedule a call.</div>
                <div className={`${classes.button}`}>
                    <Button text="Apply for access" type="button" buttonStyle="primary"/>
                </div>
            </div>
        </div>
    )
}


export default Statements