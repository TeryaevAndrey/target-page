import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import PaymentImg from "../../../../public/images/payment.webp";
import { FC } from "react";

export const PaymentCard: FC = () => {
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
            width: { xs: "100%", md: "50%" },
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
            Оплата происходит за уникальный клик
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
            Стоимость клика зависит от тематики канала. Обычно от 2 до 15 рублей
            за клик
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
            Отображаются все клики
          </Typography>
        </Box>

        <Image
          className="payment-img"
          src={PaymentImg}
          alt="payment"
          width={0}
          height={0}
          sizes="100vw"
        />
      </Box>
    </Box>
  );
};
