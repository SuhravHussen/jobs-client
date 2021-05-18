import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Details.css";
const Details = () => {
  const [details, setDetails] = useState({});

  const { id } = useParams();
  useEffect(() => {
    fetch("http://localhost:4000/jobs")
      .then((res) => res.json())
      .then((data) => setDetails(data.find((d) => d.id == id)));
  }, []);
  console.log(details);
  const someHtml = details.description;
  const applyHtml = details.how_to_apply;
  return (
    <div className="details-container">
      <img src={details.company_logo} alt="" />
      <h1>{details.company}</h1>
      <h2>Location: {details.location}</h2>
      <h3
        className="detail"
        dangerouslySetInnerHTML={{ __html: someHtml }}
      ></h3>
      <h3 dangerouslySetInnerHTML={{ __html: applyHtml }}></h3>
    </div>
  );
};

export default Details;
