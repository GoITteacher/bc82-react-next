import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import css from "./OrderForm.module.css";
import * as Yup from "yup";
import clsx from "clsx";

const OrderSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, "має бути не коротше за 5 символів")
    .max(10, "має бути не довшим за 10 символів")
    .required("Це поле є обовязковим"),

  email: Yup.string().email().required(),
  delivery: Yup.string().oneOf(["pickup", "courier", "drone"]).required(),
  restrictions: Yup.array().of(Yup.string()),
  deliveryTime: Yup.string()
    .oneOf(["morning", "afternoon", "evening"])
    .required(),
  message: Yup.string(),
});

interface Order {
  username: string;
  email: string;
  delivery: "pickup" | "courier" | "drone";
  restrictions: string[];
  deliveryTime: "morning" | "afternoon" | "evening";
  message: string;
}

const initialValues: Order = {
  username: "test name",
  email: "testemail@gmail.com",
  delivery: "drone",
  restrictions: ["vegan", "nut-free"],
  deliveryTime: "morning",
  message: "Hello",
};

export default function OrderForm() {
  const handleSubmit = (values: Order, actions: FormikHelpers<Order>) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={OrderSchema}
    >
      {({ resetForm, isValid, errors }) => {
        const isInvalidName = Boolean(errors.username);
        const isInvalidEmail = Boolean(errors.email);

        return (
          <Form className={css.form}>
            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Client Info</legend>
              <label className={css.label}>Name</label>
              <Field
                type="text"
                name="username"
                className={clsx(css.input, isInvalidName && css.invalid)}
              />

              <label className={css.label}>Email</label>
              <Field type="email" name="email" className={css.input} />
              <ErrorMessage
                name="email"
                component="span"
                className={css["error"]}
              />
            </fieldset>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Delivery method</legend>

              <label className={css.option}>
                <Field type="radio" name="delivery" value="pickup" />
                Pickup
              </label>
              <label className={css.option}>
                <Field type="radio" name="delivery" value="courier" />
                Courier
              </label>
              <label className={css.option}>
                <Field type="radio" name="delivery" value="drone" />
                Drone delivery
              </label>
            </fieldset>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Dietary restrictions</legend>

              <label className={css.option}>
                <Field type="checkbox" name="restrictions" value="vegan" />
                Vegan
              </label>
              <label className={css.option}>
                <Field
                  type="checkbox"
                  name="restrictions"
                  value="gluten-free"
                />
                Gluten-free
              </label>
              <label className={css.option}>
                <Field type="checkbox" name="restrictions" value="nut-free" />
                Nut-free
              </label>
            </fieldset>

            <label className={css.label}>Preferred delivery time</label>

            <Field as="select" name="deliveryTime" className={css.input}>
              <option value="" disabled>
                -- Choose delivery time --
              </option>
              <option value="morning">Morning (8:00-12:00)</option>
              <option value="afternoon">Afternoon (12:00-16:00)</option>
              <option value="evening">Evening (16:00-20:00)</option>
            </Field>

            <label className={css.label}>Additional message</label>
            <Field
              as="textarea"
              name="message"
              rows={4}
              className={css.textarea}
            ></Field>

            {isValid && (
              <button type="submit" className={css.button}>
                Place order
              </button>
            )}

            <button
              type="button"
              onClick={() => resetForm()}
              className={css.button}
            >
              Reset
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
