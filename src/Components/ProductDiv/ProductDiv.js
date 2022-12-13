



const ProductDiv = (props) => {

    return props.left ? (
        <section id={props.id}>
            <div style={{ backgroundImage: `url(${props.background})` }}>
                {/* BACKGROUND IMG */}
                {props.button ? <button>{props.button}</button> : undefined}
            </div>
            <div>
                <img alt={props.product} src={props.imgProduct} />
                <h2>Pufi {props.product}</h2>
                <hr></hr>
                <p>{props.description}</p>
                <p>{"> VER MAS"}</p>
            </div>
        </section>
    ) : (
        <section id={props.id}>
            <div>
                <img alt={props.product} src={props.imgProduct} />
                <h2>Pufi {props.product}</h2>
                <hr></hr>
                <p>{props.description}</p>
                <p>{"> VER MAS"}</p>
            </div>
            <div style={{ backgroundImage: `url(${props.background})` }}>
                {/* BACKGROUND IMG */}
                {props.button ? <button>{props.button}</button> : undefined}
            </div>
        </section>
    )
}


export default ProductDiv