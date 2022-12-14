


const Navbar = () => {

    return (
        <nav className="fl-rw-ctr navbar_nav">
            <div className="divPufi">
                {/* LOGO */}
                <h2>PUFI</h2>
            </div>
            <div className="navbar_div">
                {/* MENU OPTIONS */}
                <div className="fl-rw-ctr navbar_div_ul">
                    <div className="fl-cl-ctr">
                        <img alt="puff" className="navbar_img" src="https://cdn-icons-png.flaticon.com/512/6147/6147353.png" />
                        <a href="#pufiPuff">PUFI PUFF</a>
                    </div>

                    <div className="fl-cl-ctr">
                        <img alt="umbrella" className="navbar_img" src="https://cdn-icons-png.flaticon.com/512/3313/3313935.png" />
                        <a href="#pufiRain">PUFI RAIN</a>
                    </div>

                    <div className="fl-cl-ctr">
                        <img alt="cart" className="navbar_img" src="https://cdn-icons-png.flaticon.com/512/1288/1288704.png" />
                        <a href="#pufiCart">PUFI CART</a>
                    </div>

                    <div className="fl-cl-ctr">
                        <img alt="nap" className="navbar_img" src="https://cdn-icons-png.flaticon.com/512/4829/4829141.png" />
                        <a href="#pufiNap">PUFI NAP</a>
                    </div>

                </div>
            </div>
            <div className="fl-rw-ctr navbar_perfil_options">
                {/* PERFIL OPTIONS */}
                <p>MI CUENTA</p>
                <p>MI COMPRA</p>
            </div>
        </nav>
    )

}


export default Navbar;