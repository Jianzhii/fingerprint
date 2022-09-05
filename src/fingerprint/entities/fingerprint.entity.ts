import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity('fpdata')
export class Fingerprint {
    @PrimaryGeneratedColumn()
    counter: number;

    @Column()
    id: string;

    @Column()
    time: Timestamp;

    @Column()
    addressHttp: string;

    @Column()
    userAgentHttp: string;

    @Column()
    acceptHttp: string;

    @Column()
    hostHttp: string;

    @Column()
    connectionHttp: string;

    @Column()
    encodingHttp: string;

    @Column()
    languageHttp: string;

    @Column()
    orderHttp: string;

    @Column()
    pluginsJs: string;

    @Column()
    platformJs: string;

    @Column()
    cookiesJs: string;

    @Column()
    dntJs: string;

    @Column()
    timezoneJs: string;

    @Column()
    resolutionJs: string;

    @Column()
    localJs: string;

    @Column()
    sessionJs: string;

    @Column()
    ieDataJs: string;

    @Column()
    canvasJs: string;

    @Column()
    fontsFlash: string;

    @Column()
    resolutionFlash: string;

    @Column()
    languageFlash: string;

    @Column()
    platformFlash: string;

    @Column()
    adBlock: string;

    @Column()
    octaneScore: string;

    @Column()
    sunspiderTime: string;

    @Column()
    webGlJs: string;

    @Column()
    vendorWebGljs: string;

    @Column()
    rendererWebGljs: string;

    @Column()
    pluginsJsHashed: string;

    @Column()
    canvasJsHashed: string;

    @Column()
    webGLJsHashed: string;

    @Column()
    fontsFlashHashed: string;
}
