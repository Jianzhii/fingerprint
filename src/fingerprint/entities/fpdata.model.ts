import { Entity } from 'typeorm';
import { FpDataEntity } from './fpData.entity';

@Entity('fpData')
export class FpDataEntityModel extends FpDataEntity {
    equal(fpData: FpDataEntity) {
        if (this == fpData) return true;
        if (fpData == null) return false;

        if (this.id !== null ? !(this.id === fpData.id) : fpData.id !== null) {
            return false;
        }

        if (this.counter !== fpData.counter) return false;
        if (
            this.acceptHttp !== null
                ? !(this.acceptHttp === fpData.acceptHttp)
                : fpData.acceptHttp !== null
        )
            return false;

        if (
            this.adBlock !== null
                ? !(this.adBlock === fpData.adBlock)
                : fpData.adBlock !== null
        )
            return false;
        if (
            this.addressHttp !== null
                ? !(this.addressHttp === fpData.addressHttp)
                : fpData.addressHttp !== null
        )
            return false;
        if (
            this.canvasJS !== null
                ? !(this.canvasJS === fpData.canvasJS)
                : fpData.canvasJS !== null
        )
            return false;
        if (
            this.connectionHttp !== null
                ? !(this.connectionHttp === fpData.connectionHttp)
                : fpData.connectionHttp !== null
        )
            return false;
        if (
            this.cookiesJS !== null
                ? !(this.cookiesJS === fpData.cookiesJS)
                : fpData.cookiesJS !== null
        )
            return false;

        if (
            this.dntJS !== null
                ? !(this.dntJS === fpData.dntJS)
                : fpData.dntJS !== null
        )
            return false;
        if (
            this.encodingHttp !== null
                ? !(this.encodingHttp === fpData.encodingHttp)
                : fpData.encodingHttp !== null
        )
            return false;
        if (
            this.fontsFlash !== null
                ? !(this.fontsFlash === fpData.fontsFlash)
                : fpData.fontsFlash !== null
        )
            return false;
        if (
            this.hostHttp !== null
                ? !(this.hostHttp === fpData.hostHttp)
                : fpData.hostHttp !== null
        )
            return false;
        if (
            this.IEDataJS !== null
                ? !(this.IEDataJS === fpData.IEDataJS)
                : fpData.IEDataJS !== null
        )
            return false;
        if (
            this.languageFlash !== null
                ? !(this.languageFlash === fpData.languageFlash)
                : fpData.languageFlash !== null
        )
            return false;
        if (
            this.languageHttp !== null
                ? !(this.languageHttp === fpData.languageHttp)
                : fpData.languageHttp !== null
        )
            return false;
        if (
            this.localJS !== null
                ? !(this.localJS === fpData.localJS)
                : fpData.localJS !== null
        )
            return false;
        if (
            this.octaneScore !== null
                ? !(this.octaneScore === fpData.octaneScore)
                : fpData.octaneScore !== null
        )
            return false;
        if (
            this.orderHttp !== null
                ? !(this.orderHttp === fpData.orderHttp)
                : fpData.orderHttp !== null
        )
            return false;
        if (
            this.platformFlash !== null
                ? !(this.platformFlash === fpData.platformFlash)
                : fpData.platformFlash !== null
        )
            return false;
        if (
            this.platformJS !== null
                ? !(this.platformJS === fpData.platformJS)
                : fpData.platformJS !== null
        )
            return false;
        if (
            this.pluginsJS !== null
                ? !(this.pluginsJS === fpData.platformJS)
                : fpData.platformJS !== null
        )
            return false;
        if (
            this.resolutionFlash !== null
                ? !(this.resolutionFlash === fpData.resolutionFlash)
                : fpData.resolutionFlash !== null
        )
            return false;
        if (
            this.resolutionJS !== null
                ? !(this.resolutionJS === fpData.resolutionJS)
                : fpData.resolutionJS !== null
        )
            return false;
        if (
            this.sessionJS !== null
                ? !(this.sessionJS === fpData.sessionJS)
                : fpData.sessionJS !== null
        )
            return false;
        if (
            this.sunspiderTime !== null
                ? !(this.sunspiderTime === fpData.sunspiderTime)
                : fpData.sunspiderTime !== null
        )
            return false;
        if (
            this.time !== null
                ? !(this.time === fpData.time)
                : fpData.time !== null
        )
            return false;
        if (
            this.timezoneJS !== null
                ? !(this.timezoneJS === fpData.timezoneJS)
                : fpData.timezoneJS !== null
        )
            return false;
        if (
            this.userAgentHttp !== null
                ? !(this.userAgentHttp === fpData.userAgentHttp)
                : fpData.userAgentHttp !== null
        )
            return false;
        if (
            this.webGLJs !== null
                ? !(this.webGLJs === fpData.webGLJs)
                : fpData.webGLJs !== null
        )
            return false;

        if (
            this.pluginsJsHashed !== null
                ? !(this.pluginsJsHashed === fpData.pluginsJsHashed)
                : fpData.pluginsJsHashed !== null
        )
            return false;
        if (
            this.canvasJsHashed !== null
                ? !(this.canvasJsHashed === fpData.canvasJsHashed)
                : fpData.canvasJsHashed !== null
        )
            return false;
        if (
            this.webGLJsHashed !== null
                ? !(this.webGLJsHashed === fpData.webGLJsHashed)
                : fpData.webGLJsHashed !== null
        )
            return false;
        if (
            this.fontsFlashHashed !== null
                ? !(this.fontsFlashHashed === fpData.fontsFlashHashed)
                : fpData.fontsFlashHashed !== null
        )
            return false;

        return true;
    }

