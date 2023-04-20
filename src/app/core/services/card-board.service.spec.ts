import { TestBed } from '@angular/core/testing';

import { CardBoardService } from './card-board.service';

describe('CardBoardService', () => {
  let service: CardBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
