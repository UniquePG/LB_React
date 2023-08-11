import {useState, useEffect} from 'react';

function LearnUseEffect () {
    
    const [text, setText] = useState('');

    
        //todo useEffect() hook
  //* variation 1 -> it runs on every render of this component
  // useEffect( ()=>{
  //   console.log('USE EFFECT RERENDER');
  // })



  //* variation 2 -> it runs only on the first render of the component
  // useEffect( ()=>{
  //   console.log('USE EFFECT RERENDER');
  // }, [])      //! pass this empty array on the second parameter of useEffect



  //* variation 3 -> It runs on first render + whenever dependency variable value is changed {array ke ander variable ke value}
  // useEffect( ()=>{
  //   console.log('USE EFFECT RERENDER');

  // }, [text])      //! [text] -> dependency variable 



  //* variation 4 -> to handle unmounting of component (naya eventlistener lagane se phle purana wala listener hatana) 
  useEffect( ()=>{

    console.log(' listener added');     //! ye baad me run hogaa

    return () =>{
      console.log('listener removed');      //! ye phle run hogaa
    }

  }, [text])      //! [text] -> iss variable ke change hone par phle return run hoga
  


  function changeHandler(event){

    setText(event.target.value);
    
    console.log(text);
  }

  
  return (
    <div className="App">
      <input type="text" onChange={changeHandler} />
    </div>
  );
}


export default LearnUseEffect;