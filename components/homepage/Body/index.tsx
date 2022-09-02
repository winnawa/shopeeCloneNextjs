import React from "react"
import Panel from "./Panel"
import EventIcons from "./EventIcons"
import BigPanel from "./BigPanel"
import { ASection } from "./styled"
import Category from "./Category"
import FlashSale from "./FlashSale"
import Recommendation from "./Recommendation"


const Body = ()=>{

    return (
        <React.Fragment>
            <Panel></Panel>
            <EventIcons></EventIcons>
            <ASection>
                <BigPanel/>
                <Category/>
                <FlashSale/>
                <Recommendation/> 
            </ASection>
        </React.Fragment>
    )
}

export default Body