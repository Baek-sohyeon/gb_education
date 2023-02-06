import styled from "styled-components";

export const Content = styled.div`
    ${'' /* width: 80%; */}
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    align-self: center;

    ${'' /* @media (max-width: 64em){
    padding: 2rem 3rem;
    flex-direction: column; */}

    }
    @media (max-width: 18em){
        padding: 1rem 2rem;

    }
`
export const Container = styled.div`
    width: 80%;
    margin: 2rem auto;
    display: flex;
    justify-content: space-evenly;
    align-items: self-start;
    @media (max-width: 18em){
        flex-direction: column;
    }
`
export const row = styled.div`
    display: flex;
    flex-direction: row;
`
export const column = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 32em){
        display: none;
    }

`
export const companyName = styled.div`
    color: rgba(106,106,106,1);;
    justify-content: flex-end;
    font-size: 15px;
    padding: 10px 10px 0px 10px;
    @media (max-width: 32em){
        font-size: 10px;
    }
`
export const companyLoc = styled.p`
    color: rgba(106,106,106,1);
    font-size: 10px;
    padding: 10px;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    align-items: flex-start;


`
export const company = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

export const Logo =  styled.div`
    font-size: 18px;
    ${'' /* font-weight: bold; */}
    color: rgba(106,106,106,1);
    @media (max-width: 32em){
        font-size: 10px;
    }
`
export const copyright = styled.p`
    color: rgba(106,106,106,1);
    font-size: 7px;
`

export const MenuBtn = styled.button`
    cursor: pointer;
    border: none;
    background: none;
    color: rgba(106,106,106,1);
    font-size: 12px;
    margin: 0px;
    margin-bottom:10px;
    padding: 0px;
    @media (max-width: 32em){
        font-size: 5px;
    }
`


export const bottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #b6b6b6;

`

export const head = styled.img`
    width: 100px;
    align-self: center;
    @media (max-width: 32em){
        width: 50px;
    }
`