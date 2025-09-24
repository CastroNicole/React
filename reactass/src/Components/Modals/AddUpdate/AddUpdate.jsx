import React from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";

function AddUpdate({ isOpen, onClose, onSubmit, editContact }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: editContact?.name || "",
      contactNumber: editContact?.contactNumber || "",
      email: editContact?.email || "",
    },
  });

  const submitHandler = (data) => {
    onSubmit(data);
  };

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={onClose}
        fullWidth
        maxWidth="sm" // changed from "xs" to "sm" for a slightly wider modal
        PaperProps={{
          sx: {
            borderRadius: "10px",
            boxShadow: 8,
            maxWidth: "360px", // set a custom max width to reduce modal size
            width: "100%",
          }
        }}
      >
        <DialogContent sx={{ backgroundColor: "white", p: 4 }}>
          <form onSubmit={handleSubmit(submitHandler)}>
            {/* Name Field */}
            <Box mb={2}>
              <Typography variant="subtitle2" mb={1} sx={{ fontWeight: 600, fontFamily:"Poppins, sans serif" }}>
                Name
              </Typography>
              <TextField
                fullWidth
                {...register("name", { required: "Please enter a name" })}
                error={!!errors.name}
                helperText={errors.name?.message}
                onBlur={() => trigger("name")}
                variant="outlined"
                InputProps={{
                  sx: { borderRadius: "5px", background: "#fafafa", fontFamily:"Poppins, sans serif" }
                }}
              />
            </Box>

            {/* Contact Number */}
            <Box mb={2}>
              <Typography variant="subtitle2" mb={1} sx={{ fontWeight: 600, fontFamily:"Poppins, sans serif" }}>
                Contact Number
              </Typography>
              <TextField
                fullWidth
                {...register("contactNumber", {
                  required: "Please enter a contact number.",
                })}
                error={!!errors.contactNumber}
                helperText={errors.contactNumber?.message}
                onBlur={() => trigger("contactNumber")}
                variant="outlined"
                InputProps={{
                  sx: { borderRadius: "5px", background: "#fafafa", fontFamily:"Poppins, sans serif" }
                }}
              />
            </Box>

            {/* Email */}
            <Box mb={2}>
              <Typography variant="subtitle2" mb={1} sx={{ fontWeight: 600, fontFamily:"Poppins, sans serif" }}>
                Email address
              </Typography>
              <TextField
                fullWidth
                type="email"
                {...register("email", {
                  required: "Please enter a valid email address.",
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
                onBlur={() => trigger("email")}
                variant="outlined"
                InputProps={{
                  sx: { borderRadius: "5px", background: "#fafafa", fontFamily:"Poppins, sans serif" }
                }}
              />
            </Box>

            {/* Buttons */}
            <Box display="flex" justifyContent="space-between" mt={3} gap={2}>
              <Button
                variant="outlined"
                color="secondary"
                onClick={onClose}
                sx={{
                  color: "#7e00f7",
                  borderColor: "#7e00f7",
                  borderRadius: "25px",
                  textTransform: "none",
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                  background: "#fff",
                  fontFamily:"Poppins, sans serif"
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                disabled={!isValid}
                sx={{
                  background: "linear-gradient(90deg, #7e00f7 0%, #9400FF 100%)",
                  color: "#fff",
                  borderRadius: "25px",
                  fontFamily:"Poppins, sans serif",
                  textTransform: "none",
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                  boxShadow: "none",
                  "&:disabled": {
                    background: "#cccccc",
                    color: "#666666",
                  }
                }}
              >
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