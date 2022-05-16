import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { MyListService } from 'src/services/my-list/my-list.service';

@Controller({
  path: 'my-list',
})
export class MyListController {
  constructor(private _myListSv: MyListService) {}

  @Get('')
  async getMyList(): Promise<string[]> {
    return this._myListSv.getAll();
  }

  @Post('filter-list')
  async filterMyList(@Req() req: Request): Promise<string[]> {
    const filter = req.body.filter;

    const originalList = this._myListSv.getAll();

    const newFiltered: string[] = [];

    for (let i = 0; i < originalList.length; i++) {
      const item = originalList[i];

      if (item.toLowerCase().indexOf(filter.toLowerCase()) == 0) {
        newFiltered.push(item);
      }
    }

    if (newFiltered.length <= 0) {
      if (!originalList.includes(filter)) {
        newFiltered.push(filter);
        this._myListSv.add(filter);
      }
    }

    // console.log('new my-list', this._myListSv.getAll());

    return newFiltered;
  }
}
