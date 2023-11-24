import "./card.css"

const Card = ({imgSrc, followsCount, label}) =>{

    return(
        <>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-img-frame">
                        <img src={imgSrc} alt="card" />
                    </div>
                    <div className="card-content">    
                        <span>{followsCount} follows</span>
                    </div>
                </div>
                <p className="card-label">{label}</p>
            </div>
        </>
    )
}

export default Card;