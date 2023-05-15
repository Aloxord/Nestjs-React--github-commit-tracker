import { Module } from '@nestjs/common';
import { GithubModule } from './github/github.module';
import { OctokitModule } from 'nestjs-octokit';
import githubConf from './configs/github'

@Module({
  imports: [
    OctokitModule.forRoot({
      isGlobal: true,
      octokitOptions:{
        auth: githubConf.auth.token
      }
    }),
    GithubModule
  ]
})
export class AppModule {}
