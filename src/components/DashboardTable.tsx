import { Column } from "react-table";
import TableHOC from "./TableHOC";

interface UserType {
  id: string;
  name: string;
  email: string;
  dob: string;
  gender: string;
}

const columns: Column<UserType>[] = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "DOB",
    accessor: "dob",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
];

const DashboardTable = ({ data = [] }: { data: UserType[] }) => {
  return TableHOC<UserType>(columns, data, "transaction-box", "Last Active Users")();
};

export default DashboardTable;
