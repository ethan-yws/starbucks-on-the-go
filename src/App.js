import styled from "styled-components";
import AppPage from "./components/AppPage";
import NavBarMobile from "./components/NavBarMobile";
import RightSideBar from "./components/RightSideBar";
import SideBar from "./components/SideBar";

const AppWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

function App() {
    return (
        <AppWrapper>
            <SideBar />
            <AppPage />
            <RightSideBar />
            <NavBarMobile />
        </AppWrapper>
    );
}

export default App;
