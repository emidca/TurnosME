import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserAuth } from "./../context/AuthContext";
import { FaUserAlt, FaWifi } from "react-icons/fa";
export const Header = () => {
  //console.count("HEADER");
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const { googleSignIn, user, logOut } = UserAuth();
  let navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) navigate("/");
    else navigate("/login");
  }, [user]);

  useEffect(() => {
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", handleStatusChange);
    window.addEventListener("offline", handleStatusChange);

    return () => {
      window.removeEventListener("online", handleStatusChange);
      window.removeEventListener("offline", handleStatusChange);
    };
  }, [isOnline]);

  return (
    <div className="header-container">
      <Link className="link" to={"/"}>
        Turnos
      </Link>
      <Link className="link" to={"/ficha"}>
        Ficha
      </Link>
      {!isOnline && <FaWifi className="off-line" />}
      {user ? (
        <img
          onClick={handleSignOut}
          className="avatar"
          src={user?.photoURL}
          alt="user"
        />
      ) : (
        <FaUserAlt onClick={handleGoogleSignIn} className="icon" />
      )}
    </div>
  );
};
