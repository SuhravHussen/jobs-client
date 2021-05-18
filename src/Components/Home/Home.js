import React, { useEffect, useRef, useState } from "react";
import SingleJob from "../SingleJob/SingleJob";
import "./Home.css";

const Home = () => {
  const inputEl = useRef(null);

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data.slice(0, 20)));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    let serachJob = { search: inputEl.current.value };

    fetch("http://localhost:4000/search", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serachJob),
    })
      .then((res) => res.json())
      .then((data) => setJobs(data.slice(0, 20)));
  };

  return (
    <div className="Home-container">
      <form action="" onSubmit={handleSearch}>
        <input
          ref={inputEl}
          className="search__input"
          type="text"
          placeholder="Search   ex: company, technology, position"
        ></input>
        <input className="search-btn" type="submit" value="Search" />
      </form>

      <div className="jobs-container">
        {jobs.map((job) => (
          <SingleJob data={job} key={job.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
