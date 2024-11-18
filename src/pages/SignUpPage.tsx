import AuthLayout from "@/views/AuthLayout";
import CInput from "@/components/CInput";
import CButton from "@/components/CButton";
// images
import logo from "/logo.svg";

export default function SignUpPage() {
  function signUpHandler() {
    console.log("signUp");
  }
  return (
    <AuthLayout>
      <img src={logo} alt="logo" className="mx-auto mb-6" />
      <h4 className="text-center text-base text-neutral-800 font-bold mb-6">
        ثبت نام
      </h4>

      <form className="flex flex-col" onSubmit={signUpHandler}>
        <CInput
          name="first_name"
          type="text"
          placeholder="نام"
          className="mb-6"
        />
        <CInput
          name="last_name"
          type="text"
          placeholder="نام خانوادگی"
          className="mb-6"
        />
        <CInput
          name="email"
          type="email"
          placeholder="ایمیل"
          className="mb-6"
        />
        <CInput
          name="password"
          type="password"
          placeholder="رمز عبور"
          className="mb-6"
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
