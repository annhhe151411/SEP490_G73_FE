import { Box } from "@mui/material";
import TableUsers from "~/pages/Section/User/TableUsers";
import SearchUser from "~/pages/Section/User/SearchUsers";
import TopNav from "./TopNav";

import { useCallback, useEffect, useState } from "react";
import TableTest from "../Section/User/TableTest";

const Dashboard = () => {
  const [openNav, setOpenNav] = useState(false);

  const handlePathnameChange = useCallback(() => {
    if (openNav) {
      setOpenNav(false);
    }
  }, [openNav]);

  useEffect(() => {
    handlePathnameChange();
  });

  return (
    <>
      <TopNav onNavOpen={() => setOpenNav(true)} />
      <SearchUser />
      <TableTest />
    </>
  );
};

export default Dashboard;
