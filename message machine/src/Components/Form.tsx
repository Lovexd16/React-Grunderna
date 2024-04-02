import React, { FormEvent, useState } from "react";

type SubmitHandler = (data: {
  title: string;
  reciever: string;
  message: string;
}) => void;

interface FormProps {
  onSubmit: SubmitHandler;
}

function Form({ onSubmit }: FormProps) {
  const [title, setTitle] = useState("");
  const [reciever, setReciever] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ title, reciever, message });
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        backgroundColor: "white",
        color: "black",
      }}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={title}
        placeholder="Rubrik"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={reciever}
        placeholder="Mottagare"
        onChange={(e) => setReciever(e.target.value)}
      />
      <textarea
        value={message}
        placeholder="Skriv ditt meddelande"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Skicka</button>
    </form>
  );
}

export default Form;
