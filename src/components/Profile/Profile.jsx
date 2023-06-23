import React from 'react';
import ReactDOM from 'react-dom/client';
import user from './user.json'
// import PropTypes from 'prop-types';

// Опис компонента <Profile>
// Компонент повинен приймати кілька пропсів з інформацією про користувача:

// username — ім'я користувача
// tag — тег в соціальній мережі без @
// location — місто і країна
// avatar — посилання на зображення
// stats — об'єкт з інформацією про активності

const Div = () => {
    return (
        <div className="profile">
        <div className="description">
          <img
            src={user.avatar}
            alt="User avatar"
            className="avatar"
          />
          <p className="name">{user.username}</p>
          <p className="tag">@{user.tag}</p>
          <p className="location">{user.location}</p>
        </div>
        
        <ul className="stats">
          <li>
            <span className="label">Followers</span>
            <span className="quantity">{user.stats.followers}</span>
          </li>
          <li>
            <span className="label">Views</span>
            <span className="quantity">{user.stats.views}</span>
          </li>
          <li>
            <span className="label">Likes</span>
            <span className="quantity">{user.stats.likes}</span>
          </li>
        </ul>
        </div>
        )
} 

ReactDOM.createRoot(document.getElementById('root')).render(<Div />);