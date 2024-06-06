import { useContext, useState } from "react";
import dataContext from "../Context/dataContext";
import UpdateContact from "./updateContact";

export default function Contact() {
  const { contacts, handleDelete } = useContext(dataContext);

  const [isEdit, setEditToggle] = useState(false);
  const [updateContact, setUpdateContact] = useState({});

  const handleEdit = (contact) => {
    setEditToggle(true);
    setUpdateContact(contact);
  };

  return (
    <div className="relative flex flex-col w-full  justify-center items-center text-center">
      <h1 className="text-3xl font-bold m-2">Contact</h1>

      {isEdit && (
        <UpdateContact
          setEditToggle={setEditToggle}
          updateContact={updateContact}
          setUpdateContact={setUpdateContact}
        />
      )}

      <div className="flex flex-col bg-gray-100 w-5/6 ">
        <ul className="space-y-4">
          {contacts.map((contact, index) => {
            return (
              <li
                key={index}
                className=" w-5/6 border-b-2 border-black rounded-md"
              >
                <div className="flex flex-row space-x-4 justify-around">
                  <div className="flex space-x-4 text-xl font-semibold">
                    <h1>{index + 1}.</h1>
                    <h1>{contact.name}</h1>
                  </div>
                  <div className="flex flex-col ">
                    <h1>Email : {contact.email}</h1>
                    <h1>Address : {contact.address.street}</h1>
                    <h1>Phone : {contact.phone}</h1>
                    <h1>Company : {contact.company.name}</h1>
                  </div>
                  <div className="space-x-2 m-2">
                    <button
                      onClick={() => handleEdit(contact)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
