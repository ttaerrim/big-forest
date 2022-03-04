import tree from "assets/tree.svg";
import { useCallback } from "react";
import { useState } from "react";
import { Fragment } from "react";
import styled, { css, keyframes } from "styled-components";

const Tree = () => {
  const renderTree = () => {
    const TREE_NUMBER = 5;
    const trees = [];
    for (let i = 0; i < TREE_NUMBER; i++) {
      trees.push(<Img key={i} src={tree} />);
    }
    return trees;
  };

  const [isGathered, setIsGathered] = useState<boolean>(true);
  console.log(isGathered);
  const clickTree = useCallback(() => {
    setIsGathered((isGathered) => !isGathered);
  }, [isGathered]);

  return (
    <Fragment>
      <TreeDiv onClick={clickTree} isGathered={isGathered}>
        {renderTree()}
      </TreeDiv>
    </Fragment>
  );
};

const spread = keyframes`
    0% {
        margin-left: -3vw;
        margin-right: -3vw;
    }
    100% {
        margin-left: 0vw;
        margin-right: 0vw;
    }
`;

const gather = keyframes`
    0% {
        margin-left: 0vw;
        margin-right: 0vw;
    }
    100% {
        margin-left: -3vw;
        margin-right: -3vw;
    }
`;

const smallerTree = keyframes`
    0%{
        width: 15vw;
    }
    100% {
        width: 10vw;
    }
`;

const biggerTree = keyframes`
    0%{
        width: 10vw;
    }
    100% {
        width: 15vw;
    }
`;

const Img = styled.img`
  width: 100;
  position: relative;
`;
const TreeDiv = styled.div<{ isGathered: boolean }>`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  background-color: #05301886;

  padding: 3rem;

  & Img {
    width: 10vw;
    ${({ isGathered }) => {
      if (isGathered) {
        return css`
          animation: ${gather} 2s;
          margin-left: -3vw;
          margin-right: -3vw;
        `;
      } else {
        return css`
          animation: ${spread} 2s;
          margin-left: 0vw;
          margin-right: 0vw;
        `;
      }
    }}
  }

  & Img:nth-child(2),
  & Img:nth-last-child(2) {
    width: 13vw;
  }

  & Img:nth-child(3) {
    width: 15vw;
    /* ${({ isGathered }) => {
      if (!isGathered) {
        return css`
          animation: ${smallerTree} 2s;
          width: 10vw;
        `;
      } else {
        return css`
          animation: ${biggerTree} 2s;
          width: 15vw;
        `;
      }
    }} */
  }
`;

export default Tree;
