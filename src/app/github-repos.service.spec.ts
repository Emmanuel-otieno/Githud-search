import { TestBed } from '@angular/core/testing';

import { GithubReposService } from './github-repos.service';

describe('GithubReposService', () => {
  let service: GithubReposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubReposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
