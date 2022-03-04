import tree from "assets/tree.svg";
import { Fragment } from "react";
import styled from "styled-components";

const Tree = () => {
  const renderTree = () => {
    const TREE_NUMBER = 5;
    const trees = [];
    for (let i = 0; i < TREE_NUMBER; i++) {
      trees.push(<Img src={tree} />);
    }
    return trees;
  };
  return (
    <Fragment>
      <TreeDiv>{renderTree()}</TreeDiv>
    </Fragment>
  );
};
const Img = styled.img`
  width: 100;
  position: relative;
`;
const TreeDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  background-color: #05301886;

  padding: 3rem;

  & Img {
    width: 10vw;
    margin-left: -3vw;
    margin-right: -3vw;
  }

  & Img:nth-child(2),
  & Img:nth-last-child(2) {
    width: 13vw;
  }

  & Img:nth-child(3) {
    width: 15vw;
  }
`;

export default Tree;
