import React from "react";

function SidebarElement({ name, onDragStart, id }) {
  return (
    <div
      id={id}
      className="editor__item"
      draggable={true}
      onDragStart={onDragStart}
    >
      {name}
    </div>
  );
}

export default SidebarElement;
