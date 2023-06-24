import { Box } from "@mui/material";
import { QuestionItem } from "./QuestionItem/QuestionItem";

export const Questions = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: "50px",
      }}
    >
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
    </Box>
  );
};
