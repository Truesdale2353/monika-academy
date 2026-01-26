import * as React from "react";
import {
  Box,
  Button,
  Checkbox,
  Chip,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  type SelectChangeEvent,
} from "@mui/material";
import { useForm } from "@formspree/react";
import { useMemo, useState } from "react";

const DAYS = [
  "Понеделник",
  "Вторник",
  "Сряда",
  "Четвъртък",
  "Петък",
  "Събота",
  "Неделя",
];

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  schoolClass: string;
  preferredDays: string[];
  preferredTime: string[];
  studyType: string;
  place: string;
  message: string;
};

type Errors = Partial<Record<keyof FormData, string>>;
type Touched = Partial<Record<keyof FormData, boolean>>;

const CLASSES = Array.from({ length: 12 }, (_, i) => 1 + i);

const EMAIL_REGEX = /^\S+@\S+\.\S+$/;
const PHONE_REGEX = /^[+\d]([\d\s-]{6,})$/;
const NAME_REGEX = /^[A-Za-zА-Яа-я]+(-[A-Za-zА-Яа-я]+)*$/;

const isBlank = (v: unknown) => String(v ?? "").trim().length === 0;

const normalize = (f: FormData): FormData => ({
  ...f,
  firstName: f.firstName.trim(),
  lastName: f.lastName.trim(),
  phone: f.phone.replace(/\s+/g, " ").trim(),
  email: f.email.trim(),
  schoolClass: f.schoolClass.trim(),
  studyType: f.studyType.trim(),
  place: f.place.trim(),
  message: f.message.trim(),
  preferredDays: f.preferredDays.map((x) => x.trim()).filter(Boolean),
  preferredTime: f.preferredTime.map((x) => x.trim()).filter(Boolean),
});

const validate = (raw: FormData): Errors => {
  const f = normalize(raw);
  const e: Errors = {};

  if (isBlank(f.firstName)) {
  e.firstName = "Полето е задължително.";
} else if (!NAME_REGEX.test(f.firstName)) {
  e.firstName = "Името може да съдържа само букви и тире (-).";
}

if (isBlank(f.lastName)) {
  e.lastName = "Полето е задължително.";
} else if (!NAME_REGEX.test(f.lastName)) {
  e.lastName = "Фамилията може да съдържа само букви и тире (-).";
}

  if (isBlank(f.phone)) e.phone = "Полето е задължително.";
  else if (!PHONE_REGEX.test(f.phone)) e.phone = "Невалиден телефонен номер.";

  if (isBlank(f.email)) e.email = "Полето е задължително.";
  else if (!EMAIL_REGEX.test(f.email)) e.email = "Невалиден имейл адрес.";

  if (isBlank(f.schoolClass)) e.schoolClass = "Изберете клас.";
  if (f.preferredDays.length === 0) e.preferredDays = "Изберете поне 1 ден.";
  if (f.preferredTime.length === 0) e.preferredTime = "Изберете поне 1 време.";
  if (isBlank(f.studyType)) e.studyType = "Изберете форма на обучение.";
  if (isBlank(f.place)) e.place = "Изберете място на провеждане.";

  return e;
};

