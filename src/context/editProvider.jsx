import { useState, createContext } from "react";
import PropTypes from "prop-types";

export const EditContext = createContext();

export const EditProvider = ({ children }) => {
    const [edit, setEdit] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [major, setMajor] = useState('');
    const [birth, setBirth] = useState('');
    const [alert, setAlert] = useState(false);


    return (
        <EditContext.Provider value={{ edit, setEdit, name, setName, email, setEmail, major, setMajor, birth, setBirth, alert, setAlert }}>
        {children}
        </EditContext.Provider>
    );
    };

EditProvider.propTypes = {
    children: PropTypes.node.isRequired
};
