import React from "react";
import { filterdata, apiURL } from "./filterdata.js";
import Navbar from "./components/Navbar.jsx";
import Filter from "./components/Filter.jsx";
import Cards from "./components/Cards.jsx";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useState } from "react";
import Spinner from "./components/Spinner.jsx";

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  const [category, setCategory] = useState(filterdata[0].title);  // starting me cat. all par hogi

   // fetch filter data from API
   const fetchData = async () => {
    
      setLoading(true);   // jab tak data fetch hoke aa rha h tab tk loader dikhana hai

    try {
      const res = await fetch(apiURL); // api se data aya
      const result = await res.json(); // then use json format me change kia

      // save this fetch data into a variable (using useState hook)
      setCourses(result.data);
      console.log(result.data);

    } catch (error) {
      toast.error("Something went wrong");
    }
    
      setLoading(false);    // jab data fetch hoke aa jaye tab loader ko nahi dikhana

  }

  useEffect(() => {
    fetchData();

  }, []); //* only run on first render


  
  return (
    <div className="min-h-screen flex flex-col bg-[#596F67]">
      <div>
        <Navbar />
      </div>

      <div>
        <Filter filterdata={filterdata} category={category} setCategory={setCategory} />
      </div>

      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap items-center justify-center min-h-[50vh]">
          {
            loading ? (<Spinner />) : ( <Cards courses={courses} category={category} />)
          }
      </div>
    </div>
  );
}

export default App;
