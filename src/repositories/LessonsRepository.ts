export interface CreateLessonsData {
  title: string;
  description?: string
}


export interface LessonsRepository {
  create(data: CreateLessonsData): Promise<void>
}