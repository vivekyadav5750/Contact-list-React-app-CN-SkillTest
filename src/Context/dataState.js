import { useEffect, useState } from "react";
import dataContext from "./dataContext";

const DataState = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [contacts, setContacts] = useState([]);

  const handleDelete = (id) => {
    console.log("id : ", id);
    const newContacts = contacts.filter((contact) => contact.id !== id);
    console.log("newContacts : ", newContacts);
    setContacts(newContacts);

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("DELETE REQUEST  : ", data);
      });
  };

  const handleAdd = (newContact) => {
    //add id in newContact
    newContact.id = contacts.length + 1;
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(newContact),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("POST REQUEST data : ", data);
      });
  };

  //update contact

  const handleUpdate = (id, updatedContact) => {
    const newContacts = contacts.map((contact) =>
      contact.id === id ? updatedContact : contact
    );
    setContacts(newContacts);

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
        body: JSON.stringify({updatedContact}),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("PUT REQUEST data : ", data);
      });
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setContacts(data);
        console.log("data : :::::::");
        setLoading(false);
      });
  }, []);

  return (
    <dataContext.Provider
      value={{ isLoading, contacts, handleAdd, handleDelete, handleUpdate }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default DataState;
