import NewCustomerForm from "@/components/NewCustomerForm";

export default function NewCustomerPage() {
  return (
    <div className="max-w-xl">
      <h1 className="font-display text-2xl font-bold">Add a customer</h1>
      <p className="mt-2 text-sm text-ink/60">
        Creates their account and sends an invite email to set a password.
      </p>
      <div className="mt-6">
        <NewCustomerForm />
      </div>
    </div>
  );
}
