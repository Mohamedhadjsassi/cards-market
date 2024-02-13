import React from 'react'

function Join() {
    let test=false;

    const you=()=>{
      if (test==false){
      
       document.getElementById("log").innerHTML= "log out"
       document.getElementById("welc").innerHTML= "welcome Mr.Mohamed"
       test=true;
      }
      else {
        alert("are you fine Mr.Mohamed ?")
        document.getElementById("log").innerHTML= "log in"
       document.getElementById("welc").innerHTML= "please log in"
       test=true;
      }

    };
  return (
    <div id='join'>
        <button id='log' onClick={you} >log in</button>
        
        <h1 id='welc'>please log in</h1>
        
        </div>
  )
}

export default Join