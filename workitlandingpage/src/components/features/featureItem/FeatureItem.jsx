/*React imports */

/*Custom imports */

/*CSS imports */
import classes from './FeatureItem.module.scss'
import globals from '../../../global.module.scss'
/*Assets imports */


const FeatureItem = (props) => {
    
    return(
       <div className={classes.featureItem}>
            <div className={`${classes.featureNumber} ${globals.headingText} ${globals.s}`}>{props.id}</div>
            <div className={`${classes.featureHeading} ${globals.headingText} ${globals.m}`}>{props.heading}</div>
            <div className={`${classes.featureContent} ${globals.bodyText}`}>{props.text}</div>
       </div>
    )
}


export default FeatureItem