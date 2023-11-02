import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    //gogle login 
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup( auth,googleProvider)
    }



    // create user

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // sign in user 


    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    //logOut User 

    const logOut = () => {
        return signOut(auth)
    }


        // update profile 


        const handleUpdateProfile = (name, photo) => {
            return updateProfile(auth.currentUser,{
                displayName:name, photoURL:photo
            })
        }



    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false)
        });

    }, []);




    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleLogin,
        logOut,
        handleUpdateProfile
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;