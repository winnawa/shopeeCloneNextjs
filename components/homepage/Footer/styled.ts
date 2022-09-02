import styled from "styled-components";

export const FooterContainer = styled.div`
    margin : 50px 50px 0px 50px;
    font-family :Helvetica Neue;
    
`

export const MoreAboutProject= styled.div`
    padding-bottom :  20px;
    border-bottom :  solid DarkSlateGrey;
`
export const BigTitle = styled.div`
    font-weight : bold;
    padding-bottom : 20px;
    font-size: x-large;
`
export const ContentTitle = styled.div`
    padding-bottom : 8px;
    font-weight : bold;
`
export const TextAreaForInspiration = styled.div`
    padding-bottom : 15px;
`
export const TextAreaForExtraInfo = styled.div`
    padding-bottom : 15px;
`

export const ReadMore = styled.div`
    text-decoration: underline;
    text-decoration-color : #FFC0C7;
    color : DarkSalmon;
    cursor : pointer;
    
`

export const CategorySection = styled.div`
    padding-top : 50px;
`

export const CategoryHeader = styled.div`
    font-weight : bold;
    padding-bottom : 5px;
`

export const CategoryColumnsSection = styled.div`
    display: flex;
`
export const SingleCategoryColumn = styled.div`
    width : 20%;

`
export const SingleCategoryContainer = styled.div`
    margin : 5px 0px 10px 0px;
    font-size : 0.9rem;
`

export const SingleCategorySpanContainer = styled.div`

`
export  const SingleSpanInCategory = styled.span`
    cursor : pointer;
    &:hover{
        color : red;
    }
`