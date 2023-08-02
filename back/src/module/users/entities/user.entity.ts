import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum Gender {
  MASCULINO = 'masculino',
  FEMENINO = 'femenino',
}
export enum YesOrNo {
  YES = 'YES',
  NO = 'NO',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  user_id?: string;

  @Column({ unique: true })
  email: string;

  @Column('int')
  identification: number;
  @Column('varchar')
  nombre: string;
  @Column('varchar')
  apellido: string;

  @Column('int', { nullable: true })
  numero: number;
  @Column()
  departamento: string;
  @Column()
  ciudad: string;

  @Column()
  fechaDeNacimiento: Date;

  @Column({ type: 'enum', enum: YesOrNo, default: YesOrNo.YES })
  hijos: string;

  @Column({ type: 'enum', enum: Gender, default: Gender.MASCULINO })
  genero: string;
}