    hashCode() {
        let result: number = this.counter;
        result = 31 * result + (this.id !== null ? this.id.hashCode() : 0);
        result =
            31 * result +
            (this.addressHttp !== null ? this.addressHttp.hashCode() : 0);
        result = 31 * result + (this.time !== null ? this.time.hashCode() : 0);
        result =
            31 * result +
            (this.userAgentHttp !== null ? this.userAgentHttp.hashCode() : 0);
        result =
            31 * result +
            (this.acceptHttp !== null ? this.acceptHttp.hashCode() : 0);
        result =
            31 * result +
            (this.hostHttp !== null ? this.hostHttp.hashCode() : 0);
        result =
            31 * result +
            (this.connectionHttp !== null ? this.connectionHttp.hashCode() : 0);
        result =
            31 * result +
            (this.encodingHttp !== null ? this.encodingHttp.hashCode() : 0);
        result =
            31 * result +
            (this.languageHttp !== null ? this.languageHttp.hashCode() : 0);
        result =
            31 * result +
            (this.orderHttp !== null ? this.orderHttp.hashCode() : 0);
        result =
            31 * result +
            (this.pluginsJS !== null ? this.pluginsJS.hashCode() : 0);
        result =
            31 * result +
            (this.platformJS !== null ? this.platformJS.hashCode() : 0);
        result =
            31 * result +
            (this.cookiesJS !== null ? this.cookiesJS.hashCode() : 0);
        result =
            31 * result + (this.dntJS !== null ? this.dntJS.hashCode() : 0);
        result =
            31 * result +
            (this.timezoneJS !== null ? this.timezoneJS.hashCode() : 0);
        result =
            31 * result +
            (this.resolutionJS !== null ? this.resolutionJS.hashCode() : 0);
        result =
            31 * result + (this.localJS !== null ? this.localJS.hashCode() : 0);
        result =
            31 * result +
            (this.sessionJS !== null ? this.sessionJS.hashCode() : 0);
        result =
            31 * result +
            (this.IEDataJS !== null ? this.IEDataJS.hashCode() : 0);
        result =
            31 * result +
            (this.canvasJS !== null ? this.canvasJS.hashCode() : 0);
        result =
            31 * result + (this.webGLJs !== null ? this.webGLJs.hashCode() : 0);
        result =
            31 * result +
            (this.fontsFlash !== null ? this.fontsFlash.hashCode() : 0);
        result =
            31 * result +
            (this.resolutionFlash !== null
                ? this.resolutionFlash.hashCode()
                : 0);
        result =
            31 * result +
            (this.languageFlash !== null ? this.languageFlash.hashCode() : 0);
        result =
            31 * result +
            (this.platformFlash !== null ? this.platformFlash.hashCode() : 0);
        result =
            31 * result + (this.adBlock !== null ? this.adBlock.hashCode() : 0);
        result =
            31 * result +
            (this.octaneScore !== null ? this.octaneScore.hashCode() : 0);
        result =
            31 * result +
            (this.sunspiderTime !== null ? this.sunspiderTime.hashCode() : 0);

        result =
            31 * result +
            (this.pluginsJsHashed !== null
                ? this.pluginsJsHashed.hashCode()
                : 0);
        result =
            31 * result +
            (this.canvasJsHashed !== null ? this.canvasJsHashed.hashCode() : 0);
        result =
            31 * result +
            (this.webGLJsHashed !== null ? this.webGLJsHashed.hashCode() : 0);
        result =
            31 * result +
            (this.fontsFlashHashed !== null
                ? this.fontsFlashHashed.hashCode()
                : 0);

        return result;
    }

    fpToHashMap() {
        const fpHashMap = new Map();

        fpHashMap.set('id', this.id);
        fpHashMap.set('addressHttp', this.addressHttp);
        fpHashMap.set('userAgentHttp', this.userAgentHttp);
        fpHashMap.set('acceptHttp', this.acceptHttp);
        fpHashMap.set('hostHttp', this.hostHttp);
        fpHashMap.set('connectionHttp', this.connectionHttp);
        fpHashMap.set('encodingHttp', this.encodingHttp);
        fpHashMap.set('languageHttp', this.languageHttp);
        fpHashMap.set('orderHttp', this.orderHttp);
        fpHashMap.set('pluginsJS', this.pluginsJS);
        fpHashMap.set('platformJS', this.platformJS);
        fpHashMap.set('cookiesJS', this.cookiesJS);
        fpHashMap.set('dntJS', this.dntJS);
        fpHashMap.set('timezoneJS', this.timezoneJS);
        fpHashMap.set('resolutionJS', this.resolutionJS);
        fpHashMap.set('localJS', this.localJS);
        fpHashMap.set('sessionJS', this.sessionJS);
        fpHashMap.set('IEDataJS', this.IEDataJS);
        fpHashMap.set('canvasJS', this.canvasJS);
        fpHashMap.set('webGLJs', this.webGLJs);
        fpHashMap.set('fontsFlash', this.fontsFlash);
        fpHashMap.set('resolutionFlash', this.resolutionFlash);
        fpHashMap.set('languageFlash', this.languageFlash);
        fpHashMap.set('platformFlash', this.platformFlash);
        fpHashMap.set('adBlock', this.adBlock);
        fpHashMap.set('octaneScore', this.octaneScore);
        fpHashMap.set('sunspiderTime', this.sunspiderTime);

        fpHashMap.set('pluginsJsHashed', this.pluginsJsHashed);
        fpHashMap.set('canvasJsHashed', this.canvasJsHashed);
        fpHashMap.set('webGLJsHashed', this.webGLJsHashed);
        fpHashMap.set('fontsFlashHashed', this.fontsFlashHashed);
    }
}
