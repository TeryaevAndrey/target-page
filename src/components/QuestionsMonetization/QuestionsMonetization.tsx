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
        title="А если бот удалит канал?"
        contentText="У бота нет возможности удалять канал, а также удалять администратора канала. По правилам телеграма - невозможно удалить канал, в котором больше 1 000 подписчиков https://core.telegram.org/method/channels.deleteChannel"
        isOpenIdx={isOpenIdx}
        setIsOpenIdx={setIsOpenIdx}
        idx={1}
      />
      <QuestionItem
        title="Как я буду получать деньги?"
        contentText="Весь баланс будет отображен в вашем личном кабинете и вы сможете вывести деньги, в любое удобное для вас время на карточку физ.лица и на расчетный счет юр.лица. (от 1 т.р.)"
        isOpenIdx={isOpenIdx}
        setIsOpenIdx={setIsOpenIdx}
        idx={2}
      />
      <QuestionItem
        title="А если это реклама казино и ставок?"
        contentText="Мы не рекламируем: азартные игры и казино, политика (выборы, политические партии), наркотики, табак, алкоголь, оружие, боеприпасы, взрывчатые вещества, сомнительные продукты и услуги (например, подделка документов), вредоносное ПО: спам и программы для взлома"
        isOpenIdx={isOpenIdx}
        setIsOpenIdx={setIsOpenIdx}
        idx={3}
      />
      <QuestionItem
        title="Вы можете как угодно отредактировать сообщение, я даже не замечу, что там будет"
        contentText="Публикуем только ту рекламу, которая близка к вашей тематике и история всех постов сохраняется у вас в личном кабинете."
        isOpenIdx={isOpenIdx}
        setIsOpenIdx={setIsOpenIdx}
        idx={4}
      />
      <QuestionItem
        title="Меня устраивает продавать классическую рекламу 1/24?"
        contentText="Мы не пытаемся заменить основной формат рекламы в телеграм, а предлагаем дополнительный способ заработка."
        isOpenIdx={isOpenIdx}
        setIsOpenIdx={setIsOpenIdx}
        idx={5}
      />
      <QuestionItem
        title="Как вы отслеживаете клики"
        contentText="Трэк-ссылка, которая перенаправляет на оригинальную ссылку и отслеживает переход, есть защита от прокликивания, отслеживаем все клики, но оплата происходит только за уникальные клики, 1 клик с одного устройства"
        isOpenIdx={isOpenIdx}
        setIsOpenIdx={setIsOpenIdx}
        idx={6}
      />
    </Box>
  );
};
