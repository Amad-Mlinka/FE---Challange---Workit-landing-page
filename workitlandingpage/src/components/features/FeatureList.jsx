/*React imports */

/*Custom imports */
import FeatureItem from './featureItem/FeatureItem'
/*CSS imports */
import classes from './FeatureList.module.scss'
/*Assets imports */


const FeatureList = () => {
    const sampleData = [
        {
            id:1,
            heading:"Actionable insights",
            text:"Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics."
        },
        {
            id:2,
            heading:"Data-driven decisions",
            text:"Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data."
        },
        {
            id:3,
            heading:"Always affordable ",
            text:"Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees."
        }
    ]
    return(
        <div className={classes.featureList}>
            {sampleData.map((listItem,key) =>(
                <FeatureItem {...listItem} key = {key}/>
            ))}
        </div>
    )
}


export default FeatureList