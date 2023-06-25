import { Box, Typography } from "@mui/material";
import Image from "next/image";
import RightsImg from "../../../../public/images/rights-img.svg";

export const RightsBotCard = () => {
  return (
    <Box className="card">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          flexDirection: { xs: "column" },
          "@media(min-width: 768px)": {
            flexDirection: "row",
          },
          gap: "40px",
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
            Важно дать боту <br /> определенные права
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
            Право на публикацию сообщений - для управления рекламным постом.
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
            Право на добавление участников позволит добавить юзер-бота для
            аналитики рекламного поста и канала.
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
            Бот не получит доступа к другим постам
          </Typography>
        </Box>

        <Image
          className="rights-img"
          src={RightsImg}
          alt="confirm-admin"
          width={0}
          height={0}
          sizes="100vw"
        />
      </Box>
    </Box>
  );
};
