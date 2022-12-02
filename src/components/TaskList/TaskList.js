import React from "react";
import './tasklist.css';
import { ReactPropTypes } from "react";

function TaskList( { title } ) {
    return(
        <div className="tasklist">
            <div className="title">{ title }</div>
            <div className="content"></div>
        </div>
    );
}

export default TaskList;

TaskList.PropTypes = {
    title: ReactPropTypes.string.isRequired
};