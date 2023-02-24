import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import '../assets/css/navbar.css';

function Navbar(){
    return (
        <nav className="nav">
            <ul>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/note">Note</CustomLink>
                <CustomLink to="/todos">Todos</CustomLink>
                <CustomLink to="/journal">Journal</CustomLink>
                <CustomLink to="/transaction">Transaction</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end:true})
    return(
        <li className={isActive? "active": ""}>
            <NavLink to={to} {...props}>
                {children}
            </NavLink>
        </li>
    )
}


export default Navbar;