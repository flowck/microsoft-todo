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

export const DetailsItems = styled.ul`
  list-style: none;

  li {
    display: flex;
    font-size: 14px;
    color: #959595;
    align-items: center;
  }

  // Apply to first level li only
  & > li {
    padding: 14px 0;
    border-bottom: 1px solid #3d3d40;
  }
`;

export const DetailsIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 10px;
`;

export const DetailsFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;

  span {
    font-size: 11px;
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

export const AddNoteForm = styled.form`
  textarea {
    width: 100%;
    height: 90px;
    border: none;
    resize: none;
    font-size: 14px;
    color: #959595;
    font-family: var(--font-body);
    background-color: transparent;

    &:focus,
    &:active {
      outline: none;
    }
  }
`;

export const StepsContainer = styled.div`
  width: 100%;
`;

export const AddStepForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;

  input {
    border: none;
    color: #778bdd;
    background-color: transparent;

    &:focus,
    &:active {
      outline: none;
    }
  }
`;
