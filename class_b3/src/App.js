import { useState } from 'react';
import data from './data'
import Tours from './components/Tours';


function App() {

 const [tours, setTours] = useState(data);

 //! remove tour function
 function removeTour(id){
    const newTour = tours.filter( (tour)=> tour.id !== id)
    setTours(newTour);
 }


 //! saare tours remove hone ke baad UI will look like this
 if(tours.length === 0){
    return(
      <div className='flex items-center justify-center flex-col h-[100vh] '>
          <h2 className='text-[1.2rem] font-bold ' >No tours left...</h2>

          <button className='mt-18px py-[10px] px-[80px] border-[1px] border-solid border-white cursor-pointer bg-gray-300 rounded-md text-lg hover:bg-gray-400' onClick={()=> setTours(data)}>
              Refresh
          </button>

      </div>
    )
 }


 //* main tours UI
  return (
    <div className="">

        <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
