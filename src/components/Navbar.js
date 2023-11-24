import "./navbar.css"
import {ReactComponent as SearchIcon} from "../search-icon.svg";


const Navbar = () =>{

    return(
        <>
        <div className="nav-container">
            <span className="logo"><img src="Logo.png" alt="logo" /></span>
            <form className="search-bar-container">
                <input
                 placeholder="Search a album of your choice"
                 className="search-input"
                />
                <button><SearchIcon /></button>
            </form>
            <button className="feedback-btn">Give Feedback</button>
        </div>
        </>
    )
}

export default Navbar;