export default function ContactForm() {
  const [state, handleSubmit] = useForm("meoznbjv");

  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    schoolClass: "",
    preferredDays: [],
    preferredTime: [],
    studyType: "",
    place: "",
    message: "",
  });

  const [touched, setTouched] = useState<Touched>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Validate continuously, but only SHOW errors after touch/submit
  const errors = useMemo(() => validate(form), [form]);
  const canSubmit = useMemo(() => Object.keys(errors).length === 0, [errors]);

  const markTouched = (field: keyof FormData) => {
    setTouched((prev) => (prev[field] ? prev : { ...prev, [field]: true }));
  };

  const shouldShowError = (field: keyof FormData) =>
    !!errors[field] && (hasSubmitted || !!touched[field]);

  const fieldHelperText = (field: keyof FormData) =>
    shouldShowError(field) ? errors[field] : undefined;

  const handleTextChange =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      setForm((prev) => ({ ...prev, [field]: value }));
    };

  const handleTextBlur =
    (field: keyof FormData) =>
    () => {
      markTouched(field);
    };

  const handleSelectChange =
    (field: keyof FormData) => (e: SelectChangeEvent) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      markTouched(field);
    };

  const handlePreferredTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      preferredTime: checked
        ? [...prev.preferredTime, value]
        : prev.preferredTime.filter((v) => v !== value),
    }));

    markTouched("preferredTime");
  };

  const handlePreferredDaysSelect = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;

    setForm((prev) => ({
      ...prev,
      preferredDays: typeof value === "string" ? value.split(",") : value,
    }));

    markTouched("preferredDays");
  };

  const handleStudyTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setForm((prev) => ({ ...prev, studyType: value }));
    markTouched("studyType");
  };

  const handlePlaceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setForm((prev) => ({ ...prev, place: value }));
    markTouched("place");
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHasSubmitted(true);

    // Mark all fields touched so errors show after first submit attempt
    setTouched({
      firstName: true,
      lastName: true,
      phone: true,
      email: true,
      schoolClass: true,
      preferredDays: true,
      preferredTime: true,
      studyType: true,
      place: true,
      message: true,
    });

    if (Object.keys(errors).length > 0) return;

    const cleaned = normalize(form);
    setForm(cleaned);

    await handleSubmit(e as any);
  };

  if (state.succeeded) {
    return (
      <div className="p-6 text-center bg-green-100 text-green-800 rounded-md shadow">
        ✅ Успешно изпратено! Благодарим ви за интереса. Ще се свържем с вас скоро.
      </div>
    );
  }

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      noValidate
      className="flex flex-col gap-4"
    >
      {/* Row 1: Име + Фамилия */}
      <div className="flex flex-col gap-4 md:flex-row">
        <TextField
          fullWidth
          label="Име"
          name="firstName"
          value={form.firstName}
          onChange={handleTextChange("firstName")}
          onBlur={handleTextBlur("firstName")}
          error={shouldShowError("firstName")}
          helperText={fieldHelperText("firstName")}
        />

        <TextField
          fullWidth
          label="Фамилия"
          name="lastName"
          value={form.lastName}
          onChange={handleTextChange("lastName")}
          onBlur={handleTextBlur("lastName")}
          error={shouldShowError("lastName")}
          helperText={fieldHelperText("lastName")}
        />
      </div>

      {/* Row 2: Телефон + Имейл */}
      <div className="flex flex-col gap-4 md:flex-row">
        <TextField
          fullWidth
          label="Телефон"
          name="phone"
          value={form.phone}
          onChange={handleTextChange("phone")}
          onBlur={handleTextBlur("phone")}
          error={shouldShowError("phone")}
          helperText={fieldHelperText("phone")}
        />

        <TextField
          fullWidth
          label="Електронна поща"
          name="email"
          type="email"
          value={form.email}
          onChange={handleTextChange("email")}
          onBlur={handleTextBlur("email")}
          error={shouldShowError("email")}
          helperText={fieldHelperText("email")}
        />
      </div>

      {/* Row 3: Клас + Предпочитани дни */}
      <div className="flex flex-col gap-4 md:flex-row">
        <FormControl fullWidth error={shouldShowError("schoolClass")}>
          <InputLabel>Клас</InputLabel>
          <Select
            name="schoolClass"
            value={form.schoolClass}
            onChange={handleSelectChange("schoolClass")}
            onClose={() => markTouched("schoolClass")}
            label="Клас"
          >
            {CLASSES.map((cls) => (
              <MenuItem key={cls} value={String(cls)}>
                {cls}
              </MenuItem>
            ))}
          </Select>
          {shouldShowError("schoolClass") && (
            <FormHelperText>{errors.schoolClass}</FormHelperText>
          )}
        </FormControl>

        <FormControl fullWidth error={shouldShowError("preferredDays")}>
          <InputLabel>Предпочитани дни</InputLabel>
          <Select
            multiple
            name="preferredDays[]"
            value={form.preferredDays}
            onChange={handlePreferredDaysSelect}
            onClose={() => markTouched("preferredDays")}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            label="Предпочитани дни"
          >
            {DAYS.map((day) => (
              <MenuItem key={day} value={day}>
                {day}
              </MenuItem>
            ))}
          </Select>
          {shouldShowError("preferredDays") && (
            <FormHelperText>{errors.preferredDays}</FormHelperText>
          )}
        </FormControl>
      </div>

      {/* Row 4: Форма на обучение + Място + Предпочитано време */}
      <div className="flex flex-col gap-4 md:flex-row">
        <FormControl fullWidth error={shouldShowError("studyType")}>
          <FormLabel>Форма на обучение</FormLabel>
          <RadioGroup
            row
            name="studyType"
            value={form.studyType}
            onChange={handleStudyTypeChange}
            onBlur={() => markTouched("studyType")}
          >
            <FormControlLabel value="група" control={<Radio />} label="Група" />
            <FormControlLabel
              value="индивидуално"
              control={<Radio />}
              label="Индивидуално"
            />
          </RadioGroup>
          {shouldShowError("studyType") && (
            <FormHelperText>{errors.studyType}</FormHelperText>
          )}
        </FormControl>

        <FormControl fullWidth error={shouldShowError("place")}>
          <FormLabel>Място на провеждане</FormLabel>
          <RadioGroup
            row
            name="place"
            value={form.place}
            onChange={handlePlaceChange}
            onBlur={() => markTouched("place")}
          >
            <FormControlLabel value="онлайн" control={<Radio />} label="Онлайн" />
            <FormControlLabel
              value="присъствено"
              control={<Radio />}
              label="Присъствено"
            />
          </RadioGroup>
          {shouldShowError("place") && (
            <FormHelperText>{errors.place}</FormHelperText>
          )}
        </FormControl>

        <FormControl fullWidth error={shouldShowError("preferredTime")}>
          <FormLabel>Предпочитано време</FormLabel>

          <FormControlLabel
            control={
              <Checkbox
                name="preferredTime[]"
                value="сутрин"
                checked={form.preferredTime.includes("сутрин")}
                onChange={handlePreferredTimeChange}
                onBlur={() => markTouched("preferredTime")}
              />
            }
            label="Сутрин"
          />

          <FormControlLabel
            control={
              <Checkbox
                name="preferredTime[]"
                value="следобяд"
                checked={form.preferredTime.includes("следобяд")}
                onChange={handlePreferredTimeChange}
                onBlur={() => markTouched("preferredTime")}
              />
            }
            label="Следобед"
          />

          {shouldShowError("preferredTime") && (
            <FormHelperText>{errors.preferredTime}</FormHelperText>
          )}
        </FormControl>
      </div>

      {/* Message */}
      <TextField
        fullWidth
        name="message"
        label="Съобщение"
        multiline
        minRows={4}
        value={form.message}
        onChange={handleTextChange("message")}
        onBlur={handleTextBlur("message")}
        error={shouldShowError("message")}
        helperText={fieldHelperText("message")}
      />

      {/* Submit Button */}
      <Button
        type="submit"
        variant="contained"
        disabled={state.submitting || !canSubmit}
        fullWidth
      >
        ЗАПИШИ СЕ
      </Button>
    </Box>
  );
}
