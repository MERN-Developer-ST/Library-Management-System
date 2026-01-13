import { useState } from "react";
import API from "../../api/axios";

const AddBook = () => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    quantity: 1,
    available: 1
  });

  const submit = async () => {
    await API.post("/books", form);
    alert("Book Added");
  };

  return (
    <div>
      <h3>Add Book</h3>
      <input placeholder="Title" onChange={e => setForm({...form, title: e.target.value})}/>
      <input placeholder="Author" onChange={e => setForm({...form, author: e.target.value})}/>
      <button onClick={submit}>Add</button>
    </div>
  );
};

export default AddBook;
