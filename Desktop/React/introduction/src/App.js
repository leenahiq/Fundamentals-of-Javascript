import "./App.css";

 import Heading from "./Components/Heading"
 import austria from "./img/austria.jpg"
 import croatia from "./img/croatia.jpg"
 import france from "./img/greece.jpg"
 import sweden from "./img/sweden.jpg"
const App = ( ) => {
   return (
     <div className="app" >


    <div className="img">
    <img src={austria} alt="" width ="400px" height="400"/>
    <Heading text="Austria"/>
    </div>
    <div className="img">
    <img src={croatia} alt="" width ="400px" height="400"/>
    <Heading text="Croatia"/>
    </div>
    <div className="img">
    <img src={france} alt="" width ="400px" height="400"/>
    <Heading text="france"/>
    </div>
    <div className="img">
    <img src={sweden} alt="" width ="400px" height="400"/>
    <Heading text="Sweden"/>
    </div>
  </div>
    
    
   
  
  
   )
 }

 
 export default App