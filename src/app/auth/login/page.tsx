import { CardWrapper } from "@/components/auth/card_wrapper";

import { LoginForm } from "./login_form";

const RegisterPage: React.FC = () => {
  return (
    <CardWrapper
      backButtonHref="/auth/register"
      backButtonLabel="Don't have an account?"
      headerLabel="Welcome"
      showSocial
    >
      <LoginForm />
    </CardWrapper>
  );
};

export default RegisterPage;
