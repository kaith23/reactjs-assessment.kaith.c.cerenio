import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "../components/Table";
import { useNavigate } from 'react-router-dom';

function Home() {
  const [isLoading, setLoading] = useState(true);
  const [users, setUsers] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/users").then((response) => {
      setUsers(response.data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "grey",
        }}
      >
        Loading...
      </div>
    );
  }

  console.log(users);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#A100FF] to-[#B63FFC]">
      <div className="flex h-96 w-auto flex-col rounded-md bg-white p-3 shadow-xl">
        <img
          className="w-32 pb-8"
          src="https://brandpalettes.com/wp-content/uploads/2020/04/Accenture-Logo-300x79.png?ezimgfmt=ngcb1/notWebP"
        />
        <Table data={users} />
      </div>
    </div>
  );
}

export default Home;

