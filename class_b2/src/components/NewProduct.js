import ProductForm from "./ProductForm"
import './style.css'

function NewProduct(props){

    function newProductFunc(data){

        console.log('inside newproduct component');
        console.log(data);
        props.propFunc(data)  //! send this data to parent component(app.js)
    }

    return(
        <div className="newProduct" >
            <ProductForm anotherProp={newProductFunc} />
        </div>
    )
}

export default NewProduct