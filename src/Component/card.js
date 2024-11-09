import Paper from '@mui/material/Paper'; 
import './card.css'



const Card = ({image, title, description, skills}) => {
    console.log("Image "+ image)
    return (
        <Paper className="Card" square={false}>
            <div className='PermText'>
                <p style={{marginTop: "1", marginBottom: "0"}}>{title}</p>
            </div>

            <div className='ImageHolder'>
              <img className='Image' src={image} alt='Sample Picture'/>
            </div>

            <p className='skill' style={{fontSize: "10px"}}><i>{skills}</i></p>


        </Paper>
    )
}


export default Card;


/*<div className='ImageHolder'>
    <img className='Image' src={image} alt='Sample Picture'/>
</div> */