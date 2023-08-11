import React from 'react'
import singupImg from '../assets/signup.png'
import Template from '../components/Template'


const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
        title="Join the millions learning to code with Studynotion for free"
        desc1="Build skills today, tomorrow, and beyond"
        desc2="Education is future-proof your carrer"
        image={singupImg}
        formtype='signup'
        setIsLoggedIn={setIsLoggedIn}
            
    />
  )
}

export default Signup