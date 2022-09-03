import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Redirect,
} from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  @Get('/test/:id/')
  @HttpCode(303)
  getData(@Param('id') id) {
    return `test id ${JSON.stringify(id)}`;
  }

  @Post()
  create(@Body() data: CreateProductDTO) {
    return `${JSON.stringify(data)}`;
  }
}
