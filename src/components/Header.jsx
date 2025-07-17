import logo from '../assets/logo.png'; 
import "./Header.css";

function Header() {
  return (
    <>
      
        <header className="header">
            <div className="container">
            <img src={logo} alt="Logo" className="logo" />
            
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
          </ul>
       
         
          </div>
         </header>
      
    </>
  );
}

export default Header;
