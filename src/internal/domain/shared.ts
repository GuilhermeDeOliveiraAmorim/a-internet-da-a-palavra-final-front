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
  createdAt: Date;
  updatedAt: Date;
  deactivatedAt: Date;

  constructor(
    id: string,
    active: boolean,
    createdAt: Date,
    updatedAt: Date,
    deactivatedAt: Date
  ) {
    this.id = id;
    this.active = active;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deactivatedAt = deactivatedAt;
  }
}
