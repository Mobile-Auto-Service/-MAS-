

export const ServiceCard = (prop) => {
    const {image, title, content} = prop;
    return(
        <>
            <div className="row mb-5 ">
                <div className="card  ">
                    <img src={image} className="card-img-top " alt="this is it" />
                    <div className="card-body">
                        <h2 className="card-text text-center">{title}</h2>
                        <p className="card-text  ">
                            {content}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export const WhyUs = (prop) => {
    const {icon, title, content} = prop;
    return(

        <>
        
            <div className="card m-5 border-0" >
            <div className="row">
                <div className="">
                <img src={icon} alt="icon"/>
                </div>
                <div className="">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{content}</p>
                    
                </div>
                </div>
            </div>
            </div>
    
        </>
    )
    
    }


export const Team = (props) => {
    const { image, namee, position} = props;
    return(
    <div className="d-flex justify-content-center mb-5 mt-5 " >
      <div className="card w-50 t">
           <img src={image} className="card-img-top" alt="TeamMember"/>
        <div className="card-body mb-0" >
          <p className="card-text display-2"><h2>{namee}</h2></p>
          <p className="card-text"><small className="text-muted">{position}</small></p>
        </div>
      </div>
    </div>
    )
}    

