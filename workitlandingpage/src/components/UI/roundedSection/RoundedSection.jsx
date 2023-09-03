/*React imports */

/*Custom imports */

/*CSS imports */
import classes from './RoundedSection.module.scss'
/*Assets imports */


const RoundedSection = (props) => {
    const sectionClass = `${classes.sectionContainer} ${props.type === "primary" ? classes.primary : props.type === "secondary" ? classes.secondary : classes.tertiary} ${props.firstSection ? "" : classes.extension}`
  return (
    <div className={sectionClass}>
        {props.children}
    </div>
  );
}

export default RoundedSection;
