import styled from 'styled-components';

export const Container = styled.div `
  background-color: #cce3e8;
  border: 1px solid #bbc7c9;
  border-radius: 5px;
  height: 500px;
  width: 400px;
  margin-bottom: 40px;
`
export const ContainerDescription = styled.div `
align-items: center;
display: flex;
flex-direction: column;
gap: 5px;
padding: 35px 20px 31px;

`
export const UserAvatar = styled.img `
width: 200px;
border-radius: 50%;
border: 1px solid white;
    
`
export const UserName = styled.p `
font-family: Montserrat;
font-size: 32px;
font-weight: 500;
color: #353c3d;
  `
  export const UserTag = styled.p `
font-family: Montserrat;
font-size: 24px;
font-weight: 400;
color: #5a6669;
`  
export const UserList = styled.ul `
background-color: #dee0ce;
border-top: 3px solid white;
display: flex;
height: 123px;
justify-content: space-around;


`
export  const List = styled.li `
align-items: center;
display: flex;
flex-direction: column;
gap: 10px;
height: 100%;
justify-content: center;
width: 200px;

:not(:last-child) {
    border-right: 3px solid white;
}
`
export const SpanLabel = styled.span`
font-size: 22px;
color: black;
`

export const SpanQuantity = styled.span `
color: black;
font-size: 25px;
font-weight: 500px;
`