import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <StyledDiv>
      <img
        src="https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/phut_0.jpg?itok=h30EAnkk"
        alt="pizza"
        width="1000"
        height="600"
      ></img>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: Red;
    max width: 1000px;`;
