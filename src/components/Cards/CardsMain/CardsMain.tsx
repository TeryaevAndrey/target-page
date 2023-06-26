import { Box, Button, Typography } from "@mui/material";
import { MotionValue, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { FC, RefObject } from "react";
import AvatarFirstImg from "../../../../public/images/avatar-1.webp";
import AvatarSecondImg from "../../../../public/images/avatar-2.webp";

type Props = {
  blockRef: RefObject<HTMLDivElement>;
  mainContentRef: RefObject<HTMLDivElement>;
  scrollYProgressCards: MotionValue<number>;
  innerWidth: number;
};

const CardsMain: FC<Props> = ({
  blockRef,
  scrollYProgressCards,
  mainContentRef,
  innerWidth,
}) => {
  const opacityShadowBlock = useTransform(
    scrollYProgressCards,
    [0.2, 0.6],
    [1, 0]
  );

  const rotate1 = useTransform(
    scrollYProgressCards,
    [0.2, 0.6],
    [7, innerWidth < 640 ? 0 : -0.5]
  );

  const scale1 = useTransform(scrollYProgressCards, [0.2, 0.6], [1, 1.5]);

  const translateX2 = useTransform(
    scrollYProgressCards,
    [0.2, 0.6],
    [innerWidth * 0.35, innerWidth * 0.8]
  );

  const translateY2 = useTransform(
    scrollYProgressCards,
    [0.2, 0.6],
    [innerWidth * -0.24, innerWidth * -0.4]
  );

  const rotate2 = useTransform(scrollYProgressCards, [0.2, 0.6], [21, -90]);

  const scale2 = useTransform(scrollYProgressCards, [0.2, 0.6], [0.4, 0.5]);

  const translateX3 = useTransform(
    scrollYProgressCards,
    [0.2, 0.6],
    [innerWidth * -0.36, innerWidth * -0.8]
  );

  const translateY3 = useTransform(
    scrollYProgressCards,
    [0.2, 0.6],
    [innerWidth * -0.28, innerWidth * -0.4]
  );

  const rotate3 = useTransform(scrollYProgressCards, [0.2, 0.6], [-21, 20]);
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
        marginTop: "140px",
      }}
    >
      <div ref={mainContentRef}></div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          position: "relative",
          zIndex: 10,
          transition: ".3s",
        }}
      >
        <motion.div
          style={{
            rotate: rotate1,
            scale: innerWidth > 1024 ? scale1 : 1,
          }}
        >
          <Box
            sx={{
              background: "#27292d",
              borderRadius: "20px",
              maxWidth: "670px",
              padding: "48px",

              "@media(max-width: 1024px)": {
                width: "100%",
                maxWidth: "90%",
                margin: "0 auto",
                padding: "24px",
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
                position: "relative",
                zIndex: 10,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  mb: "12px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "15px",
                    color: "hsla(0,0%,100%,.25)",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <svg
                    width="11"
                    height="10"
                    viewBox="0 0 11 10"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="Vknqfc"
                  >
                    <path d="M9.138 3.569 2.605.303A1.8 1.8 0 0 0 0 1.913v6.175a1.8 1.8 0 0 0 2.605 1.61L9.138 6.43c1.18-.59 1.18-2.272 0-2.862Z"></path>
                  </svg>
                  Запущена
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Image
                      src={AvatarFirstImg}
                      alt="avatar"
                      width={20}
                      height={20}
                      style={{ borderRadius: "50%" }}
                    />
                    <Image
                      src={AvatarSecondImg}
                      alt="avatar"
                      width={20}
                      height={20}
                      style={{ borderRadius: "50%" }}
                    />
                    <Typography
                      sx={{
                        height: "20px",
                        backgroundColor: "#2d2f34",
                        borderRadius: "46px",
                        padding: "0 8px",
                        display: "flex",
                        alignItems: "center",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: 1.1,
                        color: "hsla(0,0%,100%,.8)",
                        ml: "-3px",
                      }}
                    >
                      +16
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "15px",
                      color: "hsla(0,0%,100%,.25)",
                    }}
                  >
                    23440 кликов
                  </Typography>
                  <Button
                    sx={{
                      width: "26px",
                      height: "26px",
                      transform: "rotate(90deg)",
                      background: "#2d2f34",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      opacity: 0.5,
                      transition: "0.2s",
                      minWidth: "auto",
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="lEMg81"
                    >
                      <path
                        d="M12 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM10 19a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </Button>
                </Box>
              </Box>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: "18px",
                  lineHeight: 1.28,
                  color: "#fff",
                  maxWidth: "90%",

                  "@media(max-width: 360px)": {
                    fontSize: "16px",
                  },
                }}
              >
                Платформа для запуска коротких постов с рекламой канала или
                сайта в телеграме
                <Box
                  component="span"
                  sx={{
                    color: "#3390ec",
                  }}
                >
                  {" "}
                  t-target.ru
                </Box>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: "12px",
                  flexWrap: "wrap",
                  gap: "4px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "16px",
                    color: "hsla(0, 0%, 100%, .25)",
                    background: "#2d2f34",
                    borderRadius: "10px",
                    padding: "6px 8px",

                    "@media(max-width: 640px)": {
                      fontSize: "15px",
                      fontWeight: 400,
                    },
                  }}
                >
                  маркетинг
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "16px",
                    color: "hsla(0, 0%, 100%, .25)",
                    background: "#2d2f34",
                    borderRadius: "10px",
                    padding: "6px 8px",

                    "@media(max-width: 640px)": {
                      fontSize: "15px",
                      fontWeight: 400,
                    },
                  }}
                >
                  бизнес
                </Typography>
              </Box>
            </Box>
          </Box>
        </motion.div>

        <motion.div
          style={{
            rotate: rotate2,
            scale: scale2,
            translateX: translateX2,
            translateY: translateY2,
          }}
        >
          <Box
            sx={{
              background: "#27292d",
              borderRadius: "20px",
              maxWidth: "670px",
              padding: "48px",

              "@media(max-width: 1024px)": {
                display: "none",
              },

              "@media(max-width: 640px)": {
                width: "425px",
                padding: "24px",
              },
              "@media(max-width: 425px)": {
                width: "370px",
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
                position: "relative",
                zIndex: 10,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  mb: "12px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "15px",
                    color: "hsla(0,0%,100%,.25)",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <svg
                    width="11"
                    height="10"
                    viewBox="0 0 11 10"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="Vknqfc"
                  >
                    <path d="M9.138 3.569 2.605.303A1.8 1.8 0 0 0 0 1.913v6.175a1.8 1.8 0 0 0 2.605 1.61L9.138 6.43c1.18-.59 1.18-2.272 0-2.862Z"></path>
                  </svg>
                  Запущена
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Image
                      src={AvatarFirstImg}
                      alt="avatar"
                      width={20}
                      height={20}
                      style={{ borderRadius: "50%" }}
                    />
                    <Image
                      src={AvatarSecondImg}
                      alt="avatar"
                      width={20}
                      height={20}
                      style={{ borderRadius: "50%" }}
                    />
                    <Typography
                      sx={{
                        height: "20px",
                        backgroundColor: "#2d2f34",
                        borderRadius: "46px",
                        padding: "0 8px",
                        display: "flex",
                        alignItems: "center",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: 1.1,
                        color: "hsla(0,0%,100%,.8)",
                        ml: "-3px",
                      }}
                    >
                      +16
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "15px",
                      color: "hsla(0,0%,100%,.25)",
                    }}
                  >
                    23440 кликов
                  </Typography>
                  <Button
                    sx={{
                      width: "26px",
                      height: "26px",
                      transform: "rotate(90deg)",
                      background: "#2d2f34",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      opacity: 0.5,
                      transition: "0.2s",
                      minWidth: "auto",
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="lEMg81"
                    >
                      <path
                        d="M12 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM10 19a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </Button>
                </Box>
              </Box>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: "18px",
                  lineHeight: 1.28,
                  color: "#fff",
                  maxWidth: "90%",

                  "@media(max-width: 360px)": {
                    fontSize: "16px",
                  },
                }}
              >
                Платформа для запуска коротких постов с рекламой канала или
                сайта в телеграме
                <Box
                  component="span"
                  sx={{
                    color: "#3390ec",
                  }}
                >
                  {" "}
                  t-target.ru
                </Box>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: "12px",
                  flexWrap: "wrap",
                  gap: "4px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "16px",
                    color: "hsla(0, 0%, 100%, .25)",
                    background: "#2d2f34",
                    borderRadius: "10px",
                    padding: "6px 8px",

                    "@media(max-width: 640px)": {
                      fontSize: "15px",
                      fontWeight: 400,
                    },
                  }}
                >
                  маркетинг
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "16px",
                    color: "hsla(0, 0%, 100%, .25)",
                    background: "#2d2f34",
                    borderRadius: "10px",
                    padding: "6px 8px",

                    "@media(max-width: 640px)": {
                      fontSize: "15px",
                      fontWeight: 400,
                    },
                  }}
                >
                  бизнес
                </Typography>
              </Box>
            </Box>
          </Box>
        </motion.div>

        <motion.div
          style={{
            rotate: rotate3,
            scale: 0.4,
            translateX: translateX3,
            translateY: translateY3,
          }}
        >
          <Box
            sx={{
              background: "#27292d",
              borderRadius: "20px",
              maxWidth: "670px",
              padding: "48px",

              "@media(max-width: 1024px)": {
                display: "none",
              },

              "@media(max-width: 700px)": {
                opacity: "0",
              },

              "@media(max-width: 640px)": {
                width: "425px",
                padding: "24px",
              },
              "@media(max-width: 425px)": {
                width: "370px",
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
                position: "relative",
                zIndex: 10,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  mb: "12px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "15px",
                    color: "hsla(0,0%,100%,.25)",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <svg
                    width="11"
                    height="10"
                    viewBox="0 0 11 10"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="Vknqfc"
                  >
                    <path d="M9.138 3.569 2.605.303A1.8 1.8 0 0 0 0 1.913v6.175a1.8 1.8 0 0 0 2.605 1.61L9.138 6.43c1.18-.59 1.18-2.272 0-2.862Z"></path>
                  </svg>
                  Запущена
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Image
                      src={AvatarFirstImg}
                      alt="avatar"
                      width={20}
                      height={20}
                      style={{ borderRadius: "50%" }}
                    />
                    <Image
                      src={AvatarSecondImg}
                      alt="avatar"
                      width={20}
                      height={20}
                      style={{ borderRadius: "50%" }}
                    />
                    <Typography
                      sx={{
                        height: "20px",
                        backgroundColor: "#2d2f34",
                        borderRadius: "46px",
                        padding: "0 8px",
                        display: "flex",
                        alignItems: "center",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: 1.1,
                        color: "hsla(0,0%,100%,.8)",
                        ml: "-3px",
                      }}
                    >
                      +16
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "15px",
                      color: "hsla(0,0%,100%,.25)",
                    }}
                  >
                    23440 кликов
                  </Typography>
                  <Button
                    sx={{
                      width: "26px",
                      height: "26px",
                      transform: "rotate(90deg)",
                      background: "#2d2f34",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      opacity: 0.5,
                      transition: "0.2s",
                      minWidth: "auto",
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="lEMg81"
                    >
                      <path
                        d="M12 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM10 19a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </Button>
                </Box>
              </Box>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: "18px",
                  lineHeight: 1.28,
                  color: "#fff",
                  maxWidth: "90%",

                  "@media(max-width: 360px)": {
                    fontSize: "16px",
                  },
                }}
              >
                Платформа для запуска коротких постов с рекламой канала или
                сайта в телеграме
                <Box
                  component="span"
                  sx={{
                    color: "#3390ec",
                  }}
                >
                  {" "}
                  t-target.ru
                </Box>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: "12px",
                  flexWrap: "wrap",
                  gap: "4px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "16px",
                    color: "hsla(0, 0%, 100%, .25)",
                    background: "#2d2f34",
                    borderRadius: "10px",
                    padding: "6px 8px",

                    "@media(max-width: 640px)": {
                      fontSize: "15px",
                      fontWeight: 400,
                    },
                  }}
                >
                  маркетинг
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "16px",
                    color: "hsla(0, 0%, 100%, .25)",
                    background: "#2d2f34",
                    borderRadius: "10px",
                    padding: "6px 8px",

                    "@media(max-width: 640px)": {
                      fontSize: "15px",
                      fontWeight: 400,
                    },
                  }}
                >
                  бизнес
                </Typography>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Box>

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
            top: "380px",
            width: "900px",
            height: "1100px",
            left: 0,
            margin: "auto",
            borderRadius: "380px",
            filter: "blur(76px)",
            zIndex: -1,
            background:
              "radial-gradient(50% 38% at 48% 50%,#5bdcc7 0,rgba(52,120,246,.25) 100%)",
            mixBlendMode: "color-dodge",

            "@media(max-width: 640px)": {
              filter: "blur(66px)",
              width: "500px",
              height: "650px",
              top: "50vh",
            },
          }}
        ></Box>
      </motion.div>
    </Box>
  );
};

export default CardsMain;
