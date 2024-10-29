import './Professional.css'
import prof_descriptions from '../media/prof_descriptions'
import ProjectCard from '../Component/card'
 
const images = require.context('../media/prof_images');

 function RenderCards() {
   {console.log(images)}
   return (
      <>
         {prof_descriptions.map((item, index) => (
            <ProjectCard key ={index}
             image = {images(`./${item.imKey}`)} 
             title = {item.title}
             description = {item.description} 
             skills = {item.language} />
         ))}
      </>
   );
} 

/* function RenderCards() {
  return(<h1>Temp</h1>)
}  */



const ProfProjects = () => {




return (
 <div className="Main">
   <h1>Professional Projects</h1>
   <div className='Holder'>
         {RenderCards()}
   </div>
 </div>
)


}


export default ProfProjects