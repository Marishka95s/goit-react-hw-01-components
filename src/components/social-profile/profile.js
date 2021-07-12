import React from "react";
import PropTypes from 'prop-types';
import SocialProfile from './social-profile';

const Profile = ({ items }) => (
    <ul className="profiles__list">
    {items.map(({ name, tag, location, stats, avatar }) => (
        <li key={name}>
          <SocialProfile 
            name={name} 
            tag={tag} 
            location={location} 
            avatar={avatar} 
            statsFollowers={stats.followers} 
            statsViews={stats.views} 
            statsLikes={stats.likes} />
          </li>
        )
    )}
    </ul>
    )

Profile.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape(
      {
        name: PropTypes.string.isRequired,
      })
  ).isRequired,
};

export default Profile;