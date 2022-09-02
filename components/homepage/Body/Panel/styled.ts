import styled from "styled-components";

interface SingleImgProps{
    imgURL : String
}

export const PanelContainer = styled.div`
    display : flex;
    margin : 0px 50px 0px 50px;
    height : 500px;
`

export const SingleImgContainer = styled.div<SingleImgProps>`
    background-repeat: no-repeat;
    background-size : cover;
    width : 99%;
    height: 49%;
    background-image : ${(SingleImgProps)=>(`url(${SingleImgProps.imgURL});`)}
`

export const DoubleImgContainer = styled.div`
    width : 535px;
    height : 100%;
`