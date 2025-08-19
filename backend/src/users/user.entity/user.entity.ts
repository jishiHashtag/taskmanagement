import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export type Role = 'admin' | 'superadmin';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  username!: string;

  @Column()
  password!: string;

  @Column({ type: 'varchar' })
  role!: Role;
}
