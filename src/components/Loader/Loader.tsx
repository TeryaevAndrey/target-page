import { Box } from "@mui/material";

export const Loader = () => {
  return (
    <Box
      sx={{
        backgroundColor: "red",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "10vh",
      }}
    >
      Loade
    </Box>
  );
};
