export const ContactUs = () => {
    return (
            <>
                <section className="text-center">

                    <div className="contact">
                        <h3>Contact</h3>
                    </div>
                    <form className="input">
                        <div className="mt-3">
                            <label  for="text">What's your name?</label> <br/>
                            <input type="text" className="me-5" id="text" name="text" placeholder="first name"/>
                            <input type="text" id="text" name="text" placeholder="Last name"/>
                        </div>

                        <div className="mt-3">
                            <label for="email">What's your email address?</label> <br/>
                            <input type="email" id="email" name="email" placeholder="email address"/>
                        </div>

                        <div className="mt-3">
                            <label for="name">Drop us a message</label><br/>
                            <textarea name="name" id="name" cols="65" rows=""></textarea>
                        </div>
                    </form> <br/>
                    <button type="submit" class="btn btn-primary w-25">Submit</button>
                </section>

            
            
            </>


    )



}