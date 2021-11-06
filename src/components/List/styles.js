import styled from "styled-components";

export const Ulstyle = styled.ul `
    padding: 0;
    max-width: 951px;
    margin: 0 auto;

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
    margin: 16px auto;
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
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    div > h3 {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
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
`