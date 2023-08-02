import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  private readonly logger = new Logger('UsersService');
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const user = await this.findByEmail(createUserDto.email);
    if (user.error) {
      try {
        const user = this.usersRepository.create(createUserDto);
        return {
          message: `User created successfully`,
          statusCode: 201,
          error: false,
          data: await this.usersRepository.save(user),
        };
      } catch (error) {
        this.logger.error(error);
        throw new InternalServerErrorException(
          'Unexpected error, check server logs',
        );
      }
    } else {
      throw new NotFoundException('User already exists');
    }
  }

  findAll() {
    return this.usersRepository.find();
  }

  async findOne(user_id: string) {
    const user = await this.usersRepository.findOneBy({ user_id });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async update(user_id: string, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.preload({
      user_id,
      ...updateUserDto,
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return this.usersRepository.save(user);
  }

  async remove(user_id: string) {
    const user = await this.findOne(user_id);
    await this.usersRepository.remove(user);
    return {
      user_id: user_id,
    };
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findOneBy({ email });
    if (!user) {
      return {
        message: `User with the ${email} not found`,
        statusCode: 404,
        error: true,
        data: null,
      };
    }
    return {
      message: `User with the ${email} found`,
      statusCode: 200,
      error: false,
      data: user,
    };
  }
}
