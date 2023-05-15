import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GithubService } from './github.service';
import { CommitsType } from './types/commits.type';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get()
  getCommits():Promise<CommitsType> {
    return this.githubService.getCommits();
  }
}
