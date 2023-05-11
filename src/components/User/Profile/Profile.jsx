import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Profile.scss";
const Profile = () => {
  const email = localStorage.getItem("email"); // get email from local storage
  const state = {
    name: "FirstName",
    surname: "LastName",
    phone: "+1 123 456 789",
    position: "Software Engineer",
    about: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
     printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
     Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'`,
  };

  return (
    <div className="profile">
      <Navbar name={state.name} />
      <div className="content">
        <div className="data">
          <div className="data-inside">
            <label className="label">
              <h4>Full Name: </h4> {`${state.name} ${state.surname}`}
            </label>
            <label className="label">
              <h4>Email:</h4> {email}
            </label>
          </div>
          <div className="data-inside">
            <label className="label">
              <h4>Phone:</h4> {state.phone}
            </label>
            <label className="label">
              <h4>Position:</h4> {state.position}
            </label>
          </div>
        </div>
        <div className="about">
          <h3>About Me :</h3>
          <p> {state.about}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
