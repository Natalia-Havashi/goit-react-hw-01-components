import React from "react";
import friendsData from '../FriendList/friends.json';
import PropTypes from 'prop-types';

export const FriendList = ({avatar, name, isOnline}) => {
    return (
<li className="item">
  <span className="status"></span>
  <img className="avatar" src={avatar} alt="User avatar" />
  <p className="name">{name}</p>
</li>
    ) 


}
 friendsData.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
 }