import { RegisterUser } from "@/components/Users/RegisterUser";
import { ValidateUser } from "@/components/Users/ValidateUser";
import { NeedHelp } from "@/components/common/NeedHelp";
import { useState } from "react";

export default function Home() {
  const [showRegister, setShowRegister] = useState(false);
  const [initialEmail, setInitialEmail] = useState("");

  return (
    <div>
      {showRegister ? (
        <RegisterUser
          setShowRegister={setShowRegister}
          initialEmail={initialEmail}
        />
      ) : (
        <ValidateUser
          setShowRegister={setShowRegister}
          setInitialEmail={setInitialEmail}
        />
      )}
      <NeedHelp />
    </div>
  );
}
