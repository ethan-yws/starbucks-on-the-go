import React from "react";
import styled from "styled-components";

const TipsWrapper = styled.div``;

const StyledQuote = styled.p`
    font-size: 1.2em;
    font-weight: 600;
    padding-left: 1em;

    & span {
        color: #00704a;
    }
`;

const TipCards = styled.div`
    display: flex;
    padding-left: 1em;
    gap: 1em;
`;

const TipCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props) =>
        props.highlighted ? "#00704a" : "rgb(245, 243, 251)"};
    color: ${(props) => (props.highlighted ? "white" : "none")};
    border-radius: 10px;
    width: 175px;
    height: 100px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 1em;
    transition: all 0.3s ease-in-out;

    & span {
        font-weight: 600;
        font-size: 0.8em;
    }

    & p {
        font-size: 0.7em;
        text-align: justify;
    }

    &:hover {
        transform: scale(1.1);
    }
`;

function Tips() {
    return (
        <TipsWrapper>
            <StyledQuote>
                <span>Good coffee</span> is the key to
                <br />
                your good mood
            </StyledQuote>

            {/* Tip Cards */}
            <TipCards>
                <TipCard>
                    <span>We taste - again and again and again</span>
                    <p>
                        We taste more than 1000 cups of coffee a day to verify
                        the superior taste that all of us (including you) have
                        come to expect
                    </p>
                </TipCard>
                <TipCard highlighted>
                    <span>Bringing you a perfect cup pf coffee</span>
                    <p>
                        Its's what got us started in 1971, and it's what keeps
                        us going today. (That, plus the coffee.)
                    </p>
                </TipCard>
                {/* <TipCard>
                    <span>We Care About You</span>
                    <p>
                        We are committed to bring customers the best experience.
                    </p>
                </TipCard> */}
            </TipCards>
        </TipsWrapper>
    );
}

export default Tips;
