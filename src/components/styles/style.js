import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
z-index: 1;
padding: 20px 50px;
position: fixed;
background-color: white;
display: flex;
align-items: center;
width: 100%;
.left-con{
    display: flex;
    align-items: center;
    gap: 10px;
}
@media only screen and (max-width: 900px){
display: flex;
justify-content: space-evenly;
}
@media only screen and (max-width: 500px){
display: flex;
flex-direction:center;
.left-con{
    display: flex;
    flex-direction: row-reverse;
    align-items:center;
    justify-content: center;
}
}
`;

export const Menuicon = styled.img`
display: none;
@media only screen and (max-width: 900px){
display: flex;
}
@media only screen and (max-width: 400px){
    display: none;
}
`;
export const Logowrapper = styled.img`
`;
export const Menuwrapper = styled.div`
flex: 3;
display: flex;
align-items: center;
justify-content: space-evenly;

div{
    cursor: pointer;
}
.menu-con{
    display: flex;
    gap: 5px;
}
@media only screen and (max-width: 900px){
display: none;
}
`;
export const Iconwrapper = styled.div`
display: flex;
justify-content: end;
gap: 20px;
align-items: center;
.En-con{
    display: flex;
    gap: 5px;
    align-items: center;
    cursor: pointer;
}
img{
    cursor: pointer;
}
.right-menu-icon{
    display: none;
}
.portfolio-con{
    display: flex;
}
@media only screen and (max-width: 500px){
    .portfolio-con{
        display: none;
    }
.En-con{
    display: none;
}
.right-menu-icon{
    display: flex;
}
img{
    display: none;
}
}

`;
export const Navlink = styled(Link)`
text-decoration: none;
color: black;
`;
export const Proflink = styled(Link)`
`;
// navbar part end


export const Signcontainer = styled.div`
display: flex;
justify-content: center;

.sign-con{
    max-width: 500px;
    width: 90vmin;
height: 614px;
border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);

margin-top: 120px;

.InsideCon{
    padding: 33px;
    h3{
    font-size: 27px;
    font-weight: bold;
    }
    h2{
        color: rgba(55, 55, 55, 0.80);
        margin-top: 25px;
    }
    .email-input{
        max-width: 434px;
        width: 80vmin;
        height: 50px;
        padding: 15px 20px;
        border-radius: 10px;
        border: none;
        background-color: rgba(55, 55, 55, 0.10);
        margin-top: 10px;
        }
        }
    }
    .chekbox-main{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 16px;
        .chekbox-con{
        display: flex;
        align-items: center;
        .chekbox{
        width: 23px;
        height: 22px;
        border: none;
        border-radius: 5px;
        background-color: grey;
    }
    }
    @media only screen and (max-width: 400px){
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
    }
    }
    .sign-but{
        max-width: 434px;
        width: 80vmin;
        height: 50px;
        border-radius: 10px;
        border: 3px solid #006DAB;
        color: #006DAB;
        font-weight: bold;
        background-color:white;
        margin-top: 27px;
        cursor: pointer;
      
    }
    .sign-but:hover{
        background-color:#006DAB ;
        color: white;
    }
    .lines-con{
        display: flex;
        align-items: center;
        border: none;
        justify-content: center;
        margin-top: 20px;
        gap: 10px;
    }
    .logos-con{
        display: flex;
        gap: 12px;
        justify-content: center;
        margin-top: 20px;
    }
    .create-but{
        max-width: 434px;
        width: 80vmin;
        height: 50px;
        border-radius: 10px;
        border: 3px solid #006DAB;
        color: #006DAB;
        font-weight: bold;
        background-color:white;
        margin-top: 20px;
        cursor: pointer;
      
    }
    .create-but:hover{
        background-color:#006DAB ;
        color: white;
    }
    
  


`;

export const InsideCon = styled.div`

`;

export  const SignLink = styled(Link)`
`;

export const AccountConMain = styled.div`
display: flex;
justify-content: center;

`;
export const AccountCon = styled.div`
max-width: 500px;
width: 90vmin;
height: 530px;
border-radius: 20px;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.20);
margin-top: 100px;
padding: 25px 30px;
display: flex;
flex-direction: column;
.registrate{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.email-input{
    max-width: 440px;
    width: 80vmin;
height: 50px;
padding: 15px 20px;
border-radius: 10px;
background-color: rgba(55, 55, 55, 0.10);
border: none;
font-size: 16px;
margin-top: 10px;
}
.chek-con{
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 16px;
}
.chek-in{
    width: 23px;
height: 22px;
border: none;
border-radius: 5px;

}
.registrate-but{
    max-width: 440px;
    width: 80vmin;
height: 50px;
border-radius: 10px;
background-color: white;
color: #006DAB;
border: 3px solid #006DAB;
font-weight: bold;
cursor: pointer;
margin-top: 27px;
}
.registrate-but:hover{
background-color: #006DAB;
color: white;
}
`;

export const RegistrateLink = styled(Link)`
`;
export const SignInLink = styled(Link)`
`;

export const Footercon = styled.div`
.footer-con{
    height: 350px;
    width: 100%;
    background-color: #006DAB;
    margin-top: 60px;
    color: white;
}
.footer-container{
    display: flex;
    justify-content: space-evenly;
}
.gap-p{
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    gap: 9px;
}
.center-logo{
    display: none;
}
@media only screen and (max-width: 1200px){
    .footer-container{
        display: none;
    }
    .center-logo{
    display: flex;
    justify-content: space-evenly;
    h1{
        margin-top: 40px;
    }
    div{
        margin-top: 50px;
    }
}
}
`;