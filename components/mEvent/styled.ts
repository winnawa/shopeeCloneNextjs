import styled from "styled-components";

export interface EventType{
    imgURL : string
}

export const SingleEventContainer = styled.div`
    font-family : Helvetica Neue;
    display : flex;
    flex-wrap : wrap;
`

export const ImgContainer = styled.div<EventType>`
    background-image : ${props => `url(${props.imgURL});`  }
    background-size : cover;
    background-reapeat : no-repeat;
    width : 50%;
    height : 500px;
    border  : black solid;
    margin-left :  5px;    
    margin-top  : 5px;
`

export const InfoDisplayFlex = styled.div`
    width : 48%;
    height : 500px;
    
`
export const NameDisplayFlex = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    padding-bottom : 30px;
`
export const NameDisplay = styled.div`
    font-weight : bold;
    font-size : 45px;
`

export const SingleRowInfo = styled.div`
    width : 100%;
    padding-left :  50px;
    display: flex;
    font-size :  25px;
    padding-top : 10px;
    @media (max-width : 1000px){
        align-items : center;
        justify-content : center;
        padding-left  :  0px;
    }
`
export const InfoBoxDisplay = styled.div`
    width : 25%;
    @media (max-width : 1000px){
        display : none;
    }
`
export const ColonBoxDisplay = styled.div`
    width : 10%;
    @media (max-width : 1000px){
        display : none;
    }
`
export const ContentBoxDisplay = styled.div`
    display : flex;
    width : 60%;
    flex-wrap : wrap;
`

export const TopicContainer = styled.div`
    border  : black solid;
    cursor  :  pointer;
    margin-right : 8px;
    padding : 5px;
    border-radius : 30%;
    font-family : Helvetica Neue;

    &:hover{
        background-color : DarkSalmon;
    }
`

export const SubcribeButtonContainer = styled.div`
    width : 100%;
    padding-left :  50px;
    display: flex;
    font-size :  25px;
    padding-top : 10px;
    justify-content:  center;
`

export const SubcribeButton = styled.button`
    font-family : Helvetica Neue;
    font-weight : bold;
    width : 140px;
    height : 80px;
    background-color : BurlyWood;
    cursor  : pointer;
    border-radius :  20%;
    border : black solid;
    font-size :  25px;
    &:hover{
        background-color : DarkSalmon;
    }
`
export const DescriptionContainer = styled.div`
    width : 100%;
    padding-left :  50px;
    display: flex;
    font-size :  25px;
    padding-top : 10px;
`
export const DescriptionTextContainer= styled.div`
    width : 60%;
    font-size : 20px;
    text-align :  justify;
    @media (max-width : 1000px){
        width : 100%;
    }
`