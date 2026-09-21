import {
  siGmail,
  siGooglecalendar,
  siGooglesheets,
  siGoogledrive,
  siGoogledocs,
  siGooglemeet,
  siGoogleforms,
  siGooglegemini,
  siGoogleads,
  siGooglecloud,
  siHubspot,
  siZoho,
  siIntercom,
  siZendesk,
  siQuickbooks,
  siXero,
  siStripe,
  siPaypal,
  siSquare,
  siWise,
  siBrex,
  siRazorpay,
  siNotion,
  siAsana,
  siTrello,
  siJira,
  siConfluence,
  siLinear,
  siClickup,
  siAirtable,
  siBasecamp,
  siTodoist,
  siWhatsapp,
  siTelegram,
  siDiscord,
  siMessenger,
  siSignal,
  siZoom,
  siZapier,
  siMake,
  siN8n,
  siIfttt,
  siMailchimp,
  siBrevo,
  siMailgun,
  siShopify,
  siWoocommerce,
  siBigcommerce,
  siSquarespace,
  siWebflow,
  siWordpress,
  siWix,
  siSap,
  siGithub,
  siGitlab,
  siBitbucket,
  siDropbox,
  siBox,
  siCalendly,
  siCaldotcom,
  siTypeform,
  siSurveymonkey,
  siMeta,
  siInstagram,
  siYoutube,
  siTiktok,
  siReddit,
  siX,
  siAnthropic,
  siHuggingface,
  siPerplexity,
  siPostgresql,
  siMysql,
  siMongodb,
  siSnowflake,
  siSupabase,
  siFirebase,
  siRedis,
  siCloudflare,
  siVercel,
  siDigitalocean,
} from "simple-icons";
import {
  FaSlack,
  FaSalesforce,
  FaMicrosoft,
  FaLinkedin,
  FaAmazon,
  FaAws,
} from "react-icons/fa6";

// Real brand marks via simple-icons (MIT-licensed SVG path data, official
// hex colors). A handful of brands ask not to be redistributed there —
// those come from Font Awesome's brand set instead. Pipedrive isn't
// published in either, so it gets an honest monogram.
const simpleIconMap: Record<string, typeof siGmail> = {
  Gmail: siGmail,
  "Google Calendar": siGooglecalendar,
  "Google Sheets": siGooglesheets,
  "Google Drive": siGoogledrive,
  "Google Docs": siGoogledocs,
  "Google Meet": siGooglemeet,
  "Google Forms": siGoogleforms,
  Gemini: siGooglegemini,
  "Google Ads": siGoogleads,
  "Google Cloud": siGooglecloud,
  HubSpot: siHubspot,
  Zoho: siZoho,
  Intercom: siIntercom,
  Zendesk: siZendesk,
  QuickBooks: siQuickbooks,
  Xero: siXero,
  Stripe: siStripe,
  PayPal: siPaypal,
  Square: siSquare,
  Wise: siWise,
  Brex: siBrex,
  Razorpay: siRazorpay,
  Notion: siNotion,
  Asana: siAsana,
  Trello: siTrello,
  Jira: siJira,
  Confluence: siConfluence,
  Linear: siLinear,
  ClickUp: siClickup,
  Airtable: siAirtable,
  Basecamp: siBasecamp,
  Todoist: siTodoist,
  WhatsApp: siWhatsapp,
  Telegram: siTelegram,
  Discord: siDiscord,
  Messenger: siMessenger,
  Signal: siSignal,
  Zoom: siZoom,
  Zapier: siZapier,
  Make: siMake,
  n8n: siN8n,
  IFTTT: siIfttt,
  Mailchimp: siMailchimp,
  Brevo: siBrevo,
  Mailgun: siMailgun,
  Shopify: siShopify,
  WooCommerce: siWoocommerce,
  BigCommerce: siBigcommerce,
  Squarespace: siSquarespace,
  Webflow: siWebflow,
  WordPress: siWordpress,
  Wix: siWix,
  SAP: siSap,
  GitHub: siGithub,
  GitLab: siGitlab,
  Bitbucket: siBitbucket,
  Dropbox: siDropbox,
  Box: siBox,
  Calendly: siCalendly,
  "Cal.com": siCaldotcom,
  Typeform: siTypeform,
  SurveyMonkey: siSurveymonkey,
  Meta: siMeta,
  Instagram: siInstagram,
  YouTube: siYoutube,
  TikTok: siTiktok,
  Reddit: siReddit,
  X: siX,
  Anthropic: siAnthropic,
  "Hugging Face": siHuggingface,
  Perplexity: siPerplexity,
  PostgreSQL: siPostgresql,
  MySQL: siMysql,
  MongoDB: siMongodb,
  Snowflake: siSnowflake,
  Supabase: siSupabase,
  Firebase: siFirebase,
  Redis: siRedis,
  Cloudflare: siCloudflare,
  Vercel: siVercel,
  DigitalOcean: siDigitalocean,
};

