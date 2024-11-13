import { Input, Button } from "@headlessui/react";
// images
import banner from "../assets/images/login-banner.jpg";
import logo from "/logo.svg";

export default function SignUpPage() {
  function signUpHandler() {
    console.log("signUp");
  }
  return (
    <div className="flex container h-full items-center gap-x-6">
      <div className="basis-1/2">
        <img src={banner} alt="banner" />
      </div>
      <div className="basis-1/2 bg-slate-600">
        <img src={logo} alt="logo" className="mx-auto mb-6" />
        <h4 className="text-center text-base text-neutral-800 font-bold mb-6">ثبت نام</h4>

        <form className="flex flex-col" onSubmit={signUpHandler}>
          <Input name="first_name" type="text" placeholder="نام" className="mb-6" />
          <Input name="last_name" type="text" placeholder="نام خانوادگی" className="mb-6" />
          <Input name="email" type="email" placeholder="ایمیل" className="mb-6" />
          <Input name="password" type="password" placeholder="رمز عبور" className="mb-6" />
          <Button type="submit">ادامه</Button>
        </form>
      </div>
    </div>
  );
}
