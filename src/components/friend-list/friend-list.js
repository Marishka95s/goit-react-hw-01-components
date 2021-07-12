import React from "react";
import PropTypes from 'prop-types';
import FriendListItem from './friend-list-item';

const FriendList = ({ items }) => (
    <ul class="friend-list">
    {items.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className="item3">
          <FriendListItem 
            name={name} 
            status={isOnline} 
            avatar={avatar} />
          </li>
        )
    )}
    </ul>
    )

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
      })
  ).isRequired,
};

export default FriendList;