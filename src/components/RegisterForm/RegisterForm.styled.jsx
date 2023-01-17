import styled from 'styled-components';

export const Form = styled.form`
  width: 320px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  display: block;
  height: 25px;

  margin-top: 5px;
  margin-bottom: 20px;
  &:focus {
    outline: none;
    border: 2px solid #468949;
  }
`;

export const Button = styled.button`
  height: 35px;
  width: 80px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: orange;
    color: blue;
  }
`;
