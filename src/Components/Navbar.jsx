import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', backgroundColor: '#111', color: 'white' }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Divyanshu</div>
      <div>
        <Link to="/" style={{ margin: '0 10px', color: 'white' }}>Home</Link>
        <Link to="/about" style={{ margin: '0 10px', color: 'white' }}>About</Link>
        <Link to="/projects" style={{ margin: '0 10px', color: 'white' }}>Projects</Link>
        <Link to="/contact" style={{ margin: '0 10px', color: 'white' }}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
