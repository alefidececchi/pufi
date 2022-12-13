import ProductDiv from "../ProductDiv/ProductDiv";


const Products = () => {


    return (
        <div className="fl-cl-ctr">
            <ProductDiv
                background="https://w0.peakpx.com/wallpaper/6/752/HD-wallpaper-friends-girl-children-umbrella-yellow-copil-storm-pink-couple.jpg"
                button="SHOP"
                description="Descripción del producto. Este es un texto simulado"
                left={"true"}
                id="pufiRain"
                imgProduct="https://www.simplestore.com.ar/wp-content/uploads/2019/01/paraguas-klein-automatico-negro-negro-nylon-17106000000-62-62-41-baja-3-300x300.jpg"
                product="RAIN"
            />
            <ProductDiv
                background="https://s03.s3c.es/imag/_v0/1200x800/8/0/c/Los-mejores-puffs.jpg"
                description="Descripción del producto. Este es un texto simulado"
                id="pufiPuff"
                imgProduct="https://media.istockphoto.com/id/1036020726/es/foto/beanbag.jpg?s=612x612&w=0&k=20&c=IsRksVJbewM7wM0hkpFhkP99XWIjeEjSt2peO5TqDLs="
                product="PUFF"
            />
            <ProductDiv
                background="https://i0.wp.com/betribe.es/wp-content/uploads/2019/03/Savage2-scaled.jpeg?fit=1707%2C2560&ssl=1"
                description="Descripción del producto. Este es un texto simulado"
                left={true}
                id="pufiCart"
                imgProduct="https://http2.mlstatic.com/D_NQ_NP_829081-MLA32324321040_092019-O.webp"
                product="CART"
            />
            <ProductDiv
                background="https://thumbs.dreamstime.com/b/retrato-de-una-ni%C3%B1a-que-abraza-una-almohada-68483707.jpg"
                description="Descripción del producto. Este es un texto simulado"
                id="pufiNap"
                imgProduct="https://m.media-amazon.com/images/I/31VpWMzfm8L._SL500_.jpg"
                product="NAP"
            />
        </div>
    )

}

export default Products;