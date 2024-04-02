import Form from "./Components/Form";
import Message from "./Components/Message";

function App() {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "3rem",
          textDecoration: "underline",
        }}
      >
        Message Machine
      </h1>
      <div style={{ display: "flex" }}>
        <Form />
        <Message />
      </div>
    </>
  );
}

export default App;
