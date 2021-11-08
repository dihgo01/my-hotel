import styled from "styled-components";

export const Mains = styled.div`
    background: #F3F6FD;
    padding-top: 40px;
    padding-bottom : 120px;

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
    @media (max-width: 875px) {

        max-width: 90%;

        h2 {
            font-size: 18px;
            line-height: 24px;
        }
    }

    @media (max-width: 570px) { 

        h2 {
            font-size: 14px;
            line-height: 16px;
        }
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
        border-radius: 4px 0px 0px 4px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #536580;
    }

    .icone-calender{
        display: flex;
        justify-content: center;
        padding: 10px;
        background: #FFFFFF;
        border: 1px solid #CFD9E7;
        border-radius: 0px 4px 4px 0px;
    }

    @media (max-width: 875px) {

        input {
            font-size: 10px;
            line-height: 14px;
        }

        .icone-calender{ 
            display: none;
         }

        @media (max-width: 590px) { 

        }
    
    }
`