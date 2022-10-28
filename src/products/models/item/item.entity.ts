import {
  Entity,
  Property,
  types,
} from '@mikro-orm/core';

@Entity({ tableName: 'brands' })
export class Brand {
  @Property({ type: types.text })
  outerId: string;

  @Property({ type: types.text })
  name: string;

  @Property({ type: types.boolean })
  isPopular: boolean;
}
