import React from "react";
import WorkareaElement from "./WorkareaElement";

function Workarea({elements, onChange, onDrop}) {
  return (
    <div
      className="editor__workarea editor-workarea"
      onDragOver={(event) => event.preventDefault()}
      onDrop={onDrop}
    >
      <h3 className="title">Workarea</h3>
      {elements.map(({id,name}, index) => (
        <WorkareaElement
          key={index}
          id={id}
          onChange={onChange}
          name={name}
          position="workarea"
        />
      ))}
    </div>
  );
}

export default Workarea;
