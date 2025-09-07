import * as React from "react";
import {
  Box,
  Button,
  Checkbox,
  Chip,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  type SelectChangeEvent,
} from "@mui/material";
import { useForm, ValidationError } from '@formspree/react';
import { useState } from "react";

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
  message: string;
};

const CLASSES = Array.from({ length: 8 }, (_, i) => 5 + i);


export default function ContactForm() {
  const [state, handleSubmit] = useForm('meoznbjv');
const [form, setForm] = useState<FormData>({
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  schoolClass: '',
  preferredDays: [],
  preferredTime: [],
  studyType: '',
  message: '',
})

const handleTextChange = (field: string) => (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { value } = e.target;
  setForm((prev: any) => ({
    ...prev,
    [field]: value,
  }));
};

const handlePreferredDaysSelect = (
  event: SelectChangeEvent<string[]>
) => {
  const {
    target: { value },
  } = event;

  setForm((prev) => ({
    ...prev,
    preferredDays: typeof value === 'string' ? value.split(',') : value,
  }));
};

const handlePreferredTimeChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const { value, checked } = e.target;

  setForm((prev) => ({
    ...prev,
    preferredTime: checked
      ? [...prev.preferredTime, value]
      : prev.preferredTime.filter((v) => v !== value),
  }));
};

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >
      {/* Row 1: Име + Фамилия */}
      <div className="flex flex-col gap-4 md:flex-row">
        <TextField
          fullWidth
          label="Име"
          name="firstName"
          value={form.firstName}
          onChange={handleTextChange('firstName')}
        />
        <ValidationError field="firstName" prefix="Име" errors={state.errors} />

        <TextField
          fullWidth
          label="Фамилия"
          name="lastName"
          value={form.lastName}
          onChange={handleTextChange('lastName')}
        />
        <ValidationError field="lastName" prefix="Фамилия" errors={state.errors} />
      </div>

      {/* Row 2: Телефон + Имейл */}
      <div className="flex flex-col gap-4 md:flex-row">
        <TextField
          fullWidth
          label="Телефон"
          name="phone"
          value={form.phone}
          onChange={handleTextChange('phone')}
        />
        <ValidationError field="phone" prefix="Телефон" errors={state.errors} />

        <TextField
          fullWidth
          label="Електронна поща"
          name="email"
          type="email"
          value={form.email}
          onChange={handleTextChange('email')}
        />
        <ValidationError field="email" prefix="Имейл" errors={state.errors} />
      </div>

      {/* Row 3: Клас + Предпочитани дни */}
      <div className="flex flex-col gap-4 md:flex-row">
        <FormControl fullWidth>
          <InputLabel>Клас</InputLabel>
          <Select
            name="schoolClass"
            value={form.schoolClass}
            label="Клас"
          >
            {CLASSES.map((cls) => (
              <MenuItem key={cls} value={cls}>
                {cls}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <ValidationError field="schoolClass" prefix="Клас" errors={state.errors} />

        <FormControl fullWidth>
          <InputLabel>Предпочитани дни</InputLabel>
          <Select
            multiple
            name="preferredDays[]"
            value={form.preferredDays}
            onChange={handlePreferredDaysSelect}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value: any) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {DAYS.map((day) => (
              <MenuItem key={day} value={day}>
                {day}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <ValidationError field="preferredDays" prefix="Дни" errors={state.errors} />
      </div>

      {/* Row 4: Форма на обучение + Предпочитано време */}
      <div className="flex flex-col gap-4 md:flex-row">
        <FormControl fullWidth>
          <FormLabel>Форма на обучение</FormLabel>
          <RadioGroup
            row
            name="studyType"
            value={form.studyType}
            onChange={handleTextChange('studyType')}
          >
            <FormControlLabel value="група" control={<Radio />} label="Група" />
            <FormControlLabel value="индивидуално" control={<Radio />} label="Индивидуално" />
          </RadioGroup>
        </FormControl>
        <ValidationError field="studyType" prefix="Форма" errors={state.errors} />

        <FormControl fullWidth>
          <FormLabel>Предпочитано време</FormLabel>
          <FormControlLabel
            control={
              <Checkbox
                name="preferredTime[]"
                value="сутрин"
                checked={form.preferredTime.includes('сутрин')}
                onChange={handleTextChange('preferredTime')}
              />
            }
            label="Сутрин"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="preferredTime[]"
                value="следобяд"
                checked={form.preferredTime.includes('следобяд')}
                onChange={handleTextChange('preferredTime')}
              />
            }
            label="Следобед"
          />
        </FormControl>
        <ValidationError field="preferredTime" prefix="Време" errors={state.errors} />
      </div>

      {/* Message */}
      <TextField
        fullWidth
        name="message"
        label="Съобщение"
        multiline
        minRows={4}
        value={form.message}
        onChange={handleTextChange('message')}
      />
      <ValidationError field="message" prefix="Съобщение" errors={state.errors} />

      {/* Submit Button */}
      <Button type="submit" variant="contained" disabled={state.submitting} fullWidth>
        ЗАПИШИ СЕ
      </Button>
    </Box>
  );
}
