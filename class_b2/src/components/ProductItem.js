import Card from "./Card";
import ProductDate from "./ProductDate";
import './style.css'

import  { useState } from 'react';

function ProductItem(props) {

    const [title, setTitle] = useState(props.title);

 
    function clickHandler(){
        setTitle('tablet')
    }

    return (
        <Card className="product-Item">
            <ProductDate date={props.date} />

            <div className="item-desc">
                <h2>{title}</h2>
            </div>

            <div>
                <button onClick={clickHandler} >Add to cart</button>
            </div>
        </Card>

    )


}

export default ProductItem;