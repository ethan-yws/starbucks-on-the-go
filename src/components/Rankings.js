import React from "react";
import styled from "styled-components";
import IcedMocha from "../assets/iced-mocha.png";

const RankingsWrapper = styled.div`
    display: flex;
    padding-left: 1.5em;
    padding-top: 2em;
`;

const PerfectCoffeesWrapper = styled.div`
    flex: 0.5;
    & span {
        font-size: 0.9em;
        font-weight: 600;
    }
`;

const TopToppingsWrapper = styled.div`
    flex: 0.5;
    display: flex;
    flex-direction: column;
    gap: 1.4em;

    & span {
        font-size: 0.9em;
        font-weight: 600;
    }
`;

const CoffeeItemWrapper = styled.div`
    display: flex;

    & img {
        height: 4em;
        width: 4em;
        object-fit: contain;
        margin-left: -1.2em;
    }

    & span {
        font-size: 1em;
        font-weight: 700;
        color: #00704a;
    }

    & p {
        font-size: 0.6em;
        width: 140px;
        /* text-align: justify; */
    }
`;

const ProgressBar = styled.div`
    font-size: 0.8em;
`;

function Rankings() {
    return (
        <RankingsWrapper>
            <PerfectCoffeesWrapper>
                <span>Perfect Coffees</span>
                <CoffeeItemWrapper>
                    <img src={IcedMocha} alt="iced mocha" />
                    <p>
                        <span>Iced Mocha</span>
                        <br />
                        Bittersweet mocha sauce, milk and ice.
                    </p>
                </CoffeeItemWrapper>
                <CoffeeItemWrapper>
                    <img src={IcedMocha} alt="iced mocha" />
                    <p>
                        <span>Iced Latte</span>
                        <br />
                        Espresso, milk with rich cream, delivery a fantastic
                        taste to you.
                    </p>
                </CoffeeItemWrapper>
            </PerfectCoffeesWrapper>

            <TopToppingsWrapper>
                <span>Top Toppings</span>
                <ProgressBar>Vanilla 64%</ProgressBar>
                <ProgressBar>Cinnamon 72%</ProgressBar>
                <ProgressBar>Chocolate 24%</ProgressBar>
            </TopToppingsWrapper>
        </RankingsWrapper>
    );
}

export default Rankings;
