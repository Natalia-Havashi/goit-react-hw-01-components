import styled from 'styled-components';

export const FriendsList = styled.ul `
padding: 20px;
width: 400px;
`

export const List = styled.li `
background-color: aliceblue;
border: 2px solid grey;
border-radius: 5px;
padding: 15px 28px;
margin: 5px;
align-items: center;
display: flex;

`
export const SpanIsOnline = styled.span `
border-radius: 50%;
height: 15px;
width: 15px;
background-color: ${props => (props.isOnline ? 'green' : 'red')};
display: block;
margin-right: 10px;

`
export const AvatarFriend = styled.img `
width: 50px;
margin-right: 10px;
`
export const FriendName = styled.p `
color: black;
font-size: 22px;
font-weight: 500;
`