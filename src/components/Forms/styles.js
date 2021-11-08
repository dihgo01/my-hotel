import styled from "styled-components";
import { FaCreditCard } from 'react-icons/fa'

export const Forms = styled.div`
    max-width: 951px;
    margin: 81px auto 120px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 121px;

    @media (max-width: 875px) {
      grid-template-columns: 255px 1fr;
      grid-column-gap: 21px;
      max-width: 90%;
    }

    @media (max-width: 570px) {
      grid-template-columns: 197px 1fr;
      grid-column-gap: 21px;
      max-width: 90%;
    }
    
`
export const FormDate = styled.div`
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css');

      max-width: 468px;


      .titleCard { 
        position: relative;
      }

      .titleCard input {
        width: 100%;
      }

      #parc{
        option{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #BFC6D0;
        }
      }

      .icon-card {
        position:absolute;
        top: 20;
        bottom: 0;
        left: 0;
        right: 0;
        z-index:10;
        border:none;
        background:transparent;
        outline:none;
      }

      .form-label{
          display: flex;
          flex-direction: column;
          width: 100%;
          margin-bottom: 0px;
          margin-left: 16px;

      }

    .form-inputs{
      display: flex;
      flex-direction: column;
      font-family: FontAwesome, Roboto;

      h1 {
        margin-top : 48px;
      }
    }
    h1 {
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 36px;
      color: #29415E;
      margin-bottom: 0px;
    }
  
    label {
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      color: #29415E;
      margin-top: 16px;
      display: flex;
    }

    .error-validation {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 24px;
        color: #D64753;
        margin-left: 16px;
        margin-bottom: 0;

    }

    .form-input{
      border: 1px solid #CFD9E7;
      box-sizing: border-box;
      border-radius: 4px;
      padding: 10px;
    }

    .form-info {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #536580;
    }

    .form-card{
      display: flex;
      margin-top: 16px;

    }
    
    .card-val{
      
        width: 96px;
        margin-left: 16px;
      

      input[name='cvc']{
        width: 80px;
        margin-left: 16px;
      }
      
    }

    @media (max-width: 875px) {

        .form > h1 {
          font-size: 18px;
          line-height: 24px;
        }

        .form-label{
          font-size: 14px;
          line-height: 18px;
          margin-left:4px;
        }

        .form-input{
          font-size: 16px;
          line-height: 18px;
        }

        .form-inputs > h1 {
          font-size: 18px;
          line-height: 24px;
        } 
        .form-info {
          font-size: 14px;
          line-height: 18px;
        }

        .card-val {
          width: 45px;
          margin-left: 2px;

        }

        .card-cvc{
            width: 35px;
        }

        .titleCred {
          max-width: 59%;
        }

        .titleCred-forms {
          max-width: 95%;
        }

        .error-validation{
          font-size: 8px;
          line-height: 14px;
          margin-bottom: 0;
        }


    }

    @media (max-width: 570px){
      .form > h1 {
          font-size: 16px;
          line-height: 18px;
        }

        .form-label{
          font-size: 10px;
          line-height: 18px;
        }

        .form-input{
          font-size: 8px;
          line-height: 18px;
        }

        .form-inputs > h1 {
          font-size: 16px;
          line-height: 18px;
        }

        .form-info {
          font-size: 12px;
          line-height: 18px;
        }

        .error-validation{
          font-size: 6px;
          line-height: 14px;
          margin-bottom: 0;
        }
    }


`
export const DataInfo = styled.div`

    .reservation{
      background: #F3F6FD;
      border-radius: 4px;
      padding: 16px;
      margin-bottom: 24px;

      h1 {
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 27px;
        color: #29415E;
      }

      h2 {
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        color: #29415E;
        margin-top: 16px;
      }

      p {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: #536580;
        margin: 0px;

      }
    }

    .checkout-abs{
      border: 1px solid #CFD9E7;
      box-sizing: border-box;
      border-radius: 4px;
      
    }

    .abstract{
      padding: 16px;
       h1{
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 27px;
        color: #29415E;
       }
       
       p {
          display: flex;
          justify-content: space-between;
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 24px;
          color: #536580;
          margin: 0px;
       }
    }

    .price {
      background: #F3F6FD;
      border-radius: 4px;
      padding: 8px 15px;

        h2{
          font-family: Poppins;
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 27px;
          color: #29415E;
       }
       
       p {
          display: flex;
          justify-content: space-between;
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 24px;
          color: #536580;
          margin: 0px;
       }
    }

    .form-input-btn {
      background: #FBDE64;
      border: 0px;
      border-radius: 100px;
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 27px;
      color: #29415E;
      padding: 18px 24px;
      
    }
    .div-btn-input{
      display: flex;
      justify-content: end;
      margin-top: 114px;
    }

    @media (max-width: 875px) { 
      .reservation{
        h1 {
           font-size: 14px;
           line-height: 18px;
        }

        h2 , p {
          font-size: 12px;
          line-height: 18px;
        }
       
      }

      .checkout-abs{
        h1 {
           font-size: 14px;
           line-height: 18px;
        }

        h2 , p {
          font-size: 12px;
          line-height: 18px;
        }
      }
      .div-btn-input{
        margin-top: 162px;
        .form-input-btn{
          font-size: 14px;
          line-height: 18px;
          padding: 10px;
        }
        
      }
    }

    @media (max-width: 590px) {
      .reservation{

        h1{
           font-size: 12px;
          line-height: 14px;
        }

        h2 , p {
          font-size: 10px;
          line-height: 14px;
        }
      }

      .checkout-abs{
        h1{
           font-size: 12px;
          line-height: 14px;
        }

        h2 , p {
          font-size: 10px;
          line-height: 14px;
        }
      }

      .div-btn-input{
         margin-top: 35px;
        .form-input-btn{
          font-size: 12px;
          line-height: 16px; 
          padding: 5px;
          
        }
        
      }
    }
`