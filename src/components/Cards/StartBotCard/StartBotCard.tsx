import { Box, Typography } from "@mui/material";
import Image from "next/image";
import StartBotImg from "../../../../public/images/start-bot-img.svg";

export const StartBotCard = () => {
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
            flexDirection: "row-reverse",
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
            Запустите бота
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
            Чтобы бот начал показывать рекламу в канале, вам нужно его запустить
            в своем кабинете
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
            В любой момент можно остановить показ рекламы
          </Typography>
        </Box>

        <Image
          className="start-bot-img"
          src={StartBotImg}
          alt="confirm-admin"
          width={0}
          height={0}
          sizes="100vw"
        />
      </Box>
    </Box>
  );
};
