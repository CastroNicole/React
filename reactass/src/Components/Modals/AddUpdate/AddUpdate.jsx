import React, { useEffect } from "react";
import { Dialog, DialogContent, TextField, Button, Box, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import "./AddUpdate.css";
import { validateName, validateContactNumber, validateEmail, handleContactNumberInput } from "../../Utils/formValidators.jsx";

function AddUpdate({ isOpen, onClose, onSubmit, editContact }) {
  const { register, handleSubmit, formState: { errors, isValid }, trigger, reset, watch, setValue
  } = useForm({
    mode: "onChange",
    defaultValues: { name: "", contactNumber: "", email: "" },
  });

  // Watch the contact number field to check if it has exactly 11 digits
  const contactNumber = watch("contactNumber");
  const isContactNumberValid = contactNumber && contactNumber.replace(/\D/g, '').length === 11;

  useEffect(() => {
    if (isOpen) {
      reset({
        name: editContact?.name || "",
        contactNumber: editContact?.contactNumber || "",
        email: editContact?.email || "",
      });
    }
  }, [editContact, isOpen, reset]);

  const submitHandler = (data) => {
    onSubmit(data);
    reset({ name: "", contactNumber: "", email: "" });
  };

  return (
    <>
      <Dialog open={isOpen} onClose={onClose} maxWidth="xs" paper={{ className: "addupdate-dialog" }} >
        <DialogContent className="addupdate-content">
          <form onSubmit={handleSubmit(submitHandler)}>
            <Box mb={2}>
              <Typography className="addupdate-label" variant="subtitle2">
                Name
              </Typography>
              <TextField
                fullWidth
                {...register("name", { validate: validateName })}
                error={!!errors.name}
                helperText={errors.name?.message}
                onBlur={() => trigger("name")}
                variant="outlined"
                className="addupdate-input"
              />
            </Box>
            <Box mb={2}>
              <Typography className="addupdate-label" variant="subtitle2">
                Contact Number
              </Typography>
              <TextField
                fullWidth
                {...register("contactNumber", { validate: validateContactNumber })}
                error={!!errors.contactNumber}
                helperText={errors.contactNumber?.message}
                onBlur={() => trigger("contactNumber")}
                variant="outlined"
                className="addupdate-input"
                //onInput={(e) => { if (e.target.value.length > 11) { e.target.value = e.target.value.slice(0, 11); } }}
                onInput={(e) => handleContactNumberInput(e, setValue)}
              />
            </Box>
            <Box mb={2}>
              <Typography className="addupdate-label" variant="subtitle2">
                Email address
              </Typography>
              <TextField
                fullWidth
                type="email"
                {...register("email", { validate: validateEmail })}
                error={!!errors.email}
                helperText={errors.email?.message}
                onBlur={() => trigger("email")}
                variant="outlined"
                className="addupdate-input"
              />
            </Box>
            <Box className="addupdate-buttons">
              <Button variant="outlined" color="secondary" onClick={onClose} className="addupdate-cancel" >
                Cancel
              </Button>
              <Button type="submit" variant="contained" disabled={!isValid || !isContactNumberValid} className="addupdate-submit" >
                {editContact ? "Save Changes" : "Add Contact"}
              </Button>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AddUpdate;