import '../App.css';
import logo from '../assets/brand_logo.png'

const Navigation = () =>{
    return(
    <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <ul>
          <li href="#">MENU</li>
          <li href="#">LOCATION</li>
          <li href="#">ABOUT</li>
          <li href="#">CONTACT</li>
        </ul>

        <button>Login</button>
    </nav>
    )
}

export default Navigation;