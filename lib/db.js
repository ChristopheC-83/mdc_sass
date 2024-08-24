const { PrismaClient } = require('@prisma/client');

const prismaClientSingleton = () => {
  return new PrismaClient();
};


if (typeof globalThis.prismaGlobal === 'undefined') {
  globalThis.prismaGlobal = prismaClientSingleton();
}

const prisma = globalThis.prismaGlobal;
// export const prisma = globalThis.prismaGlobal;

module.exports = prisma;
