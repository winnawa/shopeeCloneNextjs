import { SingleEventContainer, SingleEventIcon, SingleEventNameContainer } from "./styled"
import { useRouter } from "next/router";
export const arrayOfHotEvent = [
    //should be fetched from server
    {   
        key  : 1,
        eventName:"Golden Sale Hour",
        iconURL:"https://c.neh.tw/thumb/f/720/comvecteezy500339.jpg",
        pageName: "Golden_Sale_Hour"
    },
    {
        key  : 2,
        eventName:"Free Ship",
        iconURL:"https://cdn-icons-png.flaticon.com/512/2038/2038917.png",
        pageName: "Free_Ship"
    },
    {
        key  : 3,
        eventName:"Fancy Brand Easy Price",
        iconURL:"https://thumbs.dreamstime.com/b/womens-fancy-dress-icon-cartoon-style-womens-fancy-dress-icon-cartoon-style-isolated-white-background-clothing-symbol-123254999.jpg",
        pageName: "Fancy_Brand_Easy_Price"
    },
    { 
        key  : 4,
        eventName:"Card, Receipt and Film Ticket",
        iconURL:"https://img.freepik.com/premium-vector/vector-drawing-cinema-ticket-cinema-ticket-icon_606226-42.jpg",
        pageName: "Card_Receipt_FilmTicket"
    },
    {   
        key  : 5,
        eventName:"Deal Shock 1$",
        iconURL:"https://cdn-icons-png.flaticon.com/512/261/261778.png",
        pageName: "Deal_Shock_1$"
    },
]

const EventIcons = ()=>{
    const router = useRouter();

    const toThePageOfThatTopic = (event: React.MouseEvent<HTMLDivElement>, location : string = "")=>{
        //event.preventDefault();
        router.push({
            pathname: `/m/${location}`,
          }, 
          undefined, 
          { shallow: true }
        );
    }

    const componentToDisplayed = arrayOfHotEvent.map((element)=>{
        return (
            <SingleEventContainer key={element.key} onClick={(e)=>{toThePageOfThatTopic(e,element.pageName)}}>
                <SingleEventIcon imgURL={element.iconURL}></SingleEventIcon>
                <SingleEventNameContainer>{element.eventName}</SingleEventNameContainer>
            </SingleEventContainer>
        )
    })

    return(
        <div style={{paddingTop : "20px",display:"flex", justifyContent:"space-evenly", marginLeft:"50px", marginRight:"50px", marginTop : "20px", marginBottom:"20px"}}>
            {componentToDisplayed}
        </div>
    )
}

export default EventIcons;