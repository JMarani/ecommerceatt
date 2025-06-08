import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Editora } from './editora.entity';
import { EditoraService } from './editora.service';
import { EditoraController } from './editora.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Editora])],
  controllers: [EditoraController],
  providers: [EditoraService],
})
export class EditoraModule {}
