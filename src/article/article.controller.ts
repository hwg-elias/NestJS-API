import { AuthGuard } from "@app/user/guards/auth.guard";
import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { ArticleService } from "@app/article/article.service";
import { User } from "@app/user/decorators/user.decorator";
import { CreateArticleDto } from "@app/article/dto/createArticle.dto";
import { create } from "domain";
import { UserEntity } from "@app/user/user.entity";

@Controller('articles')
export class ArticleController {
    constructor(private readonly articleService: ArticleService) {}
    @Post()
    @UseGuards(AuthGuard)
    async createArticle(@User('user') currentUser: UserEntity, @Body('article') createArticleDto: CreateArticleDto): Promise<any> {
        return await this.articleService.createArticle(currentUser, createArticleDto);
    }
}