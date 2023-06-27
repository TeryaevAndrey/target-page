import { Box, Typography } from "@mui/material";

export const Loader = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1f2023",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "0.3s",
      }}
    >
      <Typography component="span" className="loader"></Typography>
    </Box>
  );
};
