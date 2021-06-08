import styled from "styled-components";
import AppPage from "./components/AppPage";
import RightSideBar from "./components/RightSideBar";
import SideBar from "./components/SideBar";

const AppWrapper = styled.div`
    display: flex;
`;

function App() {
    return (
        <AppWrapper>
            <SideBar />
            <AppPage />
            <RightSideBar />
        </AppWrapper>
    );
}

export default App;
