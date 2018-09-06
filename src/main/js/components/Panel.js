import React from "react";
import styled from "styled-components";

const StyledPanel = styled.div`
    background-color: green;
    width: 100%;
    height: 250px;
    font-size: 24px;
    margin-top: 15px;
    border-radius: 5px;
`;

const Panel = ({jobResult}) => (
    <StyledPanel>{jobResult.jobName + " " + jobResult.status}</StyledPanel>
);

export default Panel;