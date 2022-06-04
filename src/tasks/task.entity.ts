import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from './task.model';

@Entity()
export class Task {
  // GERA O ID AUTOMATICAMENTE E CONSIDERA COMO COLUNA PRIMÁRIA
  // PASSAMOS O UUID COMO PARÂMETRO PARA QUE ELE GERE IDs ÚNICOS
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;
}
