import { Module } from '@nestjs/common';
import { PostService } from './post/post.service';
import { UserService } from './user/user.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, UserService, PostService, PrismaService],
})
export class AppModule {}
