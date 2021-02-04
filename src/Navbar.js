import {Link} from 'react-router-dom';

const Navbar = () => {
    const sty={
        color:"white",
        backgroundColor:'#f1356d',
        borderRadius:'10px'
    };
    return ( 
        <nav className="navbar">
            <h1>Blog Chan</h1>
            <div className="links">
                <Link to="/" style={sty}>Home </Link>
                <Link to="/create" style={sty}>New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;