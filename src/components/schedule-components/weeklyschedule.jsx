import React from "react";
import { ContentItem, SpecialContentItem, getCurrentWeek, getContentNumbers } from "./schedule.jsx";
import content_structure from "../../course-data/curriculum/content-structure.json";
import lecture_data from "../../course-data/curriculum/lecture-data.json";
import lab_data from "../../course-data/curriculum/lab-data.json";
import disc_data from "../../course-data/curriculum/discussion-data.json";
import special_events from "../../course-data/curriculum/special-events.json";
import "../../styles/sassets/schedule.scss";

/*
    Contains the weekly schedule component + logic
*/

function WeekContent(currentWeek) {
    let week = getCurrentWeek();
    currentWeek = week;
    return (
        <div className="col week-content">
            { WeekLectureContent(currentWeek) }
            { WeekLabContent(currentWeek) }
            { WeekDiscContent(currentWeek) }
        </div>
    );  
}

// Week Section Component
function WeekContentSection(header, contentItems) {
    return (
        <div className="week-content-section">
            <h1>
                {header}
            </h1>
            <div className="content-items">
                {contentItems}
            </div>
        </div>
    );
}

function WeekLectureContent(currentWeek) {
    let contentItems = getContentItems(currentWeek, "lectures")
    return WeekContentSection("Lecture", contentItems);
}

function WeekLabContent(currentWeek) {
    let contentItems = getContentItems(currentWeek, "labs")
    return WeekContentSection("Lab", contentItems);
}

function WeekDiscContent(currentWeek) {
    let contentItems = getContentItems(currentWeek, "discussion")
    return WeekContentSection("Discussion", contentItems);
}



// Data -> Content Items

/*
    This function does the heavy lifting of accessing the curriculum data.
    Will search the contentKey by default, and fallback on special-event
    in case it can't find the
*/
function getContentItems(currentWeek, contentKey) {
    let content_mapping = {
        "lectures" : lecture_data,
        "labs" : lab_data,
        "discussion" : disc_data
    }
    let contentItems = [];

    let keys = content_structure[currentWeek][contentKey];
    let content_source = content_mapping[contentKey]
    let content_numbering = getContentNumbers(contentKey);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let number = content_numbering[key];
        var contentData = content_source[key];
        if (contentData !== undefined) {
            if (contentKey === "lectures") {
                contentItems.push(lectureDataToContentItem(contentData, number));
            }
            if (contentKey === "labs") {
                contentItems.push(labDataToContentItem(contentData, number));
            }
            if (contentKey === "discussion") {
                contentItems.push(discDataToContentItem(contentData, number));
            }
        } else {
            contentData = special_events[key]
            contentItems.push(SpecialContentItem(contentData))
        }
    }

    return contentItems;
}

/* 
    Converts a single content value (i.e one value in the lecture-data json)),
    into a ContentItem component.
    
    Inputs: 
        <content>Data: a value from lecture-data json
        contentCount: the count of the particular content (e.g. lecture 1)
*/
function lectureDataToContentItem(lectureData, contentCount) {
    let icon_1 = new Link("live session recording", lectureData["live_session_recording"], "videocam");
    let icon_2 = new Link("live session slides", lectureData["live_session_slides"], "slideshow");
    let icon_3 = new Link("more resources", "https://cs10.org", "exit_to_app");
    return ContentItem(lectureData["title"], "Lecture " + contentCount, [icon_1, icon_2, icon_3]);
}

function labDataToContentItem(labData, contentCount) {
    let icon_1 = new Link("lab page", labData["link"], "computer");
    let icon_2 = new Link("checkoff form", labData["checkoff"], "check_box");
    let icon_3 = new Link("more resources", "https://cs10.org", "exit_to_app");
    return ContentItem(labData["title"], "Lab " + contentCount, [icon_1, icon_2, icon_3]);
}

function discDataToContentItem(discData, contentCount) {
    let icon_1 = new Link("worksheet", discData["worksheet"], "create");
    let icon_2 = new Link("solutions", discData["solutions"], "done_all");
    let icon_3 = new Link("more resources", "https://cs10.org", "exit_to_app");
    return ContentItem(discData["title"], "Discussion " + contentCount, [icon_1, icon_2, icon_3]);
}

class Link {

    constructor(title, dest, icon) {
        this.title = title;
        this.dest = dest;
        this.icon = icon;
    }

}

export default WeekContent;