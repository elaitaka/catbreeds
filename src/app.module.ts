import { Module } from '@nestjs/common';
import { CatModule } from './cat/cat.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'catDB',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CatModule,
  ],
})
export class AppModule {}
