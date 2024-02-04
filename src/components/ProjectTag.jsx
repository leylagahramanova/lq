import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const tagStyles = isSelected ? 'tag orange selected' : 'tag orange';

  return (
    <label
      className={tagStyles}
      onClick={() => onClick(name)}
    >
      {name}
    </label>
  );
};

export default ProjectTag;
