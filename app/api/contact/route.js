import nodemailer from 'nodemailer';

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.formData();

    const name = data.get('name');
    const email = data.get('email');
    const telephone = data.get('telephone');
    const message = data.get('message');

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
      subject: 'Job Search Inquery',
      text: `Vollständiger Name*: ${name}\nE-Mail*: ${email}\nTelefonnummer*: ${telephone}\nIhre Nachricht an uns*: ${message}`,
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
