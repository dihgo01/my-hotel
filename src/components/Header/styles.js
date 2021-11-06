import styled from 'styled-components';

export const Header = styled.div`
    max-width: 951px;
    margin: 81px auto 40px;
    display: grid;
    grid-template-columns: 1fr 25%;
    grid-column-gap: 121px;
   
   h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-size: 32px;
        line-height: 48px;
        color: #29415E;
    }
    p {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: #536580;
    }

    p > a {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 21px;
        text-align: center;
        align-items: center;
        text-decoration-line: underline;
        color: #406591;

        strong {
            margin-right: 14px;
            font-weight: bold;
        }
    }

    div > h3 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        color: #29415E;
        margin-top: 35px;
        
    }
`
export const Icons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    
    span {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: #536580;
        margin-top: 16px;

        strong {
            margin-right: 9px;
        }
    }

`
export const ContentMap = styled.div`
    
    p {
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: #536580;
        background: #F3F6FD;
        text-align: center;
        margin-bottom: 16px;
    }

    div > span {
        font-family: Poppins;
        font-style: normal;
        font-size: 14px;
        line-height: 24px;
        color: #29415E;
    }
`
export const BtnMap = styled.a` 
    text-align: center;
    background: #FFFFFF;
    border: 1px solid #CFD9E7;
    box-sizing: border-box;
    padding: 2px;
    border-radius: 100px;
    color: #536580;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    position: absolute;
    left: 964px;
    top: 128px;
 `