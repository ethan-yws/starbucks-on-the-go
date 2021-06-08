import React from "react";
import styled from "styled-components";
import StarbucksIcon from "../assets/starbucks-icon.png";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import IconButton from "@material-ui/core/IconButton";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import RefreshIcon from "@material-ui/icons/Refresh";

const SideBarWrapper = styled.div`
    flex: 0.1;
    height: 100vh;
    /* max-width: 60px; */

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const Icon = styled.img`
    height: 40px;
    object-fit: contain;
    padding: 20px 10px 0 10px;
`;

const NavLinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2em;
    * {
        color: #00704a;
    }
`;

const LogoutWrapper = styled.div`
    margin-bottom: 2em;
    * {
        color: #00704a;
    }
`;

function SideBar() {
    return (
        <SideBarWrapper>
            <Icon src={StarbucksIcon} alt="starbucks icon" />
            <NavLinksWrapper>
                <IconButton>
                    <MailOutlineIcon />
                </IconButton>
                <IconButton>
                    <CalendarTodayIcon fontSize="small" />
                </IconButton>
                <IconButton>
                    <FavoriteBorderIcon />
                </IconButton>
                <IconButton>
                    <RefreshIcon />
                </IconButton>
            </NavLinksWrapper>

            <LogoutWrapper>
                <IconButton>
                    <ExitToAppIcon />
                </IconButton>
            </LogoutWrapper>
        </SideBarWrapper>
    );
}

export default SideBar;
