import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import CustomerDetailActions from "@/components/CustomerDetailActions";

export const dynamic = "force-dynamic";

export default async function CustomerDetailPage({ params }: { params: { id: string } }) {
  const customer = await prisma.user.findUnique({
    where: { id: params.id },
    include: { projects: true, apiKeys: { orderBy: { createdAt: "desc" } } },
  });

  if (!customer || customer.role !== "CUSTOMER") notFound();

  const project = customer.projects[0];

  return (
    <div className="max-w-2xl">
      <h1 className="font-display text-2xl font-bold">{customer.name}</h1>
      <p className="mt-1 text-sm text-ink/50">{customer.email}</p>

      {project ? (
        <div className="mt-6">
          <CustomerDetailActions
            customerId={customer.id}
            project={project}
            apiKeys={customer.apiKeys}
            hasPassword={Boolean(customer.passwordHash)}
          />
        </div>
      ) : (
        <p className="mt-6 text-sm text-ink/50">No project on this account.</p>
      )}
    </div>
  );
}
