const wrap = (title: string, body: string) => `
<div style="font-family:Inter,system-ui,sans-serif;max-width:480px;margin:0 auto;padding:32px 24px;color:#15171C;">
  <p style="font-family:Georgia,serif;font-weight:700;font-size:20px;margin:0 0 24px;">Halvard</p>
  <h1 style="font-size:20px;margin:0 0 16px;">${title}</h1>
  ${body}
  <p style="margin-top:32px;font-size:12px;color:rgba(21,23,28,0.5);">Halvard, Inc. — AI Automation Studio</p>
</div>`;

export function inviteEmail({ name, projectName, setupUrl }: { name: string; projectName: string; setupUrl: string }) {
  const subject = "You're set up on Halvard — set your password";
  const text = `Hi ${name},\n\nYour Halvard account for "${projectName}" is ready. Set your password here: ${setupUrl}\n\nThis link expires in 7 days.`;
  const html = wrap(
    "Set up your account",
    `<p style="font-size:15px;line-height:1.6;">Hi ${name},</p>
     <p style="font-size:15px;line-height:1.6;">Your Halvard account for <strong>${projectName}</strong> is ready. Set your password to view your project status, payment details, and API keys.</p>
     <p style="margin:28px 0;"><a href="${setupUrl}" style="background:#0A6B4F;color:#fff;padding:12px 24px;border-radius:100px;text-decoration:none;font-weight:600;font-size:14px;">Set your password</a></p>
     <p style="font-size:13px;color:rgba(21,23,28,0.5);">This link expires in 7 days.</p>`
  );
  return { subject, text, html };
}

export function apiKeyEmail({ name, label, key }: { name: string; label: string; key: string }) {
  const subject = `Your Halvard API key — ${label}`;
  const text = `Hi ${name},\n\nHere is your API key (${label}):\n\n${key}\n\nKeep this safe — treat it like a password. You can also view it any time in your Halvard portal.`;
  const html = wrap(
    "Your API key",
    `<p style="font-size:15px;line-height:1.6;">Hi ${name},</p>
     <p style="font-size:15px;line-height:1.6;">Here is your API key (<strong>${label}</strong>):</p>
     <p style="margin:20px 0;padding:14px 16px;background:#F5F3ED;border-radius:10px;font-family:monospace;font-size:13px;word-break:break-all;">${key}</p>
     <p style="font-size:13px;color:rgba(21,23,28,0.5);">Keep this safe — treat it like a password. You can also view it any time in your Halvard portal.</p>`
  );
  return { subject, text, html };
}

export function meetingRequestConfirmation({ name }: { name: string }) {
  const subject = "We've got your request — Halvard";
  const text = `Hi ${name},\n\nThanks for reaching out. We'll get back to you within a day.`;
  const html = wrap(
    "Thanks for reaching out",
    `<p style="font-size:15px;line-height:1.6;">Hi ${name},</p>
     <p style="font-size:15px;line-height:1.6;">We've got your request and will get back to you within a day.</p>`
  );
  return { subject, text, html };
}
