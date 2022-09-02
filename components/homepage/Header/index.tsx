import React from "react";
import SymbolIcon from "./SymbolIcon";
import SearchBar from "./SearchBar";
import ClientOption from "./ClientOption";
import { HeaderContainer, NotificationBackground, NotificationBarContainer } from "./styled";
import { useState } from "react";
import NotificationBar from "./NotificationBar";
import { useNotification } from "../../ultility/NotiContext";

const Header = ()=>{

    const { updateHadNewNoti, updateNumOfNewNoti} = useNotification();

    const [showNoti,updateShowNoti] = useState<string>("opacity:0;");
    const showNotificationHandler = ()=>{
        updateShowNoti("opacity:1;");
        //console.log("noti clicked")
        updateHadNewNoti(false);
        updateNumOfNewNoti(0);
    }
    const hideNotificationHandler = (e : React.MouseEvent<HTMLDivElement>)=>{
        if (e.target === e.currentTarget){
            updateShowNoti("opacity:0;");
        }
    }

    
    return (
        <HeaderContainer>
             <SymbolIcon/>
             <SearchBar/>
             <ClientOption showNotification = {()=>{showNotificationHandler()}}/> 
             {/* we do this to make the NOTIFICATION appear right at the middle of the page */}
             {showNoti !== "opacity:0;" && <NotificationBackground onClick={(e)=>{hideNotificationHandler(e)}}>
            <NotificationBarContainer>
                <NotificationBar/>
            </NotificationBarContainer>
            </NotificationBackground>}
        </HeaderContainer>
    )
}

export default Header;