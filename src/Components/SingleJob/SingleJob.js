import React from "react";
import { useHistory } from "react-router";
import "./Singlejob.css";
const SingleJob = ({ data }) => {
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/details/${id}`);
  };
  return (
    <div className="singleJob-container">
      <img src={data.company_logo} alt="" />
      <h2>{data.company}</h2>
      <h3>{data.title}</h3>
      <button onClick={() => handleClick(data.id)}>Read More</button>
    </div>
  );
};

export default SingleJob;
