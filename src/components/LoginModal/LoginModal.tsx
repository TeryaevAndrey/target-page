import { Box, Button, Typography } from "@mui/material";
import { FC, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import InputMask from "react-input-mask";

type Props = {
  isOpenLogin: boolean;
  setIsOpenLogin: Function;
};

const mainEnd = {
  display: "block",
  scale: 1,
  translateX: "-50%",
  translateY: "-50%",
  opacity: 1,
};

const mainStart = {
  scale: 1.5,
  translateX: "-50%",
  translateY: "-50%",
  opacity: 0,
  transitionStart: {
    display: "none",
  },
};

const hideWrapper = {
  opacity: 0,
  transitionEnd: {
    display: "none",
  },
};

export const LoginModal: FC<Props> = ({ isOpenLogin, setIsOpenLogin }) => {
  const [modalIdx, setModalIdx] = useState(0);

  return (
    <motion.div
      initial={isOpenLogin ? { opacity: 1 } : { opacity: 0, zIndex: -1 }}
      animate={isOpenLogin ? { opacity: 1 } : { opacity: 0, zIndex: -1 }}
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(31,32,35,.86)",
        zIndex: 10,
        backdropFilter: "blur(2px)",
      }}
      onClick={(e) => {
        e.stopPropagation();
        setIsOpenLogin(false);
      }}
    >
      {modalIdx === 0 && (
        <motion.div
          initial={isOpenLogin ? mainStart : mainEnd}
          animate={isOpenLogin ? mainEnd : mainStart}
          transition={{
            type: "tween",
            duration: 0.1,
          }}
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            maxWidth: "370px",
            backgroundColor: "#27292d",
            width: "100%",
            borderRadius: "16px",
            padding: "40px 25px 25px",
            transition: "0.2s",
            boxShadow: "0 18px 36px rgba(0,0,0,.14)",
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: "22px",
              fontWeight: 600,
              lineHeight: 1.25,
              color: "#fff",
            }}
          >
            Выберите способ для логина
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "8px",
              mt: "25px",
            }}
          >
            <Button
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                borderRadius: "16px",
                height: "54px",
                background: "#2d2f34",
                padding: "0 16px 0 12px",
                fontWeight: "600",
                fontSize: "13px",
                liheHeight: 1,
                color: "#fff",
                textTransform: "none",
              }}
              onClick={() => setModalIdx(1)}
            >
              <Box
                sx={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "hsla(0,0%,100%,.05)",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  className="tHBgYG"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.879 5.879C3 6.757 3 8.172 3 11v2c0 2.828 0 4.243.879 5.121C4.757 19 6.172 19 9 19h6c2.828 0 4.243 0 5.121-.879C21 17.243 21 15.828 21 13v-2c0-2.828 0-4.243-.879-5.121C19.243 5 17.828 5 15 5H9c-2.828 0-4.243 0-5.121.879Zm2.676 2.289a1 1 0 0 0-1.11 1.664l5.446 3.63a2 2 0 0 0 2.218 0l5.446-3.63a1 1 0 0 0-1.11-1.664L12 11.798l-5.445-3.63Z"
                  ></path>
                </svg>
              </Box>
              <Typography component="span">по почте</Typography>
            </Button>
            <Button
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                borderRadius: "16px",
                height: "54px",
                background: "#2d2f34",
                padding: "0 16px 0 12px",
                fontWeight: "600",
                fontSize: "13px",
                liheHeight: 1,
                color: "#fff",
                textTransform: "none",
              }}
              onClick={() => setModalIdx(2)}
            >
              <Box
                sx={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "hsla(0,0%,100%,.05)",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="tHBgYG"
                >
                  <path
                    d="m6.68 3.32.613-.613a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 1 0 1.414L9.5 8.5a.982.982 0 0 0-.183 1.133 11.293 11.293 0 0 0 5.05 5.05.982.982 0 0 0 1.133-.184l1.793-1.792a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 1 0 1.414l-.613.613a6 6 0 0 1-7.843.558l-1.208-.907a22.996 22.996 0 0 1-4.6-4.6l-.907-1.208A6 6 0 0 1 6.68 3.32Z"
                    fill="#fff"
                  ></path>
                </svg>
              </Box>
              <Typography component="span">по телефону</Typography>
            </Button>
            <Button
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                borderRadius: "16px",
                height: "54px",
                background: "#2d2f34",
                padding: "0 16px 0 12px",
                fontWeight: "600",
                fontSize: "13px",
                liheHeight: 1,
                color: "#fff",
                textTransform: "none",
              }}
              onClick={() => setModalIdx(3)}
            >
              <Box
                sx={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#3390ec",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="tHBgYG"
                >
                  <path
                    d="M2.276 12.043c1.87-1.03 3.958-1.89 5.91-2.754 3.355-1.416 6.725-2.807 10.128-4.102.663-.22 1.852-.436 1.969.545-.064 1.39-.327 2.77-.507 4.151-.457 3.037-.986 6.063-1.502 9.09-.178 1.008-1.44 1.53-2.249.885-1.942-1.312-3.899-2.611-5.816-3.953-.628-.638-.046-1.555.515-2.01 1.6-1.577 3.296-2.916 4.812-4.574.409-.988-.8-.156-1.198.1-2.19 1.509-4.326 3.11-6.635 4.436-1.18.65-2.554.094-3.733-.268-1.056-.438-2.605-.878-1.694-1.546Z"
                    fill="#fff"
                  ></path>
                </svg>
              </Box>
              <Typography component="span">через телеграм</Typography>
            </Button>
          </Box>
          <Typography
            component="p"
            sx={{
              color: "hsla(0,0%,100%,.25)",
              fontSize: "15px",
              fontWeight: 400,
              lineHeight: 1.2,
              mt: "22px",
            }}
          >
            Вы принимаете
            <Typography
              component="a"
              href="#"
              sx={{
                color: "rgba(164,210,255,.8)",
              }}
            >
              {" "}
              соглашение и политику конфиденциальности
            </Typography>
          </Typography>
        </motion.div>
      )}

      {modalIdx === 1 && (
        <motion.div
          initial={isOpenLogin ? { opacity: 0 } : { opacity: 0 }}
          animate={isOpenLogin ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            type: "tween",
            duration: 0.4,
          }}
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            maxWidth: "370px",
            backgroundColor: "#27292d",
            transform: "translate(-50%, -50%)",
            width: "100%",
            borderRadius: "16px",
            padding: "25px",
            transition: "0.2s",
            boxShadow: "0 18px 36px rgba(0,0,0,.14)",
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              borderRadius: "28px",
              fontWeight: "600",
              fontSize: "13px",
              liheHeight: 1,
              color: "#fff",
              textTransform: "none",
              padding: 0,
              pr: "20px",
              "&:hover": {
                background: "#2d2f34",
              },
            }}
            onClick={() => setModalIdx((prev) => prev - 1)}
          >
            <Box
              sx={{
                width: "32px",
                height: "32px",
                backgroundColor: "hsla(0,0%,100%,.05)",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                className="N3cImA"
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

            <Typography
              component="span"
              sx={{
                color: "hsla(0,0%,100%,.5)",
                "&:hover": {
                  color: "#fff",
                },
              }}
            >
              другие способы
            </Typography>
          </Button>

          <Typography
            variant="h3"
            sx={{
              fontSize: "22px",
              fontWeight: 600,
              lineHeight: 1.25,
              color: "#fff",
              mt: "32px",
            }}
          >
            На этот email придет код для входа
          </Typography>

          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              mt: "32px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                gap: "10px",
                height: "54px",
                backgroundColor: "#2d2f34",
                borderRadius: "16px",
                pl: "16px",
                position: "relative",
                overflow: "hidden",

                "&::before": {
                  content: '""',
                  background:
                    "radial-gradient(42.99% 42.99% at 30.18% 57.01%,#eb5545 0,rgba(52,120,246,0) 100%)",
                  filter: "blur(40px)",
                  borderRadius: "380px",
                  transform: "matrix(.05, -1.01, -.97, .17, 0, 0)",
                  position: "absolute",
                  left: "-50px",
                  top: 0,
                  width: "90px",
                  height: "90px",
                  zIndex: 0,
                },
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#eb5545"
                xmlns="http://www.w3.org/2000/svg"
                className="tHBgYG"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.879 5.879C3 6.757 3 8.172 3 11v2c0 2.828 0 4.243.879 5.121C4.757 19 6.172 19 9 19h6c2.828 0 4.243 0 5.121-.879C21 17.243 21 15.828 21 13v-2c0-2.828 0-4.243-.879-5.121C19.243 5 17.828 5 15 5H9c-2.828 0-4.243 0-5.121.879Zm2.676 2.289a1 1 0 0 0-1.11 1.664l5.446 3.63a2 2 0 0 0 2.218 0l5.446-3.63a1 1 0 0 0-1.11-1.664L12 11.798l-5.445-3.63Z"
                ></path>
              </svg>
              <Box
                component="input"
                placeholder="Введите email"
                sx={{
                  width: "100%",
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                  color: "#fff",
                  fontSize: "15px",
                  fontWeight: 600,
                }}
              />
            </Box>

            <Button
              sx={{
                backgroundColor: "#2d2f34",
                borderRadius: "16px",
                height: "54px",
                transition: "0.2s",

                "&:hover": {
                  backgroundColor: "#3478f6",
                },

                fontSize: "16px",
                fontWeight: 500,
                color: "#fff",
                textTransform: "none",
              }}
            >
              Отправить код
            </Button>
          </Box>
        </motion.div>
      )}

      {modalIdx === 2 && (
        <motion.div
          initial={isOpenLogin ? { opacity: 0 } : { opacity: 0 }}
          animate={isOpenLogin ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            type: "tween",
            duration: 0.4,
          }}
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            maxWidth: "370px",
            backgroundColor: "#27292d",
            transform: "translate(-50%, -50%)",
            width: "100%",
            borderRadius: "16px",
            padding: "25px",
            transition: "0.2s",
            boxShadow: "0 18px 36px rgba(0,0,0,.14)",
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              borderRadius: "28px",
              fontWeight: "600",
              fontSize: "13px",
              liheHeight: 1,
              color: "#fff",
              textTransform: "none",
              padding: 0,
              pr: "20px",
              "&:hover": {
                background: "#2d2f34",
              },
            }}
            onClick={() => setModalIdx((prev) => prev - 1)}
          >
            <Box
              sx={{
                width: "32px",
                height: "32px",
                backgroundColor: "hsla(0,0%,100%,.05)",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                className="N3cImA"
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

            <Typography
              component="span"
              sx={{
                color: "hsla(0,0%,100%,.5)",
                "&:hover": {
                  color: "#fff",
                },
              }}
            >
              другие способы
            </Typography>
          </Button>

          <Typography
            variant="h3"
            sx={{
              fontSize: "22px",
              fontWeight: 600,
              lineHeight: 1.25,
              color: "#fff",
              mt: "32px",
            }}
          >
            На этот email придет код для входа
          </Typography>

          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              mt: "32px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                gap: "10px",
                height: "54px",
                backgroundColor: "#2d2f34",
                borderRadius: "16px",
                pl: "16px",
                position: "relative",
                overflow: "hidden",

                "&::before": {
                  content: '""',
                  background:
                    "radial-gradient(42.99% 42.99% at 30.18% 57.01%,#eb5545 0,rgba(52,120,246,0) 100%)",
                  filter: "blur(40px)",
                  borderRadius: "380px",
                  transform: "matrix(.05, -1.01, -.97, .17, 0, 0)",
                  position: "absolute",
                  left: "-50px",
                  top: 0,
                  width: "90px",
                  height: "90px",
                  zIndex: 0,
                },
              }}
            >
              <Image
                src="/images/russia.webp"
                alt="russia"
                width={20}
                height={20}
              />
              <Typography
                component="span"
                sx={{
                  fontSize: "15px",
                  fontWeight: 600,
                }}
              >
                +7
              </Typography>
              <InputMask mask="(999) 999-99-99" maskPlaceholder={null} value="" onChange={() => console.log("asd")}>
                <Box
                  component="input"
                  placeholder="Введите телефон"
                  sx={{
                    width: "100%",
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                    color: "#fff",
                    fontSize: "15px",
                    fontWeight: 600,
                  }}
                />
              </InputMask>
            </Box>

            <Button
              sx={{
                backgroundColor: "#2d2f34",
                borderRadius: "16px",
                height: "54px",
                transition: "0.2s",

                "&:hover": {
                  backgroundColor: "#3478f6",
                },

                fontSize: "16px",
                fontWeight: 500,
                color: "#fff",
                textTransform: "none",
              }}
            >
              Отправить код
            </Button>
          </Box>
        </motion.div>
      )}
    </motion.div>
  );
};
