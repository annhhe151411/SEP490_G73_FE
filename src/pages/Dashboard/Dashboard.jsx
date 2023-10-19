import { Box } from "@mui/material";
import TableUsers from "~/pages/Section/User/TableUsers";
import SearchUser from "~/pages/Section/User/SearchUsers";
import TopNav from "./TopNav";

const Dashboard = () => {
  return (
    <>
      <TopNav />
      <SearchUser />
      <TableUsers />
    </>
  );
};

export default Dashboard;
