import './style.css'


function ProductDate(props){

    const month = props.date.toLocaleString('en-US', { month: 'long'})  //! toLocaleString
    const day = props.date.toLocaleString('en-US', { day: '2-digit'})
    const year = props.date.getFullYear();

    return(
        <div className="product_date">
            <div className="product_month">{month}</div>
            <div className="product_year">{year}</div>
            <div className="product_day">{day}</div>
        </div>
    )
}

export default ProductDate;