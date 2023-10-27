import './NavigationSecondary.css';
import {NavLink} from "react-router-dom";
// import logo from "../assets/logo-white.png";

function NavigationSecondary() {
    return (
        <nav>
            <div className="nav-container">
                {/*<img src={logo} className="navlogo" alt="Company logo"/>*/}
                <ul>
                    <li><NavLink to="/favorites" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Favorieten</NavLink></li>
                    <li><NavLink to="/myaccount" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Mijn account</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavigationSecondary