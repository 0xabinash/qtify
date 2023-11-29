import "./section.css";
import "./filterSection.css";
import { Carousel } from "./index";
import { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const FilterSection = ({title, data, filters, executeFilter, navId}) =>{

    const [selectedTab, setSelectedTab] = useState(0);


    return(
        <>
        <div className="section-container">
            <div className="section-header">
                <h1 className="title">{title}</h1>
            </div>
            <Tabs value={selectedTab}
             onChange={(e, value)=>{
                executeFilter(filters[value].key)
                setSelectedTab(value)}} 

             TabIndicatorProps={{
                style: {
                    backgroundColor: "var(--css-primary)"
                }
             }}>
                {
                    filters?.map((genre)=>{
                        return(
                            <Tab className="tab" key={genre.key} label={genre.label} />
                        )
                    })
                }
            </Tabs>
            <Carousel navId={navId} data={data} />
        </div>
        </>
    )
}

export default FilterSection;