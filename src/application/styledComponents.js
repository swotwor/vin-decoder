import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: rgba(128, 128, 128, 0.3);
  font-family: 'Manrope', sans-serif;
`;

export const InnerContent = styled.div`
  width: 600px;
  height: min-content;
  background-color: rgba(222, 184, 135, 0.5);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;