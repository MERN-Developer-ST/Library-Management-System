import { useState } from "react";
import API from "../../api/axios";

const AddMember = () => {
  const [name, setName] = useState("");

  const submit = async () => {
    await API.post("/members", { name });
    alert("Member Added");
  };

  return (
    <div>
      <h3>Add Member</h3>
      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <button onClick={submit}>Add</button>
    </div>
  );
};

export default AddMember;
