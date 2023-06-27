// import PropTypes from 'prop-types';

export const FriendList = ({id,avatar, name, isOnline}) => {
    return (
<li key={id} className="item">
  <span className="status">{isOnline}</span>
  <img className="avatar" src={avatar} alt={name} width={48} />
  <p className="name">{name}</p>
</li>
    ) 


}

// FriendList.propTypes = {
//   avatar: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   isOnline: PropTypes.bool.isRequired,
// }