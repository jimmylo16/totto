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
});
