import Contact from "../Components/contact";
import Loader from "../Components/Loader";
import { useContext } from "react";
import dataContext from "../Context/dataContext";

export default function ContactPage() {
  const { isLoading, contacts } = useContext(dataContext);

  return <>{isLoading ? <Loader /> : <Contact contacts={contacts} />}</>;
}
