import { Logo } from "@/components";
import { Box, Button, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { FC, useRef } from "react";

type Props = {
  setIsOpenLogin: Function;
};

export const BannerMonetization: FC<Props> = ({ setIsOpenLogin }) => {
  const mainContentRef = useRef(null);

  const { scrollYProgress: scrollYProgressMain } = useScroll({
    target: mainContentRef,
    offset: ["end end", "start start"],
  });

  const bannerOpacity = useTransform(scrollYProgressMain, [0.5, 1], [1, 0]);

  return (
    <motion.div
      style={{ opacity: bannerOpacity, position: "relative", zIndex: 10 }}
    >
      <Box
        ref={mainContentRef}
        component="section"
        sx={{
          marginTop: { xs: "18vh", sm: "22vh", md: "28vh" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "36px",
          }}
        >
          <Logo />
        </Box>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: "30px",
                  sm: "40px",
                  md: "50px",
                  lg: "60px",
                  xl: "70px",
                },
                fontWeight: 800,
                maxWidth: { xs: "90%", sm: "435px", md: "800px" },
                width: "100%",
                margin: "0 auto",
              }}
            >
              Способ монетизации телеграм канала
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
          >
            <Typography
              component="p"
              sx={{
                margin: "0 auto",
                marginTop: "20px",
                maxWidth: "90%",
                fontSize: "15px",
                px: "24px",
                color: "hsla(0,0%,100%,.5)",
                lineHeight: 1.3,
              }}
            >
              Дополнительный доход с короткой рекламы на канале
            </Typography>

            <Button
              sx={{
                backgroundColor: "#3478f6",
                marginTop: "30px",
                fontSize: "15px",
                fontWeight: 500,
                lineHeight: 1,
                color: "#fff",
                height: "38px",
                borderRadius: "13px",
                padding: "0 14px",
                display: "flex",
                alignItems: "center",
                position: "relative",
                zIndex: 1,
                transition: "0.33s",
                overflow: "hidden",
                textTransform: "none",
                mx: "auto",
                "&:hover": {
                  backgroundColor: "#3478f6",
                  opacity: 0.5,
                },
              }}
              onClick={() => setIsOpenLogin(true)}
            >
              Подключить канал
            </Button>
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
};
