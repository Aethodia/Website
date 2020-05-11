import {Pipe, PipeTransform} from '@angular/core';
export {I18nPipe};

////////////////////////////////////////////////////////////////////////////////
@Pipe({
    name: 'i18n',
})
class I18nPipe implements PipeTransform {
    transform(key: string, params: string[] = []): string {
        return key; //TODO
    }
}
