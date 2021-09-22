import styled from "styled-components";

const Button = styled.button`
  width: 16px;
  height: 16px;
  border: none;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const Container = styled.article.attrs((props: { isComplete?: boolean }) => props)`
  color: #fff;
  display: flex;
  padding: 14px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
  margin-bottom: 1px;
  align-items: center;
  background-color: #323232;

  span {
    flex-grow: 1;
    color: ${(props) => (props.isComplete ? "#9b9b9b" : "#fff")};
    text-decoration: ${(props) => (props.isComplete ? "line-through" : "none")};
  }
`;

export const StatusButton = styled(Button)`
  border-radius: 50%;
  margin-right: 14px;
  border: 2px solid #8e8e8e;

  &.status-button--complete {
    border-color: #778bdd;
    background-color: #778bdd;
  }

  img {
    width: 8px;
  }
`;
export const FavoriteButton = styled(Button)`
  img {
    width: 16px;
  }
`;
