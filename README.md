Tuto de la Minute du Code
https://www.youtube.com/watch?v=8zg57X_usD4&t=236s

Objectifs  : 

- voir l'intégration de stripe dans un projet en NextJS !!!
- observer une autre manière de procéder/travailler
- être à l'affût de tips de dev !


A noter : 

Je suis passé outre typescript pour rester en javascript

POINT SUR NEXT AUTH

- installation
npm i next-auth

insatallation orm prisma
npm i prisma --save-dev
puis
npx prisma init --datasource-provider sqlite

ici connexion par google ou githut
on recherche prisma adapter next auth

npm install @prisma/client @next-auth/prisma-adapter

on copie/colle le schema.prisma

on genere notre DB avec un 
npx prisma generate


MEP du prisma client
npm i 

creation fichier 
db.js et SessionWrapper.jsx....

Pour GH
settings -> developper settings -> OAuth Apps