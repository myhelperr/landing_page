import nodemailer from 'nodemailer';

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function sendThankYouEmail(name: string, email: string) {
  try {
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Welcome to Helperr Waitlist! 🎉',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <img src="https://res.cloudinary.com/dpesanzkk/image/upload/v1757285362/my-helperr-1_xxjt9m.jpg" 
                   alt="Helperr Logo" 
                   style="max-width: 120px; height: auto; border-radius: 8px;">
            </div>
            
            <h2 style="color: #6666ff; text-align: center; margin-bottom: 20px;">Thank you for joining our waitlist, ${name}!</h2>
            
            <p style="font-size: 16px; line-height: 1.6; color: #333;">We're excited to have you on board! You'll be among the first to know when Helperr launches.</p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #333;">Helperr is an on-demand task-hailing platform that connects people who need immediate help with nearby helpers ready to lend a hand.</p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #333;">We'll keep you updated on our progress and let you know as soon as we're ready to launch.</p>
            
            // <div style="text-align: center; margin: 30px 0;">
            //   <div style="background-color: #6666ff; color: white; padding: 15px; border-radius: 8px; font-weight: bold;">
            //     🎉 Welcome to the Helperr Community! 🎉
            //   </div>
            // </div>
            
            <p style="margin-top: 30px; font-size: 16px; line-height: 1.6; color: #333;">
              Best regards,<br>
              <strong style="color: #6666ff;">The Helperr Team</strong>
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 20px;">
            <p style="font-size: 12px; color: #666; line-height: 1.4;">
              This email was sent because you signed up for the Helperr waitlist.<br>
              Thank you for your interest in our platform!
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, error };
  }
}
