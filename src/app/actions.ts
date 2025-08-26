"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";

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

  // In a real application, you would send an email, save to a database, etc.
  // For this example, we'll just log the data and return a success message.
  console.log("Contact form submitted successfully:");
  console.log(validatedFields.data);

  revalidatePath("/");

  return {
    message: "Thank you for your message! I'll get back to you soon.",
  };
}
