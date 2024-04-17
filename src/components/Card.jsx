import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Card(props) {
    return(
        <div className='card--wrapper'>
            <img src={props.imageUrl} alt="japan" id="card--img"/>
            <div className='card--information'>
                <div id='card--location-wrapper'>
                    <FontAwesomeIcon id='card--icon' icon={ faLocationDot } />
                    <p id="card--country">{props.location}</p>
                    <p id='card--view'>View on Google Maps</p>
                </div>
                <h1 id="card--title">{props.title}</h1>
                <p id='card--date'>{props.startDate} - {props.endDate}</p>
                <p className='card--description'>{props.description}</p>

            </div>
        </div>
    )
}