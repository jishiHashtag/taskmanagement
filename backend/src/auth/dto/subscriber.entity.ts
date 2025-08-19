import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Subscriber {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  licenseKey!: string;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  organisation!: string;

  @Column()
  mobile!: string;

  @Column()
  country!: string;

  @Column({ nullable: true }) // ✅ allows old rows to stay
  role!: string;

  @Column({ nullable: true }) // ✅ allows old rows to stay
  email!: string;

  @Column()
  subscriptionType!: string; // e.g. 'basic', 'premium'

  @Column()
  validity!: string; // e.g. '1 year', '6 months'

  @Column()
  date!: Date; // When subscription starts

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @BeforeInsert()
  generateLicenseKey() {
    this.licenseKey = 'LIC-' + uuidv4().split('-')[0].toUpperCase();
  }
}
