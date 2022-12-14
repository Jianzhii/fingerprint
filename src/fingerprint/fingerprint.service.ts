import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Timestamp } from 'typeorm';
import { FpDataEntityModel } from './entities/fpdata.model';

@Injectable()
export class FingerprintService {
    constructor(
        @InjectRepository(FpDataEntityModel)
        private fpDataRepository: Repository<FpDataEntityModel>,
    ) {}

    // TODO: put as interceptor
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

    async checkIfFPExists(
        id: string,
        userAgentHttp: string,
        acceptHttp: string,
        encodingHttp: string,
        languageHttp: string,
        pluginsJsHashed: string,
        platformJS: string,
        cookiesJS: string,
        dntJS: string,
        timezoneJS: string,
        resolutionJS: string,
        localJS: string,
        sessionJS: string,
        IEDataJS: string,
        canvasJsHashed: string,
        webGLJsHashed: string,
        fontsFlashHashed: string,
        resolutionFlash: string,
        languageFlash: string,
        platformFlash: string,
        adBlock: string,
    ) {
        const count = await this.fpDataRepository.count({
            where: {
                id: id,
                userAgentHttp: userAgentHttp,
                acceptHttp: acceptHttp,
                encodingHttp: encodingHttp,
                languageHttp: languageHttp,
                pluginsJsHashed: pluginsJsHashed,
                platformJS: platformJS,
                cookiesJS: cookiesJS,
                dntJS: dntJS,
                timezoneJS: timezoneJS,
                resolutionJS: resolutionJS,
                localJS: localJS,
                sessionJS: sessionJS,
                IEDataJS: IEDataJS,
                canvasJsHashed: canvasJsHashed,
                webGLJsHashed: webGLJsHashed,
                fontsFlashHashed: fontsFlashHashed,
                resolutionFlash: resolutionFlash,
                languageFlash: languageFlash,
                platformFlash: platformFlash,
                adBlock: adBlock,
            },
        });

        return count === 1;
    }

    async checkIfFPWithNoJsExists(
        id: string,
        userAgentHttp: string,
        acceptHttp: string,
        encodingHttp: string,
        languageHttp: string,
    ) {
        const count = await this.fpDataRepository.count({
            where: {
                id: id,
                userAgentHttp: userAgentHttp,
                acceptHttp: acceptHttp,
                encodingHttp: encodingHttp,
                languageHttp: languageHttp,
            },
        });

        return count === 1;
    }

    async getExistingFPById(id: string) {
        return await this.fpDataRepository.findOne({ where: { id: id } });
    }

    async getExistingFPByCounter(counter: number) {
        return await this.fpDataRepository.findOne({
            where: { counter: counter },
        });
    }

    async getExistingFPsById(id: string) {
        const fps = await this.fpDataRepository.find({ where: { id: id } });
        return new Set(Array.from(new Set(fps)).sort());
    }

    // async createFUll(
    //     id: string,
    //     addressHttp: string,
    //     time: Timestamp,
    //     userAgentHttp: string,
    //     acceptHttp: string,
    //     hostHttp: string,
    //     connectionHttp: string,
    //     encodingHttp: string,
    //     languageHttp: string,
    //     orderHttp: string,
    //     pluginsJS: string,
    //     platformJS: string,
    //     cookiesJS: string,
    //     dntJS: string,
    //     timezoneJS: string,
    //     resolutionJS: string,
    //     localJS: string,
    //     sessionJS: string,
    //     ieDataJS: string,
    //     canvasJS: string,
    //     webGLJs: string,
    //     fontsFlash: string,
    //     resolutionFlash: string,
    //     languageFlash: string,
    //     platformFlash: string,
    //     adBlock: string,
    //     vendorWebGLJS: string,
    //     rendererWebGLJS: string,
    //     octaneScore: string,
    //     sunspiderTime: string,
    //     pluginsJsHashed: string,
    //     canvasJsHashed: string,
    //     webGLJsHashed: string,
    //     fontsFlashHashed: string,
    // ) {}
}
