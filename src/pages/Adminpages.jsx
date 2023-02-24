import React from "react";

import Admin from "../components/Admin";
import { ProSidebarProvider } from "react-pro-sidebar";

function AdminPage() {
  return (
    <>
      <ProSidebarProvider>
        <Admin />
      </ProSidebarProvider>
    </>
  );
}

export default AdminPage;
