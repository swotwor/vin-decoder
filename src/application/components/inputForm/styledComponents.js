import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  height: 40px;
  width: 450px;
  background-color: rgba(128, 128, 128, 0.2);
  border-radius: 10px;
  font-size: 20px;
  line-height: 20;
  padding: 5px 10px;
`;

export const Button = styled.div`
  height: 40px;
  width: 100px;
  background-color: #9eaaff;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
`;