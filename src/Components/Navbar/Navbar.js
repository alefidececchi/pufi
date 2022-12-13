


const Navbar = () => {

    return (
        <nav className="fl-rw-ctr navbar_nav">
            <div className="divPufi">
                {/* LOGO */}
                PUFI
            </div>
            <div className="navbar_div">
                {/* MENU OPTIONS */}
                <ul className="fl-rw-ctr navbar_div_ul">
                    <li className="navbar_li">
                        <div className="fl-cl-ctr">
                            <img alt="puff" className="navbar_img" src="https://cdn-icons-png.flaticon.com/512/6147/6147353.png" />
                            <a href="#productPuff">PUFI PUFF</a>
                        </div>
                    </li>
                    <li>
                        <div className="fl-cl-ctr">
                            <img alt="umbrella" className="navbar_img" src="https://cdn-icons-png.flaticon.com/512/3313/3313935.png" />
                            <a href="#productRain">PUFI RAIN</a>
                        </div>
                    </li>
                    <li>
                        <div className="fl-cl-ctr">
                            <img alt="cart" className="navbar_img" src="https://cdn-icons-png.flaticon.com/512/1288/1288704.png" />
                            <a href="#productCart">PUFI CART</a>
                        </div>
                    </li>
                    <li>
                        <div className="fl-cl-ctr">
                            <img alt="nap" className="navbar_img" src="https://cdn-icons-png.flaticon.com/512/4829/4829141.png" />
                            <a href="#productNap">PUFI NAP</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="fl-rw-ctr">
                {/* PERFIL OPTIONS */}
                <p>MI CUENTA</p>
                <p>MI COMPRA</p>
            </div>
        </nav>
    )

}


export default Navbar;