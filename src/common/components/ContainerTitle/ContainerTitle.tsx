import styled from "styled-components";
import { TaskTypeProp } from "@/common/typing";
import { getMainColor } from "@/modules/Tasks/utils/colors";

export const ContainerTitle = styled.h1.attrs((props: TaskTypeProp) => props)`
  font-size: 24px;
  margin-bottom: 14px;
  font-family: var(--font-bold);
  color: ${({ tasksType }) => getMainColor(tasksType)};
`;
