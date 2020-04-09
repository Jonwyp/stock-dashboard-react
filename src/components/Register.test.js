import React from "react";
import { shallow } from "enzyme";
import Register from "./Register";

describe("Registration page", () => {
  it("should change username state when input is typed", () => {
    const render = shallow(<Register />);
    const usernameInput = render.find({ placeholder: "username" });
    usernameInput.simulate("change", { target: { value: "user1" } });
    expect(render.state().username).toEqual("user1");
  });

  it("should change password state when input is typed", () => {
    const render = shallow(<Register />);
    const passwordInput = render.find({ placeholder: "password" });
    passwordInput.simulate("change", { target: { value: "123456" } });
    expect(render.state().password).toEqual("123456");
  });
  it("should change first name state when input is typed", () => {
    const render = shallow(<Register />);
    const firstNameInput = render.find({ placeholder: "first name" });
    firstNameInput.simulate("change", { target: { value: "John" } });
    expect(render.state().firstName).toEqual("John");
  });

  it("should change last name state when input is typed", () => {
    const render = shallow(<Register />);
    const lastNameInput = render.find({ placeholder: "last name" });
    lastNameInput.simulate("change", { target: { value: "Doe" } });
    expect(render.state().lastName).toEqual("Doe");
  });

  it("should change email state when input is typed", () => {
    const render = shallow(<Register />);
    const emailInput = render.find({ placeholder: "email" });
    emailInput.simulate("change", { target: { value: "johndoe@email.com" } });
    expect(render.state().email).toEqual("johndoe@email.com");
  });
});
