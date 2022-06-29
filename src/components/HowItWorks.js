import iconcar from "./images/car icon.png"
import angle from "./images/angle.png"
import calendar from "./images/calender.png"

export const HowItWorks = () => {
return (
    <div className="container-fluid"> 
        <section className="d-flex justify-content-center  w-100  allbgd row">
            
                <div className=" mx-5 text-center col-sm-12 col-md-12 col-lg-3">
                    <div>
                
                    
                    </div>
                    <img className=" m-5 px-5" src={iconcar} alt=""/>
                    <h2 className=" ">YOU TELL US WHERE YOU ARE AND WHAT IS WRONG</h2>
                    <p className ="">Tell us where you are based, what
                        car you are experiencing issues
                        with and what you think is wrong
                        (e.g.“I need
                        new brakes”) and we take it from there.</p>
                
                </div>
                
                <div className=" mx-5 text-center col-sm-12 col-md-12 col-lg-3">
                    <div>
                
                        
                    </div>
                    <img className=" m-5 px-5" src={angle} alt=""/>
                    <h2 className=" text-center">GET A LIST OF MECHANIC CLOSE TO YOU</h2>
                    <p className="">All our mobile mechanics have
                        agreed to honor the quotes we
                        provide. This ensures that there will
                        be no need for negotiations or any
                        last minute surprises.</p>
                
                </div>
                
                <div className="mx-5 text-center col-sm-12 col-md-12 col-lg-3">
                    
                    <img className=" m-5 px-5 " src={calendar} alt=""/>
                    <h2 className="  ">BOOK THE SERVICE OF A MECHANIC</h2>
                    <p className="text-center">Select a time and place that works
                        for you and provide payment
                        information to book your service.
                        We support a number of online
                        payment options.</p>
                
                </div>

            
            </section>
    </div>



)

}