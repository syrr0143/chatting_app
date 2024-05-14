import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [usersChanged, setUsersChanged] = useState(false);

    const userSignedUp = () => {
        setUsersChanged(prevState => !prevState); // Toggle state to trigger effect
    };

    return (
        <UserContext.Provider value={{ usersChanged, userSignedUp }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);
