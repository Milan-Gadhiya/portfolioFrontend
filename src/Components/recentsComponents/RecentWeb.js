import React from "react";

export default function RecentWeb(props) {
  const { website } = props;
  return (
    <div class="shop col-lg-3 col-md-4 col-sm-6">
      <div class="shopBack">
        <img src={website.image} alt={website.name}  />
        <div class="shoplebal">
          <a href={website.projectLink} target="_blank">Read More</a>
        </div>
      </div>
      <div class="shoptext">
        <p>{website.name}</p>
        <h3>{website.description.substring(0, 50)}....</h3>
      </div>
    </div>
  );
}
