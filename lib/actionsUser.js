"use server";

import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import prisma from "./db";
import { revalidatePath } from "next/cache";

export const getUser = async () => {
  const session = await getServerSession(authOptions);

  // Vérifier si la session et l'utilisateur sont définis
  if (!session || !session.user || !session.user.id) {
    redirect("../");
  }
  const id = session.user.id;

  const user = await prisma.user.findUnique({
    where: { id },
  });

  return user;
};

export const updateUser = async (formData) => {
  try {
      const userName = formData.get("name");
      const userId = formData.get("id"); 
      if (!userName || !userId) {
        throw new Error("Le nom et l'ID de l'utilisateur sont requis");
      }
      if(userName !==null){
        const user = await prisma.user.update({
          where: { id: userId },
          data: {
            name: userName,
          },
        });
        return user;
      }
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de la mise à jour de l'utilisateur",
      error
    );
  }
  finally{
    revalidatePath("/dashboard/settings");
  }
};
