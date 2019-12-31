import * as React from "react";
import { styled } from "theme";

const Container = styled.button`
  background-color: ${({ theme }): string => theme.primary};
  color: ${({ theme }): string => theme.primaryAlt};
  border: none;
  padding: 0.5rem 1rem;
  font-family: inherit;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 414px;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover,
  &:focus {
    filter: brightness(0.75);
  }

  &:disabled {
    opacity: 0.5;
    filter: brightness(1);
    cursor: default;
  }
`;

const Button: React.FC<React.HTMLProps<HTMLButtonElement>> = ({
  type: _,
  ...props
}) => {
  return <Container {...props} />;
};

export default Button;
