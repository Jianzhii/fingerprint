import { Module } from '@nestjs/common';
import { FingerprintService } from './fingerprint.service';
import { FingerprintController } from './fingerprint.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FpDataEntityModel } from './entities/fpdata.model';

@Module({
    imports: [TypeOrmModule.forFeature([FpDataEntityModel])],
    controllers: [FingerprintController],
    providers: [FingerprintService],
})
export class FingerprintModule {}
