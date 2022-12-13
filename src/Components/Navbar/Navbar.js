


const Navbar = () => {

    return (
        <nav>
            <div>
                {/* LOGO */}
                PUFI
            </div>
            <div>
                {/* MENU OPTIONS */}
                <ul>
                    <li>
                        <div>
                            <img alt="puff" src="https://cdn-icons-png.flaticon.com/512/6147/6147353.png" />
                            <a href="#productPuff">PUFI PUFF</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img alt="umbrella" src="https://cdn-icons-png.flaticon.com/512/3313/3313935.png" />
                            <a href="#productRain">PUFI RAIN</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img alt="cart" src="https://cdn-icons-png.flaticon.com/512/1288/1288704.png" />
                            <a href="#productCart">PUFI CART</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img alt="nap" src="https://cdn-icons-png.flaticon.com/512/4829/4829141.png" />
                            <a href="#productNap">PUFI NAP</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                {/* PERFIL OPTIONS */}
                <p>MI CUENTA</p>
                <p>MI COMPRA</p>
            </div>
        </nav>
    )

}


export default Navbar;