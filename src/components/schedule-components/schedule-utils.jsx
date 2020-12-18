import React from 'react';
import "../../styles/sassets/schedule.scss";

// Course Data Import
import content_structure from "../../course-data/curriculum/content-structure.json";
import general_config from "../../course-data/general.config.json";
import lecture_data from "../../course-data/curriculum/lecture-data.json";
import lab_data from "../../course-data/curriculum/lab-data.json";
import disc_data from "../../course-data/curriculum/discussion-data.json";
import proj_data from "../../course-data/curriculum/projects-data.json";
import readings_data from "../../course-data/curriculum/readings-data.json";

export function getContentNumbers(contentType) {
    let content_mapping = {
        "lectures" : lecture_data,
        "labs" : lab_data,
        "discussion" : disc_data,
        "readings" : readings_data,
        "projects" : proj_data
    }

    let source_content = content_mapping[contentType];

    let weeks = Object.keys(content_structure).length;
    let content_numbering = {}
    var count = 1;
    for (let week = 1; week <= weeks; week++) {
        let week_content = content_structure[week][contentType]
        for (let i = 0; i < week_content.length; i++) {
            let content = week_content[i];
            let exists = source_content[content]
            if (exists !== undefined) {
                content_numbering[content] = count;
                count += 1;
            }
        }
    }
    return content_numbering;
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
    return Math.min(Math.floor(difference / 7), 15);
}

export class Link {

    constructor(title, dest, icon) {
        this.title = title;
        this.dest = dest;
        this.icon = icon;
    }

}
