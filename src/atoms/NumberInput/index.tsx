import * as React from "react";
import { styled } from "theme";

const Container = styled.select`
  border: none;
  background: transparent;
  color: ${({ theme }): string => theme.body};
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -webkit-appearance: none;

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

const NumberInput: React.FC<
  React.HTMLProps<HTMLSelectElement> & {
    range?: [number, number];
    display?: (n: number) => string;
  }
> = ({ range = [1, 10], display = String, ...props }) => {
  const [start, stop] = range;
  return (
    <Container type="number" {...props}>
      {Array(stop - start + 1)
        .fill(null)
        .map((_, i) => (
          <option value={i + start} key={i + start}>
            {display(i + start)}
          </option>
        ))}
    </Container>
  );
};

export default NumberInput;
