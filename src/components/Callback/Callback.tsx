import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export const Callback = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        mt: "50px",
        position: "relative",
        zIndex: 10,
      }}
    >
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: 1.3,
          color: "hsla(0,0%,100%,.5)",
        }}
      >
        Ответим на любые вопросы по работе сервиса, <br /> мы открыты к разным
        предложениям
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          mt: "30px",
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
  );
};
