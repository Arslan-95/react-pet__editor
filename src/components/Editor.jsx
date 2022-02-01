import React from "react";
import uuid from "react-uuid";
import Sidebar from "./Sidebar";
import Workarea from "./Workarea";

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
      <Sidebar elements={dragElements.sidebar} onDragStart={takeElement} />
      <Workarea
        elements={dragElements.workarea}
        onChange={setWorkareaState}
        onDrop={setElementToWorkArea}
      />
    </div>
  );
}

export default Editor;
