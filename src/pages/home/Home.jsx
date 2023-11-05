import './Home.css'
import mainimage from "../../assets/mainimage.jpg";
import cocktail from "../../assets/cocktail.png";
import mocktail from "../../assets/mocktail.png";
import generator from "../../assets/surprisedrink.png";
import {Link} from "react-router-dom";
import SearchBar from "../../components/searchBar/SearchBar.jsx";

function Home () {
    return (
        <>
            <section className="section">
                <div>
                    <img className="mainimage" src={mainimage} alt="image of drink at searchbar"></img>
                </div>
                <div>
                    <SearchBar/>
                </div>
            </section>
            <div>
                <span>
                    <img className="categorycard" src={cocktail} alt="image of cocktail"/>
                    <Link to="/cocktails"><h4>Cocktails</h4></Link>
                </span>
                <span>
                    <img className="categorycard" src={mocktail} alt="image of mocktail"/>
                    <Link to="/mocktails"><h4>Mocktails</h4></Link>
                </span>
                <span>
                    <img className="categorycard" src={generator} alt="image of suprise drink"/>
                    <Link to="/surpriseme"><h4>Verras me!</h4></Link>
                </span>
            </div>
        </>
    )
}

export default Home;