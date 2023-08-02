import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { mockUser } from './users.service.spec';

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        {
          provide: UsersService,
          useValue: {
            create: jest
              .fn()
              .mockImplementation((user: CreateUserDto) =>
                Promise.resolve({ user_id: '1', ...user }),
              ),
            findAll: jest
              .fn()
              .mockResolvedValue([
                mockUser,
                { ...mockUser, email: 'test@test.com', identification: 1234 },
              ]),
            findOne: jest.fn().mockImplementation((user_id: string) =>
              Promise.resolve({
                ...mockUser,
                user_id,
              }),
            ),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    usersController = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(usersController).toBeDefined();
  });
  describe('create()', () => {
    it('should create a user', () => {
      usersController.create(mockUser);
      expect(usersController.create(mockUser)).resolves.toEqual({
        user_id: '1',
        ...mockUser,
      });
      expect(usersService.create).toHaveBeenCalledWith(mockUser);
    });
  });

  describe('findAll()', () => {
    it('should find all users ', () => {
      usersController.findAll();
      expect(usersService.findAll).toHaveBeenCalled();
    });
  });
  describe('findOne()', () => {
    it('should find a user', () => {
      expect(usersController.findOne('1')).resolves.toEqual({
        user_id: '1',
        ...mockUser,
      });
      expect(usersService.findOne).toHaveBeenCalled();
    });
  });
  describe('remove()', () => {
    it('should remove the user', () => {
      usersController.remove('1');
      expect(usersService.remove).toHaveBeenCalled();
    });
  });
});
