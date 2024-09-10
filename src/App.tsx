import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Medali } from "./components/Medali";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { User } from "./components/state/User";
import { LoggedIn } from "./components/state/LoggedIn";

function App() {
  const personName = {
    first: "Hilmy",
    last: "Haidar",
  };
  const nameList = [
    { first: "Azzah", last: "Fathimah" },
    { first: "Usman", last: "Pamungkas" },
    { first: "Kopriyanto", last: "Kopriyanto" },
  ];
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Heading>Placeholder heading</Heading>
      <Medali>
        <Heading>Medali dipersembahkan oleh Haidar</Heading>
      </Medali>

      <Greet name="Haidar" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />

      <Status messages="loading" />

      <Button
        handleClick={(event) => {
          console.log("Button clicked", event);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />

      <LoggedIn />
      <User />
    </div>
  );
}

export default App;
