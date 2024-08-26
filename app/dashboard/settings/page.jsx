

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { updateUser, getUser } from "@/lib/actionsUser";
import { toast } from "sonner";

export default async function SettingsPage() {
  const user = await getUser();

  console.log(user);

  // async function handleSubmit() {
  //   // const formData = new FormData(event.target);
  //   // const updatedUser = await updateUser(formData);
  //   // console.log(updatedUser);
  //   toast.success("Votre profil a été mis à jour");
  // }

  return (
    <section className="p-3 border border-gray-200 rounded-md">
      <h2 className="text-3xl font-black uppercase">Settings</h2>
      <p className="text-lg text-muted-foreground">Vos parametres de profil</p>
      <div className="w-12 h-[1px] bg-white my-2 mx-1"></div>

      <form action={updateUser} >
        <input type="hidden" name="id" value={user?.id} />
        <Card>
          <CardHeader>
            <CardTitle>Parametres globals</CardTitle>
            <CardDescription>
              Modifier vos informations puis sauvegarder.
            </CardDescription>
          </CardHeader>

          <CardContent>
            {user?.image && (
              <Image
                src={user?.image}
                alt={`${user?.name}`}
                className="object-contain w-16 h-16 mb-4 rounded-full"
                width={100}
                height={100}
              />
            )}
            <div className="mb-2 space-y-1">
              <Label htmlFor="idUser">ID</Label>
              <Input
                disabled
                name="idUser"
                type="text"
                id="idUser"
                placeholder="Votre e-mail"
                defaultValue={user?.id || ""}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="name">Nom</Label>
              <Input
                name="name"
                type="text"
                id="name"
                placeholder="Votre nom"
                defaultValue={user?.name || ""}
              />
            </div>
            <div className="mt-2 space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                disabled
                name="email"
                type="email"
                id="email"
                placeholder="Votre e-mail"
                defaultValue={user?.email || ""}
              />
            </div>
          </CardContent>

          <CardFooter>
            <Button type="submit">Modifier</Button>
          </CardFooter>
        </Card>
      </form>
      <form action="">
        <input type="hidden" name="id" value={user?.id} />
        <Button className="mx-1 my-2 text-white bg-red-500 hover:bg-red-600">
          Supprimer mon compte
        </Button>
      </form>
    </section>
  );
}
