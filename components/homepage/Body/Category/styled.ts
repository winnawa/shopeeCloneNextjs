import styled from "styled-components";

interface ImgProps{
    imgURL : String;
}
interface SingleCategoryProps{
    appear : Boolean;
    disappear? : Boolean;
}

export const CategoryContainer = styled.div`
    display : grid;
    width : 94%;
    position: relative;
    top:20px;
    margin-bottom : 1.3rem;
    grid-template-columns: repeat(10,1fr);
    background-color:white;
    @media (max-width : 950px){
        overflow :  hidden;
    }
`
export const CategoryHeader = styled.div`
    grid-column : 1/11;
    padding: 20px 0 20px;
    padding-left : 5px;
    font-size: x-large;
    border-color: beige;
    font-weight : bold;
    @media (max-width : 1200px){
        font-size : 22px;
    }
`

export const SingleCategory = styled.div<SingleCategoryProps>`
    grid-colum : 1fr;
    height: 120px;
    border : solid;
    border-color: beige;
    display: flex;
    flex-direction: column;
    align-items : center;
   
    opacity: 0;
    transition: opacity 1s ease, transform 1s ease;
    
    ${(props)=>( props.appear && 
        `opacity:1;`
    )}

    &:hover{
        cursor:pointer;
        border-width: 5px;
        border-color:black;
        transform : translateY(-10px);
    }

`
export const ImgContainer = styled.div<ImgProps>`
    margin-top:5px;
    width:80px;
    height:80px;
    border-radius:50%;
    background-image: ${(props)=>(`url(${props.imgURL});`)}
    background-repeat: no-repeat;
    background-size: cover;
    border-style: solid;
    border-color : black;
    border-width : thin;
`

export const TextContainer = styled.div`
    text-align: center;
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