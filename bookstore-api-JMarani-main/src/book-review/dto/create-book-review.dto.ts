import { IsBoolean, IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreateBookReviewDto {
  @IsString() @IsNotEmpty()
  bookTitle: string;

  @IsString() @IsNotEmpty()
  reviewerName: string;

  @IsString() @IsNotEmpty()
  reviewText: string;

  @IsInt() @Min(0) @Max(5)
  rating: number;

  @IsBoolean()
  recommended: boolean;
}
