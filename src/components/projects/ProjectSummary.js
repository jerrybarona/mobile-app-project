import React from "react";
import moment from "moment";

const ProjectSummary = ({ project }) => {
  const getCalendarDate = seconds => moment.unix(seconds).calendar();
  const calendarDate = getCalendarDate(project.createdAt.seconds);

  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{project.title}</span>
        <p>
          Posted by {project.authorFirstName} {project.authorLastName}
        </p>
        <p className="grey-text">{calendarDate}</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
