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

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  try {
    // When deployed to App Hosting, GOOGLE_APPLICATION_CREDENTIALS is not set.
    // The SDK will automatically discover credentials.
    if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
      const serviceAccount = JSON.parse(
        process.env.GOOGLE_APPLICATION_CREDENTIALS as string
      );
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        projectId: 'myportfolio-c799b'
      });
    } else {
      admin.initializeApp({
        projectId: 'myportfolio-c799b'
      });
    }
  } catch (error: any) {
    console.error('Firebase admin initialization error', error.stack);
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
      submittedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    revalidatePath("/");

    return {
      message: "Thank you for your message! I'll get back to you soon.",
    };
  } catch (error) {
    console.error("Error saving to Firestore:", error);
    return {
      message: "An unexpected error occurred. Please try again later.",
      errors: {}
    }
  }
}
