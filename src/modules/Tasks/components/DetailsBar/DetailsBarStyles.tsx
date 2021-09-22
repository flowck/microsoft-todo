import styled from "styled-components";

export const Container = styled.aside`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 28px 14px;
  flex-direction: column;
  background-color: #323232;
`;

export const DetailsContent = styled.div`
  flex-grow: 1;
`;

export const DetailsFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;

  span {
    font-size: 12px;
    color: #929292;
  }

  button {
    border: none;
    cursor: pointer;
    background-color: transparent;

    img {
      width: 14px;
      height: 14px;
    }
  }
`;
