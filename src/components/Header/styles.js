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

    @media (max-width: 875px) {

        max-width: 90%;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 20px;

        h1 {
            font-size: 18px;
            line-height: 32px;
        }
        p {
            font-size: 14px;
            line-height: 18px;
        }
        p > a { 
            font-size: 12px;
            line-height: 14px;
        }

        div > h3 { 
            font-size: 12px;
            line-height: 14px;
        }
    }

    @media (max-width: 590px) { 
        p > a { 
            font-size: 8px;
            line-height: 10px;
        }

        p {
            font-size: 12px;
            line-height: 18px;
        }
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

    @media (max-width: 875px) { 
        grid-template-columns: 1fr 1fr;
        span {
            font-size: 12px;
            line-height: 14px;
        }

    } 

    @media (max-width: 590px) { 
            grid-template-columns: 1fr 1fr;
        span {
            font-size: 8px;
            line-height: 12px;
        }
        }

`
export const ContentMap = styled.div`
    
            .img-wrapper {
        position: relative;
        }

        .img-responsive {
        width: 100%;
        height: auto;
        }

        .img-overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
        }

        .img-overlay:before {
        content: ' ';
        display: block;
        /* adjust 'height' to position overlay content vertically */
        height: 30%;
        }

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

    img {
        width: 100%;
        height: auto;
    }

    div > span {
        font-family: Poppins;
        font-style: normal;
        font-size: 14px;
        line-height: 24px;
        color: #29415E;
    }

    @media (max-width: 875px) { 
    
        .btn-responsive {
            padding: 1px 5px;
            font-size: 12px;
            line-height: 1.5;
            border-radius: 3px;
        }

        .img-wrapper p {
            font-size: 12px;
            line-height: 16px;
        }

        div > span {
            font-size: 12px;
            line-height: 16px;
        } 
    }

    @media (max-width: 590px) {

        .btn-responsive {
            padding: 1px 3px;
            font-size: 6px;
            line-height: 1.5;
            border-radius: 3px;
        }

        .img-wrapper p {
            font-size: 8px;
            line-height: 12px;
        }

        div > span {
            font-size: 8px;
            line-height: 12px;
        } 
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
    /*position: absolute;
    left: 964px;
    top: 128px;*/
    @media (max-width: 875px) { 
    
        padding: 1px 12px;
        font-size: 14px;
        line-height: 1.5;
        border-radius: 15px;
    }

    @media (max-width: 590px) {

            padding: 1px 3px;
            font-size: 8px;
            line-height: 1.5;
            border-radius: 3px;
    }
 `