import React from "react";
import uuid from "react-uuid";
import DragElement from "./DragElement";

function Editor(props) {
  const [dragElements, setDragElements] = React.useState({
    sidebar: [...props.elements],
    workarea: [],
  });

  const [currentElement, setCurrentElement] = React.useState({});

  const setElementToWorkArea = () => {
    console.log(currentElement);
    const workarea = dragElements.workarea;
    const element = currentElement;

    if (!element) {
      return;
    }

    workarea.push({ ...element, id: uuid() });

    // Add workarea to state
    setDragElements((state) => ({
      ...state,
      workarea,
    }));

    // clean current element.
    setCurrentElement(null);
  };

  const takeElement = (event) => {
    const id = event.currentTarget.id;
    const element = dragElements.sidebar.find(
      (element) => `editor__item${element.id.toString()}` === id.toString()
    );
    setCurrentElement({ ...element });
  };

  const setWorkareaState = (id, obj) => {
    console.log(dragElements.workarea);
    console.log(id, obj);
  };

  return (
    <div className="editor">
      <div className="editor__sidebar editor-sidebar">
        <h3 className="title">Sidebar</h3>
        {dragElements.sidebar.map((item) => (
          <DragElement
            key={item.id}
            id={`editor__item${item.id}`}
            position="sidebar"
            name={item.name}
            onDragStart={takeElement}
          />
        ))}
      </div>
      <div
        className="editor__workarea editor-workarea"
        onDragOver={(event) => event.preventDefault()}
        onDrop={setElementToWorkArea}
      >
        <h3 className="title">Workarea</h3>
        {dragElements.workarea.map((item) => (
          <DragElement
            key={item.id}
            id={item.id}
            onChange={setWorkareaState}
            name={item.name}
            position="workarea"
          />
        ))}
      </div>
    </div>
  );
}

export default Editor;
