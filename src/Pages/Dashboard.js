

const Dashboard = () => {
    return(

   <>
     <div className="accountbackground ">
        <h2 className="accountcolor  text-white container">My Account</h2>
    </div>
    <section className="container mt-5">
        <div className="row">
            <div className="col-4 col-sm-12 col-lg-4 ">

                <p >Egregius Account <br/> egregius@gmail.com </p> 
                <button type="submit" className="text-white button "> Log out</button> <br/> <br/>
                <form className="row">
                    <input className="col-12 dashboard" type="text" placeholder="Dashboard"/>
                    <input className="col-12 booking"  type="text" placeholder="Bookings"/>
                    <input className="col-12 car"  type="text" placeholder="Car inspection reports"/>
                    <input className="col-12 account"  type="text" placeholder="Account Details"/>
        
                </form>
            </div>
            <div className="col-8 col-sm-12 col-lg-8">
                <div>
                    <h4>welcome boss</h4>
                    <p>This is your account dashboard where you can view your <span className="spanwords">recent booking,</span> manage your <span className="spanwords" >service address,</span> and <span className="spanwords">edit password and account details</span> <br/><br/> An importnt part of us getting your car back into tip-top shape is performing car health check to allow you get sight of any issues our MAS's noticed while working on your car <br/><br/> Experiencing any issue with figuring something out on  Mobile Auto Service or have any suggestion on how we can improve our services to you? <span className="spanwords" >chat with our friendly Mobile Auto Service consultant </span>who will answer any of your question. </p>
                    
                </div>
        
                <div>
                    <button type="submit" className="formcolor btn rounded-pill text-white">Book a service</button><br/> <br/>
                    <button type="submit" className="formcolor btn  text-white" >Your Booking</button><br/> <br/>
                    <button type="submit" className="formcolor btn  text-white">Your Report</button><br/> <br/>
                    <button type="submit" className="formcolor btn  text-white"> Your Address</button><br/><br/>
                    <button type="submit" className="formcolor btn text-white"> Your Cars</button> <br/>
                
                </div>
                <div className="">
                    <p className="mt-3">Helpful information</p>
                    <p className="readmore">How to get your car ready for december <span className="readmoreone">Read more</span></p> <hr/>
                    <p className="readmore">How to get the right mechanic for your car <span className="readmoretwo">Read more</span></p> <hr/>
                    <p className="readmore">How to know you are selecting the right car <span className="readmorethree">Read more</span></p> <hr/>
                
                </div>
            </div>
        </div>




    </section>
   </>     
       
    );
};



export default Dashboard;