import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
// PartialType()은 입력 유형의 모든 속성이 선택 사항으로 설정된 유형(클래스)을 반환합니다.
