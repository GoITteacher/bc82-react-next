import { Field, Form, Formik, FormikHelpers } from "formik";
import css from "./Form.module.css";
import * as Yup from "yup";
import clsx from "clsx";
import { useId } from "react";

const GadgetRepairSchema = Yup.object().shape({
  type: Yup.string().required(),
  brand: Yup.string().required(),
  model: Yup.string().required(),
  summary: Yup.string().required(),
  detail: Yup.string().required(),
  budget: Yup.number().required(),
  contactName: Yup.string().required(),
  contactEmail: Yup.string().required(),
});

interface GadgetRepair {
  type: string;
  brand: string;
  model: string;
  summary: string;
  detail: string;
  budget: number;
  contactName: string;
  contactEmail: string;
}

const initialValues: GadgetRepair = {
  type: "",
  brand: "",
  model: "",
  summary: "",
  detail: "",
  budget: 0,
  contactName: "",
  contactEmail: "",
};

export default function GadgetRepairForm() {
  const id = useId();

  const handleSubmit = (
    values: GadgetRepair,
    actions: FormikHelpers<GadgetRepair>
  ) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={GadgetRepairSchema}
    >
      {({ errors }) => {
        const isInvalidBrand = Boolean(errors.brand);
        const isInvalidBudget = Boolean(errors.budget);
        const isInvalidContactEmail = Boolean(errors.contactEmail);
        const isInvalidContactName = Boolean(errors.contactName);
        const isInvalidDetail = Boolean(errors.detail);
        const isInvalidModel = Boolean(errors.model);
        const isInvalidSummary = Boolean(errors.summary);
        const isInvalidType = Boolean(errors.type);

        return (
          <Form className={css.form}>
            <h2>Заявка на ремонт гаджета</h2>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Пристрій</legend>

              <label className={css.label} htmlFor={`gadget-type-${id}`}>
                Тип пристрою
              </label>
              <Field
                id={`gadget-type-${id}`}
                name="type"
                type="text"
                className={clsx(css.input, isInvalidType && css.invalid)}
                placeholder="Смартфон, ноутбук, планшет"
              />

              <label className={css.label} htmlFor={`gadget-brand-${id}`}>
                Марка
              </label>
              <Field
                id={`gadget-brand-${id}`}
                name="brand"
                type="text"
                className={clsx(css.input, isInvalidBrand && css.invalid)}
                placeholder="Samsung, Apple, Asus"
              />

              <label className={css.label} htmlFor="gadget-model">
                Модель
              </label>
              <Field
                id="gadget-model"
                name="model"
                type="text"
                className={clsx(css.input, isInvalidModel && css.invalid)}
                placeholder="Galaxy S23, ZenBook 14"
              />
            </fieldset>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Проблема</legend>

              <label className={css.label} htmlFor="issue-summary">
                Короткий опис
              </label>
              <Field
                id="issue-summary"
                name="summary"
                type="text"
                className={clsx(css.input, isInvalidSummary && css.invalid)}
                placeholder="Не заряджається / тріщина екрану"
              />

              <label className={css.label} htmlFor="issue-detail">
                Детальний опис
              </label>
              <Field
                as="textarea"
                id="issue-detail"
                name="detail"
                rows={4}
                className={clsx(css.textarea, isInvalidDetail && css.invalid)}
                placeholder="Коли виникла проблема, що вже перевіряли"
              />

              <label className={css.label} htmlFor="budget">
                Орієнтовний бюджет
              </label>
              <Field
                id="budget"
                name="budget"
                type="number"
                min="0"
                step="1"
                className={clsx(css.input, isInvalidBudget && css.invalid)}
                placeholder="Напр., 1500 грн"
              />
            </fieldset>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Контакти</legend>

              <label className={css.label} htmlFor="contact-name">
                Ім’я
              </label>
              <Field
                id="contact-name"
                name="contactName"
                type="text"
                className={clsx(css.input, isInvalidContactName && css.invalid)}
                placeholder="Ваше ім’я"
              />

              <label className={css.label} htmlFor="contact-email">
                Email
              </label>
              <Field
                id="contact-email"
                name="contactEmail"
                type="email"
                className={clsx(
                  css.input,
                  isInvalidContactEmail && css.invalid
                )}
                placeholder="name@email.com"
              />
            </fieldset>

            <button type="submit" className={css.button}>
              Надіслати заявку
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
