import { Outlet, ScrollRestoration } from "react-router-dom";
import { AppLayout } from "./AppLayout";
export const RootLayout = () => (
  <AppLayout>
    <ScrollRestoration />
    <Outlet />
  </AppLayout>
);