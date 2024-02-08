import React from "react";

const MaxWidthWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="px-10 py-6">{children}</div>;
};

export default MaxWidthWrapper;
