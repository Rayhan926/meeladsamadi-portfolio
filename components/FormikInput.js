import { Field } from "formik";
import FormikErrorMessage from "./FormikErrorMessage";
function FormikInput({ disabledErrorMessage, ...props }) {
  return (
    <div>
      <Field {...props} component={MyInput} />
      {!disabledErrorMessage && (
        <FormikErrorMessage fontSize={props.size} name={props.name} />
      )}
    </div>
  );
}

export default FormikInput;

const MyInput = ({ field, form, ...props }) => {
  const isError = form.errors[field.name] && form.touched[field.name];
  return <input {...field} {...props} className="__input" />;
};

{
  /* <Input
{...field}
{...props}
className={`${isError ? 'border-red-600 dark:border-red-600' : ''} ${
    props.className || ''
}`}
floatingLabelClass={`${
    isError ? '!text-red-500 peer-placeholder-shown:!text-slate-400' : ''
} ${props.className || ''}`}
/> */
}
