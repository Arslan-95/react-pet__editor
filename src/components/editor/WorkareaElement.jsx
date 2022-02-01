import Image from "./Image";

function WorkareaElement(props) {
  const { id } = props;
  const name = props.name || "";

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
    >
      {readAndWriteElement(name)}
    </div>
  );
}

export default WorkareaElement;
