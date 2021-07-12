import React from "react";
import PropTypes from 'prop-types';

const Panel = ({ className, title, taskName, children}) => (
<div className={"task-panel" + ' ' + className}>
    {title && <h2>{title}</h2>}
    {taskName && <h3>{taskName}</h3>}
    {children}
</div>
);

Panel.defaultProps = {
    title: '',
    taskName: '',
}
Panel.propTypes = {
    className: PropTypes.string.isRequired,
    title: PropTypes.string,
    taskName: PropTypes.string,
    children: PropTypes.node,
};

export default Panel;