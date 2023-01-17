import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserName = styled.p`
  font-weight: 700;
`;

export const Button = styled.button`
  height: 25px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: orange;
    color: blue;
  }
`;
