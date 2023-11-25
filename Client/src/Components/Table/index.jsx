import DataTable from "react-data-table-component";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import GetProducts from "../../API/Services/Products/GetProducts";
import ProductModal, { OpenModal } from "../ProductModal";
import CreateModal, { OpenCreateModal } from "../CreateModal";
import "./index.css";

const DataTableStyled = styled(DataTable)("");

async function GetProductsData() {
  try {
    const response = await GetProducts();
    return response.data.objectResult;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

/* function ShowCreateProduct() {
  const createProduct = document.getElementById("create_product");
  createProduct.style.display = "block";
} */

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
            onClick={() => OpenModal(row.productName, row)}
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

function NoDataColumns() {
  return [
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
      // ShowCreateProduct();
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
        placeholder="Search..."
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
      <button type="button"
        className="button is-primary is-rounded is-outlined"
        id="create_product"
        onClick={OpenCreateModal}>
        Register Product</button>
      <ProductModal />
      <CreateModal />
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

  if (!data) {
    return (
      <div id="table-container">
        <DataTableStyled
          columns={NoDataColumns()}
          className="table"
        />
        <button type="button"
          className="button is-primary is-rounded is-outlined"
          id="create_product"
          onClick={OpenCreateModal}>
          Register Product
        </button>
        <CreateModal />
      </div>
    )
  }

  return <LoadTable data={data} />;
}
