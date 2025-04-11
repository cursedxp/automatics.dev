import emailjs from "@emailjs/browser";

// Initialize EmailJS with your public key
emailjs.init(process.env.EMAILJS_PUBLIC_KEY);

export const sendEmail = async (templateParams) => {
  try {
    const response = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      templateParams
    );
    return { success: true, response };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
};
