import './App.css'
import { useEffect,useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp,faArrowRight ,faArrowLeft,faArrowDown,faBullhorn} from '@fortawesome/free-solid-svg-icons'
function App() { 
  const[direction,setdirection]=useState(null)
  const[btngo,setbtngo]=useState(false)
  async function senddata(dir){
    
  }
function values(){
  setbtngo(true)
  window.addEventListener("deviceorientation",(e)=>{
    let {beta,gamma}=e
    console.log(beta,gamma)
    if(beta>15){
      setdirection ("farward")
    }else if(beta<-15){
      setdirection("backward")     
    }else if(gamma){
      setdirection("right") 
    }else {
      setdirection("left")
    }
    if(direction!=null){
      senddata(direction)
    }
  })
}

  return (
    <>
     {btngo?<p>Tilt any side of your phone🥳</p>:<button id='button1' onClick={values}>Start</button>}
    </>
  )
}
  


export default App
