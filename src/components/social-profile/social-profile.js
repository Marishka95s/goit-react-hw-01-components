import React from "react";
import PropTypes from 'prop-types';
import defaultAvatar from './defaultavatar.png';


const SocialeProfile = ({ name, tag, location, statsFollowers: followers, statsViews: views, statsLikes: likes, avatar }) => (
    <div className="profile">
    <div className="description">
      <img
        src={avatar}
        alt="Аватар пользователя"
        className="avatar"
      />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
  
    <ul className="stats">
      <li className="stats__item">
        <span className="label">Followers</span>
        <span className="quantity">{followers}</span>
      </li>
      <li className="stats__item">
        <span className="label">Views</span>
        <span className="quantity">{views}</span>
      </li>
      <li className="stats__item">
        <span className="label">Likes</span>
        <span className="quantity">{likes}</span>
      </li>
    </ul>
  </div>
    );
  
SocialeProfile.defaultProps = {
    location: "unknown location",
    avatar: defaultAvatar,
    statsFollowers: 0, 
    statsViews: 0,
    statsLikes: 0,
};

SocialeProfile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string,
    location: PropTypes.string, 
    statsFollowers: PropTypes.number,
    statsViews: PropTypes.number,
    statsLikes: PropTypes.number,
    avatar: PropTypes.string,
};

export default SocialeProfile;