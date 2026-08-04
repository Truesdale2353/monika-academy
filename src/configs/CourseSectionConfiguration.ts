import type { CourseSection } from "../components/interfaces/InfoCards";
import {
  People as PeopleIcon,
  Person as PersonIcon,
  Language as LanguageIcon,
  Monitor as Monitor,
  Calculate as CalculateIcon,
  Create as Create,
  School,
  Groups,
  Adjust,
  EmojiEvents,
  ImportContacts,
  DoneAll
} from "@mui/icons-material";

export const sections: CourseSection[] = [
  {
    id: "year-round-group-courses",
    label: "Целогодишни курсове",
    title: "Целогодишни групови курсове по математика",
    subtitle:
      "Малки групи от 2 до 6 ученици с фокус върху разбиране, постоянство и увереност през учебната година.",
    infoText:
      "Скоро ще обявим график за основните групи за 4., 7. и 12. клас. За ученици от други класове също сформираме групи при заявен интерес и минимум 2 ученици със сходно ниво и цели.",
    cards: [
      {
        icon: PeopleIcon,
        title: "Математика за 4. клас",
        price: "от 20 € / занятие",
        bulletPoints: [
          "2 – 6 ученици",
          "1 ч. 30 мин.",
          "34 учебни седмици",
          "График: очаква се скоро",
        ],
        shortText:
          "Подкрепа за стабилна основа, по-добро разбиране и спокойна работа през учебната година.",
        primaryButtonText: "Научи повече",
        onClickLog: "year-round-math-4-grade",
      },
      {
        icon: PersonIcon,
        title: "Подготовка за НВО — 7. клас",
        price: "от 20 € / занятие",
        bulletPoints: [
          "2 – 6 ученици",
          "1 ч. 30 мин.",
          "34 учебни седмици",
          "График: очаква се скоро",
        ],
        shortText:
          "Целогодишна подготовка за НВО с фокус върху задачи, стратегия и увереност за изпита.",
        primaryButtonText: "Научи повече",
        onClickLog: "year-round-nvo-7-grade",
      },
      {
        icon: LanguageIcon,
        title: "Подготовка за 12. клас",
        price: "от 20 € / занятие",
        bulletPoints: [
          "2 – 6 ученици",
          "1 ч. 30 мин.",
          "34 учебни седмици",
          "График: очаква се скоро",
        ],
        shortText:
          "Подготовка за матура, профилирана подготовка или кандидатстване според целите на ученика.",
        primaryButtonText: "Научи повече",
        onClickLog: "year-round-exam-12-grade",
      },
      {
        icon: Monitor,
        title: "Група за друг клас",
        price: "от 20 € / занятие",
        bulletPoints: [
          "1. – 12. клас",
          "2 – 6 ученици",
          "1 ч. 30 мин.",
          "Сформиране при минимум 2 ученици",
        ],
        shortText:
          "Заявете интерес за група според класа, нивото и целите на ученика. Ще се свържем с вас при възможност за сформиране на подходяща група.",
        primaryButtonText: "Заяви интерес",
        onClickLog: "year-round-other-grade-group",
        variant: "soft",
      },
    ],
  },
  {
    id: "summer-courses",
    label: "Летни курсове",
    title: "Летни курсове",
    subtitle:
      "Изберете подходящ курс според класа, периода и графика. Цените са посочени за целия курс.",
    cards: [
      {
        icon: CalculateIcon,
        title: "За бъдещи 7. клас — Група 1",
        price: "450 € за целия курс",
        bulletPoints: [
          "Период: 3 август – 11 септември",
          "Час: 12:00 – 15:00",
          "Дни: понеделник и петък",
        ],
        shortText:
          "Интензивен летен курс по математика за бъдещи седмокласници с фокус върху затвърждаване, наваксване и уверен старт.",
        primaryButtonText: "Научи повече",
        onClickLog: "summer-7-grade-group-1",
      },
      {
        icon: Create,
        title: "За бъдещи 7. клас — Група 2",
        price: "450 € за целия курс",
        bulletPoints: [
          "Период: 5 август – 12 септември",
          "Час: 16:00 – 19:00",
          "Дни: сряда и събота",
        ],
        shortText:
          "Интензивен летен курс за бъдещи седмокласници с ясен план, редовна практика и повече увереност преди 7. клас.",
        primaryButtonText: "Научи повече",
        onClickLog: "summer-7-grade-group-2",
      },
      {
        icon: School,
        title: "За бъдещи 4. клас",
        price: "120 € за целия курс",
        bulletPoints: [
          "Период: 5 август – 9 септември",
          "Час: 12:00 – 13:30",
          "Дни: сряда",
        ],
        shortText:
          "Летен курс за затвърждаване на основните знания, изграждане на увереност и по-спокоен старт на новата учебна година.",
        primaryButtonText: "Научи повече",
        onClickLog: "summer-4-grade",
      },
      {
        icon: Groups,
        title: "За бъдещи 6. клас",
        price: "120 € за целия курс",
        bulletPoints: [
          "Период: 5 август – 9 септември",
          "Час: 13:30 – 15:00",
          "Дни: сряда",
        ],
        shortText:
          "Курс за затвърждаване на важни знания, наваксване на пропуски и подготовка за по-уверено начало на учебната година.",
        primaryButtonText: "Научи повече",
        onClickLog: "summer-6-grade",
      },
      {
        icon: Adjust,
        title: "За бъдещи 12. клас — Общообразователна подготовка",
        price: "240 € за целия курс",
        bulletPoints: [
          "Период: 8 август – 12 септември",
          "Час: 10:00 – 13:00",
          "Дни: събота",
        ],
        shortText:
          "Летен курс за бъдещи дванадесетокласници, насочен към общообразователна подготовка и по-уверен старт.",
        primaryButtonText: "Научи повече",
        onClickLog: "summer-12-grade-general-preparation",
      },
      {
        icon: EmojiEvents,
        title: "За бъдещи 12. клас — Профилирана подготовка",
        price: "240 € за целия курс",
        bulletPoints: [
          "Период: 7 август – 11 септември",
          "Час: 16:00 – 19:00",
          "Дни: петък",
        ],
        shortText:
          "Летен курс с фокус върху профилирана подготовка, по-задълбочена работа, ясна структура и редовна практика.",
        primaryButtonText: "Научи повече",
        onClickLog: "summer-12-grade-profiled-preparation",
      },
    ],
  },
  {
    id: "individual-lessons",
    label: "Индивидуални уроци",
    title: "Индивидуални уроци",
    subtitle:
      "Персонален формат за ученици, които имат нужда от индивидуално темпо, наваксване или целенасочена подготовка.",
    infoText:
      "Гъвкав график според нуждите на ученика. Цените са посочени за 1 урок.",
    cards: [
      {
        icon: ImportContacts,
        title: "Присъствено — Индивидуално",
        price: "35 € / урок",
        bulletPoints: ["1 ученик", "1 ч. 30 мин.", "Присъствено"],
        shortText:
          "Персонален подход и работа според нивото, целите и темпото на ученика.",
        primaryButtonText: "Научи повече",
        onClickLog: "individual-presence",
      },
      {
        icon: DoneAll,
        title: "Онлайн — Индивидуално",
        price: "25 € / урок",
        bulletPoints: ["1 ученик", "1 ч. 30 мин.", "Онлайн"],
        shortText:
          "Гъвкаво онлайн обучение с индивидуално внимание и ясна структура.",
        primaryButtonText: "Научи повече",
        onClickLog: "individual-online",
      },
    ],
  },
];