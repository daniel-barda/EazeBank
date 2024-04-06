import styled from "styled-components";
import Sidebar from "../ui/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const StyledAppLayout = styled.div`
  height: 100dvh;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
`;

const Main = styled.main`
  padding: 2rem 4rem;
  background-color: #f8f9fa;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />

      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
