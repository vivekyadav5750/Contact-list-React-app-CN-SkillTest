import { useContext } from "react";
import dataContext from "../Context/dataContext";

export default function UpdateContact(props) {

    const { setEditToggle, updateContact, setUpdateContact, index } = props;
    const { handleUpdate } = useContext(dataContext);

    const handleEditSubmit = (id) => {
        //reteive data from input fields
        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const address = document.querySelector('input[name="address"]').value;
        const phone = document.querySelector('input[name="phone"]').value;
        const company = document.querySelector('input[name="company"]').value;
        //make an object
        const updatedContactData = {
            id: id,
            name: name,
            email: email,
            address: {
                street: address,
            },
            phone: phone,
            company: {
                name: company,
            },
        };
        console.log("updatedContactData : ", updatedContactData);
        //call handleUpdate function
        handleUpdate(index, updatedContactData);
        //close the form
        setEditToggle(false);
        setUpdateContact({});

    };  

  return (
    <>
      <div className="fixed top-16 w-1/4 h-72 bg-blue-300 rounded-md ">
        <h1 className="text-2xl font-semibold">Update Contact</h1>
        <form className="flex flex-col text-lg space-y-2   rounded-md p-2 justify-between">
          <label className="flex justify-between">
            Name:
            <input
              className="border-2 border-black rounded-md"
              type="text"
              name="name"
              defaultValue={updateContact.name}
            />
          </label>
          <label className="flex justify-between">
            Email:
            <input
              className="border-2 border-black rounded-md"
              type="text"
              name="email"
              defaultValue={updateContact.email}
            />
          </label>
          <label className="flex justify-between">
            Address:
            <input
              className="border-2 border-black rounded-md"
              type="text"
              name="address"
              defaultValue={updateContact.address.street}
            />
          </label>
          <label className="flex justify-between">
            Phone:
            <input
              className="border-2 border-black rounded-md"
              type="text"
              name="phone"
              defaultValue={updateContact.phone}
            />
          </label>
          <label className="flex justify-between">
            Company:
            <input
              className="border-2 border-black rounded-md"
              type="text"
              name="company"
              defaultValue={updateContact.company.name}
            />
          </label>
          <div className="flex justify-around">
            <button
              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={() => handleEditSubmit(updateContact.id)}
            >
              Submit
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              type="button"
                onClick={() => setEditToggle(false)}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
