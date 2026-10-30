import nodemailer, { type SendMailOptions } from 'nodemailer';

export interface FormLeadPayload {
  source?: string;
  name?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  company?: string;
  companyName?: string;
  propertyType?: string;
  facilityType?: string;
  squareFootage?: string;
  estimatedSqFt?: string;
  service?: string;
  serviceNeeded?: string;
  projectScope?: string;
  timeframe?: string;
  targetTimeline?: string;
  projectTimeline?: string;
  address?: string;
  projectAddress?: string;
  preferredContactMethod?: string;
  message?: string;
  comments?: string;
  notes?: string;
  projectDescription?: string;
  pageUrl?: string;
}

export function isZohoConfigured(): boolean {
  return Boolean(
    (process.env.ZOHO_USER || 'eva@stellrit.com') &&
      (process.env.ZOHO_PASS || 'dWjRKEpGww4B')
  );
}

export function getZohoTransporter() {
  const host = process.env.ZOHO_HOST || 'smtp.zoho.com';
  const port = parseInt(process.env.ZOHO_PORT || '465', 10);
  const secure = process.env.ZOHO_SECURE !== 'false';
  const user = process.env.ZOHO_USER || 'eva@stellrit.com';
  const pass = process.env.ZOHO_PASS || 'dWjRKEpGww4B';

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
}

