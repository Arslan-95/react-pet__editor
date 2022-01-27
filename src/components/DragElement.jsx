import Image from "./Image";

function DragElement(props) {
  const { position = "sidebar", id, onDragStart } = props;
  const name = props.name || '';

  function readAndWriteElement(name) {
    const filteredName = name.toLowerCase();
    switch (filteredName) {
      case "text":
        return <textarea />;
      case "image":
        return <Image id={id} />;
      default:
        return name;
    }
  }

  return (
    <div
      id={id}
      className="editor__item"
      draggable={position === "sidebar" ? true : false}
      onDragStart={onDragStart}
    >
      {position !== "sidebar" ? readAndWriteElement(name) : name}
    </div>
  );
}

export default DragElement;
