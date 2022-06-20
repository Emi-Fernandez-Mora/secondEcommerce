import CartWidget from "../CartWidget/CartWidget"
import {NavLink, Link} from "react-router-dom";

const NavBar = () => {
    return (

        <>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand text-dark" to ="/">Merci</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/categoria/Ropa">Ropa</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/categoria/Accesorio">Accesorios</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/categoria/Joyas">Joyas</NavLink>
                        </li>
                        

                        
                    </ul>
                </div>
            </div>
            <CartWidget />
        </nav>
        </>
    )
}

export default NavBar