import { useParams } from "react-router-dom";

export const Collection = () => {
  const { id } = useParams();

  return (
    <div>
      Collection id: {id}
    </div>
  )
}
