import { MDBIcon } from "mdbreact";
import { useRouter } from "next/router";
import React, { FunctionComponent, useContext, useState } from "react";
import { useNotification } from "../../ultility/NotiContext";
import styles from "./ClientOption.module.css"
import { NumOfNewNoti } from "./styled";

const ClientOption: FunctionComponent<{
        showNotification: ()=>void
    }> = ({showNotification}) =>{
    const {numOfNewNoti , hadNewNoti} = useNotification();

   
    const router = useRouter();
    const changePageOptionClickedHandler = (event: React.MouseEvent<HTMLDivElement>, location : string = "")=>{
        //event.preventDefault();
        router.push({
            pathname: location,
          }, 
          undefined, 
          { shallow: true }
        );
    }

   
    return(
        <div className={styles.container}>
            <div className = {styles.segment} >
                <MDBIcon icon="user" className="text-black" size="2x" style={{paddingLeft:"13px", paddingRight:"8.14px"}}/> 
                <div onClick={(e)=>{changePageOptionClickedHandler(e, "sign_up")}}>Sign Up</div> 
            </div>
            <div className = {styles.segment} >
                <MDBIcon icon="edit" className="text-black" size="2x" style={{paddingLeft:"8px", paddingRight:"4px"}}/> 
                <div onClick={(e)=>{changePageOptionClickedHandler(e, "log_in")}}>Log In</div>  
            </div>
            <div className = {styles.segment} >
                {hadNewNoti &&  <NumOfNewNoti> {numOfNewNoti}  </NumOfNewNoti>}
                <MDBIcon icon="bell" className="text-black" size="2x" style={{paddingLeft:"8px", paddingRight:"4px", position:"relative"}}/> 
                <div onClick={showNotification}>Notification</div> 
                {/*if clicked then appear the notification bar */}
            </div>
            <div className = {styles.segment} >
                <MDBIcon icon="question" className="text-black" size="2x"style={{paddingLeft:"13px", paddingRight:"13.7px"}}/> 
                <div> 
                     {/* onClick={(e)=>{changePageOptionClickedHandler(e, "help")}}  */}
                       <a href="#help"> Help </a> 
                </div> 
            </div>
        </div>
    )
}

export default ClientOption ;