import styled from "styled-components";

interface LogInProps{
    imgURL? : string,
    appear? : boolean
}

export const ImgContainer = styled.div<LogInProps>`
    background-image :  ${(props)=>(`url(${props.imgURL});`)}
    background-size : cover;
    background-repeat : no-repeat;
    width : 100%;
    height : 1000px;
    position : relative;
    display : flex;
    justify-content :  center;
`

export const FlexContainer = styled.div`
    display : flex;
    width : 100%;
    justify-content : center;
    align-items : center;
`

export const Button = styled.button`
    width :  80px;
    height :  80px;
    border-radius : 10%;
    font-family : Helvetica Neue;
    font-weight : bold;
    font-size : large;
    background-color  : white;
    border : black solid;
    &:hover{
        background-color  : DarkSalmon;    
        
    }
`


export const TextCenterBox = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items  :  center;
    position : absolute;
    top : 400px;
`
export const TextBackGroundAndSizeColorBox = styled.div`
    width : 850px;
    height : 120px;
    display : flex;
    justify-content : center;
    align-items  :  center;
    flex-direction : column;
    border-radius  : 20%;
`
export const TextContainer = styled.div<LogInProps>`
    text-align  : justify;
    font-size : xxx-large;
    font-weight :  bold;
    font-family : Helvetica Neue;
  
   
`

//opacity : 0;
//transition : opacity 5s linear;
//${(props)=>(props.appear ? "opacity :1;" : "opacity:0")}
//${(props)=>(props.appear && "opacity :1;" )}

