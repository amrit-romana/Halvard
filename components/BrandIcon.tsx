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
} from "simple-icons";
import { FaSlack, FaSalesforce } from "react-icons/fa6";

// Real brand marks via simple-icons (MIT-licensed SVG path data, official
// hex colors). Slack and Salesforce ask not to be redistributed there, so
// those two come from Font Awesome's brand icon set instead. Pipedrive
// isn't published in either — it gets an honest monogram, not a guess at
// their mark.
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
};

const reactIconMap: Record<string, { Icon: typeof FaSlack; bg: string }> = {
  Slack: { Icon: FaSlack, bg: "#4A154B" },
  Salesforce: { Icon: FaSalesforce, bg: "#00A1E0" },
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
        className="font-display font-extrabold text-white"
        style={{ fontSize: size * 0.42 }}
      >
        {name.slice(0, 1)}
      </span>
    </div>
  );
}

export const integrationNames = [
  ...Object.keys(simpleIconMap),
  ...Object.keys(reactIconMap),
  "Pipedrive",
];
