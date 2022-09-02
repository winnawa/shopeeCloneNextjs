import styled from "styled-components";

interface BigPanelProps{
    imgURL : String,
}

export const Wrapper = styled.div`
    width : 94%;
    height : 300px;
    display : flex;
    justify-content: center;
    align-items:center;
    background-color:AntiqueWhite;
    position: relative;
    top : 20px;
    margin-bottom:20px;

`

export const BigPanelContainer = styled.div<BigPanelProps>`
    width : 99%;
    height : 96%;
    border-radius : 30%;
    background-image : ${(props)=>(`url(${props.imgURL});`)}
    background-size : cover;
    background-repeat: no-repeat;
`