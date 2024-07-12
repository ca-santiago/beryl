import { PrismaClient } from "@prisma/client";

declare global {
  /* eslint-disable no-var, init-declarations, no-unused-vars */
  var prismaClient: PrismaClient | undefined;
}

export const prismaClient = global.prismaClient || new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prismaClient;

  process.once('SIGUSR2', async () => {
    await prismaClient.$disconnect();
    process.kill(process.pid, 'SIGUSR2');
  });

  process.on('SIGINT', async () => {
    await prismaClient.$disconnect();
    process.exit(0);
  });
}
