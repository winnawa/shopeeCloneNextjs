import styled from "styled-components";

interface ImgProps{
    imgURL : String;
}
interface SingleCategoryProps{
    mount : Boolean;
    unmount? : Boolean;
}

export const PaintingContainer = styled.div`
    display : grid;
    width : 94%;
    position: relative;
    top:20px;
    margin-bottom:20px;
    grid-template-columns: repeat(5,2fr);
    background-color:white;
    @media (max-width : 950px){
        overflow : hidden;
    }
`
export const CategoryHeader = styled.div`
    display : flex;
    grid-column : 1/11;
    padding: 20px 0 20px;
    padding-left : 5px;
    font-size: x-large;
    border-bottom: solid;
    border-color: beige;
    font-weight : bold;
`

export const SinglePainting = styled.div<SingleCategoryProps>`
    grid-column : 2fr;
    height: 240px;
    border-left:solid;
    border-right:solid;
    border-bottom:solid;
    border-color: beige;
    display: flex;
    flex-direction: column;
    align-items : center;
   
    position:relative;

    opacity: 0;
    transition: opacity 1s ease, transform 1s;
    
    ${(props)=>( props.mount && 
        `opacity:1;`
    )}

    &:hover{
        background-color: orange;
        cursor:pointer;
        font-weight: bold;
    }

`
export const ImgContainer = styled.div<ImgProps>`
    margin-top:5px;
    width:190px;
    height:190px;
    border-radius:50%;
    background-image: ${(props)=>(`url(${props.imgURL});`)}
    background-repeat: no-repeat;
    background-size: cover;
    border-style: solid;
    border-color : black;
    border-width : thin;
`

export const SalePercent = styled.div`
    position: absolute;
    width:50px;
    height:50px;
    top:0px;
    right:0px;
    z-index : 1;
    opacity:0.6;
    background-color: yellow;
    text-align : center;
    font-size:x-large;
`

export const PriceContainer = styled.div `
    text-align: center;
    margin-top : 5px;
`
export const NameContainer = styled.div`
    text-align: center;
    margin-top : 5px;
`
export const LeftButton = styled.div`
    text-align : center;
    position : absolute;
    width : 50px;
    height : 50px;
    left : 0px;
    top : 50%;
    background-color : white;
    opacity: 0.5;
    font-size : xxx-large;
    font-weight: bold;
    border-radius : 10%;
    z-index:1;
    border-color: black;
    border-width: thin;
    border-style: solid;

    cursor:pointer;

    &:hover{
        background-color : black;
        color : white;
        font-size : xxxx-large;
    }
`
export const RightButton = styled.div`
    text-align : center;
    position : absolute;
    width : 50px;
    height : 50px;
    right : 0px;
    top : 50%;
    background-color : white;
    opacity: 0.5;
    font-size : xxx-large;
    font-weight: bold;
    border-radius : 10%;

    cursor:pointer;

    border-color: black;
    border-width: thin;
    border-style: solid;
    z-index:1;
    &:hover{
        background-color : black;
        color : white;
        font-size : xxxx-large;
    }
`