import bobby from "../IMAGES/bobby.png"
import linked from "../IMAGES/linkedin.png"
import email from "../IMAGES/email2.png"

const Navbar = () => {
  return (
    <div class="container">
      <div className="nav_container">   
         <img className="mine_logo" src={bobby} />
         
         <div className="nav_container2">
         <a href="https://www.linkedin.com/in/boryana-dimitrova94/" target="_blank"> <i class="fa fa-linkedin   fa-lg"   aria-hidden="true" id="linked"></i></a>
         <a href="mailto:boryana.dimitrova789@gmail.com" target="_blank"> <i class="fa fa-envelope   fa-lg" aria-hidden="true" id="mail"></i></a>
         </div>
        

         </div>
        
      <ul className="nav">
        <li className="nav_item"> <a className="link1" href="/"> Home </a> </li>
        <li className="nav_item"> <a className="link1" href="/projects"> Projects </a> </li>
        <li className="nav_item"> <a className="link2" href="/about_me"> Ab♡ut Me </a> </li>
        <li className="nav_item"> <a className="link1" href="/contacts"> Contacts </a> </li>
      </ul>
    </div>
  );
};

export default Navbar;
