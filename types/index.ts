import { Material, InventoryMovement, Role, User } from '@prisma/client';


export interface UsersQuery {
  users: User[];
}

export interface RolesQuery {
  roles: Role[];
}

export interface MaterialQuery {
  materials: Material[];
}

export interface InventoryMovementQuery {
  inventories: InventoryMovement[];
}


