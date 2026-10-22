import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import Tools from "./Tools/Tools";

interface HeaderProps {
  x: string;
  title: string;
}

export default function Header({ x, title }: HeaderProps) {
  return (
    <header>
      <Logo />
      <Navigation />
      <Tools />
    </header>
  );
}
