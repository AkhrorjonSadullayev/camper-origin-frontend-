import styled from "styled-components";

export const MultiCar = styled.div`
    padding: 0px 40px;
.padding{
    padding: 0px 0px  0px 30px;
}
.Container-main{
    padding-top: 85px;
}
.Container-main img{
    width: 194px;
height: 147px;
border-radius: 10px;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)
}
`;
export const MainContainer = styled`
`;
export const MapContainer = styled.div`
padding: 70px;
.location-wrap{
    gap: 20px;
    display: flex;
    margin-top: 10px;
    p{
        padding: 1px;
        color: #006DAB;
        font-size: 16px;
        background-color: white;
        cursor: pointer;
    }
    .location:hover{
        background-color: #006DAB;
        color: white;
    }
    .copy{
        background-color: white;
        padding: 3px 19px;
        border-radius: 5px;
        border:2px solid #FF7A00;
        color: #FF7A00;
        font-size: 16px;
        cursor: pointer;
    }
    .copy:hover{
        background-color: #FF7A00;
        color: white;
    }
}
hr{
        margin-top: 10px;
        border: 1px solid grey;
    }
    .grid-con{
        width: 400px;
        display: grid;
        grid-template-areas: "h h";
        gap: 10px;
        margin-top: 18px;
        div{
            display: flex;
            gap: 5px;
            p{
                color: #373737;
            }
            .home-p{
                color: #006DAB;
                cursor: pointer;
            }
        }
    }
    h3{
        color: #006DAB;
        font-size: 16px;
    }
    .lorem{
        margin-top: 10px;
    }
    .map-img{
        width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-top: 50px;
    }
    @media only screen and (max-width: 800px){
        hr{
            display: none;
        }
    }
    @media only screen and (max-width: 470px){
        .grid-con{
            width: 300px;
        }
    }
    
`; 