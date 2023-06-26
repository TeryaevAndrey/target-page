import { Box } from "@mui/material";
import { QuestionItem } from "@/components";
import { useState } from "react";

export const QuestionsMonetization = () => {
  const [isOpenIdx, setIsOpenIdx] = useState(0);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: "80px",
      }}
    >
      <QuestionItem
        title="Сколько стоит клик?"
        contentText="Стоимость клика зависит от тематики и рейтинга канала, обычно от 2 до 10 рублей, мы берем фиксированную комиссию 10 копеек с клика, вся информация доступна в рекламной кампании"
        isOpenIdx={isOpenIdx}
        setIsOpenIdx={setIsOpenIdx}
        idx={1}
      />
      <QuestionItem
        title="Объявление могут прокликать?"
        contentText="В рекламной кампании отображаются все клики, но оплата происходит только за уникальные клики, мы совершенствуем нашу систему от скликивания постоянно"
        isOpenIdx={isOpenIdx}
        setIsOpenIdx={setIsOpenIdx}
        idx={2}
      />
      <QuestionItem
        title="Будут ли видны каналы с рекламой?"
        contentText="Да, все каналы, в которых публиковалась реклама, будут отображаться в рекламной кампании"
        isOpenIdx={isOpenIdx}
        setIsOpenIdx={setIsOpenIdx}
        idx={3}
      />
      <QuestionItem
        title="Как пополнить баланс?"
        contentText="Пополнить баланс возможно по карте или через рассчетный счет для юр.лиц"
        isOpenIdx={isOpenIdx}
        setIsOpenIdx={setIsOpenIdx}
        idx={4}
      />
      <QuestionItem
        title="Как подключить свой канал"
        contentText="Подтвердите аккаунт владельца канала в личном кабинете и добавьте бота @tt_ad_bot в свой канал"
        isOpenIdx={isOpenIdx}
        setIsOpenIdx={setIsOpenIdx}
        idx={5}
      />
    </Box>
  );
};
