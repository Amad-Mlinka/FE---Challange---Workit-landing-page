/*React imports */

/*Custom imports */

/*CSS imports */
import global from '../../../sass/_global.module.scss'
import classes from './Point.module.scss'

/*Assets imports */

const Point = (props) => {
    return(
    <div className={classes.point}>
        <div className={`${classes.number} ${global.headingText} ${global.s}`}>
            {props.number}
        </div>
        <div className={classes.content}>
            <div className={`${classes.title} ${global.headingText} ${global.s}`}>
                {props.title}
            </div>
            <div className={`${classes.text} ${global.bodyText}`}>
                {props.text}
            </div>
        </div>
    </div>
        
    )
}


export default Point