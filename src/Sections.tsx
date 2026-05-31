"use client";

import { useState } from "react";
import { Typography } from "@mui/material";

type CourseCard = {
  title: string;
  price: string;
  details: string[];
};

type CourseSection = {
  id: string;
  label: string;
  cards: CourseCard[];
};

const sections: CourseSection[] = [
  {
    id: "regular-courses",
    label: "Редовни Курсове",
    cards: [
      {
        title: "Присъствено - Групово (2 – 6 ученици)",
        price: "20 евро / 39,11 лв",
        details: [
          "Продължителност 1 ч. 30 мин.",
          "4 занятия 80 евро / 156,47 лв",
        ],
      },
      {
        title: "Присъствено - Индивидуално",
        price: "35 евро / 68,45 лв",
        details: [
          "Продължителност 1 ч. 30 мин.",
          "4 занятия 140 евро / 273,82 лв",
        ],
      },
      {
        title: "Онлайн – Групово",
        price: "15 евро / 29,34 лв",
        details: [
          "Продължителност 1 ч. 30 мин.",
          "4 занятия 60 евро / 117,45 лв",
        ],
      },
      {
        title: "Онлайн – Индивидуално",
        price: "25 евро / 48,89 лв",
        details: [
          "Продължителност 1 ч. 30 мин.",
          "4 занятия 100 евро / 195,58 лв",
        ],
      },
    ],
  },
  {
    id: "summer-courses",
    label: "Летни курсове",
    cards: [
      {
        title: "За бъдещи 7. клас — Група 1",
        price: "450 € за целия курс",
        details: [
          "Период: 3 август – 11 септември",
          "Час: 12:00 – 15:00",
          "Дни: понеделник и петък",
        ],
      },
      {
        title: "За бъдещи 7. клас — Група 2",
        price: "450 € за целия курс",
        details: [
          "Период: 5 август – 12 септември",
          "Час: 16:00 – 19:00",
          "Дни: сряда и събота",
        ],
      },
      {
        title: "За бъдещи 4. клас",
        price: "120 € за целия курс",
        details: [
          "Период: 5 август – 9 септември",
          "Час: 12:00 – 13:30",
          "Дни: сряда",
        ],
      },
      {
        title: "За бъдещи 6. клас",
        price: "120 € за целия курс",
        details: [
          "Период: 5 август – 9 септември",
          "Час: 13:30 – 15:00",
          "Дни: сряда",
        ],
      },
      {
        title: "За бъдещи 12. клас — Общообразователна подготовка",
        price: "240 € за целия курс",
        details: [
          "Период: 8 август – 12 септември",
          "Час: 10:00 – 13:00",
          "Дни: събота",
        ],
      },
      {
        title: "За бъдещи 12. клас — Профилирана подготовка",
        price: "240 € за целия курс",
        details: [
          "Период: 7 август – 11 септември",
          "Час: 16:00 – 19:00",
          "Дни: петък",
        ],
      },
    ],
  },
  {
    id: "exam-preparation",
    label: "Подготовка",
    cards: [
      {
        title: "Подготовка за НВО — 7. клас",
        price: "от 80 €",
        details: [
          "Групово обучение: 80 €",
          "Индивидуално обучение: 140 €",
        ],
      },
      {
        title: "Подготовка за 8., 9. и 10. клас",
        price: "от 80 €",
        details: [
          "Групово обучение: 80 €",
          "Индивидуално обучение: 140 €",
        ],
      },
      {
        title: "Подготовка за кандидатстване в университет — 11. и 12. клас",
        price: "от 80 €",
        details: [
          "Групово обучение: 80 €",
          "Индивидуално обучение: 140 €",
        ],
      },
      {
        title: "Състезателна математика — 2., 3. и 4. клас",
        price: "от 80 €",
        details: [
          "Групово обучение: 80 €",
          "Индивидуално обучение: 140 €",
        ],
      },
    ],
  },
];

export default function Sections() {
  const [activeSectionId, setActiveSectionId] = useState(sections[0].id);

  const activeSection =
    sections.find((section) => section.id === activeSectionId) ?? sections[0];


  return (
    <div className="flex w-full flex-col items-center gap-8">
      <div className="flex w-full max-w-3xl flex-col rounded-3xl bg-white/60 p-1 sm:flex-row sm:rounded-full">
        {sections.map((section) => {
          const isActive = section.id === activeSectionId;

          return (
            <button
              key={section.id}
              type="button"
              onClick={() => setActiveSectionId(section.id)}
              className={[
                "flex-1 rounded-full px-5 py-3 text-sm font-medium transition-all duration-200",
                "focus:outline-none focus:ring-2 focus:ring-[#5F68FF] focus:ring-offset-2",
                isActive
                  ? "bg-white text-[#5F68FF] shadow-sm"
                  : "text-gray-500 hover:bg-white/70 hover:text-[#5F68FF]",
              ].join(" ")}
            >
              {section.label}
            </button>
          );
        })}
      </div>

      <section className="flex w-full flex-col items-center gap-6 md:flex-row md:flex-wrap md:justify-between">
        {activeSection.cards.map((card) => (
          <div
            key={card.title}
            className="flex min-h-[17rem] w-full flex-col gap-4 rounded-2xl bg-white p-6 items-center md:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)]"
          >
            <Typography className="text-center" variant="h4">
              {card.title}
            </Typography>

            <Typography
              className="text-center md:text-start"
              sx={{ color: "#5F68FF" }}
              variant="h4"
            >
              {card.price}
            </Typography>

            <ul className="ml-6 list-disc">
              {card.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}