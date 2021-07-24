import TodoList from "./components/todoList";
import Button from "@atlaskit/button";
import TextField from "@atlaskit/textfield";
import { useState } from "react";
import { v4 } from "uuid";
//neu chi la func app rerender se tao moi 2 bien onInputChange,addClickBtn
function App() {
  const [Todolist, settodoList] = useState([]); // array ,todoList luu tru state , set de cap nhat state
  const [text, setTextInput] = useState("");
  const onInputChange = (e) => {
    setTextInput(e.target.value);
  };
  const removeClickBtn = (e) => {
      
  }
  const isCompleted = (e) =>{}
  const addClickBtn = (e) => {
    settodoList([...Todolist, { id: v4(), name: text, isConpleted: false }]);
  };
  return (
    <>
      <h3> Danh sach can lam</h3>
      <TextField
        name="add-todo"
        placeholder="Them Viec Can Lam"
        elemAfterInput={
          <Button
            isDisabled={!text}
            onClick={addClickBtn}
            appearance="primary"
          >
            ADD
          </Button>
        }
        css={{ padding: "4px 4px 4px  " }}
        value={text}
        onChange={onInputChange}
      ></TextField>
      <TodoList Todolist={Todolist} />
    </>
  );
}

export default App;
