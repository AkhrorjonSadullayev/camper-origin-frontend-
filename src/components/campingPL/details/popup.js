

import styled from "styled-components";

export const Video_ConTainer = styled.div`
display: flex;
justify-content: center;
margin-top: 50px;
.video_con_2 {
    display: grid;
    grid-template-areas: ' a a a a '; 
    gap: 20px;
}
.video_con_3 {
    display: grid;
    grid-template-columns: auto, auto ;
    position: relative;
    width: 292px;
    height: 292px;
    border: none;
    border-radius: 20px;
    /* .img_wrap-2 {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%);
    } */
    .img_wrap {

        button {
            display: flex;
        align-items: center;
        justify-content: center;
            border: none;
            background: transparent;
            width: 58px;
            height: 58px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.50);
        }    img {
            width: 25px;
            height: 25px;
        }
    } 
}

@media only screen and (max-width: 1240px){
    .video_con_2 {
        display: grid;
        grid-template-areas: ' a a a ';
    }
}
@media only screen and (max-width: 920px) {
    .video_con_2 {
        display: grid;
        grid-template-areas: ' a a ';
    }
}
@media only screen and (max-width: 610px) {
    .video_con_2 {
        display: grid;
        grid-template-areas: ' a ';
    }
}
`