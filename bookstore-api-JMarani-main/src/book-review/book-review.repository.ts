import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { BookReview } from './book-review.entity';

@Injectable()
export class BookReviewRepository extends Repository<BookReview> {
  constructor(private dataSource: DataSource) {
    super(BookReview, dataSource.createEntityManager());
  }
}
