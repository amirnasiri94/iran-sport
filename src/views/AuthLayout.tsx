import banner from "../assets/images/login-banner.png";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex container min-h-screen items-center gap-x-6">
      <div className="basis-1/2">
        <img src={banner} alt="banner" />
      </div>
      <div className="basis-1/2">{children}</div>
    </div>
  );
}

export default AuthLayout;
