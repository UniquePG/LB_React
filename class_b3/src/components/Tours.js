import Card from "./Card";

function Tours({tours, removeTour}) {
  return (
    <div className="flex items-center justify-center flex-col">
      <div>
        <h2 className="text-[3rem] m-[6vh] border-dashed border-[7px] border-[rgb(1,17,160)]  rounded-[10px] py-[1vh] px-[5vw]">Plan with Love</h2>
      </div>

      <div className="flex  justify-center flex-wrap max-w-[1300px] my-0 mx-auto">
            {
                tours.map( (tour)=>{                // tour ke ander ek ek obj. milta jayegaa
                    return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>  // {...tour} -> pure object ko alag alg kar dega
                })
            }
      </div>

    </div>
  );
}

export default Tours;
