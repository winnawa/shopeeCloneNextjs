import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { ImgContainer, InfoDisplayFlex, SingleEventContainer, TopicContainer, NameDisplay, NameDisplayFlex, SingleRowInfo, InfoBoxDisplay, ColonBoxDisplay, ContentBoxDisplay, SubcribeButton, SubcribeButtonContainer, DescriptionContainer, DescriptionTextContainer } from "../../components/mEvent/styled";
import React, { useState } from "react";
import Header from "../../components/homepage/Header";
import { GET_NOTIS } from "../../components/homepage/Header/NotificationBar";
import { useNotification } from "../../components/ultility/NotiContext";
// const GET_ITEMS = gql`
//     query{
//         getItems{
//             data{
//                 description
//                 image
//                 title
//                 id
//             }
//         }
//     }
// `

// const GET_TOPICS = gql`
// query{
//     getTopics{
//         content
//     }
// }
// `

const GET_HOTEVENT = gql`
    query($name : String!){
        getHotEvent(name : $name){
            name,
            time,
            description,
            topics,
            imgURL
        }
    }
`

const POST_NOTIFICATION = gql`
    mutation($event : String!, $action : String!){
        postNotification(event : $event, action :  $action){
            event,
            action
        }
    }
`


const SingleEventDetail = ()=>{

    const router = useRouter();
    const eventName = router.query.eventName;
    let dataObj = { topics: [""], name: "", imgURL: "", time: "", description: "", } ;
    let topicsArray;
    //const  {loading,error,data} = useQuery(GET_ITEMS)   
    //const  {loading,error,data} = useQuery(GET_TOPICS)
    const  {loading,error,data} = useQuery(GET_HOTEVENT, {variables : {name : eventName}})
    const [addNotification,addNotiState] = useMutation(POST_NOTIFICATION);
    const [subscribeState, updateSubscribeState] = useState("Subscribe");

    if (error) return `Error : ${error}`
    if (!loading){
        console.log(data);
        dataObj = {...data.getHotEvent};
        console.log(dataObj);
        topicsArray = dataObj.topics.map((element: string)=>{
            return (
                <TopicContainer> {element} </TopicContainer>
            )
        })
    }
    
    const {updateHadNewNoti, updateNumOfNewNoti, numOfNewNoti} = useNotification();

    const subscribeClickedHandler = ()=>{
        if (subscribeState === "Subscribe"){
            updateSubscribeState("Subscribed");
            //add Notification
            addNotification(
                {
                    variables:{event: dataObj.name , action : "subscribed"}, 
                    refetchQueries:[{query:GET_NOTIS}] 
                }
            )
        }
        else {
            updateSubscribeState("Subscribe")
            // add Notification
            addNotification(
                {
                    variables:{event: dataObj.name , action : "unsubscribed"}, 
                    refetchQueries:[{query:GET_NOTIS}] 
                }
            )
        }

        updateHadNewNoti(true);
        updateNumOfNewNoti(numOfNewNoti+1)
    }

    return(
        <React.Fragment>
            <Header></Header>
            <SingleEventContainer>
                {!loading && <>
                    <ImgContainer imgURL={dataObj.imgURL} />
                    <InfoDisplayFlex>
                        <NameDisplayFlex>
                            <NameDisplay>{dataObj.name}</NameDisplay>
                        </NameDisplayFlex>
                        <SingleRowInfo> 
                            <InfoBoxDisplay> Time </InfoBoxDisplay>  
                            <ColonBoxDisplay> : </ColonBoxDisplay> 
                            <ContentBoxDisplay> {dataObj.time} </ContentBoxDisplay> 
                        </SingleRowInfo>
                        <SingleRowInfo> 
                            <InfoBoxDisplay> Topics </InfoBoxDisplay>  
                            <ColonBoxDisplay> : </ColonBoxDisplay> 
                            <ContentBoxDisplay> {topicsArray} </ContentBoxDisplay> 
                        </SingleRowInfo>
                        <SubcribeButtonContainer>
                            <SubcribeButton onClick={subscribeClickedHandler}>{subscribeState}</SubcribeButton>
                        </SubcribeButtonContainer>
                        <DescriptionContainer>
                            <InfoBoxDisplay> Description </InfoBoxDisplay>
                            <ColonBoxDisplay> : </ColonBoxDisplay> 
                            <DescriptionTextContainer>{dataObj.description}</DescriptionTextContainer>
                        </DescriptionContainer>
                    </InfoDisplayFlex>
                    
                </>
                }
            </SingleEventContainer>
        </React.Fragment>
    )

}

export default SingleEventDetail