import styled from "styled-components";

export const HeaderContainer = styled.div`
    display : flex; 
    height:130px;
    margin-bottom : 10px;
    position : sticky; 
    top : 0px;
    z-index : 100;
    width : 100%;
    background-color:AntiqueWhite;
`
export const NotificationBackground = styled.div`
    background-color : rgba(0, 0, 0, 0.5);
    
    width : 100%;
    height : 630px;
    position :  absolute;
    display : flex;
    justify-content : center;
    align-items : center;
    z-index :  1000;
`
//opacity :  0.5;
export const  NotificationBarContainer = styled.div`
    width : 400px;
    height : 370px;
    background-color :  white;
    overflow  : auto;
`
export const SingleNotificationContainer = styled.div`
    width : 100%;
    height : 20%;
    display :  flex;
    font :  black;
    align-items  : center;
    border : solid black;
`
export const SingleNotificationTextContainer = styled.div`
    font-size : 20px;
`


export const SearchBarTopicsContainer = styled.div`
    width  : 565.281px;
    position : absolute;
    left : 34.72px;
    top : 50px;
    background-color : white;
`
export const SingleTopicContainer = styled.div`
    width : 100%;
    cursor : pointer;
    &:hover{
        background-color : grey;
    }
`

//ClientOption
export const NumOfNewNoti = styled.div`
    width : 10px;
    position : absolute;
    display  : flex;
    justify-content : center;
    align-items : center;
    color : red;
    left : 20px;
    z-index : 10;
    font-weight : bold;
`


