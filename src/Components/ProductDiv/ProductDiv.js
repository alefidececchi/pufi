



const ProductDiv = (props) => {

    return props.left ? (
        <section className="fl-rw-ctr productDiv_section" id={props.id}>
            <div className="fl-cl-ctr productDiv_div" style={{ backgroundImage: `url(${props.background})` }}>
                {/* BACKGROUND IMG */}
                {props.button ? <button>{props.button}</button> : undefined}
            </div>
            <div className="fl-cl-ctr productDiv_div">
                <img alt={props.product} className="productDiv_img" src={props.imgProduct} />
                <h2>Pufi {props.product}</h2>
                <hr></hr>
                <p>{props.description}</p>
                <p>{"> VER MAS"}</p>
            </div>
        </section>
    ) : (
        <section className="fl-rw-ctr" id={props.id}>
            <div className="fl-cl-ctr productDiv_div">
                <img alt={props.product} className="productDiv_img" src={props.imgProduct} />
                <h2>Pufi {props.product}</h2>
                <hr></hr>
                <p>{props.description}</p>
                <p>{"> VER MAS"}</p>
            </div>
            <div className="fl-cl-ctr productDiv_div" style={{ backgroundImage: `url(${props.background})` }}>
                {/* BACKGROUND IMG */}
                {props.button ? <button>{props.button}</button> : undefined}
            </div>
        </section>
    )
}


export default ProductDiv