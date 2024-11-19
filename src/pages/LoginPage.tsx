import { useFormik } from "formik";
// components
import AuthLayout from "@/views/AuthLayout";
import CInput from "@/components/CInput";
import CButton from "@/components/CButton";
// images
import logo from "/logo.svg";
// interface
interface FormValues {
  email: string;
  password: string;
}

export default function LoginPage() {
  const validate = (values: FormValues) => {
    const errors: Record<string, string> = {};

    if (!values.email) errors.email = "ایمیل الزامی است!";

    if (!values.password) errors.password = "رمز عبور الزامی است!";

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <AuthLayout>
      <img src={logo} alt="logo" className="mx-auto mb-6" />
      <h4 className="text-center text-base text-neutral-600 font-bold mb-6">
        خــــوش آمـــدیــــد
      </h4>

      <form className="flex flex-col" onSubmit={formik.handleSubmit}>
        <CInput
          id="email"
          name="email"
          type="email"
          value={formik.values.email}
          placeholder="ایمیل"
          error={formik.errors.email}
          touched={formik.touched.email}
          className="mb-6"
          onChange={formik.handleChange}
          onBluer={formik.handleBlur}
        />
        <CInput
          id="password"
          name="password"
          type="password"
          value={formik.values.password}
          placeholder="رمز عبور"
          error={formik.errors.password}
          touched={formik.touched.password}
          className="mb-6"
          onChange={formik.handleChange}
          onBluer={formik.handleBlur}
        />
        <CButton
          type="submit"
          text="ادامه"
          round="md"
          className="bg-primary-400 py-4 w-3/4 mx-auto text-xl text-neutral mb-6"
        />
      </form>

      <div className="flex justify-center">
        <CButton text="ثبت نام کنید" className="text-primary-500 mr-1" />
        <p className="text-neutral-800">اکانت ندارید؟</p>
      </div>
    </AuthLayout>
  );
}
