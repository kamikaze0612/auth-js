type Props = {
  children: React.ReactNode;
};
const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#8E2DE2] to-[#4A00E0]">
      {children}
    </main>
  );
};

export default AuthLayout;
