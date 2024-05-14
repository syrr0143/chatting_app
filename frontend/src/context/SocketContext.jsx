import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from 'socket.io-client';

const socketContext = createContext();
export const useSocketContext = () => useContext(socketContext);

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineusers, setOnlineusers] = useState([]);
    const { authUser } = useAuthContext();

    useEffect(() => {
        console.log('AuthUser:', authUser);
        if (authUser) {

            const newSocket = io('http://localhost:4000', {
                query: { userid: authUser.user?._id },
            });
            setSocket(newSocket);

            newSocket.on('connect', () => {
                console.log('Socket connected:', newSocket.id);
            });

            newSocket.on('getOnlineUsers', (users) => {
                console.log('Received online users:', users);
                setOnlineusers(users);
            });

            return () => {
                console.log('Disconnecting socket:', newSocket.id);
                newSocket.close();
            };
        } else {
            if (socket) {
                console.log('Closing existing socket:', socket.id);
                socket.close();
            }
            setSocket(null);
            setOnlineusers([]);
        }
    }, [authUser]);

    return (
        <socketContext.Provider value={{ socket, onlineusers }}>
            {children}
        </socketContext.Provider>
    );
};
