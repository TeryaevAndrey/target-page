import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="#">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          transition: "all 0.2s ease",
          "&:hover": {
            opacity: 0.5,
          },
        }}
      >
        <Image src="/images/logo.webp" alt="logo" width={32} height={32} />
        <Typography
          component="span"
          sx={{
            fontSize: "22px",
            fontWeight: 700,
          }}
        >
          t-target
        </Typography>
      </Box>
    </Link>
  );
};
