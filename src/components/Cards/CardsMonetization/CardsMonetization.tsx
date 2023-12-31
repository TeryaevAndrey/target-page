import { Box, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import InfoImg from "../../../../public/images/info.png";

export const CardsMonetization = () => {
  const blockRef = useRef(null);

  const { scrollYProgress: scrollYProgressCards } = useScroll({
    target: blockRef,
    offset: ["start end", "start start"],
  });

  const [innerWidth, setInnerWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const translateX1 = useTransform(
    scrollYProgressCards,
    [0.2, 1],
    [innerWidth * -0.42, innerWidth * -0.8]
  );

  const translateY1 = useTransform(
    scrollYProgressCards,
    [0.2, 1],
    [innerWidth * -0.13, innerWidth * -0.3]
  );

  const rotate1 = useTransform(scrollYProgressCards, [0.2, 1], [4, -30]);

  const translateX2 = useTransform(
    scrollYProgressCards,
    [0.2, 1],
    [innerWidth * 0.42, innerWidth * 0.8]
  );

  const translateY2 = useTransform(
    scrollYProgressCards,
    [0.2, 1],
    [innerWidth * -0.1, innerWidth * -0.4]
  );

  const rotate2 = useTransform(scrollYProgressCards, [0.2, 1], [21, -90]);

  const translateX3 = useTransform(
    scrollYProgressCards,
    [0.2, 1],
    [innerWidth * -0.36, innerWidth * -0.8]
  );

  const translateY3 = useTransform(
    scrollYProgressCards,
    [0.2, 1],
    [innerWidth * -0.16, innerWidth * -0.4]
  );

  const rotate3 = useTransform(scrollYProgressCards, [0.2, 1], [-18, -120]);

  const translateX4 = useTransform(
    scrollYProgressCards,
    [0.2, 1],
    [innerWidth * 0.42, innerWidth * 0.8]
  );

  const translateY4 = useTransform(
    scrollYProgressCards,
    [0.2, 1],
    [innerWidth * -0.3, innerWidth * -0.8]
  );

  const rotate4 = useTransform(scrollYProgressCards, [0.2, 1], [-4, -120]);

  const opacityShadowBlock = useTransform(
    scrollYProgressCards,
    [0, 0.6],
    [1, 0]
  );
  return (
    <Box
      ref={blockRef}
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        position: "relative",
        zIndex: 2,
        transition: "0.3s",
        mt: "17vh",
      }}
    >
      <motion.div
        initial={{ opacity: 0, translateY: 200 }}
        animate={{ opacity: 1, translateY: 0 }}
      >
        <motion.div
          style={{
            translateX: translateX1,
            translateY: translateY1,
            rotate: rotate1,
            scale: 0.5,
            zIndex: 10,
          }}
        >
          <Box
            sx={{
              backgroundColor: "#fff",
              boxShadow: "0 1px 4px rgba(31,32,35,0.13)",
              borderRadius: "12px",
              width: { xs: "370px", sm: "450px", md: "100%" },
              maxWidth: "550px",
              padding: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                gap: "10px",
              }}
            >
              <Image src={InfoImg} alt="info" width={19} height={19} />
              <Typography
                component="p"
                sx={{
                  fontSize: { xs: "10px", lg: "16px" },
                  color: "#000",
                }}
              >
                Платформа для запуска коротких постов с рекламой канала или
                сайта в телеграме
                <Typography
                  component="span"
                  sx={{
                    color: "#3390ec",
                    fontSize: "10px",
                    lineHeight: 1.5,
                  }}
                >
                  t-target.ru
                </Typography>
              </Typography>
            </Box>
            <Typography
              component="span"
              sx={{
                fontSize: "7px",
                color: "#686c72",
                display: "flex",
                justifyContent: "end",
              }}
            >
              изменено 19:42
            </Typography>
          </Box>
        </motion.div>
        <motion.div
          style={{
            translateX: translateX2,
            translateY: translateY2,
            rotate: rotate2,
            scale: 0.9,
            zIndex: 10,
          }}
        >
          <Box
            sx={{
              backgroundColor: "#fff",
              boxShadow: "0 1px 4px rgba(31,32,35,0.13)",
              borderRadius: "12px",
              width: { xs: "370px", sm: "425px" },
              maxWidth: "550px",
              padding: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                gap: "10px",
              }}
            >
              <Image src={InfoImg} alt="info" width={19} height={19} />
              <Typography
                component="p"
                sx={{
                  fontSize: { xs: "10px", lg: "16px" },
                  color: "#000",
                }}
              >
                Платформа для запуска коротких постов с рекламой канала или
                сайта в телеграме
                <Typography
                  component="span"
                  sx={{
                    color: "#3390ec",
                    fontSize: "10px",
                    lineHeight: 1.5,
                  }}
                >
                  t-target.ru
                </Typography>
              </Typography>
            </Box>
            <Typography
              component="span"
              sx={{
                fontSize: "7px",
                color: "#686c72",
                display: "flex",
                justifyContent: "end",
              }}
            >
              изменено 19:42
            </Typography>
          </Box>
        </motion.div>
        <motion.div
          style={{
            translateX: translateX3,
            translateY: translateY3,
            rotate: rotate3,
            scale: 0.9,
            zIndex: 10,
          }}
        >
          <Box
            sx={{
              backgroundColor: "#fff",
              boxShadow: "0 1px 4px rgba(31,32,35,0.13)",
              borderRadius: "12px",
              width: { xs: "370px", sm: "425px", md: "max-content" },
              maxWidth: "550px",
              padding: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                gap: "10px",
              }}
            >
              <Image src={InfoImg} alt="info" width={19} height={19} />
              <Typography
                component="p"
                sx={{
                  fontSize: { xs: "10px", lg: "16px" },
                  color: "#000",
                }}
              >
                Платформа для запуска коротких постов с рекламой канала или
                сайта в телеграме
                <Typography
                  component="span"
                  sx={{
                    color: "#3390ec",
                    fontSize: "10px",
                    lineHeight: 1.5,
                  }}
                >
                  t-target.ru
                </Typography>
              </Typography>
            </Box>
            <Typography
              component="span"
              sx={{
                fontSize: "7px",
                color: "#686c72",
                display: "flex",
                justifyContent: "end",
              }}
            >
              изменено 19:42
            </Typography>
          </Box>
        </motion.div>
        <motion.div
          style={{
            translateX: translateX4,
            translateY: translateY4,
            rotate: rotate4,
            scale: 0.5,
            zIndex: 10,
          }}
        >
          <Box
            sx={{
              backgroundColor: "#fff",
              boxShadow: "0 1px 4px rgba(31,32,35,0.13)",
              borderRadius: "12px",
              width: { xs: "370px", sm: "425px", md: "max-content" },
              maxWidth: "550px",
              padding: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                gap: "10px",
              }}
            >
              <Image src={InfoImg} alt="info" width={19} height={19} />
              <Typography
                component="p"
                sx={{
                  fontSize: { xs: "10px", lg: "16px" },
                  color: "#000",
                }}
              >
                Платформа для запуска коротких постов с рекламой канала или
                сайта в телеграме
                <Typography
                  component="span"
                  sx={{
                    color: "#3390ec",
                    fontSize: "10px",
                    lineHeight: 1.5,
                  }}
                >
                  t-target.ru
                </Typography>
              </Typography>
            </Box>
            <Typography
              component="span"
              sx={{
                fontSize: "7px",
                color: "#686c72",
                display: "flex",
                justifyContent: "end",
              }}
            >
              изменено 19:42
            </Typography>
          </Box>
        </motion.div>
      </motion.div>
      <motion.div
        style={{
          opacity: opacityShadowBlock,
          mixBlendMode: "color-dodge",
        }}
      >
        <Box
          sx={{
            position: "fixed",
            right: 0,
            top: { xs: "50vh", sm: "380px" },
            width: { xs: "500px", sm: "900px" },
            height: { xs: "650px", sm: "1100px" },
            left: 0,
            margin: "auto",
            mixBlendMode: "color-dodge",
            borderRadius: "380px",
            filter: { xs: "blur(66px)", sm: "blur(76px)" },
            zIndex: -1,
            background:
              "radial-gradient(50% 38% at 48% 50%, #96c93d 0, rgba(0,176,155,.25) 100%)!important",
          }}
        ></Box>
      </motion.div>
    </Box>
  );
};

export default CardsMonetization;
