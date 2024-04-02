import React from "react";

interface FormData {
  title: string;
  reciever: string;
  message: string;
}

interface MessageProps {
  formData: FormData;
}

function Message({ formData }: MessageProps) {
  const { title, reciever, message } = formData;

  return (
    <div style={{ backgroundColor: "black", color: "white", width: "50%" }}>
      <h1>Rubrik: {title}</h1>
      <p>Mottagare: {reciever} </p>
      <p>Meddelande: {message} </p>
    </div>
  );
}

export default Message;
