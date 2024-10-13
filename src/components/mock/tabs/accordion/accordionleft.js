import styled from "styled-components";
export const QAmain=styled.div`
display: flex;
justify-content: center;
gap: 70px;
@media only screen and (max-width: 1200px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
@media only screen and (max-width: 700px){
    align-items: center;
    justify-content: center;
}
`;
export const Accordion=styled.div`
width: 100%;
@media only screen and (max-width: 700px){
width: 500px;
.acc{
    width: 100%;
}
}
p{
color: grey;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
`;
export const RightSideCon=styled.div`

.container{
    width: 450px;
    max-width: 100%;
height: 432px;
border-radius: 10px;
border: 1px solid rgba(0, 109, 171, 0.10);
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
padding: 30px;
.question{
    display:flex ;
    justify-content: center;
    align-items: center;
}
h1{
    color: #023047;
    font-size: 24px;
    font-weight:bold;
}
.input{
    display: flex;
    align-items: center;
    justify-self: center;
    flex-direction: column;
}
@media only screen and (max-width: 440px){
}
}
@media only screen and (max-width: 440px){
    width: 100%;
}
`;
export const QuestionCon=styled.div`
@media only screen and (max-width: 440px){
   width: 40ch;
}
`;