import React from "react";
import { useAuth } from "../../hook/useAuth";
import { useNavigate } from "react-router-dom";

export const ProfilePage = (): JSX.Element => {
  const { signOut }: any = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      PROFILE
      <button onClick={() => signOut(() => navigate('/login', { replace: true }))}>ВЫЙТИ</button>
    </div>
  )
}
