import React, { useEffect, useState, useRef } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [TodoList, setTodoList] = useState([]);

  const ref = useRef(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newValue = inputValue;

    setTodoList([...TodoList, newValue]);

    setInputValue("");

    ref.current.value="";
  
  };

  const handleDelete = (index) =>{
    setTodoList((previous)=>{
      const updatedList = [...previous];
      updatedList.splice(index,1);
      return updatedList;
    });
  }


  return (
    <>
      <div className="main-content">
        <div className="header">
          <p>TODO APP | Alisangco </p>
        </div>

        <form onSubmit={handleSubmit}>
          <input type="text" name="input" onChange={handleChange} ref={ref} required/>
          <input type="submit" value="ADD" />
        </form>
      
        {TodoList.map((item, index) => (
          <div className="items" key={index}>
            {item}

            <button onClick={()=>{handleDelete(index)}}>DELETE</button>
          </div>
        ))}

      </div>
    </>
  );
}

export default App;
