import { Link } from 'react-router-dom'
import './appBanner.scss';
import avengers from '../../resources/img/Avengers.png';
import avengersLogo from '../../resources/img/Avengers_logo.png';

const AppBanner = () => {
    return (
        <div className="app__banner">
            <Link to={'/'}>
                <img src={avengers} alt="Avengers" />
            </Link>
            <div className="app__banner-text">
                New comics every week!<br />
                Stay tuned!
            </div>
            <a target="Marvel" href="https://www.marvel.com/">
                <img src={avengersLogo} alt="Avengers logo" />
            </a>
        </div>
    )
}

export default AppBanner;