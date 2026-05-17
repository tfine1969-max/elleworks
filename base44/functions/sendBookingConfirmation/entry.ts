import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();

    if (!user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const payload = await req.json();
    const {
      full_name,
      email,
      workshop_title,
      workshop_date,
      is_waitlist,
    } = payload;

    const date = new Date(workshop_date);
    const formattedDate = date.toLocaleDateString('en-ZA', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    const emailBody = is_waitlist
      ? `Hi ${full_name},

Thank you for your interest in "${workshop_title}". This workshop is currently fully booked, and we've added you to the waitlist.

If a spot becomes available, we'll contact you at this email address. We really hope to see you there!

Workshop: ${workshop_title}
Date: ${formattedDate}

Looking forward to connecting with you!

Best regards,
elleworks team
---
elleworks is a service of wealthworks.co.za`
      : `Hi ${full_name},

Your spot is reserved! We're excited to have you at "${workshop_title}".

Workshop: ${workshop_title}
Date: ${formattedDate}
Zoom link: [Link will be sent 24 hours before the workshop]

Please keep an eye on your inbox for a reminder email the day before.

See you there!

Best regards,
elleworks team
---
elleworks is a service of wealthworks.co.za`;

    await base44.integrations.Core.SendEmail({
      to: email,
      subject: `${is_waitlist ? 'Waitlist confirmation' : 'Booking confirmed'}: ${workshop_title}`,
      body: emailBody,
      from_name: 'elleworks',
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});