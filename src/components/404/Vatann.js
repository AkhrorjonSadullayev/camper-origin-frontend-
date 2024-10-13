import styled from "styled-components";
export const AccordionCon = styled.div`
width: 250px;
padding-top: -50px;

.short-line{
    width: 240px;
height: 1px;
border: none; 
background-color: grey;
margin-top: 15px;
}
.from-to-con{
    display: flex;
    gap: 10px;
}
.from-input{
    width: 91px;
height: 36px;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid rgba(55, 55, 55, 0.60);
}
.chekbox-con{
    display: flex;
    align-items: center;
    gap: 10px;
}
.Knal-con{
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
}
.but-con{
    display: flex;
    margin-top: 50px;
    gap: 10px;
}
.cancel-but{
    width: 115.804px;
height: 38.968px;
flex-shrink: 0;
background-color: #FF7A00;
border-radius: 60px;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
font-size: 16px;
color: white;
font-size: 16px;
border: none;
cursor: pointer;
}
.cancel-but:hover{
    background-color: #633f1d;
}
.search-but{
    cursor: pointer;
    width: 115.804px;
height: 38.968px;
flex-shrink: 0;
background-color: #006DAB;
border-radius: 60px;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
font-size: 16px;
color: white;
font-size: 16px;
border: none; 
}
.search-but:hover{
    background-color:#123b53;
}
.mini-cars-con{
display: flex;
gap: 5px;
margin-top: 10px;
}
.mini-con{
    width: 76px;
height: 90px;
border-radius: 10px;
background: #FFF;
box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.10);
display: flex;
align-items: center;
justify-content: center;
}
.mini-car{
    width: 84px;
height: 58px;
}
.Compare-but{
    cursor: pointer;
    width: 115.804px;
height: 38.968px;
flex-shrink: 0;
background-color:darkred;
border-radius: 60px;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
font-size: 16px;
color: white;
border: none;
font-size: 16px;
margin-top: 20px;
}
.Compare-but:hover{
    background-color:black;
}
`;  