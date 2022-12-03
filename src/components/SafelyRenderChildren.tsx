import React, { Children, FC } from "react";

export const SafelyRenderChildren: FC = ({ children }) => {
  const count = Children.count(children);
  if (count > 5000) {
    return <span>You're attempting to render too many children</span>;
  }

  return <>{children}</>;
};
