import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";

export function LoginForm() {
  return (
    <form>
      <Input id="email" label="Email" />
      <Input id="password" label="Password" />
      <Button label="Log in" type="submit" />
    </form>
  );
}
