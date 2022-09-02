import React, { useEffect } from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import 'font-awesome/css/font-awesome.min.css';
import { useState } from "react";
import { SearchBarTopicsContainer, SingleTopicContainer } from "./styled";
import { gql,useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const GET_TOPICS = gql`
  query{
    getTopics{
      content
    }
  }
`

interface topicType{
  content : string
}

const SearchBar = () => {
  let topicsArray: topicType[] = [];
  let topicsArrayDisplayed;
  const [showTopics,updateShowTopics] = useState(false);
  const [searchedTopic,updateSearchedTopic] = useState("");
  const [mouseOnRecommendation,updateMouseOnTheRecommendation] = useState(false);
  const router = useRouter();

  const  {loading,error,data} = useQuery(GET_TOPICS)   
  if (error) {console.log(`Error : ${error}`)}
  if (!loading){
    //console.log(data)
    topicsArray = data.getTopics;

    const topicsMatchedArray = topicsArray.filter((element)=>{
      //searchedTopic
      let elementCurrentPos = element.content.length-1;
      let searchedTopicCurrentPos = searchedTopic.length-1;
      while ((elementCurrentPos>=0)&&(searchedTopicCurrentPos>=0)){
        if (element.content[elementCurrentPos] === searchedTopic[searchedTopicCurrentPos]){
          elementCurrentPos--;
          searchedTopicCurrentPos--;
        }
        else elementCurrentPos--;
      }
      if (searchedTopicCurrentPos <0) return true;
      return false;
    })

    topicsArrayDisplayed = topicsMatchedArray.map((element)=>{
      return (
        <SingleTopicContainer onMouseEnter={()=>{updateMouseOnTheRecommendation(true)}} onClick={()=>{updateSearchedTopic(element.content); updateShowTopics(false);  updateMouseOnTheRecommendation(false);}}>
          {element.content}
        </SingleTopicContainer>
      )
    })
  }

  
  const searchedTopicChangedHandler = (event : React.ChangeEvent<HTMLInputElement>) :void=>{
    updateSearchedTopic(event.target.value);
    updateShowTopics(true);
  }
  const showRecommendation =  ()=>{
    if (searchedTopic !==  ""){
      updateShowTopics(true);
      
    }
  }
  const hideRecommendation = ()=>{
    if (mouseOnRecommendation === false) {updateShowTopics(false);}
  }



  const changeToTheSearchedTopicPage = (event: React.SyntheticEvent<HTMLButtonElement>, location : string = "")=>{
    event.preventDefault();
    router.push({
        pathname: `topic/${location}/`,
      }, 
      undefined, 
      { shallow: true }
    );
}


  return (

    <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"55%"}}>
        <MDBCol md="10" style={{width:"90%", height:"50px"}}>
            <form className="form-inline mt-4 mb-4" style={{width:"100%", height:"50px" ,display:"flex", position:"relative"}}>
                <MDBIcon onClick={(e)=>{changeToTheSearchedTopicPage(e,searchedTopic)}} icon="search" className="text-black" size="2x" style={{display:"flex",justifyContent:"center",alignItems:"center", marginRight:"5px", cursor:"pointer"}}/>
                <input value={searchedTopic} onChange={searchedTopicChangedHandler} onFocus={showRecommendation} onBlur={hideRecommendation}  style={{width:"600px", height:"50px", fontSize:"x-large"}} className="form-control form-control-lg " type="text" placeholder="Search" aria-label="Search" />
                {showTopics && <SearchBarTopicsContainer>
                      {topicsArrayDisplayed}
                </SearchBarTopicsContainer>}
            </form>
        </MDBCol>
    </div>

  );
}

export default SearchBar;