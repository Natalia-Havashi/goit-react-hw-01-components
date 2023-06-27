import PropTypes from 'prop-types';
import { AvatarFriend, FriendName, List, SpanIsOnline } from './FriendList.styled';

export const FriendList = ({id,avatar, name, isOnline}) => {
    return (
<List key={id}>
<SpanIsOnline isOnline={isOnline}></SpanIsOnline>
<AvatarFriend src={avatar} alt={name} width={48} />
<FriendName>{name}</FriendName>
</List>


    ) 


}

FriendList.propTypes = {
  
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
}