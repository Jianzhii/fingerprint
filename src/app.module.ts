import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FingerprintModule } from './fingerprint/fingerprint.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.DATABASE_HOST,
            port: parseInt(process.env.DATABASE_PORT),
            username: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_DATABASE,
            entities: [path(__dirname, '**/*.entity.{ts.js}')],
            synchronize: false,
        }),
        FingerprintModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
