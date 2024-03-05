import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />

      <Outlet />
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
