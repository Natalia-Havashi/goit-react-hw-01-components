import PropTypes from 'prop-types';
import { AvatarFriend, FriendName, List, SpanIsOnline } from './FriendList.styled';

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
<List>
<SpanIsOnline isOnline={isOnline}></SpanIsOnline>
<AvatarFriend src={avatar} alt={name} width={48} />
<FriendName>{name}</FriendName>
</List>


    ) 


}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}