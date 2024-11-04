import { SetMetadata } from '@nestjs/common';
/*ROLES_KEY viene de la constante que se exporta en este archivo hacia el archivo roles.guard.ts
haciendo que se pueda usar en ambos archivos
 */
export const ROLES_KEY = 'roles';
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
