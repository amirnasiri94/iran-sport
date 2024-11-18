import AuthLayout from "@/views/AuthLayout";
import CInput from "@/components/CInput";
import CButton from "@/components/CButton";
// images
import logo from "/logo.svg";

export default function LoginPage() {
  function loginHandler() {
    console.log("login");
  }

  return (
    <AuthLayout>
      <img src={logo} alt="logo" className="mx-auto mb-6" />
      <h4 className="text-center text-base text-neutral-600 font-bold mb-6">
        خــــوش آمـــدیــــد
      </h4>

      <form className="flex flex-col" onSubmit={loginHandler}>
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
        <CButton text="ثبت نام کنید" className="text-primary-500 mr-1" />
        <p className="text-neutral-800">اکانت ندارید؟</p>
      </div>
    </AuthLayout>
  );
}
