import './App.css';
import NewProduct from './components/NewProduct';
import Products from './components/Products';

function App() {

  const products = [
    {
      id: 'p1',
      title: 'mobile',
      amount: 10000,
      date: new Date(2022, 8, 29)
    },
    {
      id: 'p2',
      title: 'laptop',
      amount: 30000,
      date: new Date(2021, 10, 20)
    },
    {
      id: 'p3',
      title: 'charger',
      amount: 3000,
      date: new Date(2022, 11, 11)
    },
    {
      id: 'p4',
      title: 'computer',
      amount: 20000,
      date: new Date(2023, 5, 25)
    }
  ];

  //! child se parent me data laane ke liyee(parent-> app.js)
  //* we can do this by using prop functions

  function addProduct(data){

      console.log('inside app.js');
      console.log(data);    // send this data to parent component(app.js)

      // render this product to the UI

  }

  return (
    <div className="container" >
      <NewProduct propFunc={ addProduct } />
      <Products items={products} />
    </div>
  );
}

export default App;
