import React, { useEffect } from 'react';
import "./styles.css";
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

function Header() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, loading, navigate]);

  function logoutFnc() {
    signOut(auth)
      .then(() => {
        toast.success("Logged Out Successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }

  return (
    <div className="navbar">
      <p className="logo">FinTrack.</p>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        user && (
          <p className="logo link" onClick={logoutFnc}>
            Logout
          </p>
        )
      )}
    </div>
  );
}

export default Header;
