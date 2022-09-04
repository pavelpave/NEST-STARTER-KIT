// item.entity.ts
import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../base/base.entity';

@Entity({ name: 'item' })
export class Item extends BaseEntity {
  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 300 })
  description: string;
}
