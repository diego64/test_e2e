import { Lesson } from "@prisma/client";
import crypo from 'node:crypto';
import { CreateLessonsData, LessonsRepository } from "../src/repositories/LessonsRepository";

export class InMemoryLessonsRepository implements LessonsRepository {
  public items: Lesson[] = [];

  async create(data: CreateLessonsData) {
    this.items.push({
      id: crypo.randomUUID(),
      title: data.title,
      description: data.description ?? null
    })
  }
}