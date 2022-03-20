import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useFormik } from "formik";
import { initialState, validationSchema } from "../lib/helper";

export default function FormModal(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: initialState,

    validationSchema: validationSchema,

    onSubmit: (values) => {
      const id = Date.now();
      const note = { ...values, id };
      setOpen(false);
      props.setNotes([...props.notes, note]);
      console.log(values);
    },
  });

  return (
    <div>
      <Button
        variant="text"
        size="medium"
        color="inherit"
        onClick={handleClickOpen}
      >
        Add A New Post
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <TextField
            onChange={formik.handleChange}
            value={formik.values.title}
            name="title"
            autoFocus
            margin="dense"
            id="title"
            label="title"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={formik.handleChange}
            value={formik.values.author}
            autoFocus
            name="author"
            margin="dense"
            id="author"
            label="author"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={formik.handleChange}
            value={formik.values.content}
            name="content"
            id="standard-multiline-flexible"
            label="content"
            multiline
            maxRows={4}
            fullWidth
            variant="standard"
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={formik.handleSubmit}>
            Publish
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
