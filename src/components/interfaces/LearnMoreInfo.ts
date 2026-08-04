export type PopupDetail = {
  label: string;
  value: string;
};

export type PopupFaq = {
  question: string;
  answer: string;
};

export type CoursePopupConfig = {
  id: string;
  title: string;
  badge?: string;
  description: string;
  details: PopupDetail[];
  suitableFor: string[];
  processTitle?: string;
  processText: string;
  includes?: string[];
  reassuranceText?: string;
  primaryButtonText: string;
};

export type CommonPopupData = {
  includes: string[];
  faqs: PopupFaq[];
};
