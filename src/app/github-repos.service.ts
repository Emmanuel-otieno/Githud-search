import { Injectable } from '@angular/core';
import { User } from './user';
import { Repository } from './repository';
import { HttpClient} from '@angular/common/http';
import { environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GithubReposService {

  user:User;
  repo:Repository;
  

  constructor(private http:HttpClient) {

    

   }
}
