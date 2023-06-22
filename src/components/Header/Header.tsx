import { Box } from "@mui/material";
import Link from "next/link";

export const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "15px 0",
      }}
    >
      <Link href="#">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "6px 4px 6px 14px",
            borderRadius: "7px",
            color: "hsla(0,0%,100%,.68)",
            backgroundColor: "#27292d",
            fontSize: "15px",
            lineHeight: 1.2,
            transition: "all 0.2s ease",
            "&:hover": {
              backgroundColor: "#3478f6",
            },
          }}
        >
          <span>реклама в телеграм каналах</span>
          <Box
            sx={{
              width: "28px",
              height: "28px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderLeft: "1px solid hsla(0,0%,100%,.15)",
              marginLeft: "8px",
            }}
          >
            <svg
              style={{
                width: "60%",
                height: "60%",
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
        </Box>
      </Link>
    </Box>
  );
};
