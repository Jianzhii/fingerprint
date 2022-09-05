import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity('fpdata')
export class Fingerprint {
    @PrimaryGeneratedColumn()
    counter: number;

    @Column('varchar', { length: 50 })
    id: string;

    @Column('varchar', { length: 50, nullable: false })
    addressHttp: string;

    @Column('datetime', { nullable: false })
    time: Timestamp;

    @Column('varchar', { length: 300, nullable: true, default: null })
    userAgentHttp: string;

    @Column('varchar', { length: 300, nullable: true, default: null })
    acceptHttp: string;

    @Column('varchar', { length: 100, nullable: false })
    hostHttp: string;

    @Column('varchar', { length: 100, nullable: false })
    connectionHttp: string;

    @Column('varchar', { length: 200, nullable: false })
    encodingHttp: string;

    @Column('varchar', { length: 200, nullable: false })
    languageHttp: string;

    @Column('varchar', { length: 200, nullable: false })
    orderHttp: string;

    @Column('text', { nullable: true, default: null })
    pluginsJS: string;

    @Column('varchar', { length: 50, nullable: true, default: null })
    platformJS: string;

    @Column('varchar', { length: 10, nullable: false })
    cookiesJS: string;

    @Column('varchar', { length: 10, nullable: false })
    dntJS: string;

    @Column('varchar', { length: 10, nullable: false })
    timezoneJS: string;

    @Column('varchar', { length: 20, nullable: false })
    resolutionJS: string;

    @Column('varchar', { length: 10, nullable: false })
    localJS: string;

    @Column('varchar', { length: 10, nullable: false })
    sessionJS: string;

    @Column('varchar', { length: 10, nullable: false })
    IEDataJS: string;

    @Column('mediumtext', { nullable: true, default: null })
    canvasJS: string;

    @Column('mediumtext', { nullable: true, default: null })
    webGLJs: string;

    @Column('mediumtext', { nullable: true, default: null })
    fontsFlash: string;

    @Column('varchar', { length: 50, nullable: true, default: null })
    resolutionFlash: string;

    @Column('varchar', { length: 50, nullable: true, default: null })
    languageFlash: string;

    @Column('varchar', { length: 50, nullable: true, default: null })
    platformFlash: string;

    @Column('varchar', { length: 10, nullable: false })
    adBlock: string;

    @Column('varchar', { length: 200, nullable: false })
    vendorWebGLJS: string;

    @Column('varchar', { length: 200, nullable: false })
    rendererWebGLJS: string;

    @Column('varchar', { length: 10, nullable: true, default: null })
    octaneScore: string;

    @Column('varchar', { length: 10, nullable: true, default: null })
    sunspiderTime: string;

    @Column('varchar', { length: 40, nullable: false })
    pluginsJsHashed: string;

    @Column('varchar', { length: 40, nullable: false })
    canvasJsHashed: string;

    @Column('varchar', { length: 40, nullable: false })
    webGLJsHashed: string;

    @Column('varchar', { length: 40, nullable: false })
    fontsFlashHashed: string;
}
