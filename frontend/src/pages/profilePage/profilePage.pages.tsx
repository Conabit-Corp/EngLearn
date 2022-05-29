import { useAuth } from "../../hook/useAuth";
import { useNavigate } from "react-router-dom";
import { TODO_ANY } from "../../TODO_ANY";

export const ProfilePage = (): JSX.Element => {
  const { signOut }: TODO_ANY = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      PROFILE
      <button
        onClick={
          () => signOut(
            () => {
              localStorage.removeItem('token'),
                navigate('/login', { replace: true })
            }
          )
        }
      >
        ВЫЙТИ
      </button>
    </div>
  )
}
