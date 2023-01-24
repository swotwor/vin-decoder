import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background-color: rgba(128, 128, 128, 0.3);
  border-radius: 30px;
  padding: 10px;
  margin-top: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-weight: 900;
  font-size: 15px;
`;

export const OpenButton = styled.div`
  width: 21px;
  height: 21px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: url(${props => props.arrowIcon});
  cursor: pointer;
  ${props => props.isOpenFullList
          ? `transform: rotateX(-180deg);`
          : null
  }
`;

