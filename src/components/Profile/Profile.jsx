import PropTypes from 'prop-types';
import { Container, ContainerDescription, List, SpanLabel, SpanQuantity, UserAvatar, UserList, UserName, UserTag } from './Profile.styled';



export const Profile = ({username, tag, location, avatar, stats: {followers, views,likes}}) => {
    return (
      <Container>
      <ContainerDescription>
        <UserAvatar
          src={avatar}
          alt="User avatar"
        />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserTag>{location}</UserTag>
      </ContainerDescription>
    
      <UserList>
        <List>
          <SpanLabel>Followers</SpanLabel>
          <SpanQuantity>{followers}</SpanQuantity>
        </List>
        <List>
          <SpanLabel>Views</SpanLabel>
          <SpanQuantity>{views}</SpanQuantity>
        </List>
        <List>
          <SpanLabel>Likes</SpanLabel>
          <SpanQuantity>{likes}</SpanQuantity>
        </List>
      </UserList>
    </Container>
        )
} 

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers:PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,

}