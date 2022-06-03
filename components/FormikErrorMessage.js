import { useFormikContext } from "formik";

function FormikErrorMessage({ name }) {
  const { errors, touched } = useFormikContext();
  const isError = errors[name] && touched[name];
  if (!isError) return null;
  return (
    <div className="text-red-600 text-base mt-2 p-1 bg-black inline-block px-3">
      {errors[name]}
    </div>
  );
}

export default FormikErrorMessage;
