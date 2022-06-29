

const SignUp = () => {
    return(
    <>

<section className="text-center">
            <div className="mb-5 ">
                <h2>Sign Up</h2>
            </div>
            <form className="input">
                <div className="mb-3">
                    <input type="text" className="me-5" id="text" name="text" placeholder="I'm a driver"/>
                    <input type="text" id="text" name="text" placeholder="I'm a mechanic"/>
                </div>
                <div className="mb-5">
                    <p>Already a member? <span className="login">log in</span></p>
                </div>
                <div >
                    <label  for="text">What's your name?</label> <br/>
                    <input type="text" className="me-5" id="text" name="text" placeholder="first name"/>
                    <input type="text" id="text" name="text" placeholder="Last name"/>
                </div>

                <div className="mt-3">
                    <label for="email">What's your email address?</label> <br/>
                    <input type="email" id="email" name="email" placeholder="email address"/>
                </div>

                <div className="mt-3">
                    <label for="number">Your phone number</label> <br/>
                    <input type="number" name="number" id="number" placeholder="phone number"/>
                </div>

                <div className="mt-3">
                    <label for="password"> Create a password</label> <br/>
                    <input type="password" name="pasword" id="password" placeholder="create password"/>
                </div>
                <div id="passwordHelp" className="form-text">Password should be a minimum of 8 characters and contain at least one <br/> number and one character.</div>

                <div className="mt-3">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                  <label className="form-check-label" for="exampleCheck1">By ticking this box you are indicating you have read and accept <br/> our terms and privacy policy.</label> <br/>
              
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                  <label className="form-check-label" for="exampleCheck1">Tick this box if you want to receive exclusive offers, driving tips <br/> and motoring news via email.</label> <br/>

                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                  <label className="form-check-label" for="exampleCheck1">Tick this box if you want to receive information and exclusive <br/> motoring offers from carefully selected third parties.</label>
                </div>
                <button type="submit" className="btn btn-primary w-25">Sign Up</button>
              </form>
        </section>

    
    
    </>

    );
};


export default SignUp;