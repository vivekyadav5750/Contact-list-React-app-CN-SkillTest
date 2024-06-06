import { createBrowserRouter } from "react-router-dom";
import ContactPage from "./Pages/contactPage";
import NewContactPage from "./Pages/newContactPage";
import Layout from "./Layout";

export default createBrowserRouter([
    {
        path: "/",
        element : <Layout />,
        children: [
            {
                index: true,
                element: <ContactPage/>
            },
            {
                path: "/newContact",
                element: <NewContactPage/>
            }
        ]

    }
])