const reactIconMap: Record<string, { Icon: typeof FaSlack; bg: string }> = {
  Slack: { Icon: FaSlack, bg: "#4A154B" },
  Salesforce: { Icon: FaSalesforce, bg: "#00A1E0" },
  "Microsoft 365": { Icon: FaMicrosoft, bg: "#5E5E5E" },
  LinkedIn: { Icon: FaLinkedin, bg: "#0A66C2" },
  Amazon: { Icon: FaAmazon, bg: "#232F3E" },
  AWS: { Icon: FaAws, bg: "#232F3E" },
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

// The marquee shows a curated slice; the integrations page shows all.
// Order interleaves categories so the breadth reads in the first frames.
export const integrationNames = [
  "Gmail",
  "Salesforce",
  "SAP",
  "Slack",
  "QuickBooks",
  "HubSpot",
  "Stripe",
  "Microsoft 365",
  "Notion",
  "Shopify",
  "Zapier",
  "Xero",
  "Airtable",
  "WhatsApp",
  "Jira",
  "Google Sheets",
  "Zoho",
  "PayPal",
  "Linear",
  "Mailchimp",
  "GitHub",
  "Zoom",
  "Pipedrive",
  "Asana",
];

// Full catalog for the integrations page — grouped by category.
export const integrationCatalog: { category: string; tools: string[] }[] = [
  {
    category: "Sales & CRM",
    tools: ["Salesforce", "HubSpot", "Pipedrive", "Zoho", "Intercom", "Zendesk"],
  },
  {
    category: "Google Workspace",
    tools: [
      "Gmail",
      "Google Calendar",
      "Google Sheets",
      "Google Drive",
      "Google Docs",
      "Google Meet",
      "Google Forms",
    ],
  },
  {
    category: "Payments & Finance",
    tools: ["Stripe", "QuickBooks", "Xero", "PayPal", "Square", "Wise", "Brex", "Razorpay"],
  },
  {
    category: "Work & Projects",
    tools: [
      "Notion",
      "Asana",
      "Trello",
      "Jira",
      "Confluence",
      "Linear",
      "ClickUp",
      "Airtable",
      "Basecamp",
      "Todoist",
    ],
  },
  {
    category: "Messaging & Calls",
    tools: [
      "Slack",
      "WhatsApp",
      "Telegram",
      "Discord",
      "Messenger",
      "Signal",
      "Zoom",
      "Microsoft 365",
    ],
  },
  {
    category: "Automation & Glue",
    tools: ["Zapier", "Make", "n8n", "IFTTT"],
  },
  {
    category: "Email & Marketing",
    tools: ["Mailchimp", "Brevo", "Mailgun", "Google Ads", "Meta", "LinkedIn"],
  },
  {
    category: "Commerce & Sites",
    tools: [
      "Shopify",
      "WooCommerce",
      "BigCommerce",
      "Squarespace",
      "Webflow",
      "WordPress",
      "Wix",
    ],
  },
  {
    category: "Enterprise & Legacy",
    tools: ["SAP", "Amazon", "AWS"],
  },
  {
    category: "Files & Docs",
    tools: ["Dropbox", "Box", "Calendly", "Cal.com", "Typeform", "SurveyMonkey"],
  },
  {
    category: "Developer & Data",
    tools: [
      "GitHub",
      "GitLab",
      "Bitbucket",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Snowflake",
      "Supabase",
      "Firebase",
      "Redis",
      "Cloudflare",
      "Vercel",
      "DigitalOcean",
      "Google Cloud",
    ],
  },
  {
    category: "AI & Models",
    tools: ["Anthropic", "Gemini", "Hugging Face", "Perplexity"],
  },
  {
    category: "Social",
    tools: ["Instagram", "YouTube", "TikTok", "Reddit", "X"],
  },
];
