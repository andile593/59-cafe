import { useState, useEffect } from "react";
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase/firebase'


const useAuth  = () => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user)
            } else {
                setCurrentUser(null)
            }
        })
        return () => unSubscribe();
    }, [])

    return currentUser ? currentUser: {}
}

export default useAuth