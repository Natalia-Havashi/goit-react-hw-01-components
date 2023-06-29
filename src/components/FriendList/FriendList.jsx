import PropTypes from 'prop-types';
import { FriendListItem } from "./FriendListItem"
import { FriendsList } from './FriendList.styled';

export const Friends = ({friends}) => {
    
        return (
        <FriendsList>
         {friends.map(({id,avatar,name,isOnline}) => (
            
                <FriendListItem
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                key={id}/>
            
         ))}
          
         </FriendsList>
    ) 
    
 
}

Friends.propTypes = {
   friends: PropTypes.arrayOf(
       PropTypes.exact({
           id: PropTypes.number.isRequired,
           avatar: PropTypes.string.isRequired,
           isOnline: PropTypes.bool.isRequired,
           name: PropTypes.string.isRequired,
       }).isRequired,
   ).isRequired,
}