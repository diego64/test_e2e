import { prisma } from "../../prisma";
import { CreateLessonsData, LessonsRepository } from "../LessonsRepository";

export class PrismaLessonsRepository implements LessonsRepository {
  async create(data: CreateLessonsData) {
    await prisma.lesson.create({
      data
    })
  }
}