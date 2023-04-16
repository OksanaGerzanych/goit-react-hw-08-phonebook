import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBarr } from "../AppBar/AppBar";
import { Container } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <Container>
      <AppBarr />
       <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};