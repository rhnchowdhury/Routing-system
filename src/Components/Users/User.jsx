import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const User = () => {
  const [search, setSearch] = useSearchParams();
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch({ name: name });
  };

  return (
    <div>
      <h1>User</h1>
      {/* <h3>{search.get("id")}</h3> */}
      <h3>{search.get("name")}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default User;
