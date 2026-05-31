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
import {
  useMemo,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { Link } from "react-router";

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  schoolClass: string;
  course: string;
  preferredDays: string[];
  preferredTime: string[];
  studyType: string;
  place: string;
  message: string;
  termsAccepted: boolean;
};

type FieldName = keyof FormData;
type TextFieldName = "firstName" | "lastName" | "phone" | "email" | "message";
type RadioFieldName = "studyType" | "place";

type Errors = Partial<Record<FieldName, string>>;
type Touched = Partial<Record<FieldName, boolean>>;

type Option = {
  label: string;
  value: string;
};

type TextFieldConfig = {
  name: TextFieldName;
  label: string;
  type?: string;
  multiline?: boolean;
  minRows?: number;
};

type RadioGroupConfig = {
  name: RadioFieldName;
  label: string;
  options: Option[];
};

const FORMSPREE_FORM_ID = "meoznbjv";

const REQUIRED_FIELD_MESSAGE = "Полето е задължително.";

const DAYS = [
  "Понеделник",
  "Вторник",
  "Сряда",
  "Четвъртък",
  "Петък",
  "Събота",
  "Неделя",
];

const CLASSES = Array.from({ length: 12 }, (_, index) => String(index + 1));

const COURSE_OPTIONS: Option[] = [
  {
    label: "За бъдещи 7. клас — Група 1",
    value: "За бъдещи 7. клас — Група 1",
  },
  {
    label: "За бъдещи 7. клас — Група 2",
    value: "За бъдещи 7. клас — Група 2",
  },
  {
    label: "За бъдещи 4. клас",
    value: "За бъдещи 4. клас",
  },
  {
    label: "За бъдещи 6. клас",
    value: "За бъдещи 6. клас",
  },
  {
    label: "За бъдещи 12. клас — Общообразователна подготовка",
    value: "За бъдещи 12. клас — Общообразователна подготовка",
  },
  {
    label: "За бъдещи 12. клас — Профилирана подготовка",
    value: "За бъдещи 12. клас — Профилирана подготовка",
  },
  {
    label: "Подготовка за НВО — 7. клас",
    value: "Подготовка за НВО — 7. клас",
  },
  {
    label: "Подготовка за 8., 9. и 10. клас",
    value: "Подготовка за 8., 9. и 10. клас",
  },
  {
    label: "Подготовка за кандидатстване в университет — 11. и 12. клас",
    value: "Подготовка за кандидатстване в университет — 11. и 12. клас",
  },
  {
    label: "Състезателна математика — 2., 3. и 4. клас",
    value: "Състезателна математика — 2., 3. и 4. клас",
  },
];

const PREFERRED_TIME_OPTIONS: Option[] = [
  { label: "Сутрин", value: "сутрин" },
  { label: "Следобед", value: "следобяд" },
];

const TEXT_FIELD_ROWS: TextFieldConfig[][] = [
  [
    { name: "firstName", label: "Име" },
    { name: "lastName", label: "Фамилия" },
  ],
  [
    { name: "phone", label: "Телефон" },
    { name: "email", label: "Електронна поща", type: "email" },
  ],
];

const RADIO_GROUPS: RadioGroupConfig[] = [
  {
    name: "studyType",
    label: "Форма на обучение",
    options: [
      { label: "Група", value: "група" },
      { label: "Индивидуално", value: "индивидуално" },
    ],
  },
  {
    name: "place",
    label: "Място на провеждане",
    options: [
      { label: "Онлайн", value: "онлайн" },
      { label: "Присъствено", value: "присъствено" },
    ],
  },
];

const INITIAL_FORM_STATE: FormData = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  schoolClass: "",
  course: "",
  preferredDays: [],
  preferredTime: [],
  studyType: "",
  place: "",
  message: "",
  termsAccepted: false,
};

const FORM_FIELDS = Object.keys(INITIAL_FORM_STATE) as FieldName[];

const EMAIL_REGEX = /^\S+@\S+\.\S+$/;
const PHONE_REGEX = /^[+\d]([\d\s-]{6,})$/;
const NAME_REGEX = /^[A-Za-zА-Яа-я]+(-[A-Za-zА-Яа-я]+)*$/;

const isBlank = (value: unknown) => String(value ?? "").trim().length === 0;

const normalize = (form: FormData): FormData => ({
  ...form,
  firstName: form.firstName.trim(),
  lastName: form.lastName.trim(),
  phone: form.phone.replace(/\s+/g, " ").trim(),
  email: form.email.trim(),
  schoolClass: form.schoolClass.trim(),
  course: form.course.trim(),
  studyType: form.studyType.trim(),
  place: form.place.trim(),
  message: form.message.trim(),
  preferredDays: form.preferredDays.map((item) => item.trim()).filter(Boolean),
  preferredTime: form.preferredTime.map((item) => item.trim()).filter(Boolean),
});

