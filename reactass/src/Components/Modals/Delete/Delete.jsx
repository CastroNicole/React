import React from "react";
import { Dialog, DialogContent, Typography, Box, Button } from "@mui/material";

function Delete({ isOpen, onClose, onDelete, contactName }) {
  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="xs" style={{ borderRadius: "18px", boxShadow: "8", maxWidth: "340px", margin: "auto" }} >
      <DialogContent style={{ backgroundColor: "white", p: 4 }}>
        <Typography variant="h6" fontWeight={700} mb={2}>
          Delete contact
        </Typography>
        <Typography variant="body1" mb={3}>
          Would you like to delete <b>{contactName}</b>?
        </Typography>
        <Box display="flex" justifyContent="flex-end" gap={2}>
          <Button variant="text" onClick={onClose} style={{ color: "#9400FF", textTransform: "none", fontWeight: 600, borderRadius: "25px", px: 3, py: 1 }} >
            Cancel
          </Button>
          <Button variant="contained" onClick={onDelete}
            style={{
              background: "rgba(148,0,255,0.12)",
              color: "#9400FF",
              borderRadius: "25px",
              textTransform: "none",
              fontWeight: 600,
              px: 3,
              py: 1,
              boxShadow: "none",
              "&:hover": {
                background: "rgba(148,0,255,0.22)",
            },}}>
            Delete
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default Delete;