import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = process.env.SEED_ADMIN_EMAIL ?? "admin@halvard.ai";
  const password = process.env.SEED_ADMIN_PASSWORD ?? "Halvard-Admin-2026!";

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    console.log(`Admin already exists: ${email}`);
    return;
  }

  const passwordHash = await bcrypt.hash(password, 12);
  await prisma.user.create({
    data: { name: "Halvard Admin", email, passwordHash, role: "ADMIN" },
  });

  console.log("Seeded admin account:");
  console.log(`  email:    ${email}`);
  console.log(`  password: ${password}`);
  console.log("Log in at /login, then change this password.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
