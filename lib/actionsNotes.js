"use server";

import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import prisma from "./db";
import { revalidatePath } from "next/cache";
import { getUser } from "./actionsUser";

export const getAllNotes = async (userId) => {
  const data = await prisma.notes.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
};
export const deleteNote = async (formData) => {
  const id = formData.get("id");

  await prisma.notes.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
};

export const createNote = async (formData) => {
  console.log("formData#####################", formData);
  const title = formData.get("title");
  const description = formData.get("description");
  const completed = formData.get("completed");
  const user = await getUser();
  const userId = user?.id;

  await prisma.notes.create({
    data: {
      title,
      description,
      completed: completed === "on" ? true : false,
      userId: userId,
    },
  });
  redirect("/dashboard/notes");
};
