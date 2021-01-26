import React from "react";

// Styles
import "../styles/main.scss"
import "../styles/sassets/dashboard.scss"

// Components
import NavigationBar from "../components/navigation.jsx";
import { renderQuickLinks } from "../components/quick-links.jsx";
import currentWeekContent from "../components/weeklyschedule.jsx";
import CourseCalendar from "../components/schedule-components/calendar.jsx";
import { getContentTypes, getContentSource } from "../components/course-data-util";
import { Head } from "../components/head.jsx";
import { Spinner } from "react-bootstrap";
global.XMLHttpRequest = require('xhr2');

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      course_data : {}
    }

    this.testGetContentSource = this.testGetContentSource.bind(this);
    this.finishedLoadingData = this.finishedLoadingData.bind(this);
  }

  componentDidMount() {
    let contentTypes = getContentTypes();
    for (let i = 0; i < contentTypes.length; i++) {
      const contentType = contentTypes[i];
      let course_data = this.state.course_data;
      getContentSource(contentType)
        .then(json => this.setAndReturn(course_data, contentType, json))
        .then(dict => this.setState({
          course_data : dict
        }))
    }
  }

  setAndReturn(dict, key, value) {
    dict[key] = value;
    return dict;
  }

  testGetContentSource() {
    console.log(this.state);
  }

  finishedLoadingData() {
    return Object.keys(this.state.course_data).length === getContentTypes().length;
  }

  loadHomeScreen() {
    if (this.finishedLoadingData()) {
      return (
            <div className="container-fluid">
              <h1>
                Dashboard
              </h1>
              { renderQuickLinks() }
              <div className="content-body">
                { currentWeekContent(this.state.course_data) }
                { <CourseCalendar /> }
              </div>
            </div>
      )
    }
    return (
      <div className="container loading-screen">
        <Spinner animation="border" variant="primary" size="lg" style={{"margin":"auto"}}/>
      </div>
    )
  }

  render() {
    return (
      <div>
        <Head />
        <NavigationBar />
        { this.loadHomeScreen() }
      </div>
    )
  }
}

export default Home;