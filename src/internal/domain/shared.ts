export interface SharedEntityInterface {
  id: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  deactivatedAt: Date;
}

export class SharedEntity {
  id: string;
  active: boolean;
  created_at: Date;
  updated_at: Date;
  deactivated_at: Date;

  constructor(
    id: string,
    active: boolean,
    created_at: Date,
    updated_at: Date,
    deactivated_at: Date
  ) {
    this.id = id;
    this.active = active;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.deactivated_at = deactivated_at;
  }
}
