import { ReactNode } from "react";

const PageContainer = ({ children }: { children: ReactNode }) => {
  return <div className="bg-black min-h-screen">{children}</div>;
};

export default PageContainer;
