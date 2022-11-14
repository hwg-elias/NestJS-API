import { AuthGuard } from "@app/user/guards/auth.guard";
import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { ArticleService } from "@app/article/article.service";
import { User } from "@app/user/decorators/user.decorator";
import { CreateArticleDto } from "@app/article/dto/createArticle.dto";
import { UserEntity } from "@app/user/user.entity";
import { ArticleResponseInterface } from "./types/articleResponse.interface";
import { ArticleEntity } from "./article.entity";

@Controller('articles')
export class ArticleController {
    constructor(private readonly articleService: ArticleService) {}

    @Get()
    async findAll(@User('id') currentUserId: number, @Query() query: any):Promise<any>{
        return await this.articleService.findAll(currentUserId, query)
    }

    @Post()
    @UseGuards(AuthGuard)
    @UsePipes(new ValidationPipe())
    async createArticle(@User() currentUser: UserEntity, @Body('article') createArticleDto: CreateArticleDto): Promise<ArticleResponseInterface> {
        const article = await this.articleService.createArticle(currentUser, createArticleDto);
        return this.articleService.buildArticleResponse(article);
    }

    @Get(':slug')
    async getSingleArticle(@Param('slug') slug: string): Promise<ArticleResponseInterface>{
        const article = await this.articleService.findBySlug(slug)
        return this.articleService.buildArticleResponse(article)
    }

    @Delete(':slug')
    @UseGuards(AuthGuard)
    @UsePipes(new ValidationPipe())
    async deleteArticle(@User('id') currentUserId: number, @Param('slug') slug: string){
        return await this.articleService.deleteArticle(slug, currentUserId)
    }

    @Put(':slug')
    @UseGuards(AuthGuard)
    @UsePipes(new ValidationPipe())
    async updateArticle(@User('id') currentUserId: number, @Param('slug') slug: string, @Body('article') updateArticleDto: CreateArticleDto){
        const article = await this.articleService.updateArticle(slug, currentUserId, updateArticleDto)
        return this.articleService.buildArticleResponse(article)
    }
}