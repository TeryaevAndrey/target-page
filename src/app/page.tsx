"use client";

import {
  Header,
  Questions,
  Footer,
  LoginModal,
  PaymentCard,
  ResultCard,
  CardsMain,
  BannerMain,
  MarketingAuto,
  SubjectMatter,
  Loader,
} from "@/components";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
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
          <Header title="монетизация телеграм канала" link="/monetization" />
          <BannerMain setIsOpenLogin={setIsOpenLogin} />

          <CardsMain />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              textAlign: "center",
              position: "relative",
              zIndex: 10,
              mt: "-300px",

              "@media(max-width: 1024px)": {
                mt: "20px",
              },

              "&::before": {
                content: '""',
                height: "90px",
                background: "linear-gradient(rgba(31,32,35,0),#a4d2ff)",
                width: "1px",
                position: "relative",
                left: "50%",
                transform: "translateX(-50%)",
                top: "",
                display: "flex",
              },

              "&::after": {
                content: '""',
                height: "6px",
                background: "#a4d2ff",
                width: "6px",
                borderRadius: "50%",
                position: "absolute",
                left: 0,
                right: 0,
                top: "90px",
                display: "flex",
                margin: "auto",
              },
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "22px",
                lineHeight: 1.1,
                display: "flex",
                justifyContent: "center",
                color: "#a4d2ff",
              }}
            >
              Как это работает
            </Typography>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "30px",
                lineHeight: 1.1,
                color: "#fff",
              }}
            >
              Создайте короткий рекламный пост
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: 1.3,
                color: "hsla(0,0%,100%,.5)",
              }}
            >
              Текст до 90 символов + ссылка на канал или сайт
            </Typography>

            <Button
              sx={{
                maxWidth: "56px",
                minWidth: "56px",
                width: "56px",
                height: "56px",
                background: "#2d2f34",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mx: "auto",
              }}
              onClick={() => setIsOpenLogin(true)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                className="MuRlqz"
              >
                <path d="M12.85 4a.85.85 0 0 0-1.7 0v7.15H4a.85.85 0 0 0 0 1.7h7.15V20a.85.85 0 0 0 1.7 0v-7.15H20a.85.85 0 0 0 0-1.7h-7.15V4Z"></path>
              </svg>
            </Button>
          </Box>

          <Box
            sx={{
              maxWidth: "875px",
              width: "100%",
              padding: { xs: "0 24px", sm: "0 48px" },
              mt: "50px",
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
              <SubjectMatter />
              <MarketingAuto />
              <PaymentCard />
              <ResultCard setIsOpenLogin={setIsOpenLogin} />
            </Box>
          </Box>

          <Box
            sx={{
              maxWidth: "680px",
              mx: "auto",
              mt: "80px",
              padding: { xs: "0 24px", sm: "0 48px" },

              "@media(max-width: 1024px)": {
                mt: "20px",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                textAlign: "center",
                position: "relative",
                zIndex: 10,
                mx: "auto",

                "&::before": {
                  content: '""',
                  height: "90px",
                  background: "linear-gradient(rgba(31,32,35,0),#a4d2ff)",
                  width: "1px",
                  position: "relative",
                  left: "50%",
                  transform: "translateX(-50%)",
                  top: "",
                  display: "flex",
                },

                "&::after": {
                  content: '""',
                  height: "6px",
                  background: "#a4d2ff",
                  width: "6px",
                  borderRadius: "50%",
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: "90px",
                  display: "flex",
                  margin: "auto",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "22px",
                  lineHeight: 1.1,
                  display: "flex",
                  justifyContent: "center",
                  color: "#a4d2ff",
                }}
              >
                Для чего
              </Typography>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "30px",
                  lineHeight: 1.1,
                  color: "#fff",
                }}
              >
                Для рекламы телеграм каналов, <br /> интернет-сервисов,
                онлайн-мероприятий...
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: 1.3,
                  color: "hsla(0,0%,100%,.5)",
                }}
              >
                Ответим на любые вопросы по работе сервиса, мы открыты к разным
                предложениям
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  mt: "15px",
                  mx: "auto",
                  justifyContent: "center",
                }}
              >
                <Link className="callback-link" href="#">
                  телеграм
                  <Box
                    sx={{
                      width: "20px",
                      height: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <svg
                      style={{
                        width: "100%",
                        height: "100%",
                        transform: "rotate(135deg)",
                      }}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21 12a.922.922 0 0 0-.916-.927H3.916A.922.922 0 0 0 3 12c0 .512.41.927.916.927h16.168A.922.922 0 0 0 21 12Z"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.086 19.227a.935.935 0 0 0-.003-1.311l-5.869-5.917 5.87-5.915a.935.935 0 0 0 .002-1.311.908.908 0 0 0-1.296-.003l-6.52 6.572a.934.934 0 0 0 0 1.314l6.52 6.574a.908.908 0 0 0 1.296-.003Z"
                      ></path>
                    </svg>
                  </Box>
                </Link>
                <Link className="callback-link" href="#">
                  почта
                  <Box
                    sx={{
                      width: "20px",
                      height: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <svg
                      style={{
                        width: "100%",
                        height: "100%",
                        transform: "rotate(135deg)",
                      }}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21 12a.922.922 0 0 0-.916-.927H3.916A.922.922 0 0 0 3 12c0 .512.41.927.916.927h16.168A.922.922 0 0 0 21 12Z"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.086 19.227a.935.935 0 0 0-.003-1.311l-5.869-5.917 5.87-5.915a.935.935 0 0 0 .002-1.311.908.908 0 0 0-1.296-.003l-6.52 6.572a.934.934 0 0 0 0 1.314l6.52 6.574a.908.908 0 0 0 1.296-.003Z"
                      ></path>
                    </svg>
                  </Box>
                </Link>
              </Box>
            </Box>
            <Questions />
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
