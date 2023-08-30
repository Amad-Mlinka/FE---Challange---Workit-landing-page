/*React imports */

/*Custom imports */

/*CSS imports */
import classes from './Button.module.scss'
/*Assets imports */

const Button = (props) => {
    return(
        <button type = {props.type} className={`${classes.button} ${props.buttonStyle === "primary" ? classes.primary : classes.secondary }`}>
            {props.text}
        </button>
    )
}



export default Button;