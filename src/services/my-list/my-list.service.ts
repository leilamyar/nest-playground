import { Injectable } from '@nestjs/common';

@Injectable()
export class MyListService {
  private readonly myList = [
    'albert',
    'alphonse',
    'ariel',
    'arthur',
    'bob',
    'brian',
    'brittany',
  ];

  getAll(): string[] {
    return this.myList;
  }

  add(newRecord: string) {
    this.myList.push(newRecord);
  }
}
