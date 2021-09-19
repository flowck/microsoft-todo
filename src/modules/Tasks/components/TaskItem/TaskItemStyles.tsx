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

export const Container = styled.article`
  color: #fff;
  display: flex;
  padding: 14px;
  font-size: 14px;
  border-radius: 5px;
  align-items: center;
  margin-bottom: 1px;
  background-color: #323232;

  span {
    flex-grow: 1;
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
