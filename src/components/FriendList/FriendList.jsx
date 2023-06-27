import PropTypes from 'prop-types';
import { FriendList } from "./FriendListItem"
import { FriendsList } from './FriendList.styled';

export const Friends = ({friend}) => {
    
        return (
        <FriendsList>
         {friend.map(({id,avatar,name,isOnline}) => (
            
                <FriendList
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                key={id}/>
            
         ))}
          
         </FriendsList>
    ) 
    
 
}

Friends.propTypes = {
id: PropTypes.number,
   avatar:PropTypes.string,
   name: PropTypes.string,
   isOnline: PropTypes.bool,
}