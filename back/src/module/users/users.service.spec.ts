import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

const userArray = [
  {
    firstName: 'firstName #1',
    lastName: 'lastName #1',
  },
  {
    firstName: 'firstName #2',
    lastName: 'lastName #2',
  },
];
const oneUser: User = {
  email: 'jimmylo16@gmail.com',
  identification: '1233694641',
  nombre: 'Jimmy',
  apellido: 'Alejandro',
  numero: 3131313131,
  departamento: 'Bogotá',
  ciudad: 'Bogota',
  fechaDeNacimiento: new Date('1990-01-01'),
  hijos: '',
  genero: '',
};
describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
