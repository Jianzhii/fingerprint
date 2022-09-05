import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { FingerprintService } from './fingerprint.service';

@Controller('fingerprint')
export class FingerprintController {
    constructor(private readonly fingerprintService: FingerprintService) {}

    @Get()
    fpNoJs(@Req() request: Request) {
        return this.fingerprintService.fpNoJs(request);
    }
}
