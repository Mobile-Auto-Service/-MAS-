

export const ServiceCard = (props) => {
    const {image, title, content} = props;
    return(
        <>
            <div>
                <div className="card m-4">
                    <img src={image} className="card-img-top" alt="this is it" />
                    <div className="card-body">
                        <h2 className="card-text">{title}</h2>
                        <p className="card-text w-50z mx-5">
                            {content}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export const Why = (prop) => {
    const {icon, title, content} = prop;
    return(

        <>
        
            <div className="card m-5 border-0" >
            <div className="row g-0">
                <div className="col-md-4">
                <img src={icon} alt="icon"/>
                </div>
                <div className="col-md-8">
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
    <div className="d-flex justify-content-center mb-5 g-0 mx -2 m-5 w-100 p-0" >
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

