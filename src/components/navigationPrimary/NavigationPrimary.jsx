import './NavigationPrimary.css';
import {NavLink} from "react-router-dom";
// import logo from "../assets/logo-white.png";

function NavigationPrimary() {
    return (
        <nav>
            <div className="nav-container">
                {/*<img src={logo} className="navlogo" alt="Company logo"/>*/}
                <ul>
                    <li><NavLink to="/" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Home</NavLink></li>
                    <li><NavLink to="/cocktails" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>cocktails</NavLink></li>
                    <li><NavLink to="/mocktails" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>mocktails</NavLink></li>
                    <li><NavLink to="/surpriseme" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Verras me!</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavigationPrimary;