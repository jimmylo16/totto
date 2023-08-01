import { RegisterUser } from "@/components/Users/RegisterUser";
import { ValidateUser } from "@/components/Users/ValidateUser";
import { NeedHelp } from "@/components/common/NeedHelp";

export default function Home() {
  return (
    <div>
      {/* <ValidateUser /> */}
      <RegisterUser />
      <NeedHelp />
    </div>
  );
}
