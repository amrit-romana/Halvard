import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/guards";
import { createCheckoutSession, isStripeConfigured } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  const { session, error } = await requireUser();
  if (error) return error;

  if (!isStripeConfigured()) {
    return NextResponse.json(
      { error: "Payments aren't configured yet — contact us and we'll take it from there." },
      { status: 503 }
    );
  }

  const { projectId } = await req.json();
  const project = await prisma.project.findUnique({ where: { id: projectId } });
  const user = await prisma.user.findUnique({ where: { id: session!.userId } });

  if (!project || !user || project.userId !== user.id) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  const checkoutSession = await createCheckoutSession({
    projectId: project.id,
    projectName: project.name,
    amountDueCents: project.amountDueCents,
    currency: project.currency,
    customerEmail: user.email,
  });

  await prisma.project.update({
    where: { id: project.id },
    data: { stripeSessionId: checkoutSession.id },
  });

  return NextResponse.json({ url: checkoutSession.url });
}
