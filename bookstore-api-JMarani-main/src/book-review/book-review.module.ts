import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookReview } from './book-review.entity';
import { BookReviewRepository } from './book-review.repository';
import { BookReviewService } from './book-review.service';
import { BookReviewController } from './book-review.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BookReview])],
  controllers: [BookReviewController],
  providers: [BookReviewService, BookReviewRepository],
})
export class BookReviewModule {}
