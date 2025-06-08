import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookReviewModule } from './book-review/book-review.module';
import { BookReview } from './book-review/book-review.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [BookReview],
      synchronize: true,   
      logging: true,
    }),
    BookReviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
