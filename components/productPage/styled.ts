import styled from "styled-components";

interface ProductProps{
    imgURL :  string;
}

export const SingleProductContainer = styled.div`
    display  : flex;
    font-family : Helvetica Neue;
`

export const ImgContainer = styled.div<ProductProps>`
    background-image : ${(props)=>(`url(${props.imgURL});`)}
    background-size : cover;
    background-repeat : no-repeat;
    width : 700px;
    height : 700px; 
    margin-left : 20px;
    margin-right : 20px;
`

export const InfoContainer = styled.div`
    width : 45%;
    padding-right : 20px;
`
export const ProductNameContainer = styled.div`
    font-size : 25px;
    width : 100%;
    text-align: center;
    padding-bottom :  20px;
`
export const DescriptionContainer = styled.div`
    text-align: justify;
    font-size : 20px;
`