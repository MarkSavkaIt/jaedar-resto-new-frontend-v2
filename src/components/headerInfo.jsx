import React from "react";

const HeaderInfo = ({ label }) => {
  function getLocalDate() {
    let date = new Date(Date());

    let options = {
      year: "numeric",
      day: "numeric",
      month: "long",
      weekday: "long",
    };
    return date.toLocaleString("uk-US", options);
  }

  return (
    <div className='header-data-info'>
      <h1>{label}</h1>
      <p>{getLocalDate()}</p>
    </div>
  );
};

export default HeaderInfo;
