
import { Padding } from '../styles/usedcar'
import { Backimage, PlaceGrid, Placemenu } from '../styles/place'
import { CamPPlace } from '../mock/place'
import { Link } from 'react-router-dom'

const CampingPlaceComponent = () => {
    const data = CamPPlace.PlaceData
    console.log(data);
  return (
    <div>
    <Padding>
    </Padding>
    <Backimage className='back-place-image'>
        <p>Home / Camping place</p>
        <h1>Camping places</h1>
    </Backimage>

    <PlaceGrid>
        {data.map((value,index)=>{
            return(
                <div key={index}>
                    <Placemenu>
                    <Link to={`/Camping-place/${value.id}`} style={{textDecoration:'none',
            color:'black'}}>
                <img src={value.place.Image} alt="place-image" style={{width:'395px',height:'300px',borderRadius:'10px'}}/>
                <h3>{value.place.Name}</h3>
                <p>{value.place.Location}</p>
                    </Link>
                </Placemenu>
                </div>
            )
        })}
    </PlaceGrid>

    </div>
  )
}

export default CampingPlaceComponent