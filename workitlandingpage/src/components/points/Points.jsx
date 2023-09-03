/*React imports */

/*Custom imports */

/*CSS imports */
import classes from './Points.module.scss'
import Point from './point/Point';
/*Assets imports */


const Points = () => {
    const data = [
    {
        id:1,
        title:"Actionable insights",
        text:"Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics."
    },
    {
        id:2,
        title:"Data-driven decisions",
        text:"Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data."
    },
    {
        id:3,
        title:"Always affordable",
        text:"Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data."
    }
]
  return (
    <div className={classes.points}>
        {data.map((point,index)=>(
            <Point key={index} number={point.id} title={point.title} text={point.text}>
                {point.title}
            </Point>
        ))}
    </div>
  );
}

export default Points;
