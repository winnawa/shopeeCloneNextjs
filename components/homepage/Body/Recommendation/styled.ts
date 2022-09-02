import styled from "styled-components";

interface SingleItemProps{
    imgURL? : String;
    onAdditionalSale? : Boolean;
}


export const RecommendationContainer = styled.div`
    display : grid;
    width : 94%;
    position: relative;
    top:20px;
    margin-bottom:20px;
    grid-template-columns: repeat(6,1fr);
    background-color:white;
    grid-gap : 10px;
`

export const RecommendationHeaderPosition = styled.div`
    grid-column : 1/7;
    height : 65px;
    position : sticky;
    top : 130px;
    z-index : 10;
    display : flex;
    justify-content : center;
    align-items :center;
    background-color : white;
    border-bottom : solid AntiqueWhite;
`

export const RecommendationHeader = styled.div`
    width : 100%;
    
    text-align : center;
    background-color : white;
    color :  black;
    font-weight : bold;
    font-size : 20px;
`

export const ImgOfSingleItem = styled.div<SingleItemProps>`
    width : 100%;
    height : 60%;
    background-image : ${(props)=>(`url(${props.imgURL});`)}
    background-size : cover;
    background-repeat : no-repeat;   
    margin-bottom : 5px;
`
export const NameOfSingleItem = styled.div`
    margin-bottom : 5px;
    height: 36px;
    overflow  : hidden;
`

export const AdditionalSale = styled.div<SingleItemProps>`
    ${(props)=>(props.onAdditionalSale && 'background-color : orange;')}
    height : 20px;
    width : 20%;
    margin-bottom :  5px;
`

export const PriceOfSingleItem = styled.span`
    height :28px;
    font-size : x-large;
    color : red;
`
export const PositionOfSoldAmount = styled.span`
    height :28px;    
    position : absolute;
    right :  5px;
`
export const SoldAmountOfSingleItem = styled.span`
    position : relative;
    top : 5px;
    
`

export const MoreButtonPosition = styled.div`
    grid-column : 1/7;
    height : 50px;
    display : flex;
    justify-content : center;
    align-items :center;
    background-color :  White;
    border-top :  solid AntiqueWhite;
`

export const  MoreButton = styled.div`
    text-align : center;
    width : 100px;
    border : solid DimGrey;
    color :  black;
    font-size : 20px;   
    &:hover{
        background-color  : darkGrey;
    }
`
export const RelatedProductsTagContainer = styled.div`
    width : 100%;
    height : 34px;
    display : flex;
    justify-content : center;
    align-items : center;
    background-color : antiqueWhite;
    opacity : 0;
    border-color : antiqueWhite;
    position : absolute;
    left :0px;
`

export const RelatedProductsTag = styled.div`
    
    background-color :  AntiqueWhite;
    text-align : center;

`

export const ContainerInside = styled.div`
    width : 100%;
    height : 100%;
    background : white;
`

export const SingleRecommendContainer = styled.div`
    height : 280px;
    position : relative;
    
    padding-left: 5px;
    padding-right: 5px;

    &:hover{
        background-color  : antiqueWhite;
        1border-style : solid;
        1border-color : AntiqueWhite ;
    }

    &:hover ${RelatedProductsTagContainer}{
        opacity : 1;
        z-index : 10;
    }
    &:hover ${RelatedProductsTag}{
        opacity: 1;
        z-index : 10;
    }
`
