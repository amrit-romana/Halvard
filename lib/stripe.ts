import "server-only";
import Stripe from "stripe";

export function isStripeConfigured() {
  return Boolean(process.env.STRIPE_SECRET_KEY);
}

export function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  return new Stripe(key);
}

export async function createCheckoutSession({
  projectId,
  projectName,
  amountDueCents,
  currency,
  customerEmail,
}: {
  projectId: string;
  projectName: string;
  amountDueCents: number;
  currency: string;
  customerEmail: string;
}) {
  const stripe = getStripe();
  if (!stripe) throw new Error("Stripe is not configured");

  const appUrl = process.env.APP_URL ?? "http://localhost:3000";

  return stripe.checkout.sessions.create({
    mode: "payment",
    customer_email: customerEmail,
    line_items: [
      {
        price_data: {
          currency,
          unit_amount: amountDueCents,
          product_data: { name: `Halvard — ${projectName}` },
        },
        quantity: 1,
      },
    ],
    success_url: `${appUrl}/portal?paid=1`,
    cancel_url: `${appUrl}/portal?paid=0`,
    metadata: { projectId },
  });
}
