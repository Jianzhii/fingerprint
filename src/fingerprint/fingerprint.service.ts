import { Injectable } from '@nestjs/common';
import { CreateFingerprintDto } from './dto/create-fingerprint.dto';
import { UpdateFingerprintDto } from './dto/update-fingerprint.dto';

@Injectable()
export class FingerprintService {
    create(createFingerprintDto: CreateFingerprintDto) {
        return 'This action adds a new fingerprint';
    }

    findAll() {
        return `This action returns all fingerprint`;
    }

    findOne(id: number) {
        return `This action returns a #${id} fingerprint`;
    }

    update(id: number, updateFingerprintDto: UpdateFingerprintDto) {
        return `This action updates a #${id} fingerprint`;
    }

    remove(id: number) {
        return `This action removes a #${id} fingerprint`;
    }
}
