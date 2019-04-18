import React from "react";
import ProjectSummary from "./ProjectSummary";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

const firebase = require("firebase");

const mockProject = {
  id: 1,
  title: "foo",
  authorFirstName: "John",
  authorLastName: "Doe",
  createdAt: new firebase.firestore.Timestamp(1554972151, 191000000)
};

function renderProjectSummary(args) {
  const defaultProps = {
    project: mockProject
  };

  const props = { ...defaultProps, ...args };
  return shallow(<ProjectSummary {...props} />);
}

it("Should render ProjectSummary component and match snapshot", () => {
  const tree = renderer.create(<ProjectSummary project={mockProject} />);
  expect(tree).toMatchSnapshot();
});

it("Should find ProjectSummary component title", () => {
  const wrapper = renderProjectSummary();
  expect(wrapper.find("span").text()).toEqual(mockProject.title);
});
