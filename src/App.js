import Editor from "./components/Editor";
import "./App.css";

const editorElements = [
  { id: 1, name: "text" },
  { id: 2, name: "image" },
];

function App() {
  return (
    <div className="app">
      <Editor elements={editorElements} />
    </div>
  );
}

export default App;
