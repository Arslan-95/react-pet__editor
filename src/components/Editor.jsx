import React from "react";
import uuid from "react-uuid";
import Sidebar from "./editor/Sidebar";
import Workarea from "./editor/Workarea";

function Editor(props) {
  const [dragElements, setDragElements] = React.useState({
    sidebar: [...props.elements],
    workarea: [],
  });

  const [currentElement, setCurrentElement] = React.useState({});

  const setElementToWorkArea = () => {
    const element = currentElement;

    if (!element) {
      return;
    }

    // Add workarea to state
    setDragElements((state) => ({
      ...state,
      workarea: state.workarea.concat({ ...element, id: uuid() }),
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
