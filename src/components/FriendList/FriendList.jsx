import PropTypes from 'prop-types';
import { FriendList } from "./FriendListItem"

export const Friends = ({friend}) => {
    
        return (
        <ul className="friend-list">
         {friend.map(({id,avatar,name,isOnline}) => (
            
                <FriendList
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                key={id}/>
            
         ))}
          
         </ul>
    ) 
    
 
}

Friends.propTypes = {
friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
   avatar:PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   isOnline: PropTypes.bool.isRequired
}).isRequired,
}