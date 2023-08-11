import { useState } from 'react';
import './style.css'

function ProductForm(props){

    const [title, settitle] = useState('')
    const [date, setdate] = useState('')

    function titleChangeHandler(event){
        
        settitle(event.target.value)
        // console.log(title);    

    }
    function dateChangeHandler(event){
      
        setdate(event.target.value)
        // console.log(date);    

    }

    function submitHandler(event){
        event.preventDefault();  // to remove default behaviour on form submit

        const newData = {
            title: title,
            date: date
        }

        // console.log(newData);

        props.anotherProp(newData); //! send this data obj to the parent component(NewProduct.js)
    }

    return(
        <div>
            <form onSubmit={submitHandler} className="product_form" >
                <div className="form-item">
                    <label>Title: </label>
                    <input onChange={titleChangeHandler} type="text" />
                </div>
                <div className="form-item">
                    <label>Date: </label>
                    <input type="Date" onChange={dateChangeHandler} min='2023-01-01' max='2023-12-12' />
                </div>

                <div className="form-button">
                    <input type="submit" value='Add product' />
                </div>

            </form>
        </div>
    )

}

export default ProductForm;