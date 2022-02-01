import React from "react";
import SidebarElement from "./SidebarElement";

function Sidebar({ elements, onDragStart }) {
  return (
    <div className="editor__sidebar editor-sidebar">
      <h3 className="title">Sidebar</h3>
      {elements.map(({ id, name }, index) => (
        <SidebarElement
          key={index}
          id={`editor__item${id}`}
          name={name}
          onDragStart={onDragStart}
        />
      ))}
    </div>
  );
}

export default Sidebar;
