// import PropTypes from 'prop-types';
import { FriendList } from "./FriendListItem"

export const Friends = ({friends}) => {
    
        return (
        <ul className="friend-list">
           {friends.map((friend) => {
             return (
              <li key={friend.id}>
              <FriendList 
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
              id={friend.id}/>  
            </li>  
            )
           }
           
            
            
           )}
         </ul>
    ) 
    
 
}

// Friends.propTypes = {
// friends: PropTypes.shape({
//     id: PropTypes.number.isRequired,
   
// }).isRequired,
// }