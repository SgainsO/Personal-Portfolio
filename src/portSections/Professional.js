import './Professional.css'
import prof_descriptions from '../media/prof_descriptions'
import {
   Card,
   CardFooter,
   CardHeader,
   CardPreview,
 } from "@fluentui/react-components";

 
const images = require.context('../media/prof_images');


function RenderCards() {
   return (
      <>
         {prof_descriptions.map((item, index) => (
            <Card className="CardFactors" key ={index}>
               <CardHeader
                  image ={<img
                     src={images(`./${item.key}`)} alt={item.title}
                  />}
                 header={
                  <h1>item.title</h1>
                 } />

               description={<h3>item.description</h3>}
            </Card>
         ))}
      </>
   );
}

const ProfProjects = () => {




return (
 <div className="Main">
    <h1>Professional Projects</h1>
         {RenderCards()}
 </div>
)


}


export default ProfProjects