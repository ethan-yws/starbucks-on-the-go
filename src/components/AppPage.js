import React from "react";
import styled from "styled-components";
import Dashboard from "./Dashboard";
import WeekdaysBar from "./WeekdaysBar";

const AppPageWrapper = styled.div`
    flex: 0.6;

    display: flex;
    flex-direction: column;
`;

function AppPage() {
    return (
        <AppPageWrapper>
            <Dashboard />
            <WeekdaysBar />
        </AppPageWrapper>
    );
}

export default AppPage;
