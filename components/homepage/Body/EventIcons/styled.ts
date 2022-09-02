import styled from "styled-components";

interface SingleEventProps{
    imgURL : String,
}

export const SingleEventContainer = styled.div`
    width : 110px;
    height : 90px;
    display : flex;
    flex-direction : column;
    align-items: center;
    border: solid;
    border-radius: 20%;
    padding-top : 5px;
    cursor : pointer;
    @media (max-width : 560px){
        justify-content : center;
     }
`
export const SingleEventIcon = styled.div<SingleEventProps>`
    width: 40px;
    height:40px;
    background-image : ${(SingleEventProps)=>(`url(${SingleEventProps.imgURL});`)}
    background-repeat : no-repeat;
    background-size : cover;
    border-radius: 30% ;
`
export const SingleEventNameContainer = styled.div`
    text-align : center;
    @media (max-width : 560px){
       display : none;
    }
`
