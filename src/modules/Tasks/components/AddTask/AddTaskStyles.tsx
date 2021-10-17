import styled from "styled-components";
import { TaskTypeProp } from "@/common/typing";
import { getMainColor } from "../../utils/colors";

export const Container = styled.form.attrs((props: TaskTypeProp) => props)`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;

  svg {
    left: 14px;
    width: 16px;
    height: 16px;
    position: absolute;
  }

  input {
    width: 100%;
    height: 44px;
    border: none;
    padding-left: 42px;
    border-radius: 5px;
    background-color: #262626;
    color: ${({ tasksType }) => getMainColor(tasksType)};
  }
`;
