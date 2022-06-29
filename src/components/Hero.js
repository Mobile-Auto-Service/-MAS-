import { Link } from "react-router-dom"

export const Hero = () => {
    return(
    
        <div className="row " id="hero">
            <div className=" hero1 col-sm-12 col-md-12 col-lg-6 text-white">
                <div className="herotext">

                    <h2 className="herobigtext ">Mobile Mechanics that come to you</h2>
                    <p className="herosmalltext">Never worry about the condition of vehicle. Mobile auto services deliver professional mechanics to you </p>

                    <Link to ='/dashboard'> <button  type="submit" className="btn rounded-pill herobtn">Get a mechanic </button></Link>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 hero2 ">


            </div>
        </div>
   
    )
}