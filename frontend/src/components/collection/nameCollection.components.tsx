import { useState } from "react";
import "./nameCollection.components.scss";

interface Props {
  title: string | undefined,
  description: string | undefined,
}

export const NameCollection = (props: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="nameCollection"
      onClick={() => setOpen(prevState => prevState === false ? true : false)}
    >
      <h1 className={`nameCollection__title ${open === false ? "nameCollection__hideText" : ""}`}>
        {props.title}
      </h1>
      <p className={`nameCollection__description ${open === false ? "nameCollection__hideText" : ""}`}>
        {props.description}
      </p>
    </div>
  )
}
