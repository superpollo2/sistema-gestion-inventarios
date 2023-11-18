import { Material, InventoryMovement, Role, User, Enum_RoleName } from '@prisma/client';


export interface UsersQuery {
  users: User[]
}


export interface RolesQuery {
  roles: Role[]
}

export interface MaterialQuery {
  materials: Material[];
}

export interface InventoryMovementQuery {
  inventories: InventoryMovement[];
}


export interface UserKeys {
  id: keyof User;
  name: keyof User;
  email: keyof User;
  emailVerified: keyof User;
  image: keyof User;
  roleId: keyof User;
}