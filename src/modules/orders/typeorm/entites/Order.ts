import Customer from "@modules/customers/typeorm/entities/Customer";
import { CreateDateColumn, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('order')
class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(() => Customer)
  @JoinColumn({name: 'customer_id'})
  customer: Customer;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Order;
