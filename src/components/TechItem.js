import React from "react";

function TechItem({ tech, OnDelete}) {
  return (
    <li>
      {tech}
      <button onClick={OnDelete} type="button">Remover</button>
    </li>
  );
}

export default TechItem;
