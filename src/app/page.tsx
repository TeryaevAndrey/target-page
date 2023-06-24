"use client";

import {
  Header,
  Banner,
  BotCard,
  RightsBotCard,
  BotTapeCard,
  RatioCard,
  IncomeCard,
  Callback,
  Questions,
  ConfirmAccAdminCard,
  StartBotCard,
  Footer,
  LoginModal,
} from "@/components";
import { Box, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [innerWidth, setInnerWidth] = useState(
    window.innerWidth ? window.innerWidth : 0
  );
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const blockRef = useRef(null);
  const mainContentRef = useRef(null);
  const { scrollYProgress: scrollYProgressCards } = useScroll({
    target: blockRef,
    offset: ["end end", "start start"],
  });

  const { scrollYProgress: scrollYProgressMain } = useScroll({
    target: mainContentRef,
    offset: ["end end", "start start"],
  });

  const translateX1 = useTransform(
    scrollYProgressCards,
    [0, 1],
    [innerWidth * -0.42, innerWidth * -0.8]
  );

  const translateY1 = useTransform(
    scrollYProgressCards,
    [0, 1],
    [innerWidth * -0.12, innerWidth * -0.3]
  );

  const rotate1 = useTransform(scrollYProgressCards, [0, 1], [4, -30]);

  const translateX2 = useTransform(
    scrollYProgressCards,
    [0, 1],
    [innerWidth * 0.42, innerWidth * 0.8]
  );

  const translateY2 = useTransform(
    scrollYProgressCards,
    [0, 1],
    [innerWidth * -0.1, innerWidth * -0.4]
  );

  const rotate2 = useTransform(scrollYProgressCards, [0, 1], [21, -90]);

  const translateX3 = useTransform(
    scrollYProgressCards,
    [0, 1],
    [innerWidth * -0.36, innerWidth * -0.8]
  );

  const translateY3 = useTransform(
    scrollYProgressCards,
    [0, 1],
    [innerWidth * -0.16, innerWidth * -0.4]
  );

  const rotate3 = useTransform(scrollYProgressCards, [0, 1], [-18, -120]);

  const translateX4 = useTransform(
    scrollYProgressCards,
    [0, 1],
    [innerWidth * 0.42, innerWidth * 0.8]
  );

  const translateY4 = useTransform(
    scrollYProgressCards,
    [0, 1],
    [innerWidth * -0.3, innerWidth * -0.8]
  );

  const rotate4 = useTransform(scrollYProgressCards, [0, 1], [-4, -120]);

  const opacityShadowBlock = useTransform(scrollYProgressCards, [0, 1], [1, 0]);

  const bannerOpacity = useTransform(scrollYProgressMain, [0, 1], [1, -1]);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setInnerWidth(window.innerWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Header />
      <Banner bannerOpacity={bannerOpacity} setIsOpenLogin={setIsOpenLogin} />

      <Box
        ref={blockRef}
        sx={{
          marginTop: "18vh",
        }}
      ></Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          position: "relative",
          zIndex: 2,
          transition: "0.3s",
        }}
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
              <Image src="/images/info.png" alt="info" width={19} height={19} />
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
              <Image src="/images/info.png" alt="info" width={19} height={19} />
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
              <Image src="/images/info.png" alt="info" width={19} height={19} />
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
              <Image src="/images/info.png" alt="info" width={19} height={19} />
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
            opacity: opacityShadowBlock,
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

        <div ref={mainContentRef}></div>
      </Box>
      <Box
        sx={{
          maxWidth: "875px",
          width: "100%",
          padding: { xs: "0 24px", sm: "0 48px" },
          marginTop: { xs: "-180px", md: "-320px", lg: "-300px" },
          mx: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <ConfirmAccAdminCard />
          <BotCard />
          <RightsBotCard />
          <StartBotCard />
          <BotTapeCard />
          <RatioCard />
          <IncomeCard />
        </Box>
      </Box>

      <Box
        sx={{
          maxWidth: "675px",
          mx: "auto",
          padding: { xs: "0 24px", sm: "0 48px" },
        }}
      >
        <Callback />
        <Questions />
      </Box>

      <Footer />

      <LoginModal isOpenLogin={isOpenLogin} setIsOpenLogin={setIsOpenLogin} />
    </div>
  );
}
