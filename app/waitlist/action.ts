"use server";

import prisma from "@/lib/prisma";
import { sendThankYouEmail } from "@/lib/email";

export async function addToWaitlist(data: { name: string; email: string }) {
  try {
    await prisma.waitlistEntry.create({
      data: {
        name: data.name,
        email: data.email,
      },
    });

    // Send thank you email (don't let email failure block the success)
    try {
      await sendThankYouEmail(data.name, data.email);
    } catch (emailError) {
      console.error('Failed to send thank you email:', emailError);
    }

    return { success: true, message: "Successfully added to the waitlist. Check your mail!" };
  } catch (error: unknown) {
    console.error("Error adding to waitlist:", error);
    if (error && typeof error === 'object' && 'code' in error && error.code === "P2002") {
      
      return {
        success: false,
        message: "Email has already been added to the waitlist",
      };
    }
    return { success: false, message: "Something went wrong" };
  }
}
