// components/Layout/Layout.tsx
import type { ReactNode } from "react";
import { Navigation } from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { Main, Wrapper } from "./Layout.styled";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};
