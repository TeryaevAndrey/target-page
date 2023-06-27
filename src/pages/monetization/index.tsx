"use client";

import "../../app/globals.css";

import {
  Header,
  BannerMonetization,
  BotCard,
  RightsBotCard,
  BotTapeCard,
  RatioCard,
  IncomeCard,
  Callback,
  ConfirmAccAdminCard,
  StartBotCard,
  Footer,
  LoginModal,
  QuestionsMonetization,
  CardsMonetization,
  Loader,
} from "@/components";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function Monetization() {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Box>
          <Header title="реклама в телеграм каналах" link="/" />
          <BannerMonetization setIsOpenLogin={setIsOpenLogin} />

          <CardsMonetization />
          <Box
            sx={{
              maxWidth: "875px",
              width: "100%",
              padding: { xs: "0 24px", sm: "0 48px" },
              marginTop: { xs: "-120px", md: "-195px", lg: "-300px" },
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
            <QuestionsMonetization />
          </Box>

          <Footer />

          <LoginModal
            isOpenLogin={isOpenLogin}
            setIsOpenLogin={setIsOpenLogin}
          />
        </Box>
      )}
    </>
  );
}