export async function sendLeadNotification(payload: FormLeadPayload) {
  const clientName = payload.fullName || payload.name || 'Commercial Client';
  const clientEmail = payload.email?.trim() || '';
  const clientPhone = payload.phone?.trim() || 'Not provided';
  const clientCompany = payload.companyName || payload.company || 'Not specified';
  const propertyType = payload.propertyType || payload.facilityType || 'Commercial Property';
  const sqFt = payload.squareFootage || payload.estimatedSqFt || 'Not specified';
  const service = payload.service || payload.serviceNeeded || payload.projectScope || 'Commercial Painting';
  const timeline = payload.timeframe || payload.targetTimeline || payload.projectTimeline || 'Flexible / As soon as possible';
  const address = payload.address || payload.projectAddress || 'Dallas-Fort Worth Metro';
  const contactMethod = payload.preferredContactMethod || 'Phone or Email';
  const message =
    payload.message ||
    payload.comments ||
    payload.notes ||
    payload.projectDescription ||
    'No additional project notes provided.';
  const source = payload.source || 'Website Lead Form';

  const submissionDate = new Date().toLocaleString('en-US', {
    timeZone: 'America/Chicago',
    dateStyle: 'full',
    timeStyle: 'medium',
  });

  const transporter = getZohoTransporter();
  const toEmail = process.env.NOTIFICATION_TO_EMAIL || 'eva@stellrit.com';
  const fromEmail = process.env.ZOHO_USER || 'eva@stellrit.com';
  const fromName = process.env.EMAIL_FROM_NAME || 'Painting Dallas Commercial Painting';

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>New Commercial Estimate Request</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #0f172a; }
    .container { max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
    .header { background: linear-gradient(135deg, #062F57 0%, #03182E 100%); color: #ffffff; padding: 32px 28px; text-align: left; border-bottom: 4px solid #EF3340; }
    .header-badge { display: inline-block; background: rgba(239, 51, 64, 0.2); color: #EF3340; font-size: 11px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; padding: 4px 12px; border-radius: 999px; margin-bottom: 12px; border: 1px solid rgba(239, 51, 64, 0.4); }
    .header h1 { margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px; color: #ffffff; }
    .header p { margin: 6px 0 0; color: #94a3b8; font-size: 13px; }
    .content { padding: 28px; }
    .alert-box { background: #eff6ff; border-left: 4px solid #062F57; padding: 14px 18px; border-radius: 6px; margin-bottom: 24px; font-size: 14px; color: #1e3a8a; }
    .data-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .data-table tr { border-bottom: 1px solid #f1f5f9; }
    .data-table tr:last-child { border-bottom: none; }
    .data-table td { padding: 12px 6px; font-size: 14px; vertical-align: top; }
    .label { font-weight: 700; color: #64748b; width: 38%; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px; }
    .value { font-weight: 600; color: #0f172a; }
    .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin: 20px 0; }
    .message-box-title { font-size: 11px; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; }
    .message-text { font-size: 14px; line-height: 1.6; color: #334155; margin: 0; white-space: pre-wrap; }
    .action-bar { text-align: center; margin: 28px 0 16px; }
    .btn { display: inline-block; background: #EF3340; color: #ffffff !important; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 700; font-size: 14px; margin: 0 6px 10px; }
    .btn-secondary { background: #062F57; color: #ffffff !important; }
    .footer { background: #f8fafc; padding: 20px 28px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <span class="header-badge">NEW INCOMING INQUIRY</span>
      <h1>Painting Dallas Commercial Estimate</h1>
      <p>Submitted on ${submissionDate} (Dallas Time)</p>
    </div>
    
    <div class="content">
      <div class="alert-box">
        <strong>Source:</strong> ${source} • Reply directly to this email to reach the client.
      </div>

      <table class="data-table">
        <tr>
          <td class="label">Full Name</td>
          <td class="value"><strong>${clientName}</strong></td>
        </tr>
        <tr>
          <td class="label">Company / Property</td>
          <td class="value">${clientCompany}</td>
        </tr>
        <tr>
          <td class="label">Phone Number</td>
          <td class="value"><a href="tel:${clientPhone}" style="color: #062F57; font-weight: bold; text-decoration: none;">${clientPhone}</a></td>
        </tr>
        <tr>
          <td class="label">Email Address</td>
          <td class="value">${clientEmail ? `<a href="mailto:${clientEmail}" style="color: #062F57; text-decoration: underline;">${clientEmail}</a>` : 'Not provided'}</td>
        </tr>
        <tr>
          <td class="label">Property / Facility Type</td>
          <td class="value">${propertyType}</td>
        </tr>
        <tr>
          <td class="label">Service Requested</td>
          <td class="value">${service}</td>
        </tr>
        <tr>
          <td class="label">Estimated Square Footage</td>
          <td class="value">${sqFt}</td>
        </tr>
        <tr>
          <td class="label">Target Timeline</td>
          <td class="value">${timeline}</td>
        </tr>
        <tr>
          <td class="label">Project Location / Address</td>
          <td class="value">${address}</td>
        </tr>
        <tr>
          <td class="label">Preferred Contact Method</td>
          <td class="value">${contactMethod}</td>
        </tr>
      </table>

      <div class="message-box">
        <div class="message-box-title">Project Scope & Client Notes</div>
        <p class="message-text">${message}</p>
      </div>

      <div class="action-bar">
        ${clientPhone !== 'Not provided' ? `<a href="tel:${clientPhone}" class="btn">📞 Call ${clientPhone}</a>` : ''}
        ${clientEmail ? `<a href="mailto:${clientEmail}?subject=Regarding%20Your%20Painting%20Dallas%20Estimate%20Request" class="btn btn-secondary">✉️ Reply to ${clientEmail}</a>` : ''}
      </div>
    </div>

    <div class="footer">
      Painting Dallas • 3017 Grand Ave, Dallas, TX 75215 • (469) 360-5805<br>
      Notification sent automatically from paintingdallas.com lead ingestion system.
    </div>
  </div>
</body>
</html>
`;

  const textContent = `
NEW COMMERCIAL ESTIMATE REQUEST - PAINTING DALLAS
==================================================
Date: ${submissionDate}
Source: ${source}

CLIENT DETAILS:
- Full Name: ${clientName}
- Company: ${clientCompany}
- Phone: ${clientPhone}
- Email: ${clientEmail || 'Not provided'}
- Preferred Contact: ${contactMethod}

PROJECT SPECIFICATIONS:
- Property Type: ${propertyType}
- Service Requested: ${service}
- Estimated Sq Ft: ${sqFt}
- Timeline: ${timeline}
- Location / Address: ${address}

PROJECT SCOPE & NOTES:
${message}

==================================================
Painting Dallas Commercial Painting & Restoration
3017 Grand Ave, Dallas, TX 75215
Phone: (469) 360-5805 | Web: paintingdallas.com
`;

  // 1. Send Admin Notification Email
  const adminMailOptions: SendMailOptions = {
    from: `"${fromName}" <${fromEmail}>`,
    to: toEmail,
    replyTo: clientEmail && clientEmail.includes('@') ? clientEmail : fromEmail,
    subject: `🔔 New Commercial Lead: ${clientName} - ${service} (${propertyType})`,
    text: textContent,
    html: htmlContent,
  };

  const info = await transporter.sendMail(adminMailOptions);

  // 2. Optional: Send Client Confirmation Receipt if email was provided
  if (clientEmail && clientEmail.includes('@')) {
    try {
      const clientReceiptHtml = `
<!DOCTYPE html>
<html>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; padding: 24px; color: #0f172a;">
  <div style="max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 10px; overflow: hidden; border: 1px solid #e2e8f0;">
    <div style="background: #062F57; color: #ffffff; padding: 24px; border-bottom: 4px solid #EF3340;">
      <h2 style="margin: 0; font-size: 20px;">Thank You for Contacting Painting Dallas</h2>
    </div>
    <div style="padding: 24px; font-size: 14px; line-height: 1.6; color: #334155;">
      <p>Hello <strong>${clientName}</strong>,</p>
      <p>We have successfully received your commercial painting estimate request for <strong>${propertyType}</strong>.</p>
      <p>One of our senior commercial estimators is reviewing your project requirements and will connect with you within <strong>1 business hour</strong>.</p>
      
      <div style="background: #f1f5f9; padding: 14px; border-radius: 6px; margin: 18px 0;">
        <strong>Need immediate assistance or emergency scheduling?</strong><br>
        Direct Line: <a href="tel:+14693605805" style="color: #062F57; font-weight: bold;">(469) 360-5805</a><br>
        Email: <a href="mailto:support@paintingdallas.com" style="color: #062F57;">support@paintingdallas.com</a>
      </div>

      <p style="margin-top: 20px;">Best regards,<br>
      <strong>Commercial Estimating Department</strong><br>
      Painting Dallas Commercial Painting & Restoration<br>
      3017 Grand Ave, Dallas, TX 75215</p>
    </div>
  </div>
</body>
</html>
      `;

      await transporter.sendMail({
        from: `"${fromName}" <${fromEmail}>`,
        to: clientEmail,
        subject: `We Received Your Commercial Painting Estimate Request | Painting Dallas`,
        html: clientReceiptHtml,
      });
    } catch (clientErr) {
      console.warn('Could not dispatch client receipt email:', clientErr);
    }
  }

  return info;
}
