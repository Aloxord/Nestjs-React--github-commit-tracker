import { Injectable } from '@nestjs/common';
import { OctokitService } from 'nestjs-octokit';
import githubConf from '../configs/github'
import { CommitType } from './types/commit.type';
import { CommitsType } from './types/commits.type';


@Injectable()
export class GithubService {
  
  constructor(
    private readonly octokitService: OctokitService
  ){}

  async getCommits(): {
  }

}
