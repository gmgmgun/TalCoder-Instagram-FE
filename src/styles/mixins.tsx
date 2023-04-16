import { css, FlattenSimpleInterpolation } from 'styled-components';

export const centeredMixin: FlattenSimpleInterpolation = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
