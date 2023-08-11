import { useState } from "react";

function Card({ id, name, image, info, price, removeTour }) {
    
    const [readmore, setReadmore] = useState(false);
    

    const description =  readmore ? info : `${info.substring(0, 200)}...`; // starting me sirf 200 char dikhane hai info ke
    
    //! readmore/showless banane ke liye
  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <div className="card w-[400px] h-max flex flex-col m-[1rem] p-[1rem] rounded-[10px] items-center shadow-[0px_3px_8px_rgba(0,0,0,0.24)] ">
      <img src={image} className="w-[380px] aspect-[1/1] object-cover" />

      <div className=" my-[20px] mx[5px]">

        <div>
          <h4 className="text-[#1faa59] text-[1.3rem] font-bold"> ₹{price}</h4>
          <h4 className="text-[1.5rem] font-bold">{name}</h4>
        </div>

        <div className="tour-description">
          {description}
          <span className="text-[#12b0e8] cursor-pointer" onClick={readmoreHandler}>
            {readmore ? " show less" : " read more"}
          </span>
        </div>

      </div>
      <button className="mt-[18px] py-[10px] px-[80px] border-[1px] border-solid border-[#b4161b] cursor-pointer rounded-[10px] text-[18px] font-bold bg-[#b4161b21] hover:bg-red-500 hover:text-white transition-all duration-[0.2s]" onClick={ ()=> removeTour(id) }>Not Interested</button>
    </div>
  );
}

export default Card;
