import { TestBed } from '@angular/core/testing';

import { CardBoardApiService } from './card-board-api.service';

describe('CardBoardApiService', () => {
  let service: CardBoardApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardBoardApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
