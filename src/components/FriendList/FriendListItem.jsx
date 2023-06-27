import PropTypes from 'prop-types';

export const FriendList = ({id,avatar, name, isOnline}) => {
    return (
<li key={id}>
<span className="status">{isOnline}</span>
<img className="avatar" src={avatar} alt={name} width={48} />
<p className="name">{name}</p>
</li>


    ) 


}

FriendList.propTypes = {
  id:PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}