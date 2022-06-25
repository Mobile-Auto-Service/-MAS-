
import  logo from "./images/image-logo.png";



export const GuestNavbar = () => {
    return (
    <>
        <nav className="navbar navbar-expand-lg bg-white ">
            <div className="container-fluid">
               <a className="navbar-brand" href="#HomePage"> <img src={logo} alt="our logo"/></a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul className="navbar-nav mx-auto mt-2 me-5 navbaritem">
                   <li className="nav-item">
                     <a className="nav-link active" aria-current="page" href="#Hero">Home</a>
                   </li>
                   <li className="nav-item ">
                     <a className="nav-link active" aria-current="page" href="#WhyUs">Why Us</a>
                   </li>
                   <li className="nav-item">
                     <a className="nav-link active" aria-current="page" href="#Services">Services</a>
                   </li>
                   <li className="nav-item">
                     <a className="nav-link active" aria-current="page" href="#">For Mechanics</a>
                   </li>
                   <li className="nav-item">
                     <a className="nav-link active" aria-current="page" href="#ContactUs">Contact Us</a>
                   </li>
                       
                   <li className="nav-item dropdown ">
                     <a className="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     <button type="submit" className=" btn rounded-pill navbutton ">Have An Account?</button>
                     </a>
                     <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                       <li><a className="dropdown-item" href="#LogIn">Login</a></li>
                       <li><a className="dropdown-item" href="#SignUp">Sign up</a></li>
                           
                     </ul>
                   </li>
                       
                 </ul>
                     
               </div>
             </div>
           </nav>
        

    </>


    );
};

export const UserNavbar = () => {
  return (
  <>
      <nav className="navbar navbar-expand-lg bg-white ">
          <div className="container-fluid">
             <a className="navbar-brand" href="#"> <img src={logo} alt="our logo"/></a>
             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav mx-auto mt-2 me-5 navbaritem">
                 <li className="nav-item">
                   <a className="nav-link active" aria-current="page" href="#">Home</a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link active" aria-current="page" href="#">Why Us</a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link active" aria-current="page" href="#">Services</a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link active" aria-current="page" href="#">For Mechanics</a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
                 </li>
                     
                 <li className="nav-item">
                   <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
                 </li>
                     
               </ul>
                   
             </div>
           </div>
         </nav>
      

  </>


  );
};
