import { ChangeEvent, FC, useState } from "react";
import { motion } from "framer-motion";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import InputMask from "react-input-mask";
import RussiaImg from "../../../../public/images/russia.webp";

type Props = {
  isOpenLogin: boolean;
  setModalIdx: Function;
};

export const LoginByPhoneForm: FC<Props> = ({ isOpenLogin, setModalIdx }) => {
  const [phone, setPhone] = useState("");

  const phoneChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  return (
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
        onClick={() => setModalIdx(0)}
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
          <Image src={RussiaImg} alt="russia" width={20} height={20} />
          <Typography
            component="span"
            sx={{
              fontSize: "15px",
              fontWeight: 600,
            }}
          >
            +7
          </Typography>
          <InputMask
            mask="(999) 999-99-99"
            maskPlaceholder={null}
            value={phone}
            onChange={phoneChangeHandler}
          >
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
  );
};
