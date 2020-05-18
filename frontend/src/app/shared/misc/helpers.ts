import {UrlMatcher, UrlMatchResult, UrlSegment} from '@angular/router';
export {Helpers};

////////////////////////////////////////////////////////////////////////////////
/** This is a dumping-ground for helper functions that need to be used across multiple files. */
class Helpers {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    private static readonly modules: table<Promise<any>> = {
        AdminModule: import('app/views/admin/admin.module'),
        AuthModule:  import('app/views/auth/auth.module'),
        HomeModule:  import('app/views/home/home.module'),
        ErrorModule: import('app/views/error/error.module'),
    };

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public static loadChildren(moduleName: string) {
        return async(): Promise<Class|void> => {
            try {
                if(this.modules[moduleName] === undefined) {
                    throw ReferenceError(`Invalid \`moduleName\`: ${moduleName}`);
                }
                return (await this.modules[moduleName])[moduleName];
            } catch(error) {
                console.error(error);
            }
        }
    }

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public static genMatcher(segments: string[]): UrlMatcher {
        const result: UrlMatchResult = {
            consumed: [],
        };
        for(const segment of segments) {
            const urlSeg = new UrlSegment(segment, {});
            result.consumed.push(urlSeg)
        }
        return () => result;
    }
}
