import { BrowserRouter,Switch,Route } from "react-router-dom"
import AboutPage from "./AboutPage/AboutPage"
import ContactPage from "./ContactPage/ContactPage"
import HeaderPage from "./HeaderPage"
import Home from "./HomePage/Home"
import Footer from "./Footer/Footer"
import Scroll from "../Other/Scroll"



const MainPage = () => {
    return(
        <BrowserRouter>
        <div>
            <Scroll/>
            <HeaderPage/>
            <Switch>

            <Route path="/" exact component ={Home}/> 
            <Route path="/AboutPage/AboutPage" component ={AboutPage}/>
            <Route path="/ContactPage/ContactPage" component ={ContactPage}/> 
            
            </Switch>
            <Footer/> 
        </div>
        </BrowserRouter>
    )
}

export default MainPage