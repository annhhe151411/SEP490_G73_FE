import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";

import { getAllUser } from "~/axios/api/UserService";
import Axios from "axios";

const TableTest = (props) => {
  const [listUsers, setListUsers] = useState([]);
  const getUser = async () => {
    // let res = await getAllUser();
    // if (res && res.data) {
    //   console.log(res);
    //   setListUsers(res.data);
    // }
    const { data } = await Axios.get("http://localhost:3500/user");
    const products = data;
    setListUsers(products);
    console.log(products);
  };

  useEffect(() => {
    //call API
    getUser();
  }, []);

  console.log("Data list users: ", listUsers);
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Address</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((row) => {
              return (
                <TableRow key={row._id}>
                  <TableCell>{row.fullname}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell align="right">{`$${row.amount}`}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link> */}
    </React.Fragment>
  );
};

export default TableTest;
