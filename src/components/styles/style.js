import { Link } from "react-router-dom";
import styled from "styled-components";



export const Container =styled.div`
border: 1px solid black;
padding: 20px;
display: flex;
position: fixed;
background-color: white;
width: 100%;

@media only screen and (max-width:900px){
display: flex;
align-items: center;
justify-content: space-evenly;
}
.menu-con{
    display: flex;
    align-items: center;
}
@media only screen and (max-width:900px){
.menu-left{
    display: none;
}
}
`;


export const LogoWrapper =styled.img`

align-items: center;
`;
export const Menuicon =styled.img`
align-items: center;
margin-right: 10px;
display: none;
@media only screen and (max-width:900px){
display: flex;
}
`;

export const MenuWrapper =styled.div`
display: flex;
align-items: center  ;
flex: 3;
justify-content: space-evenly;
div{
    cursor: pointer;
}
@media only screen and (max-width:900px){
display: none;
}
`;
export const IconsWrapper =styled.div`
align-items: center;
display: flex;
gap: 5px;
justify-content: end;
.en-down{
    display: flex;
    gap: 5px;
}
.menu-right{
display: none;
}
@media only screen and (max-width:900px){
display: flex;
}
@media only screen and (max-width:420px){
.menu-right{
    display: flex;
}
.profile-img{
    display: none;
}
.en-down{
    display: none;
}
}

`;
export const Navlink =styled(Link)`
text-decoration: none ;
`;

/* navbar css end */

export const MainContainer=styled.div`
padding-top: 75px;
#h6{
    font-size: 16px;
}
#h3{
    font-size: 27px;
}
#h1{
    font-size: 80px;
}
`;

export const DataMainContainer =styled.div`
.main-body{
    display: flex;
    justify-content: space-around;
}
.Left-main{
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
}
.right-side{
    flex: 3;
}
.line{
    width: 240px;
height: 1px;
border: none;
background-color: grey;
margin-top: 15px;
}
.from-to-con{
    display: flex;
    gap: 25px;

    margin-top: 30px;
}
.form-input{
    width: 91px;
height: 36px;
border-radius: 10px;
}
.brand{
    display: flex;
    gap: 159px;
    margin-top: 50px;
}
.company{
    display: flex;
    gap: 125px;
    margin-top: 50px;
}
.license{
    display: flex;
    gap: 99px;
    margin-top: 50px;
}
.number{
    display: flex;
    gap: 35px;
    margin-top: 50px;
}
.location{
    display: flex;
    gap: 135px;
    margin-top: 50px;
}
.chekbox-con{
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 30px;
}
.chekbox{
    width: 22px;
height: 22px;
border-radius: 5px;
}
.aidal-con{
    display: flex;
    align-items: center;
    gap: 10px;
}
.but-con{
    margin-top:50px ;
   display: flex;
   gap: 10px;
}
.cancel-but{
    width: 115.804px;
height: 38.968px;
border-radius: 60px;
background-color: #FF7A00;
border: none;
color: white;
font-size: 16px;
cursor: pointer;
}
.cancel-but:hover{
    background-color:#624529;
}
.search-but{
    width: 115.804px;
height: 38.968px;
border-radius: 60px;
background-color: #006DAB;
border: none;
color: white;
font-size: 16px;
cursor: pointer;
}
.search-but:hover{
    background-color:#0b5682;
}
.compare-h4{
    color: #006DAB;
    margin-top: 50px;
}
.mini-cars-con{
    display: flex;
    gap: 5px;
    margin-top: 5px;
}
.mini-car{
    width: 75px;
height: 90px;
border-radius: 10px;
box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.10);
}

.mini-nav-main{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.mininav-left{
    display: flex;
    gap: 10px;
}
.mininav-left{
    display: flex;
    align-items: center;
}
.mininav-left h4{
color: #006DAB;
font-size: 13px;
}
.mininav-left h3{
    font-size: 13px;
}
.sort-main-con{
    display: flex;
    align-items: center;
    gap: 5px;
    
}
.select-input{
    width: 227px;
    height: 30px;
    border-radius: 5px;
    padding: 8px 30px 8px 10px;
}
.down-icon-img{
    padding: 7px;
    border: 1px solid black;
    border-bottom-right-radius:5px;
    border-top-right-radius:5px;
    margin-left: -37px;
}
.num-input{
    width: 80px;
    height: 30px;
    border-radius: 5px;
    padding: 8px 30px 8px 10px;
}
.num-main-con{
    display: flex;
    align-items: center;
}
.down-icon-num{
    padding: 7px;
    border: 1px solid black;
    border-bottom-right-radius:5px;
    border-top-right-radius:5px;
    margin-left: -33px;
}
.black-menu{
    border: 1px solid grey;
    padding: 5px;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
}
.grey-menu{
    border: 1px solid grey;
    padding: 3px;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
}
.car-cons{
    width: 223px;
height: 307px;
border-radius: 20px;
padding: 15px;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
}
.white-car{
    width: 202.42px;
height: 137.433px;
}
.name-con{
    display: flex;
    justify-content: space-between;
    margin-top:5px;
}
.star-con{
    display: flex;
}
.order-but{
    width: 94px;
height: 35px;
border-radius: 10px;
background-color: white;
border: 1px solid #006DAB;
color: #006DAB;
font-size: 14px;
}


`;
