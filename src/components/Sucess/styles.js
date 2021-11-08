import styled from 'styled-components';

export const Finish = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 114px auto;

  img {
      width: auto;
  }

  h1{
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    color: #29415E;
  }

  div {
    width: 50%;
  }

  div > p{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #536580;

  }
`;
