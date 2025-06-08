import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookReviewModule } from './book-review/book-review.module';
import { BookReview } from './book-review/book-review.entity';
import { Autor } from './autor/autor.entity';
import { Editora } from './editora/editora.entity';
import { Livro } from './livro/livro.entity';
import { AutorModule } from './autor/autor.module';
import { EditoraModule } from './editora/editora.module';
import { LivroModule } from './livro/livro.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [BookReview, Autor, Editora, Livro],
      synchronize: true,
      logging: true,
    }),
    BookReviewModule,
    AutorModule,
    EditoraModule,
    LivroModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
