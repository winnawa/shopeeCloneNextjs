import styled from "styled-components"

interface SlideProps{
    imgURL : String,

}

interface CircleProps{
    active: Boolean
}
export const Container=styled.div<SlideProps>`
    background-image : ${ (props) =>(  `url(${props.imgURL})`   )};
    background-size : cover;
    background-repeat: no-repeat;
    width: 692px;
    margin-right:8px;
    height: 500px;
    position: relative;

`;

export const CircleInTheSlide = styled.div<CircleProps>`
    
    position: relative;
    cursor  : pointer;
    width : 20px;
    height : 20px;
    border-radius: 50% ;
    background-color: white;
    margin : 0px 10px 0px 10px;
    ${   (props) =>( !props.active && "opacity:0.6;") }

`
