import bobby from "../IMAGES/bobby.png"

const Navbar = () => {
  return (
    <div class="container">
      <div className="nav_container">      <img className="mine_logo" src={bobby} /></div>
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
