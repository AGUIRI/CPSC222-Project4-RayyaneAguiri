import React from 'react'

/**
* @author
* @function AboutUS
**/

const AboutUS = (props) => {
    return(
        <div>AboutUS 
             <form>
                 <h1>Hello</h1>
                <p>Enter your firstname:</p>
                    <input type="text" />
                <p>Enter your lastname:</p>
                    <input type="text" />
                <p>Enter your phone:</p>
                    <input type="number" />
                <p>Enter your Password</p>
                    <input type="text" />
                <p><input type="button" class="button" value="Apply"/></p>

                <p><button onclick="myfunction()" class="btn btn-warning">Switch Color</button></p>
             </form>
        </div>
      )
    
     }
    
     function myfunction(){
       var x = Math.floor(Math.random()*256);
       var y = Math.floor(Math.random()*256);
       var z = Math.floor(Math.random()*256);
       var bgColor="rgb(" + x + "," + y + "," + z + ")";
       console.log(bgColor);
       document.body.style.background= bgColor;
     }
     myfunction();
    

export default AboutUS