const getAllFieldsTouched = (): Touched =>
  FORM_FIELDS.reduce<Touched>((acc, field) => {
    acc[field] = true;
    return acc;
  }, {});

const validateName = (
  value: string,
  invalidMessage: string
): string | undefined => {
  if (isBlank(value)) return REQUIRED_FIELD_MESSAGE;
  if (!NAME_REGEX.test(value)) return invalidMessage;

  return undefined;
};

const validate = (rawForm: FormData, isCourseSelected: boolean): Errors => {
  const form = normalize(rawForm);
  const errors: Errors = {};

  const firstNameError = validateName(
    form.firstName,
    "Името може да съдържа само букви и тире (-)."
  );

  if (firstNameError) {
    errors.firstName = firstNameError;
  }

  const lastNameError = validateName(
    form.lastName,
    "Фамилията може да съдържа само букви и тире (-)."
  );

  if (lastNameError) {
    errors.lastName = lastNameError;
  }

  if (isBlank(form.phone)) {
    errors.phone = REQUIRED_FIELD_MESSAGE;
  } else if (!PHONE_REGEX.test(form.phone)) {
    errors.phone = "Невалиден телефонен номер.";
  }

  if (isBlank(form.email)) {
    errors.email = REQUIRED_FIELD_MESSAGE;
  } else if (!EMAIL_REGEX.test(form.email)) {
    errors.email = "Невалиден имейл адрес.";
  }

  if (isBlank(form.schoolClass)) {
    errors.schoolClass = "Изберете клас.";
  }

  if (!isCourseSelected && form.preferredDays.length === 0) {
    errors.preferredDays = "Изберете поне 1 ден.";
  }

  if (!isCourseSelected && form.preferredTime.length === 0) {
    errors.preferredTime = "Изберете поне 1 време.";
  }

  if (isBlank(form.studyType)) {
    errors.studyType = "Изберете форма на обучение.";
  }

  if (isBlank(form.place)) {
    errors.place = "Изберете място на провеждане.";
  }

  if (!form.termsAccepted) {
  errors.termsAccepted = "Трябва да приемете общите условия.";
}
  return errors;
};

