import iconcar from "./images/car icon.png"
import angle from "./images/angle.png"
import calendar from "./images/calender.png"

export const HowItWorks = () => {
return (
<section className="d-flex justify-content-end   w-75 resize  allbgd">
        
        <div className="caricon">
            <div>
        
            
            </div>
            <img className="iconcar" src={iconcar} alt=""/>
            <h2 className="youtell">YOU TELL US WHERE YOU ARE AND WHAT IS WRONG</h2>
            <p>Tell us where you are based, what
                car you are experiencing issues
                with and what you think is wrong
                (e.g., “my car is shaking” or “I need
                new brakes”) and we take care of
                the rest.</p>
        
        </div>
        
        <div className="angleicon">
            <div>
        
                  
            </div>
            <img className="angl" src={angle} alt=""/>
            <h2 className="getmove">GET A LIST OF MECHANIC CLOSE TO YOU</h2>
            <p className="getmove">All our mobile mechanics have
                agreed to honor the quotes we
                provide. This ensures that there will
                be no need for negotiations or any
                last minute surprises.</p>
        
        </div>
        
        <div className="calender">
               
            <img className="callen" src={calendar} alt=""/>
            <h2 className="move">BOOK A SERVICE OF A MECHANIC</h2>
            <p className="move">Select a time and place that works
                for you and provide payment
                information to book your service.
                We support a number of online
                payment options.</p>
        
        </div>
    </section>




)

}