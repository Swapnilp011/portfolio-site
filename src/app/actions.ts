"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import admin from "firebase-admin";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_KEY ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY) : undefined;

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      projectId: "myportfolio-c799b",
    });
  } catch (error: any) {
     if (!/already exists/u.test(error.message)) {
      console.error('Firebase admin initialization error', error.stack)
    }
  }
}


export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
) {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
    };
  }

  try {
    const db = admin.firestore();
    await db.collection("contacts").add({
      ...validatedFields.data,
      submittedAt: new Date(),
    });

    revalidatePath("/");

    return {
      message: "Thank you for your message! I'll get back to you soon.",
    };
  } catch (error) {
    console.error("Error saving to Firestore:", error);
    return {
      message: "Something went wrong. Please try again later.",
      errors: {}
    }
  }
}
