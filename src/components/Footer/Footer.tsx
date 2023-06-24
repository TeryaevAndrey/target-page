import { Box, Typography } from "@mui/material";
import Link from "next/link";

export const Footer = () => {
  return (
    <Box
      sx={{
        mt: "80px",
        textAlign: "center",
        maxWidth: "395px",
        mx: "auto",
        zIndex: 10,
        position: "relative",
        pb: "20px",
      }}
    >
      <Typography
        component="p"
        sx={{
          fontSize: "15px",
          lineHeight: 1.3,
          color: "hsla(0,0%,100%,.5)",
        }}
      >
        Пользуясь сервисом, вы принимаете <br />
        <Typography
          href="#"
          component="a"
          sx={{
            color: "hsla(0,0%,100%,.5)",
            cursor: "pointer",
            fontSize: "15px",
            "&:hover": {
              color: "#3478f6",
            },
            borderBottom: "1px solid hsla(0,0%,100%,.5)",
          }}
        >
          соглашение и политику конфиденциальности
        </Typography>
      </Typography>
    </Box>
  );
};
