import DataTable from "react-data-table-component";
import styled from "styled-components";
import React from "react";
import "./index.css"
const DataTableStyled = styled(DataTable)``;

function handleButtonClick(row) {
    console.log("Row data: ", row);
  }
  
  function SetPendingTime() {
    const [pending, setPending] = React.useState(true);
    const [rows, setRows] = React.useState([]);

    React.useEffect(() => {
      const timeout = setTimeout(() => {
        setRows(data);
        setPending(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }, []);
  }

  function TableColumns() {
    return [
      {
        cell: (row) => (
          <button
            className="button is-primary is-rounded is-small is-outlined"
            onClick={() => handleButtonClick(row)}
          >
            Action
          </button>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      },
      {
        name: "Category",
        selector: (row) => row.category,
        sortable: true,
      },
      {
        name: "Product Name",
        selector: (row) => row.productName,
        sortable: true,
      },
      {
        name: "Amount",
        selector: (row) => row.amount,
        sortable: true,
      },
      {
        name: "Price",
        selector: (row) => row.price,
        sortable: true,
      },
      {
        name: "Available",
        selector: (row) => row.available,
        sortable: true,
      }
    ];
  }
  
  function LoadTable() {

    const data = [
      {
        id: 1,
        category: "Supply School",
        productName: "Pencil",
        amount: 125,
        price: 0.65,
        available: "Yes"
      },
      {
        id: 2,
        category: "Supply School",
        productName: "Square",
        amount: 74,
        price: 2.43,
        available: "Yes"
      },
    ]
  
    return (
      <div id="table-container">
        <DataTableStyled
          columns={TableColumns()}
          data={data}
          pagination={true}
          responsive={true}
          progressPending={SetPendingTime()}
          className="table"
        />
      </div>
    );
  }

  export default function Table() {
    return (
        <LoadTable />
    )
  }