import { Module } from '@nestjs/common';
import { CatService } from 'src/cat.service';
import { CatController } from 'src/cat.controller';
import { Cat } from 'src/cat.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Cat])],
  providers: [CatService],
  controllers: [CatController],
})
export class CatModule {}
