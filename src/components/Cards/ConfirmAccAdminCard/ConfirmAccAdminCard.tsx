import { Box, Typography } from "@mui/material";
import Image from "next/image";

export const ConfirmAccAdminCard = () => {
  return (
    <Box className="card">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          width: "100%",
          flexDirection: { xs: "column" },
          "@media(min-width: 768px)": {
            flexDirection: "row",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "21px", md: "26px" },
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            Подтвердите <br /> аккаунт админа
          </Typography>
          <Typography
            component="p"
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: 1.2,
              color: "hsla(0,0%,100%,.5)",
            }}
          >
            Это безопасно, нужно для связи вашего канала с аккаунтом в нашем
            сервисе
          </Typography>
          <Typography
            component="p"
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: 1.2,
              color: "#a4d2ff",
            }}
          >
            Мы не получим доступа к аккаунту
          </Typography>
        </Box>

        <Box
          sx={{
            position: "relative",
            maxWidth: "315px",
            width: "100%",
            height: "100%",
            marginTop: "-20px",
            marginBottom: "-50px",
          }}
        >
          <Image
            src="/images/confirm-admin.webp"
            alt="confirm-admin"
            fill={true}
            objectFit="contain"
          />
        </Box>
      </Box>
    </Box>
  );
};
