import React, { useEffect } from 'react'
import Image from 'next/image'
import { auth } from '../../firebase'
import { getAuth, signInWithCredential, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';

const NavBar = ({user}) => {
    // const auth = getAuth();
    
    const googleAuth = new GoogleAuthProvider();

    const login = async() => {
        const result = await signInWithPopup(auth, googleAuth);
    }

    const logout = async() => {
        signOut(auth).then(()=>{
            console.log("Successfully logged out.");
            
        }).catch((error) => {
            console.log(error);
            
        })
    }

    

  return (
    <div className=" w-full bg-gray-100 shadow-inner p-3 bg-blur px-8 border-b-4 border-orange-600">
        <div className=" flex flex-row justify-between items-center">
            <div>
                <Image className="rounded-full shadow-sm cursor-pointer border-2 border-orange-600" src="/yoga-classes-logo.png" width={50}
      height={50} />
            </div>
            <ul className="md:flex hidden font-semibold text-gray-400 flex-row text-sm space-x-4">
                <li className="cursor-pointer p-2 text-orange-600  " >Home</li>
                <li className="cursor-pointer p-2 hover:text-orange-600">Contact Us</li>
                <li className="cursor-pointer p-2 hover:text-orange-600">About Us</li>
                <li className="cursor-pointer p-2 hover:text-orange-600">Your Pass</li>
            </ul>
            <div>
                { (user!=null) ? <p onClick={logout} className="uppercase cursor-pointer rounded-full bg-orange-600 shadow-md text-white font-bold truncate w-1 px-4 flex justify-center py-1">{user.displayName[0]}</p> : <button className="px-3 py-2 text-sm font-semibold shadow-md border-gray-300 text-gray-500 hover:text-black rounded-md hover:shadow-inner" onClick={login}>Sign in</button>}

            </div>
        </div>
    </div>
  )
}

export default NavBar