import styled from "styled-components";

export const Container = styled.ul`
  width: 100%;
  display: flex;
  margin-bottom: 5px;
  flex-direction: column;

  span {
    flex-grow: 1;
  }

  li {
    width: 100%;
    padding: 5px 0;
    border-bottom: none;
  }
`;

export const BaseButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

export const RemoveButton = styled(BaseButton)`
  img {
    width: 7px;
    height: 7px;
  }
`;
