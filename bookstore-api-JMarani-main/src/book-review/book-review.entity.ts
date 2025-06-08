import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('book_reviews')
export class BookReview {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bookTitle: string;

  @Column()
  reviewerName: string;

  @Column('text')
  reviewText: string;

  @Column({ type: 'integer' })
  rating: number;

  @Column({ default: false })
  recommended: boolean;
}
