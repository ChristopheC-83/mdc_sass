// const { PrismaClient } = require('@prisma/client');

// const prismaClientSingleton = () => {
//   return new PrismaClient();
// };


// if (typeof globalThis.prismaGlobal === 'undefined') {
//   globalThis.prismaGlobal = prismaClientSingleton();
// }

// const prisma = globalThis.prismaGlobal;
// // export const prisma = globalThis.prismaGlobal;

// module.exports = prisma;


// const { PrismaClient } = require('@prisma/client');

// const prismaClientSingleton = () => {
//   return new PrismaClient();
// }

// // Vérifie si nous sommes en mode de développement pour éviter les problèmes de mémoire
// if (process.env.NODE_ENV !== 'production') {
//   // Ajouter une propriété globale pour partager le client Prisma entre les requêtes
//   if (!global.prismaGlobal) {
//     global.prismaGlobal = prismaClientSingleton();
//   }
// }

// const prisma = global.prismaGlobal || prismaClientSingleton();

// module.exports = { prisma };

import { PrismaClient } from "@prisma/client";

let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
