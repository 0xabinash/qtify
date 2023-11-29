import "./navbar.css"
import {ReactComponent as SearchIcon} from "../search-icon.svg";
import { Menu } from "./index";


const Navbar = () =>{

    return(
        <>
        <div className="nav-container">
            <span className="logo"><img src="Logo.png" alt="logo" /></span>
            <div className="search-parent-container">
                <form className="search-bar-container">
                    <input
                    placeholder="Search a album of your choice"
                    className="search-input"
                    />
                    <button><SearchIcon /></button>
                </form>
                {/* <Menu data={[1,2,3,4,5]}/> */}
            </div>
            <button className="feedback-btn">Give Feedback</button>
        </div>
        </>
    )
}

export default Navbar;