// import { createSignal } from "solid-js";
// import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import {  Badge } from "solid-bootstrap";
function App() {
  // const [greetMsg, setGreetMsg] = createSignal("");
  // const [name, setName] = createSignal("");

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   setGreetMsg(await invoke("greet", { name: name() }));
  // }...

  return (
    <div class="container">
      <h1>Welcome to Tauri!</h1>

   
      

      <h1>Example heading <Badge>New</Badge></h1>
    </div>
  );
}

export default App;
