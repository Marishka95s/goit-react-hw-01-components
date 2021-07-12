import React from "react";
import PropTypes from 'prop-types';
import defaultAvatar from './defaultavatar.png';


const FriendListItem = ({ status, avatar, name }) => (
    <>
        <span className={"status" + ' ' + (status ? "online" : "offline")}>00</span>
        <img className="avatar3" src={avatar} alt={name} width="48" />
        <p className="name3">{name}</p>
    </>
);
  
FriendListItem.defaultProps = {
    avatar: defaultAvatar,
};

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    avatar: PropTypes.string,
};

export default FriendListItem;