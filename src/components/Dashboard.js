import React from "react";
import styled from "styled-components";
import Rankings from "./Rankings";
import Tips from "./Tips";

const DashboardWrapper = styled.div`
    flex: 0.8;
    background-color: rgb(250, 250, 254);
`;

const HeaderBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const SearchBar = styled.input`
    flex: 0.5;
    outline: none;
    border: 2px solid #00704a;
    border-radius: 5px;
    height: 2.5em;
    margin: 1.5em;
`;

const NavLinks = styled.div`
    flex: 0.5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 2em;
    padding-right: 2em;
`;

const NavLink = styled.a`
    cursor: pointer;
    font-size: 0.8em;
    font-weight: 500;
    padding-bottom: 0.5em;

    &:hover {
        border-bottom: 2px solid #00704a;
    }
`;

function Dashboard() {
    return (
        <DashboardWrapper>
            <HeaderBar>
                <SearchBar type="text" placeholder="Search coffee"></SearchBar>

                <NavLinks>
                    <NavLink>App</NavLink>
                    <NavLink>Blog</NavLink>
                    <NavLink>Contacts</NavLink>
                </NavLinks>
            </HeaderBar>

            <Tips />
            <Rankings />
        </DashboardWrapper>
    );
}

export default Dashboard;
