import React from "react";
import { TextField, TextFieldProps, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

type TBaseLabelTextFieldProp = TextFieldProps;

const BaseLabelTextField = (prop: TBaseLabelTextFieldProp) => {
  const { id, label, ...rest } = prop;

  return (
    <Grid container direction="column" sx={{ marginBottom: "1rem" }}>
      <Typography component="label" htmlFor={id}>
        {label}
      </Typography>
      <TextField {...rest} />
    </Grid>
  );
};

export default BaseLabelTextField;
