"use client";

import { useMemo, useState } from "react";
import InfoCard from "./components/InfoCard";
import CoursePopup from "./components/CourseMoreInfo";
import { sections } from "./configs/CourseSectionConfiguration";
import {
  commonPopupData,
  coursePopupConfigs,
} from "./configs/PopupConfiguration";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import ContactForm from "./contact-form/contactForm";

export default function Sections() {
  const [activeSectionId, setActiveSectionId] = useState(sections[0].id);
  const [selectedPopupId, setSelectedPopupId] = useState<string | null>(null);
  const [open, setOpen] = useState(false);


  const activeSection =
    sections.find((section) => section.id === activeSectionId) ?? sections[0];

  const popupById = useMemo(
    () =>
      Object.fromEntries(
        coursePopupConfigs.map((popup) => [popup.id, popup])
      ) as Record<string, (typeof coursePopupConfigs)[number]>,
    []
  );

  const selectedPopup = selectedPopupId
    ? popupById[selectedPopupId] ?? null
    : null;

  const handleCardClick = (cardId: string) => {
    if (popupById[cardId]) {
      setSelectedPopupId(cardId);
      return;
    }

    console.log(cardId);
  };

  return (
    <div className="flex w-full flex-col items-center gap-8">
      <div className="ml-auto flex w-full max-w-3xl flex-col rounded-3xl bg-white/60 p-1 sm:flex-row sm:rounded-full">
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

      <section className="flex w-full flex-col items-center gap-6 md:flex-row md:flex-wrap md:justify-center">
        {activeSection.cards.map((card) => (
          <InfoCard
            key={card.onClickLog}
            icon={card.icon}
            title={card.title}
            price={card.price}
            bulletPoints={card.bulletPoints}
            shortText={card.shortText}
            primaryButtonText={card.primaryButtonText}
            secondaryButtonText={card.secondaryButtonText}
            variant={card.variant}
            onClick={() => handleCardClick(card.onClickLog)}
          />
        ))}
      </section>

      <CoursePopup
        open={Boolean(selectedPopup)}
        popup={selectedPopup}
        commonData={commonPopupData}
        onClose={() => setSelectedPopupId(null)}
        onPrimaryClick={() => setOpen(true)}
        onSecondaryClick={(popupId) => console.log("secondary:", popupId)}
      />
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
        <DialogActions>
          <Button sx={{
            color: 'black',
            backgroundColor: 'white',
            '&:hover': {
              backgroundColor: 'lightgrey',
            },
          }} onClick={() => setOpen(false)}>X</Button>
        </DialogActions>
        <DialogContent >
          <ContactForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}