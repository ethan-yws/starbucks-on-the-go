import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    flex: 0.2;
    display: flex;
    background-color: rgb(245, 243, 251);
    align-items: center;
    justify-content: space-between;
    /* border-top-left-radius: 10px;
    border-top-right-radius: 10px; */
`;

const Weekday = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 1em;
    align-items: center;
    font-size: 0.8em;
    font-weight: bold;
    border-radius: 1em;
    background-color: ${(props) => (props.selectd ? "#00704a" : "none")};
    color: ${(props) => (props.selectd ? "white" : "none")};
    box-shadow: ${(props) => (props.selectd ? "#00704a 0px 2px 10px" : "none")};
`;

function WeekdaysBar() {
    return (
        <Wrapper>
            <Weekday>
                <span>Mo</span>
                <span>2</span>
            </Weekday>
            <Weekday>
                <span>Tu</span>
                <span>3</span>
            </Weekday>
            <Weekday selectd>
                <span>We</span>
                <span>4</span>
            </Weekday>
            <Weekday>
                <span>Th</span>
                <span>5</span>
            </Weekday>
            <Weekday>
                <span>Fr</span>
                <span>6</span>
            </Weekday>
            <Weekday>
                <span>Sa</span>
                <span>7</span>
            </Weekday>
            <Weekday>
                <span>Su</span>
                <span>8</span>
            </Weekday>
        </Wrapper>
    );
}

export default WeekdaysBar;
