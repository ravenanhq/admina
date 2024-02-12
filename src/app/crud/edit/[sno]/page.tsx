import React from "react";
import { Grid } from "@mui/material";
import EditData from "@/app/components/Crud/EditData";
import dataTable from "@/data-table.json";

export async function generateStaticParams() {
  return dataTable.map((row) => ({
    sno: row.sno.toString(),
  }));
}

const EditPage = ({ params }: { params: { sno: any } }) => {
  const { sno } = params
  const page = dataTable.find((page) => page.sno.toString() === sno);

  if (!page) {
    return <div>Page not found</div>;
  }

  return (
    <>
      <div style={{ paddingTop: 10 }}>
        <Grid container spacing={3} style={{ paddingTop: 10 }}>
          <Grid item xs={12} style={{ height: "100%" }}>
           <EditData page={page}></EditData>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default EditPage;
