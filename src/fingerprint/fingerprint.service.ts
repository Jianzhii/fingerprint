import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FpDataEntityModel } from './entities/fpdata.model';

@Injectable()
export class FingerprintService {
    constructor(
        @InjectRepository(FpDataEntityModel)
        private fingerPrintRepository: Repository<FpDataEntityModel>,
    ) {}

    fpNoJs(request) {
        const cookie = request.cookies.get('amiunque');

        let id: string;
        if (cookie === null) {
            id = 'Not supported';
        } else {
            id = cookie.value();
        }

        return `This action returns all fingerprint`;
    }
}
