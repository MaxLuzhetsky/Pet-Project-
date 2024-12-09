import React from "react";

import SingUpForm from "./components/SingUpForm.tsx";
import ChatContainer from "./components/ChatContainer.tsx";
import FormContainer from "./components/FormContainer.tsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SingUpForm />
      <ChatContainer>
        <FormContainer />
      </ChatContainer>
    </div>
  );
}

export default App;
