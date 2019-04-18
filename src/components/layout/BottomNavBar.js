import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import DashboardIcon from "@material-ui/icons/DashboardTwoTone";
import ProjectAddIcon from "@material-ui/icons/NoteAddTwoTone";

const styles = {
  root: {
    width: 500
  }
};

class BottomNavBar extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, auth } = this.props;
    const { value } = this.state;

    if (auth.uid) {
      return (
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction label="Dashboard" icon={<DashboardIcon />} />
          <BottomNavigationAction
            label="Add Project"
            icon={<ProjectAddIcon />}
          />
        </BottomNavigation>
      );
    } else {
      return <div />;
    }
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(withStyles(styles)(BottomNavBar));
