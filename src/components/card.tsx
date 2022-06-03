import { FC } from "react";

interface CardProps {
  name: string;
  heroType: "Melee" | "Ranged";
}

const Card: FC<CardProps> = (props) => {
  return (
    <div
      style={{
        margin: "5px",
        width: "300px",
        height: "100px",
        backgroundColor: props.heroType === "Melee" ? "green" : "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ fontWeight: "bold", color: "white" }}>{props.name}</div>
    </div>
  );
};

export { Card };
