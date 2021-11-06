import styled from "styled-components";

export const Main = styled.div`
    background: #F3F6FD;
    padding-top: 40px;
`
export const SearchDate = styled.div ` 
    
    max-width: 951px;
    margin: 0 auto;
    margin-bottom: 40px;

    h2 {
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        color: #29415E;
        
        margin-bottom: 8px;  
    }
`
export const FormDate = styled.div`
   
   display: flex;
   margin-bottom: 40px;

   .react-datepicker-wrapper{
        width: 211px;
   }

    input {
        padding: 15px;
        background: #FFFFFF;
        border: 1px solid #CFD9E7;
        box-sizing: border-box;
        border-radius: 4px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #536580;
    }
`