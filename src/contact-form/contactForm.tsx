import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
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
} from "@mui/material";
import { useForm, ValidationError } from '@formspree/react';

const DAYS = [
  "Понеделник",
  "Вторник",
  "Сряда",
  "Четвъртък",
  "Петък",
  "Събота",
  "Неделя",
];

const CLASSES = Array.from({ length: 8 }, (_, i) => 5 + i);


export default function ContactForm() {
  const [state, handleSubmit] = useForm('meoznbjv');
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    schoolClass: "",
    preferredDays: [],
    studyType: "група",
    isPrivate: false,
    preferredTime: "сутрин",
    message: "",
  });

  const handleChange = (field: string) => (event: { target: { checked: any; value: any; }; }) => {
    const value =
      field === "isPrivate"
        ? event.target.checked
        : field === "preferredDays"
          ? event.target.value
          : event.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
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
          onChange={handleChange('firstName')}
        />
        <ValidationError field="firstName" prefix="Име" errors={state.errors} />

        <TextField
          fullWidth
          label="Фамилия"
          name="lastName"
          value={form.lastName}
          onChange={handleChange('lastName')}
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
          onChange={handleChange('phone')}
        />
        <ValidationError field="phone" prefix="Телефон" errors={state.errors} />

        <TextField
          fullWidth
          label="Електронна поща"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange('email')}
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
            onChange={handleChange('schoolClass')}
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
            onChange={handleChange('preferredDays')}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
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
            onChange={handleChange('studyType')}
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
                onChange={handleChange('preferredTime')}
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
                onChange={handleChange('preferredTime')}
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
        onChange={handleChange('message')}
      />
      <ValidationError field="message" prefix="Съобщение" errors={state.errors} />

      {/* Submit Button */}
      <Button type="submit" variant="contained" disabled={state.submitting} fullWidth>
        ЗАПИШИ СЕ
      </Button>
    </Box>
  );
}
