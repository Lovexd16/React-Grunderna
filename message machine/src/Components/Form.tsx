import React, { useState } from "react";

function Form() {
  const [title, setTitle] = useState<string>("");
  const [reciever, setReciever] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        backgroundColor: "white",
        color: "black",
      }}
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
