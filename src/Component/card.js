import Paper from '@mui/material/Paper'; 
import './card.css'



const Card = ({image, title, description, skills}) => {
    console.log("Image "+ image)
    return (
        <Paper className="Card" square={false}>
            <div className='PermText'>
                <h3>{title}</h3>
                <p className='skill'>{skills}</p>
            </div>


            <div className='ImageHolder'>
                <img className='Image' src={image} alt='Sample Picture'/>
            </div>

        </Paper>
    )
}


export default Card;