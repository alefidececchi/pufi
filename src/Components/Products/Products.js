import ProductDiv from "../ProductDiv/ProductDiv";


const Products = () => {


    return (
        <div>
            <ProductDiv
                background=""
                button="SHOP"
                description="Descripción del producto. Este es un texto simulado"
                left={"true"}
                id="pufiRain"
                imgProduct="https://www.simplestore.com.ar/wp-content/uploads/2019/01/paraguas-klein-automatico-negro-negro-nylon-17106000000-62-62-41-baja-3-300x300.jpg"
                product="RAIN"
            />
            <ProductDiv
                background=""
                description="Descripción del producto. Este es un texto simulado"
                id="pufiPuff"
                imgProduct="https://media.istockphoto.com/id/1036020726/es/foto/beanbag.jpg?s=612x612&w=0&k=20&c=IsRksVJbewM7wM0hkpFhkP99XWIjeEjSt2peO5TqDLs="
                product="PUFF"
            />
            <ProductDiv
                background=""
                description="Descripción del producto. Este es un texto simulado"
                left={true}
                id="pufiCart"
                imgProduct="https://http2.mlstatic.com/D_NQ_NP_829081-MLA32324321040_092019-O.webp"
                product="CART"
            />
            <ProductDiv
                background=""
                description="Descripción del producto. Este es un texto simulado"
                id="pufiNap"
                imgProduct="https://m.media-amazon.com/images/I/31VpWMzfm8L._SL500_.jpg"
                product="NAP"
            />
        </div>
    )

}

export default Products;