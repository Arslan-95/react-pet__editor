import React from "react";

function Image({ id }) {
  const [image, setImage] = React.useState();

  function changeImage(event) {
    if (event.currentTarget.files[0]) {
      const file = event.currentTarget.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="editor__image">
      <img src={image} alt="Your_Image" />
      <input type="file" onInput={changeImage} name={`image_${id}`} />
    </div>
  );
}

export default Image;
