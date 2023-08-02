import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { Gender, User, YesOrNo } from './entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';

export const mockUser: User = {
  email: 'jimmylo16@gmail.com',
  identification: 1233694641,
  nombre: 'Jimmy',
  apellido: 'Alejandro',
  numero: 3131313131,
  departamento: 'Bogotá',
  ciudad: 'Bogota',
  fechaDeNacimiento: new Date('1990-01-01'),
  hijos: '',
  genero: '',
};
const mockUsers = [mockUser];
describe('UsersService', () => {
  let service: UsersService;
  let usersRepository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: {
            find: jest.fn().mockResolvedValue(mockUsers),
            findOneBy: jest.fn().mockResolvedValue(mockUser),
            save: jest.fn().mockResolvedValue(mockUser),
            remove: jest.fn(),
            delete: jest.fn(),
            create: jest.fn(),
            preload: jest.fn(),
            findOne: jest.fn().mockResolvedValue(mockUser),
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    usersRepository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create()', () => {
    it('should successfully insert a user', () => {
      expect(service.create(mockUser)).resolves.toEqual(mockUser);
    });
  });
  describe('findAll()', () => {
    it('should successfully find all users', async () => {
      const users = await service.findAll();
      expect(users).toEqual(mockUsers);
    });
  });
  describe('findOne()', () => {
    it('should successfully find all users', async () => {
      const repoSpy = jest.spyOn(usersRepository, 'findOneBy');
      expect(service.findOne('1')).resolves.toEqual(mockUser);
      expect(repoSpy).toBeCalledWith({ user_id: '1' });
    });
  });

  describe('update()', () => {
    it('should successfully update a user', async () => {
      const userId = '1';
      const updatedUser: UpdateUserDto = {
        nombre: 'Updated First Name',
        apellido: 'Updated Last Name',
      };

      const existingUser: User = {
        user_id: userId,
        ...mockUser,
      };

      jest.spyOn(usersRepository, 'findOne').mockResolvedValue(existingUser);

      jest.spyOn(usersRepository, 'preload').mockResolvedValue({
        ...existingUser,
        ...updatedUser,
      });

      jest.spyOn(usersRepository, 'save').mockResolvedValue({
        ...existingUser,
        ...updatedUser,
      });

      const result = await service.update(userId, updatedUser);

      expect(result).toEqual(expect.objectContaining(updatedUser));
    });

    it('should throw NotFoundException if user does not exist', async () => {
      const userId = '123'; // Assuming userId is of type string
      const updatedUser: UpdateUserDto = {
        nombre: 'Updated First Name',
        apellido: 'Updated Last Name',
      };

      // Mock the usersRepository's findOne method to return null (user not found)
      jest.spyOn(usersRepository, 'findOne').mockResolvedValue(null);

      // Call the update method of the UsersService and expect it to throw NotFoundException
      await expect(service.update(userId, updatedUser)).rejects.toThrowError(
        NotFoundException,
      );
    });
    it('should throw NotFoundException if user does not exist', async () => {
      const userId = '123';
      const updatedUser: UpdateUserDto = {
        nombre: 'Updated First Name',
        apellido: 'Updated Last Name',
      };

      await expect(service.update(userId, updatedUser)).rejects.toThrowError(
        NotFoundException,
      );
    });
  });
});
