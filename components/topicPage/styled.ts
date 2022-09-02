import styled from "styled-components"

interface SingleTopicProps{
    imgURL : string
}

export const SingleTopicPageContainer = styled.div`
    font-family : Helvetica Neue;
`

export const BackgroundImgCenterBox = styled.div`
    display : flex;
    justify-content : center;
    

`
export const BackgroundImgContainer = styled.div<SingleTopicProps>`
    width : 100%;
    height : 1300px;
    background-image : ${(props)=>(`url(${props.imgURL});`)}
    background-size :  cover;
    background-repeat : no-repeat;
    text-align : center;
`

export const TextCenterBox = styled.div`
    display : flex;
    justify-content : center;
    align-items  :  center;
`
export const TextBackGroundAndSizeColorBox = styled.div`
    width : 850px;
    height : 120px;
    background-color : white;
    display : flex;
    justify-content : center;
    align-items  :  center;
    flex-direction : column;
    border-radius  : 20%;
`
export const TextContainer = styled.div`
    text-align  : justify;
    font-size : 20px;
`