import styled from "styled-components";

export const CartConWraper = styled.div`
display: flex;
align-items: center;
padding-top: 97px;
padding-bottom: 80px;
justify-content: center;

.slider-containerie {
    display: flex;
    justify-content: center;
    padding: 0px 40px 0px 40px;
    max-width: 1000px;
    width: 100vw;
} .slider_wraps {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.30);
    padding: 10px 90px;
    border-radius: 10px;
    max-width: 906px;
    width: 100%;
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 4px;
        padding-top: 1.5px;
        background-color: black;
}
} .cost_wrap {
    display: flex;
    flex-direction: column;
} .btu_wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 100%;
       max-width: 806px;
       max-height: 406px;
       height: 40vw;
       min-height: 100px;
    }
} .but_Wr {
        display: flex;
        width: 100%;
        justify-content: center;
    button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 350px;
    height: 50px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
    background-color: rgba(55, 55, 55, 0.10);
    border: none;
    h5 {
        margin-bottom: -0.5px;
        display: flex;
        align-items: center;
        border-radius: 10px;
    }
    }
} .but_Wr :hover {
    background-color: rgba(55, 55, 55, 0.40);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.30);
} .img_wrap_filter {
    display: flex;
    border: 1px solid red;
} .catrimg {
    display: flex;
    justify-content: center;
    padding-top: 40px;
   margin-bottom: 50px;
    width: 100%;
    h2 {
        border-bottom: 1px solid #FF7A00;
        padding-bottom: 6px;
        color: var(--text, #373737);
        font-size: 35px;
        font-weight: 600;
    }
}
@media screen and (max-width: 1300px) {
    display: grid;
    grid-template-areas: ' a ';
    justify-content: center;
    align-items: center;
    .CartCon {
        margin-top: 40px;
    } .CartCon_wrape {
       width: 100%;
       display: flex;
       justify-content: center;
    } 
} 
`

export const CartCon = styled.div`
margin-top: 170px;
width: 311px;
max-width: 1000px;
width: 21vw;
height: 465px;
overflow-x: hidden;
.scrolWrap {
    display: flex;
    flex-direction: column;

    h2 {
        color: var(--text, #373737);
        font-size: 30px;
        font-weight: 600;
    } h3 {
        margin-top: 12px;
        color: var(--blue, #006DAB);
        font-size: 30px;
        font-weight: 700;
    } h4 {
        margin-top: 25px;
        color: #373737;
        font-size: 17px;
        font-weight: 500;
    } h5 {
        margin-top: 16px;
        color: rgba(55, 55, 55, 0.70);
        font-size: 15px;
        font-weight: 500;
    } .BtnWrap {
        margin-top: 123px;

    } .BtnWrap button {
        border: none;
        max-width: 974px;
        width: 100%;
        height: 45px;
        color: #FFF;
        font-size: 20px;
        font-weight: 700;
        border-radius: 10px;
        background: var(--blue, #006DAB);
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
        cursor: pointer;
    } .BtnWrap :hover {
        background-color: #005DAB;
    }
} .inputwrap2 {
    display: flex;
    flex-direction: column;

    h1 {
        margin-top: 52px;
        margin-bottom: 30px;
        color: #000;
        font-size: 25px;
        font-weight: 600;
    } 
} .inputwrap {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    label {
    margin-top: 20px;
    color: rgba(55, 55, 55, 0.80);
    font-size: 16px;
    font-weight: 600;
    } input {
    margin-top: 10px;
    padding: 0px 50px 0px 20px;
    border-radius: 10px;
    border: none;
    background: rgba(55, 55, 55, 0.10);
    max-width: 974px;
    width: 100%;
    height: 50px;
    }
} .BtnWraps {
        margin-top: 50px;
        margin-bottom: 80px;

} .BtnWraps button {
        border: none;
        max-width: 974px;
        width: 100%;
        height: 45px;
        color: #FFF;
        font-size: 20px;
        font-weight: bold;
        border-radius: 10px;
        background: var(--blue, #006DAB);
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
        cursor: pointer;
} .BtnWraps :hover {
        background-color: #005DAB;
}
@media only screen and (max-width: 1300px){
    width: 70vw;
    .CartCon {
        display: flex;
        flex-direction: column;
        align-items: center;
    }.cost_wrap {
        width: 100%;
        display: flex;
        justify-content: space-between;
    } .brNone br{
        display: none;
    }
}
`