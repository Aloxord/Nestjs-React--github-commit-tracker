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

  async getCommits(): Promise<CommitsType> {

    const { user, repo } = githubConf;

    const {
      data: commits
    } = await this.requestCommits(
      user,
      repo
    )

    console.log(commits[0].commit.author);

    const mappedCommits = this.mapCommits(commits);

    return mappedCommits;
  }


  protected requestCommits(userName:string,repoName:string){
    return this.octokitService.request(`GET /repos/${userName}/${repoName}/commits`,{
      owner: userName,
      repo: repoName,
    })
  }

  protected mapCommits(commits: Array<any>): CommitsType{
    const commitsList = commits.map(({commit}) => ({
      author: 'aasd',
      message: commit.message,
      url: commit.message
    }));

    return {commitsList}
  }

}
