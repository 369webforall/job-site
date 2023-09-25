import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.formData();

    const surname = data.get('surname');
    const email = data.get('email');
    const telephone = data.get('telephone');
    const applicationAs = data.get('applicationAs');
    const comment = data.get('comment');
    const file = data.get('attachment');

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Replace with your email service (e.g., 'Gmail', 'SMTP')
      auth: {
        user: process.env.EMAIL, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or an app-specific password
      },
    });

    // Define email options
    const mailOptions = {
      from: process.env.EMAIL, // Sender's email address
      to: process.env.EMAIL, // Recipient's email address
      subject: applicationAs,
      text: `Subject: ${applicationAs}\nName: ${surname}\nEmail: ${email}\nTelephone: ${telephone}\nMessage: ${comment}`,
      attachments: [
        {
          filename: file ? file.name : '',
          content: buffer,
        },
      ],
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}
