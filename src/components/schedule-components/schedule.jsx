import React from 'react';
import ReactTooltip from 'react-tooltip';
import "../../styles/sassets/schedule.scss";
import general_config from "../../course-data/general-config.json";

export function ContentItem(header, subheader, links) {
    /*
        Note: only the first 2 links will be displayed.
    */

    let content_links = [];
    // TODO: Make popover
    links.slice(0, 3).forEach(
        link => content_links.push(ContentItemLink(link))
    )

    return (
    <div className="content-item">
        <div className="content-item-header">
            <h2>
                {subheader}
            </h2>
            <h1 data-tip data-for={header}>
                {header}
            </h1>
            <ReactTooltip className="tool-tip" place="top" id={header} effect="solid">
                {header}
            </ReactTooltip>
        </div>
        <div className="content-item-links">
            { content_links }
        </div>
    </div>)
}

export function SpecialContentItem(header) {
    /*
        Note: only the first 2 links will be displayed.
    */


    return (
        <div className="content-item">
            <div className="content-item-header">
                <h1 data-tip data-for={header}>
                    {header}
                </h1>
                <ReactTooltip className="tool-tip" place="top" id={header} effect="solid">
                    {header}
                </ReactTooltip>
            </div>
        </div>
    )
}

function ContentItemLink(link) {
    /*
        Link should be an object containing the following:
            - title
            - dest
            - icon
    */
   return (
       <div className="icon-bubble">
           <a href={link.dest} target="_blank" rel="noreferrer" data-tip data-for={link.title}>
                <span className="material-icons">
                    {link.icon}
                </span>
            </a>
            <ReactTooltip className="tool-tip" place="top" id={link.title} effect="solid">
                {link.title}
            </ReactTooltip>
       </div>    
   );
}

// General Utilities
function getSundayOfDate(date) {
    let d = new Date(date);
    let diff = d.getDate() - d.getDay();
    return new Date(d.setDate(diff));
}

export function getCurrentWeek() {
    let today = new Date();
    let current_sunday = getSundayOfDate(today);
    let start_sunday = getSundayOfDate(general_config["semester-start-date"])

    // date differences are returned in milliseconds. Divisor converts to days
    let divisor = 1000 * 60 * 60 * 24
    let difference = (current_sunday - start_sunday) / divisor
    return Math.floor(difference / 7);
}