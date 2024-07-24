import { request } from "./config/request";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import React from "react";
import { Card } from "./components/Card";
import { Form } from "./components/Form";
import { get } from "react-hook-form";

function App() {
  const [state, setState] = React.useState([]);
  const notify = () => toast("Wow so easy!");
  const getData = () => {
    request.get("./todos").then((res) => {
      setState(res.data);
    });
  };

  React.useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Form refetch={getData} />
      {state.map((item) => (
        <Card refetch={getData} key={item.id} {...item} />
      ))}
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}

export default App;
