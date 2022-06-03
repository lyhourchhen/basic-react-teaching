import { FC, Fragment } from "react";
import { Link } from "react-router-dom";

export interface NavProps {}

export const Nav: FC<NavProps> = (props) => {
  return (
    <Fragment>
      <Link to={"/"}>Home</Link>
      <Link to={"/state"}>State</Link>
    </Fragment>
  );
};
