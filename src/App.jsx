import { useState } from 'react'
import './App.css'
import {Routes, Route, NavLink} from "react-router-dom";
import Cocktails from "./pages/cocktails/Cocktails.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Favorites from "./pages/favorites/Favorites.jsx";
import Home from './pages/home/Home.jsx'
import Mocktails from "./pages/mocktails/Mocktails.jsx";
import MyAccount from "./pages/myaccount/MyAccount.jsx";
import SurpriseMe from "./pages/surpriseme/SurpriseMe.jsx";
import NavigationPrimary from "./components/navigationPrimary/NavigationPrimary.jsx";


function App() {

  return (
    <>
        <section>
            <div>
            <span>
                    <NavigationPrimary>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/cocktails">Cocktails</NavLink></li>
                            <li><NavLink to="/mocktails">Mocktails</NavLink></li>
                            <li><NavLink to="/surpriseme">Verras me!</NavLink></li>
                        </ul>
                    </NavigationPrimary>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/cocktails" element={<Cocktails/>}/>
                        <Route path="/mocktails" element={<Mocktails/>}/>
                        <Route path="/surpriseme" element={<SurpriseMe/>}/>
                    </Routes>
                </span>
            </div>
        </section>
    </>
  )
}

export default App
