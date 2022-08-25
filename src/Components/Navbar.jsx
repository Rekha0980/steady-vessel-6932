import { Modal } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ModalPage from "./Modal";


function Navbar() {
    
  return (
   <div className="main">
    <div className="box1">
    <img id="logo"src="https://niftypm.com/_nuxt/img/nifty-logo.eab2f7a.svg" alt="netlogo" />
    </div>
    <div className="box2">
    <div >
    <select name="" id="">
        <option value="">Features</option>
        <option value="">Discusses</option>
        <option value="">Task</option>
        <option value="">Tracking time</option>
        <option value="">Project Home</option>
    </select>
    </div>
    <div>
    <select name="" id="">
        <option value="">Use cases</option>
        <option value="">Agile Development</option>
        <option value="">Digilal Agencies</option>
        <option value=""> Marketing teams</option>
        
    </select>
    </div>
    <div>
    <select name="" id="">
        <option value="">Resources</option>
        <option value="">Apps</option>
        <option value="">Integration</option>
        <option value="">Security</option>
      
    </select>
    </div>
    <div>Got Clients?</div>
    <div>Pricing </div>
  
   <div className="demo">Get a Demo</div>
   
    </div>
    <div className="box3">
    <div className="login">
<button className="login" >{<Link to={`/login`}>Login</Link>}</button>
            
          
    </div>
   <div>
    <ModalPage/> </div>
    </div>
   </div>
  );
}
export default Navbar;
