import React from "react";
import styled from "styled-components";
import MatchaFrappuccino from "../assets/matcha-frappuccino.png";

const RecWrapper = styled.div`
    flex: 0.8;
    background-color: rgb(246, 234, 212);
    display: flex;
    justify-content: center;
    /* align-items: center; */
`;

const BestOffer = styled.div`
    display: flex;
    position: relative;
    background-color: white;
    width: 24vw;
    height: 15vh;
    min-height: 6em;
    margin-top: 3em;
    border-radius: 10px;

    & img {
        height: 7em;
        object-fit: contain;
        position: absolute;
        top: -2.2em;
        -webkit-filter: drop-shadow(5px 5px 5px gray);
        filter: drop-shadow(5px 5px 5px gray);
        transition: all 0.3s ease-in-out;

        &:hover {
            transform: rotateZ(15deg);
        }
    }

    & span {
        position: absolute;
        top: 1.5em;
        right: 1.5em;
        font-weight: bold;
    }
`;

function Rec() {
    return (
        <RecWrapper>
            <BestOffer>
                <img src={MatchaFrappuccino} alt="Matcha Frappuccino" />
                <span>Best Offer</span>
            </BestOffer>
        </RecWrapper>
    );
}

export default Rec;
