import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1548965245875 implements MigrationInterface {
  name = 'SeedDb1548965245875';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('INSERT INTO tags (name) VALUES (\'dragos\'), (\'coffee\'), (\'cutia\')');
    // passsword is 12345678
    await queryRunner.query('INSERT INTO users (username, email, password) VALUES (\'cutia\', \'cutia@gmail.com\', \'$2b$10$7shnFbzwhMHRUcuhweUd7euFTKKF7sp2W5q9VlOoqllGHjL.N4iD.\'),(\'tamanduá-bandeira\', \'tamaindoa@gmail.com\', \'$2b$10$zpsfrwodNe3fp1Dhdk/JuutjbqAjzqSaRkHRCmx/9kcmkH6O05tBS\')');

    await queryRunner.query(`INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('first-article', 'First article', 'First article description', 'First article body', 'coffee,dragons', 1),
        ('second-article', 'Second article', 'Second article description', 'Second article body', 'coffee,dragons', 1), ('third-article', 'Third article', 'Third article description', 'Third article body', 'dragons', 2) `);
  }

  public async down(): Promise<void> {}
}
