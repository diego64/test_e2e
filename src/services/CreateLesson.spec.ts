import { InMemoryLessonsRepository } from "../../test/InMemoryLessonsRepository";
import { CreateLesson } from "./CreateLesson";

describe('CreateLesson service', () => {
  test('should be albe to create a new lesson', async () => {
    const inMemoryRepositoy = new InMemoryLessonsRepository();
    const createLesson = new CreateLesson(inMemoryRepositoy);
  
    await expect(createLesson.execute({ title: 'Nova aula'}))
      .resolves
      .not
      .toThrow()
  
    expect(inMemoryRepositoy.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'Nova aula'
        })
      ])
    )
  });

  test('should NOT be albe to create a new lesson invalid title', async () => {
    const inMemoryRepositoy = new InMemoryLessonsRepository();
    const createLesson = new CreateLesson({
      create: async (data) => {}
    });
  
    await expect(createLesson.execute({ title: ''}))
      .rejects
      .toThrow()
  
    expect(inMemoryRepositoy.items).toEqual([])
  });
});