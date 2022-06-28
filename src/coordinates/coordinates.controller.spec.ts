import { CoordinatesService } from './coordinates.service';
import { Test, TestingModule } from '@nestjs/testing';
import { CoordinatesController } from './coordinates.controller';

describe('CoordinatesController', () => {
  let controller: CoordinatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoordinatesController],
      providers: [CoordinatesService],
    }).compile();

    controller = module.get<CoordinatesController>(CoordinatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
