import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  height: 40px;
  max-width: 450px;
  width: 100%;
  margin-right: 5px;
  background-color: rgba(128, 128, 128, 0.2);
  border-radius: 10px;
  font-size: 18px;
  line-height: 20;
  padding: 5px 5px;
`;

export const Button = styled.button`
  height: 40px;
  width: 100px;
  ${props => props.isButtonActive
      ? `background-color: #9eaaff;
         cursor: pointer;`
      : `background-color: grey;
         cursor: default;`
  }
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  border-radius: 10px;
`;