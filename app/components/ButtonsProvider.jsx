import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

export default function ButtonsProvider() {
  return (
    <div className={`flex flex-col space-y-4`}>
      <Button className={`text-xl flex gap-x-3`}>
        <FaGithub /> Se connecter avec Github
      </Button>
      <Button className={`text-xl flex gap-x-3`}>
        <FaGoogle /> Se connecter avec Google
      </Button>
    </div>
  );
}
