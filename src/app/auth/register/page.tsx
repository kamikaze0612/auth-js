import { CardWrapper } from "@/components/auth/card_wrapper";

import { RegisterForm } from "./register_form";

const RegisterPage: React.FC = () => {
  return (
    <CardWrapper
      backButtonHref="/auth/login"
      backButtonLabel="Already have an account?"
      headerLabel="Register"
      showSocial
    >
      <RegisterForm />
    </CardWrapper>
  );
};

export default RegisterPage;
