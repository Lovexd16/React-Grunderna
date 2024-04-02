import { useState } from "react";
import Form from "./Components/Form";
import Message from "./Components/Message";

type FormData = {
  title: string;
  reciever: string;
  message: string;
};

function App() {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    reciever: "",
    message: "",
  });

  const handleSubmit = (data: FormData) => {
    setFormData(data);
  };

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
        <Form onSubmit={handleSubmit} />
        <Message formData={formData} />
      </div>
    </>
  );
}

export default App;
