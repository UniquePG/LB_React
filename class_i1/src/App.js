import { useState } from 'react';
import './App.css';

function App() {


  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    comments: '',
    isVisible: true,
    mode: '',
    favCar: ''
  });

  // console.log(formData);

  function changeHandler(event) {
    
    //! destructuring of form element
    let {name, value, checked, type} = event.target;  //* bo perticular element milega jis par click handler click hua h


    setFormData( (prevData)=> {

      return {
        ...prevData,    //* previous data of form 
        [name]:  type === 'checkbox' ? checked : value     // after destructuring

        // [event.target.name]: event.target.value   //* form event is written in '[]' in obj key
        }

    });

  }


  function submitHandler(event){
    event.preventDefault()  // prevent the default behaviour of the submit form

    // print entire form data
    console.log('Finally printing the entire form data.......');

    console.log(formData);

  }

  return (
    <div className='App'>

      <form onSubmit={submitHandler}>

      <br /> <br />
        <input type='text' placeholder='First name' onChange={changeHandler} name='firstname' 
        value={formData.firstname} /> 
        <br /> <br />

        <input type='text' placeholder='last name' onChange={changeHandler} name='lastname' 
        value={formData.lastname}/> 
        <br /> <br />

        <input type='email' placeholder='email' onChange={changeHandler} name='email' 
        value={formData.email}/> 
        <br /> <br />

        <textarea placeholder='Enter comments' onChange={changeHandler} name='comments' value={formData.comments}/>
        <br /> <br />

        <input type='checkbox' name='isVisible' onChange={changeHandler} id='isVisible' checked={formData.isVisible} /> 
        <label htmlFor='isVisible' >Is visible</label>
        <br /> <br />

        <fieldset>
          <legend>Mode</legend>

          <input type='radio' name='mode' onChange={changeHandler} value='online-mode' id='online-mode' checked={formData.mode === 'online-mode'} /> 
          <label htmlFor='online-mode' >Online mode</label>

          <input type='radio' name='mode' onChange={changeHandler} value='offline-mode' id='offline-mode' checked={formData.mode === 'offline-mode'} /> 
          <label htmlFor='offline-mode' >offline mode</label>
        </fieldset>


        <select name='favCar' onChange={changeHandler} id='favCar'
        value={formData.favCar} >

          <option value='scorpio'>Scorpio</option>
          <option value='maruti'>maruti</option>
          <option value='tavera'>tavera</option>
          <option value='bmw'>bmw</option>
          
        </select>


        {/* <input type='submit' value='submit' /> */}

        <button>Submit</button>

      </form>
    </div>
  );
}

export default App;
