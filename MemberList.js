import { useEffect, useState } from "react";
import API from "../../api/axios";

const MemberList = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    API.get("/members").then(res => setMembers(res.data));
  }, []);

  return (
    <div>
      <h3>Members</h3>
      {members.map(m => (
        <p key={m._id}>{m.name}</p>
      ))}
    </div>
  );
};

export default MemberList;
