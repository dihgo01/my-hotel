import styled from "styled-components";

export const Ulstyle = styled.ul `
    padding: 0;
    max-width: 951px;
    margin: 0 auto;

    @media (max-width: 875px) {
        max-width: 90%;
     }
    @media (max-width: 590px) { 

    }

`
export const TitleList = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 24px;

    div{
        display: flex;
        justify-content: space-between;
    }

    div > h3 {
       font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        color: #29415E; 
    }

    @media (max-width: 875px) {

        margin-left: 50px;
        grid-column-gap: 5px;
        grid-template-columns: 1fr 35%;
        div > h3 { 
            font-size: 14px;
            line-height: 18px;
        }
     }
    @media (max-width: 590px) { 
        div > h3 { 
            font-size: 8px;
            line-height: 14px;
        }
    }
    
`

export const ListRooms = styled.li`
    list-style: none;
    background: #FFFFFF;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
   
    color: #29415E;
    max-width: 951px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 16px;
    background: #FFFFFF;
    border: 1px solid #CFD9E7;
    box-sizing: border-box;
    border-radius: 4px;

    .description{
        padding: 16px;
        h3 {
            font-family: Poppins;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 24px;
            color: #29415E;
            margin-bottom: 6px;
        }

        p {
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 24px;
            color: #536580;
        }
    }

    .titleRoom {
        overflow: hidden; 
    }

    .amenities {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: #536580;
    }

    div > h3 {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
    }

    @media (max-width: 875px) {

        .description{
        h3 {
            font-size: 14px;
            line-height: 18px;
            
        }

        p {
            font-size: 12px;
            line-height: 18px;
        }

        div > h3 { 
            font-size: 14px;
            line-height: 18px;
        }
        .amenities {
            font-size: 12px;
            line-height: 18px;
        }
    }

    }
    
    @media (max-width: 590px) { 
        div > h3 { 
            font-size: 8px;
            line-height: 12px;
        }
    }

   

`
export const HeaderRoom = styled.div `
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 24px;
        border-bottom: 1px solid #CFD9E7;

        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        div > a {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 18px 24px;
        background: #FBDE64;
        border-radius: 100px;
        margin: 16px 16px 9px 0px;
    }

    .image-box {
        display: flex;
        align-items: center;

        h3 {
            margin-left: 15px;
        }
    }

    .image-box img {
        max-width: 118px;
        max-height: 86px;
        
    }

    div > h3 {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
    }

    div > h3 > strong {
        margin-right: 20px;
    }   

    @media (max-width: 875px) { 

        grid-template-columns: 1fr 25%;
        grid-column-gap: 5px;
        .titleRoom {

        }
        div > h3 > strong {
            display: none;
        }
        .image-box img {
            max-width: 100%;  
        }

        div > a {
            padding: 1px 3px;
            font-size: 8px;
            padding: 5px 8px;
            line-height:1.5;
            border-radius: 15px;
        }
        div > h3 { 
            font-size: 10px;
            line-height: 14px;
        }
    }
    @media (max-width: 575px) { 
        .image-box img {
            max-width: 60px;  
        }
    }
`
export const BtnMoreInfo = styled.div `
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 21px;
        color: #536580;
        padding: 10px;
        background: #FFFFFF;

        @media (max-width: 875px) {
            padding: 1px 5px;
            font-size: 12px;
            line-height: 1.5;
            border-radius: 3px;
        }
`