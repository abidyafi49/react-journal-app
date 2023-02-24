import {CgNotes} from 'react-icons/cg';
import {AiOutlineCheck} from 'react-icons/ai';
import  {BsPencil, BsBook} from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import '../assets/css/hompage.css'

function Homepage(){
    return (
        <div className='container'>
            <Link to="/note">
                    <i><CgNotes/></i>
                    <h3>Note</h3>
            </Link>
            <Link to="/todos">
                    <i><AiOutlineCheck/></i>
                    <h3>Todo List</h3>
            </Link>
            <Link to="/journal">
                    <i><BsPencil/></i>
                    <h3>Journal</h3>
            </Link>
            <Link to="/library">
                    <i><BsBook/></i>
                    <h3>Library</h3>
            </Link>
        </div>
    )
}

function Link({to, children, ...props}){
    return (
            <NavLink to={to}>
                {children}
            </NavLink>
    )
}

export default Homepage;