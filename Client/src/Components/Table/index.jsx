import DataTable from "react-data-table-component";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import GetProducts from "../API/Services/Products/GetProducts";
import ProductModal from "../ProductModal";
import "./index.css";

const DataTableStyled = styled(DataTable)("");

function ShowRowData(row) {
  console.log("Row data: ", row);
}

function ShowModal () {
  return (
    <ProductModal />
  )
}

async function GetProductsData() {
  try {
    const response = await GetProducts();
    return response.data.objectResult;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function ShowSearchField() {
  const searchField = document.getElementById("search_input");
  searchField.style.display = "block";
}

function TableColumns() {
  return [
    {
      cell: (row) => (
        <div className="buttons">
          <button
            className="button is-primary is-rounded is-small is-outlined"
            onClick={() => ShowRowData(row)}
          >
            Action
          </button>
        </div>
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
      selector: (row) => (row.available ? "Yes" : "No"),
      sortable: true,
    },
  ];
}

function LoadTable({ data }) {
  const [pending, setPending] = useState(true);
  const [rows, setRows] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRows(data);
      setPending(false);
      ShowSearchField();
    }, 1500);

    return () => clearTimeout(timeout);
  }, [data]);

  const handleFilter = (e) => {
    const searchText = e.target.value.toLowerCase();
    setFilterText(searchText);

    const filteredData = data.filter((item) =>
      Object.values(item).some((value) => {
        if (typeof value === "string" || typeof value === "number") {
          return value.toString().toLowerCase().includes(searchText);
        } else if (typeof value === "boolean") {
          return value ? "yes".includes(searchText) : "no".includes(searchText);
        }
        return false;
      })
    );

    setRows(filteredData);
  };

  return (
    <div id="table-container">
      <br />
      <input
        id="search_input"
        className="input is-rounded"
        type="text"
        placeholder="Search by product name..."
        onChange={handleFilter}
      />
      <br />
      <DataTableStyled
        columns={TableColumns()}
        data={rows}
        pagination={true}
        responsive={true}
        progressPending={pending}
        className="table"
      />
    </div>
  );
}

export default function Table() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GetProductsData();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Error loading data</div>;
  }

  return <LoadTable data={data} />;
}
