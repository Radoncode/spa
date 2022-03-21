import { Link, NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" aria-current="page" to="/">Docs</Link>
                        <Link className="nav-link" to="/tutorial">Tutorial</Link>
                        <NavLink className="nav-link" to="/community">Community</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Menu;