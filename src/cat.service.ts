import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Cat } from './cat.entity';

@Injectable()
export class CatService {
  constructor(
    @InjectRepository(Cat)
    private CatRepository: Repository<Cat>,
  ) {}

  async getAll(): Promise<Cat[]> {
    return await this.CatRepository.find();
  }

  async create(cat: Cat): Promise<Cat> {
    return this.CatRepository.create(cat);
  }

  async getOne(id: number): Promise<Cat> {
    return await this.CatRepository.findOne({ where: { id: id } });
  }

  async update(id: number, cat: Cat): Promise<UpdateResult> {
    return await this.CatRepository.update(id, cat);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.CatRepository.delete(id);
  }
} // End of class
