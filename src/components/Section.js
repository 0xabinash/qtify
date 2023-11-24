import "./section.css";
import { Card, Carousel } from "./index";
import { useState } from "react";


const Section = ({title, data}) =>{

    const [isCollapsed, setIsCollapsed] = useState(false);

    return(
        <>
        <div className="section-container">
            <div className="section-header" >
                <h1 className="title">{title}</h1>
                <h1 className="section-toggle-btn"
                 onClick={()=> setIsCollapsed(!isCollapsed)} 
                >
                    {isCollapsed? "Show All" : "Collapse"}
                </h1>
            </div>
            {
                isCollapsed? (<Carousel data={data} />):
                (<div className="card-container">
                    {data?.map((cardData)=>{
                        return(
                            <Card key={cardData.id} imgSrc={cardData.image} label={cardData.title} followsCount={cardData.follows} />
                        )
                    })}              
                </div>)
            }
        </div>
        </>
    )
}

export default Section;