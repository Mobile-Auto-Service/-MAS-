const LogIn = () => {
    return (
            <>
            
            <section className="text-center">
                    <h2>Log in to Mobile Auto Service</h2>

                    <p>
                        All fields are required
                    </p>
                    <form className="input">
                        <div className="mt-3">
                            <label for="email">What's your email address?</label> <br/>
                            <input type="email" id="email" name="email" placeholder="email address"/>
                        </div>

                        <div className="mt-3">
                            <label for="password"> Your Password</label> <br/>
                            <input type="password" name="pasword" id="password" placeholder="input password"/>
                        </div>
                    </form> <br/>
                    <button type="submit" className="btn btn-primary w-25">Sign In</button>
                </section>
            
            </>

    );
};


export default LogIn;