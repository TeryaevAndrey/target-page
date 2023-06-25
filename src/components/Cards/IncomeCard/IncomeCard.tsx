import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import IncomeImg from "../../../../public/images/income.webp";
import { FC } from "react";

type Props = {
  setIsOpenLogin: Function;
};

export const IncomeCard: FC<Props> = ({ setIsOpenLogin }) => {
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
            Доход виден в реальном времени
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
            Занимайтесь контентом, а мы займемся рекламой.
          </Typography>
          <Button
            sx={{
              fontSize: "15px",
              fontWeight: 500,
              lineHeight: 1,
              padding: "0 14px",
              color: "#fff",
              backgroundColor: "#3478f6",
              textTransform: "none",
              height: "38px",
              width: "max-content",
              borderRadius: "13px",
              "&:hover": {
                backgroundColor: "#3478f6",
                opacity: 0.5,
              },
            }}
            onClick={() => setIsOpenLogin(true)}
          >
            Ок, добавить бота
          </Button>
        </Box>

        <Image
          className="income-img"
          src={IncomeImg}
          alt="confirm-admin"
          width={0}
          height={0}
          sizes="100vw"
        />
      </Box>
    </Box>
  );
};
