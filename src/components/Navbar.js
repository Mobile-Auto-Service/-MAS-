
import { NavLink,Link } from "react-router-dom";
import  logo from "./images/image-logo.png";



export const GuestNavbar = () => {
    return (
    <>
        <nav className="navbar sticky-top navbar-expand-lg bg-white ">
            <div className="container-fluid">
               <Link to ='/' className="navbar-brand" > <img src={logo} alt="our logo"/></Link>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "></span>
              </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul className="navbar-nav mx-auto mt-2 me-5 navbaritem">
                   <li className="nav-item">
                   <NavLink to = '/'>  <a  className="nav-link active" aria-current="page" href="#hero" >Home</a></NavLink>
                   </li>
                   <li className="nav-item ">
                     <a  className="nav-link active" aria-current="page" href="#whyus">Why Us</a>
                   </li>
                   <li className="nav-item">
                     <a className="nav-link active" aria-current="page" href="#services">Services</a>
                   </li>
                   <li className="nav-item">
                     <Link to='/formechanics' className="nav-link active" aria-current="page" href="#">For Mechanics</Link>
                   </li>
                   <li className="nav-item">
                     <a className="nav-link active" aria-current="page" href="#contactus">Contact Us</a>
                   </li>
                       
                   <li className="nav-item dropdown ">
                     <a className="nav-link dropdown-toggle " href="button" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     <button type="submit" className=" btn rounded-pill navbutton ">Have An Account?</button>
                     </a>
                     <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                       <li><Link to='/Login'className="dropdown-item" href="#LogIn">Login</Link></li>
                       <li><Link to='/Signup'className="dropdown-item" href="#SignUp">Sign up</Link></li>
                           
                     </ul>
                   </li>
                       
                 </ul>
                     
               </div>
             </div>
           </nav>
        

    </>


    );
};

// export const UserNavbar = () => {
//   return (
//   <>
//       <nav className="navbar navbar-expand-lg bg-white ">
//           <div className="container-fluid">
//              <a className="navbar-brand" href="#"> <img src={logo} alt="our logo"/></Link>
//              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>
//              <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                <ul className="navbar-nav mx-auto mt-2 me-5 navbaritem">
//                  <li className="nav-item">
//                    <a className="nav-link active" aria-current="page" href="#">Home</Link>
//                  </li>
//                  <li className="nav-item">
//                    <a className="nav-link active" aria-current="page" href="#">Why Us</Link>
//                  </li>
//                  <li className="nav-item">
//                    <a className="nav-link active" aria-current="page" href="#">Services</Link>
//                  </li>
//                  <li className="nav-item">
//                    <a className="nav-link active" aria-current="page" href="#">For Mechanics</Link>
//                  </li>
//                  <li className="nav-item">
//                    <a className="nav-link active" aria-current="page" href="#">Contact Us</Link>
//                  </li>
                     
//                  <li className="nav-item">
//                    <a className="nav-link active" aria-current="page" href="#">Dashboard</Link>
//                  </li>
                     
//                </ul>
                   
//              </div>
//            </div>
//          </nav>
      

//   </>


//   );
// };
