"use client";
import "../../app/globals.css";

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
  BannerMonetization,
} from "@/components";
import { Box } from "@mui/material";
import { useScroll, useTransform } from "framer-motion";
import { lazy, useEffect, useRef, useState } from "react";

const LazyCards = lazy(() => import("../../components/Cards/Cards"));

export default function Monetization() {
  const [innerWidth, setInnerWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const blockRef = useRef(null);
  const mainContentRef = useRef(null);
  const { scrollYProgress: scrollYProgressCards } = useScroll({
    target: blockRef,
    offset: ["start end", "start start"],
  });

  const { scrollYProgress: scrollYProgressMain } = useScroll({
    target: mainContentRef,
    offset: ["end end", "start start"],
  });

  const bannerOpacity = useTransform(scrollYProgressMain, [0, 0.6], [1, -1]);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Header title="реклама в телеграм каналах" link="/" />
      <Banner bannerOpacity={bannerOpacity} setIsOpenLogin={setIsOpenLogin} />

      <LazyCards
        blockRef={blockRef}
        mainContentRef={mainContentRef}
        scrollYProgressCards={scrollYProgressCards}
        innerWidth={innerWidth}
      />
      <Box
        sx={{
          maxWidth: "875px",
          width: "100%",
          padding: { xs: "0 24px", sm: "0 48px" },
          marginTop: { xs: "-120px", md: "-320px", lg: "-300px" },
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
          <IncomeCard setIsOpenLogin={setIsOpenLogin} />
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
