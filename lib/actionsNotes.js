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

export const getNote = async(id)=> {

  const note = prisma.notes.findUnique({
    where: {id: id}
  })
  return note;
}

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

export const updateNote = async (formData) => {
  try {
    const id = formData.get('id') ;
    const title = formData.get("title") 
    const description = formData.get("description") 
    const completed = formData.get("completed")

    if (title !== null || description !== null) {
      await prisma.notes.update({
        where: { id },
        data: { title: title, description: description, completed: completed === "on" },
      });
    }
  } catch (error) {
    console.error('Error updating note:', error);
  } finally {
    redirect('/'); 
  }
};
