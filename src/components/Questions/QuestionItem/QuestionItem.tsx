import { Box, Typography } from "@mui/material";
import { useState } from "react";

export const QuestionItem = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      sx={{
        py: "30px",
        borderTop: "1px solid rgba(45,47,52,.5)",
        borderBottom: "1px solid rgba(45,47,52,.5)",

        "&:not(:first-child)": {
          borderTop: "none",
        },
        position: "relative",
        zIndex: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          cursor: "pointer",
          "&:hover p": {
            opacity: 0.5,
          },

          "&:hover div": {
            background: "#3478f6",
          },
        }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Typography
          component="p"
          sx={{
            fontSize: "24px",
            lineHeight: 1.25,
            color: "#fff",

            "@media(max-width: 640px)": {
              fontSize: "18px",
              lineHeight: 1.3,
              fontWeight: 600,
            },
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit?
        </Typography>
        <Box
          sx={{
            width: { xs: "32px", sm: "42px" },
            height: { xs: "32px", sm: "42px" },
            minWidth: { xs: "32px", sm: "42px" },
            background: "#27292d",
            borderRadius: "9px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="eNH5J7"
          >
            <path d="M12.85 4a.85.85 0 0 0-1.7 0v7.15H4a.85.85 0 0 0 0 1.7h7.15V20a.85.85 0 0 0 1.7 0v-7.15H20a.85.85 0 0 0 0-1.7h-7.15V4Z"></path>
          </svg>
        </Box>
      </Box>
      {isOpen && (
        <Box>
          <Typography
            component="p"
            sx={{
              mt: "10px",
              fontSize: { xs: "14px", sm: "16px" },
              color: "hsla(0,0%,100%,.6)",
              lineHeight: 1.4,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            aliquid reiciendis praesentium. Veritatis, sint. Ex temporibus
            impedit tempora error aliquam, eos magni pariatur dolor id, laborum
            delectus deleniti sed ducimus!
          </Typography>
        </Box>
      )}
    </Box>
  );
};
