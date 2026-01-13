import { useState } from "react";
import API from "../../api/axios";

const IssueBook = () => {
  const [bookId, setBookId] = useState("");
  const [memberId, setMemberId] = useState("");

  const issue = async () => {
    await API.post("/issues/issue", { bookId, memberId });
    alert("Book Issued");
  };

  return (
    <div>
      <h3>Issue Book</h3>
      <input placeholder="Book ID" onChange={e => setBookId(e.target.value)} />
      <input placeholder="Member ID" onChange={e => setMemberId(e.target.value)} />
      <button onClick={issue}>Issue</button>
    </div>
  );
};

export default IssueBook;
