import logo from "../assets/carambar-logo.png"
// import "../styles/Header.css"

function Header() {
  return (
    <div className="d-flex justify-content-center">
      <img src={logo} alt="logo carambar" style={{ width: "250px" }} className="my-5" />
      

    </div>
  )
}

export default Header