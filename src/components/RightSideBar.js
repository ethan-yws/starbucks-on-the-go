import React from "react";
import styled from "styled-components";
import Rec from "./Rec";

const RightSideBarWrapper = styled.div`
    flex: 0.3;

    display: flex;
    flex-direction: column;
`;

function RightSideBar() {
    return (
        <RightSideBarWrapper>
            <Rec />
        </RightSideBarWrapper>
    );
}

export default RightSideBar;
