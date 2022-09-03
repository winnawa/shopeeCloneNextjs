import {gql} from "@apollo/client"
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { SingleNotificationContainer, SingleNotificationTextContainer } from "./styled";
export const GET_NOTIS = gql`
query{
    getNotification{
        event
        action
    }
}
`

//In Notification, after posting a noti, I want the BELL ICON to appear with number of new noti added,
//However, I cant have a connection/communication between /m/eventName/ and / so it is not yet availables.
//I think I will try later with Redux Toolkit

const NotificationBar = ()=>{
    const  {loading,error,data} = useQuery(GET_NOTIS)
    
    //const [reRender,updateRerender] = useState(false);
    if (error) return (<>{`Error : ${error}`}</>)
    if (!loading){
        console.log(data);
        const dataObj = data.getNotification;
        
        const notificationsArray = dataObj.slice(0).reverse().map((element: {event : string, action : string},index:number)=>{
            return (
                <SingleNotificationContainer key={index}>
                    <SingleNotificationTextContainer>
                        {`You have ${element.action} to ${element.event}.`}
                    </SingleNotificationTextContainer>
                </SingleNotificationContainer>
            )
        })
        return(
            <>
                {notificationsArray.length >0 ?  notificationsArray  : <div>Currently NO Notification</div>}
            </>
        )
    }
    return(
        <div></div>
    )
    
}
export default NotificationBar;