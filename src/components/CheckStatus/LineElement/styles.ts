import styled, { css } from 'styled-components/native';

interface LineProps {
  isWhite: boolean;
}

export const Line = styled.View<LineProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 2%;
  width: 30px;

  background: #0f2d49;
  ${(props) =>
    !props.isWhite &&
    css`
      background: #efefef;
    `}
`;
