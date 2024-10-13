import styled from "styled-components"
export const MultiCar = styled.div`
.Recomend {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 40px;
    h2 {
    padding-bottom: 6px;
    border-bottom: 1px solid #FF7A00;
    }
} .Recomend2 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
    border-bottom: 1px solid #FF7A00;
    padding-bottom: 40px;
    h2 {
    padding-bottom: 6px;
    border-bottom: 1px solid #FF7A00;
    }
} .slider-container {
    padding: 0px 55px 30px 55px;
} .Container-main {
} .Container-mini {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
        width: 300px;
        height: 208px; 
    } h3 {
        color: var(--text, #373737);
        text-align: center;
        font-size: 18px;
        font-weight: 600;
    } h5 {
        padding-top: 17px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 23px;
        width: 100%;
        color: var(--text, #373737);
        font-size: 16px;
        font-weight: 500;
        img {
            border: none;
            width: 15px;
            height: 15px;
        }
    }
} .Butwrap {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
        margin-right: -22px;
        padding-right: 30px;
        border: none;
        width: 260px;
        height: 45px;
        clip-path: polygon(10% 0%, 90% 0%, 80% 100%, 0% 100%);
        background-color: #006DAB;
        color: #FFF;
        font-size: 18px;
        font-weight: 700;
        color: white;
        cursor: pointer;
    }
} .Butwrap :hover{
    background-color: #005DAB;
}

`