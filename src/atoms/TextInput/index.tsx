import * as React from "react";
import { styled } from "theme";

const Input = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  &:last-of-type {
    margin-bottom: 0;
  }

  label {
    position: absolute;
    top: -0.625rem;
    left: 1rem;
    background-color: ${({ theme }): string => theme.background};
    padding: 0 0.25rem;
  }

  input {
    width: 100%;
    background-color: ${({ theme }): string => theme.background};
    color: ${({ theme }): string => theme.body};
    padding: 0.5rem;
    font-size: 1.5rem;
    border: 2px solid ${({ theme }): string => theme.primary};
  }
`;

const TextInput: React.FC<React.HTMLProps<HTMLInputElement>> = (props) => {
  return (
    <Input>
      <input {...props} />
    </Input>
  );
};

export default TextInput;
