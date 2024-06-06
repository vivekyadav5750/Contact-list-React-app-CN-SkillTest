import { useContext, useEffect } from "react";
import dataContext from "../Context/dataContext";
import { useRef } from "react";

export default function NewContact() {
  const { handleAdd } = useContext(dataContext);
  const nameRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  const companyRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      address: {
        street: addressRef.current.value,
      },
      phone: phoneRef.current.value,
      company: {
        name: companyRef.current.value,
      },
    };
    handleAdd(data);

    nameRef.current.value = "";
    emailRef.current.value = "";
    addressRef.current.value = "";
    phoneRef.current.value = "";
    companyRef.current.value = "";
  };

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  return (
    <div className="space-y-6 m-2">
      <h1 className="text-3xl font-semibold">Add New Contact</h1>
      <form onSubmit={handleSubmit} className="flex flex-col text-lg space-y-2 w-80 bg-orange-400 rounded-md p-2 justify-between">
        <label className="flex justify-between">
          Name:
          <input className="border-2 border-black rounded-md"   ref={nameRef} type="text" name="name" />
        </label>
        <label className="flex justify-between">
          Email:
          <input className="border-2 border-black rounded-md" ref={emailRef} type="text" name="email" />
        </label>
        <label className="flex justify-between">
          Address:
          <input  className="border-2 border-black rounded-md" ref={addressRef} type="text" name="address" />
        </label>
        <label className="flex justify-between">
          Phone:
          <input className="border-2 border-black rounded-md"  ref={phoneRef} type="text" name="phone" />
        </label>
        <label className="flex justify-between">
          Company:
          <input  className="border-2 border-black rounded-md" ref={companyRef} type="text" name="company" />
        </label>
        <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
      </form>
    </div>
  );
}
