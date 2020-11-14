import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
