import * as React from "react";

type ButtonProps = {
  onClick: () => {};
  children: React.ReactChildren;
};

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};
