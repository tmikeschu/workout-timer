import * as React from "react";
import { styled } from "theme";

const Container = styled.input`
  border: none;
  background: transparent;
  color: ${({ theme }): string => theme.body};
  font-size: 4rem;
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

const NumberInput: React.FC<React.HTMLProps<HTMLInputElement>> = props => {
  return <Container type="number" {...props} />;
};

export default NumberInput;