export default function ContactForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

  const [form, setForm] = useState<FormData>(INITIAL_FORM_STATE);
  const [touched, setTouched] = useState<Touched>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isCourseSelected, setIsCourseSelected] = useState(false);

  const errors = useMemo(
    () => validate(form, isCourseSelected),
    [form, isCourseSelected]
  );

  const canSubmit = useMemo(() => Object.keys(errors).length === 0, [errors]);

  const markTouched = (field: FieldName) => {
    setTouched((prev) => {
      if (prev[field]) return prev;

      return {
        ...prev,
        [field]: true,
      };
    });
  };

  const updateField = <K extends FieldName>(field: K, value: FormData[K]) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleTermsAcceptedChange = (event: ChangeEvent<HTMLInputElement>) => {
  updateField("termsAccepted", event.target.checked);
  markTouched("termsAccepted");
};

  const shouldShowError = (field: FieldName) =>
    Boolean(errors[field] && (hasSubmitted || touched[field]));

  const fieldHelperText = (field: FieldName) =>
    shouldShowError(field) ? errors[field] : undefined;

  const handleTextChange =
    (field: TextFieldName) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      updateField(field, event.target.value);
    };

  const handleTextBlur = (field: TextFieldName) => () => {
    markTouched(field);
  };

  const handleClassChange = (event: SelectChangeEvent) => {
    updateField("schoolClass", event.target.value);
    markTouched("schoolClass");
  };

  const handleCourseChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    const hasSelectedCourse = !isBlank(value);

    setIsCourseSelected(hasSelectedCourse);

    setForm((prev) => ({
      ...prev,
      course: value,
      preferredDays: hasSelectedCourse ? [] : prev.preferredDays,
      preferredTime: hasSelectedCourse ? [] : prev.preferredTime,
    }));

    markTouched("course");
  };

  const handlePreferredDaysChange = (
    event: SelectChangeEvent<typeof form.preferredDays>
  ) => {
    const { value } = event.target;

    updateField(
      "preferredDays",
      typeof value === "string" ? value.split(",") : value
    );

    markTouched("preferredDays");
  };

  const handleRadioChange =
    (field: RadioFieldName) => (event: ChangeEvent<HTMLInputElement>) => {
      updateField(field, event.target.value);
      markTouched(field);
    };

  const handlePreferredTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    setForm((prev) => ({
      ...prev,
      preferredTime: checked
        ? [...prev.preferredTime, value]
        : prev.preferredTime.filter((item) => item !== value),
    }));

    markTouched("preferredTime");
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setHasSubmitted(true);
    setTouched(getAllFieldsTouched());

    if (Object.keys(errors).length > 0) return;

    const cleaned = normalize(form);
    setForm(cleaned);

    await handleSubmit(event as any);
  };

  const renderTextField = (field: TextFieldConfig) => (
    <TextField
      key={field.name}
      fullWidth
      label={field.label}
      name={field.name}
      type={field.type}
      multiline={field.multiline}
      minRows={field.minRows}
      value={form[field.name]}
      onChange={handleTextChange(field.name)}
      onBlur={handleTextBlur(field.name)}
      error={shouldShowError(field.name)}
      helperText={fieldHelperText(field.name)}
    />
  );

  const renderRadioGroup = (group: RadioGroupConfig) => (
    <FormControl
      key={group.name}
      fullWidth
      error={shouldShowError(group.name)}
    >
      <FormLabel>{group.label}</FormLabel>

      <RadioGroup
        row
        name={group.name}
        value={form[group.name]}
        onChange={handleRadioChange(group.name)}
        onBlur={() => markTouched(group.name)}
      >
        {group.options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>

      {shouldShowError(group.name) && (
        <FormHelperText>{errors[group.name]}</FormHelperText>
      )}
    </FormControl>
  );

  if (state.succeeded) {
    return (
      <div className="rounded-md bg-green-100 p-6 text-center text-green-800 shadow">
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
      {TEXT_FIELD_ROWS.map((row, index) => (
        <div key={index} className="flex flex-col gap-4 md:flex-row">
          {row.map(renderTextField)}
        </div>
      ))}

      <div className="flex flex-col gap-4 md:flex-row">
        <FormControl fullWidth error={shouldShowError("schoolClass")}>
          <InputLabel>Клас</InputLabel>

          <Select
            name="schoolClass"
            value={form.schoolClass}
            onChange={handleClassChange}
            onClose={() => markTouched("schoolClass")}
            label="Клас"
          >
            {CLASSES.map((schoolClass) => (
              <MenuItem key={schoolClass} value={schoolClass}>
                {schoolClass}
              </MenuItem>
            ))}
          </Select>

          {shouldShowError("schoolClass") && (
            <FormHelperText>{errors.schoolClass}</FormHelperText>
          )}
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Курс</InputLabel>

          <Select
            name="course"
            value={form.course}
            onChange={handleCourseChange}
            onClose={() => markTouched("course")}
            label="Курс"
          >
            <MenuItem value="">
              <em>Без избран курс</em>
            </MenuItem>

            {COURSE_OPTIONS.map((course) => (
              <MenuItem key={course.value} value={course.value}>
                {course.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {!isCourseSelected && (
          <FormControl fullWidth error={shouldShowError("preferredDays")}>
            <InputLabel>Предпочитани дни</InputLabel>

            <Select
              multiple
              name="preferredDays[]"
              value={form.preferredDays}
              onChange={handlePreferredDaysChange}
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
        )}
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        {RADIO_GROUPS.map(renderRadioGroup)}

        {!isCourseSelected && (
          <FormControl fullWidth error={shouldShowError("preferredTime")}>
            <FormLabel>Предпочитано време</FormLabel>

            {PREFERRED_TIME_OPTIONS.map((option) => (
              <FormControlLabel
                key={option.value}
                control={
                  <Checkbox
                    name="preferredTime[]"
                    value={option.value}
                    checked={form.preferredTime.includes(option.value)}
                    onChange={handlePreferredTimeChange}
                    onBlur={() => markTouched("preferredTime")}
                  />
                }
                label={option.label}
              />
            ))}

            {shouldShowError("preferredTime") && (
              <FormHelperText>{errors.preferredTime}</FormHelperText>
            )}
          </FormControl>
        )}
      </div>

      {renderTextField({
        name: "message",
        label: "Съобщение",
        multiline: true,
        minRows: 4,
      })}

<FormControl error={shouldShowError("termsAccepted")}>
  <FormControlLabel
    control={
      <Checkbox
        name="termsAccepted"
        checked={form.termsAccepted}
        onChange={handleTermsAcceptedChange}
        onBlur={() => markTouched("termsAccepted")}
      />
    }
      label={
    <span>
      Прочетох и приемам{" "}
      <Link
        to="/general-conditions"
        target="_blank"
        className="text-[#5F68FF] underline hover:no-underline"
      >
        общите условия
      </Link>
    </span>
  }
  />

  {shouldShowError("termsAccepted") && (
    <FormHelperText>{errors.termsAccepted}</FormHelperText>
  )}
</FormControl>
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