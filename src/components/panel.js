import React from "react";

const Panel = ({ className, title, taskName, children}) => (
<div className={"task-panel" + ' ' + className}>
    <h2>{title}</h2>
    <h3>{taskName}</h3>
    {children}
</div>
);

export default Panel;