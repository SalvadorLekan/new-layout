import Header from "../../components/header";
import { UserProvider } from "../../context/user";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider>
      <Header />
      {children}
    </UserProvider>
  );
}
