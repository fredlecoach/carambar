import logo from "../assets/carambar.svg"
import "../styles/Header.css"

function Header() {
  return (
    <div className="d-flex justify-content-center">
      <img src={logo} alt="logo carambar" className="logo" />
      

    </div>
  )
}

export default Header