import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'


export default function Header() {
    return(
        <div className='head'>
            <FontAwesomeIcon icon={faGlobe} />
            <h1>my travel journal</h1>
        </div>
    )

}