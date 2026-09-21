import {
  siGmail,
  siGooglecalendar,
  siGooglesheets,
  siGoogledrive,
  siHubspot,
  siQuickbooks,
  siXero,
  siStripe,
  siNotion,
  siAsana,
  siTrello,
  siWhatsapp,
  siTelegram,
  siZapier,
  siCalendly,
  siSap,
  siAirtable,
  siMailchimp,
} from "simple-icons";
import { FaSlack, FaSalesforce, FaMicrosoft } from "react-icons/fa6";

// Real brand marks via simple-icons (MIT-licensed SVG path data, official
// hex colors). Slack, Salesforce, and Microsoft ask not to be
// redistributed there, so those come from Font Awesome's brand icon set
// instead. Pipedrive isn't published in either — it gets an honest
// monogram, not a guess at their mark.
//
// SAP, Microsoft (Excel/Outlook), and Airtable are here deliberately —
// alongside the modern SaaS tools, Halvard also works inside the older,
// clunkier systems a lot of businesses are still actually running on.
const simpleIconMap: Record<string, (typeof siGmail)> = {
  Gmail: siGmail,
  "Google Calendar": siGooglecalendar,
  "Google Sheets": siGooglesheets,
  "Google Drive": siGoogledrive,
  HubSpot: siHubspot,
  QuickBooks: siQuickbooks,
  Xero: siXero,
  Stripe: siStripe,
  Notion: siNotion,
  Asana: siAsana,
  Trello: siTrello,
  WhatsApp: siWhatsapp,
  Telegram: siTelegram,
  Zapier: siZapier,
  Calendly: siCalendly,
  SAP: siSap,
  Airtable: siAirtable,
  Mailchimp: siMailchimp,
};

const reactIconMap: Record<string, { Icon: typeof FaSlack; bg: string }> = {
  Slack: { Icon: FaSlack, bg: "#4A154B" },
  Salesforce: { Icon: FaSalesforce, bg: "#00A1E0" },
  "Microsoft 365": { Icon: FaMicrosoft, bg: "#5E5E5E" },
};

export default function BrandIcon({
  name,
  size = 44,
  rounded = "rounded-2xl",
}: {
  name: string;
  size?: number;
  rounded?: string;
}) {
  const simple = simpleIconMap[name];
  const react = reactIconMap[name];
  const glyphSize = size * 0.56;

  if (simple) {
    return (
      <div
        className={`flex shrink-0 items-center justify-center ${rounded}`}
        style={{ width: size, height: size, background: `#${simple.hex}` }}
      >
        <svg width={glyphSize} height={glyphSize} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d={simple.path} fill="#fff" />
        </svg>
      </div>
    );
  }

  if (react) {
    return (
      <div
        className={`flex shrink-0 items-center justify-center ${rounded}`}
        style={{ width: size, height: size, background: react.bg }}
      >
        <react.Icon size={glyphSize} color="#fff" />
      </div>
    );
  }

  // Pipedrive, and anything else not covered above.
  return (
    <div
      className={`flex shrink-0 items-center justify-center ${rounded}`}
      style={{ width: size, height: size, background: "#1B1611" }}
    >
      <span
        className="font-display font-medium text-white"
        style={{ fontSize: size * 0.42 }}
      >
        {name.slice(0, 1)}
      </span>
    </div>
  );
}

// Interleaved on purpose — Gmail/Calendar/Sheets/Drive are only 4 of 21
// here, but grouped together they used to read as "Google-only" at a
// glance. Spreading them out (and mixing in the legacy/enterprise tools)
// makes the actual breadth visible in the first few frames of the loop.
export const integrationNames = [
  "Gmail",
  "HubSpot",
  "SAP",
  "Slack",
  "QuickBooks",
  "Google Calendar",
  "Zapier",
  "Salesforce",
  "Xero",
  "Microsoft 365",
  "Stripe",
  "Notion",
  "Google Sheets",
  "Airtable",
  "WhatsApp",
  "Trello",
  "Mailchimp",
  "Telegram",
  "Google Drive",
  "Calendly",
  "Pipedrive",
  "Asana",
];
