import React from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import RefreshIcon from "@material-ui/icons/Refresh";

const NavBarMobileWrapper = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: sticky;
        bottom: 0;
    }
`;

const NavLinksWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 0.5em;

    * {
        color: #00704a;
    }
`;

function NavBarMobile() {
    return (
        <NavBarMobileWrapper>
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
                <IconButton>
                    <ExitToAppIcon />
                </IconButton>
            </NavLinksWrapper>
        </NavBarMobileWrapper>
    );
}

export default NavBarMobile;
