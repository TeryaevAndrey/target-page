import { Box, Typography } from "@mui/material";
import Image from "next/image";
import RatioImg from "../../../../public/images/ratio.webp";

export const RatioCard = () => {
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
            Если рекламы для канала не будет
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
            Тогда мы покажем в вашем канале сервисное сообщение для привлечения
            рекламодателей и с приоритетом будем публиковать рекламу в ваш канал
            с повышеным доходом
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
            Повышающий коэффицент 25% к стоимости клика
          </Typography>
        </Box>

        <Image
          className="ratio-img"
          src={RatioImg}
          alt="confirm-admin"
          width={0}
          height={0}
          sizes="100vw"
        />
      </Box>
    </Box>
  );
};
