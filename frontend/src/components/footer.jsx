
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-transparent h-20 flex w-full justify-center flex-col items-center">
            <p className="footer">&copy; {new Date().getFullYear()} - All rights reserved</p>
            <Link to="/impressum"><span>Impressum</span></Link>   
        </div>
    )
}

export default Footer