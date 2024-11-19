import { useFormik } from "formik";
// components
import AuthLayout from "@/views/AuthLayout";
import CInput from "@/components/CInput";
import CButton from "@/components/CButton";
// images
import logo from "/logo.svg";
// interfaces
interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export default function SignUpPage() {
  const validate = (values: FormValues) => {
    const errors: Record<string, string> = {};
    if (!values.firstName) errors.firstName = "نام الزامی است!";
    else if (values.firstName.length > 15)
      errors.firstName = "نام می‌تواند حداکثر 15 حرف باشد!";

    if (!values.lastName) errors.lastName = "نام خانوادگی الزامی است!";
    else if (values.lastName.length > 20)
      errors.lastName = "نام خانوادگی می‌تواند حداکثر 20 حرف باشد!";

    if (!values.email) errors.email = "ایمیل الزامی است!";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
      errors.email = "ایمیل معتبر نیست!";

    if (!values.password) errors.password = "رمز عبور الزامی است!";
    else if (values.password.length < 8)
      errors.password = "رمز عبور باید حداقل 8 کارکتر باشد!";

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
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
      <h4 className="text-center text-base text-neutral-800 font-bold mb-6">
        ثبت نام
      </h4>

      <form className="flex flex-col" onSubmit={formik.handleSubmit}>
        <CInput
          id="firstName"
          name="firstName"
          type="text"
          value={formik.values.firstName}
          placeholder="نام"
          error={formik.errors.firstName}
          touched={formik.touched.firstName}
          className="mb-6"
          onChange={formik.handleChange}
          onBluer={formik.handleBlur}
        />

        <CInput
          id="lastName"
          name="lastName"
          type="text"
          value={formik.values.lastName}
          placeholder="نام خانوادگی"
          error={formik.errors.lastName}
          touched={formik.touched.lastName}
          className="mb-6"
          onChange={formik.handleChange}
          onBluer={formik.handleBlur}
        />

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
        <CButton text="ورود" className="text-primary-500 mr-1" />
        <p className="text-neutral-800">اکانت دارید؟</p>
      </div>
    </AuthLayout>
  );
}
