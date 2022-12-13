import Navbar from '../Navbar/Navbar.js'



const Header = () => {

    return (
        <div className="header_container">
            <Navbar></Navbar>
            <h1 className='header_h1'>ESTAR CÓMODO,</h1>
            <h1>NUNCA FUE TAN FACIL</h1>
            <button className='header_button'>SHOP</button>
        </div>
    )
}

export default Header;