import { Component, OnInit } from '@angular/core';
import { GithubReposService} from "../github-repos.service";
import { User } from '../user';
import { Repository } from '../repository';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  user:User;
repo:Repository;

  constructor(public githubRepos:GithubReposService) { }

    getRepo(searchName){
      this.githubRepos.getUser(searchName).then(
        (success)=>{
          this.user= this.githubRepos.user;
        },
        (error)=>{
          console.log(error);
        }
      )
      this.githubRepos.getRepo(searchName).then(
        (success)=>{
          this.repo= this.githubRepos.repo;
        },
        (error)=>{
          console.log(error);
        }
      );
    }
  

  ngOnInit(): void {
    this.getRepo("Emmanuel-otieno")
  }

}
