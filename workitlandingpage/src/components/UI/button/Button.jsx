/*React imports */

/*Custom imports */
/*CSS imports */
import global from '../../../sass/_global.module.scss'
import classes from './Button.module.scss'

/*Assets imports */

const Button = (props) => {
    const btnClass = `${props.btnStyle === "primary" ? `${classes.primary} ` : `${classes.secondary} ${global.underline}`} ${global.bodyText}`
    return(
        <button className={btnClass} type={props.btnType}>
            {props.btnText}
        </button>
    )
}


export default Button