import { Test, TestingModule } from '@nestjs/testing';
import { CalendarController } from './calendar.controller';
import { CalendarService } from './calendar.service';

describe('AppController', () => {
  let calendarController: CalendarController;

  beforeEach(async () => {
    const moudle: TestingModule = await Test.createTestingModule({
      controllers: [CalendarController],
      providers: [CalendarService],
    }).compile();

    calendarController = moudle.get<CalendarController>(CalendarController);
  });

  describe('calendar Controller', () => {
    it('should be defined', () => {
      expect(calendarController).toBeDefined();
    });
  });
});
