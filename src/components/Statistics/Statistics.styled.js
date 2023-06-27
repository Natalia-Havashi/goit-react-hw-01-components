import styled from 'styled-components';

export const SectionStatistics = styled.section `
background-color: white;
border: 2px solid black;
border-radius: 5px;
box-shadow: 1px 3px 5px 0px rgba(110,137,142,.75);
height: auto;
width: 400px;
margin-bottom: 40px;
`

export const Title = styled.h2 `
color: black;
font-size: 28px;
font-weight: 500;
text-align: center;
text-transform: uppercase;
padding: 10px;
`
export const StatList = styled.ul `
border-radius: inherit;
display: flex;
height:100px;
border-top: 2px solid black;
margin-top: 15px;

`

export const Item = styled.li `
align-items: center;
color: black;
display: flex;
flex-direction: column;
gap: 5px;
height: 100%;
justify-content: center;
width: 120px;

:not(:last-child) {
    border-right: 3px solid black;
}
`