import styled from "styled-components";

export const Padding = styled.div`
padding: 37px;
`;
export const Backimage = styled.div`
p{
    font-size: 16px;
}
h1{


}
`;
export const PlaceGrid = styled.div`
display: grid;
grid-template-areas: 'a a a';
justify-content: center;
align-items: center;
gap: 20px;
margin-top: 80px;
@media only screen and (max-width: 1220px){
    display: grid;
grid-template-areas: 'a  a';
}
@media only screen and (max-width: 810px){
    display: grid;
grid-template-areas: 'a';
}
`;
export const Placemenu = styled.div`
`;