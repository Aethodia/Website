// import {AdminModule} from 'app/content/admin/admin.module';
// import {DefaultModule} from 'app/content/default/default.module';
// import {ResponseCodesModule} from 'app/content/response-codes/response-codes.module';

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
export {Helpers};

////////////////////////////////////////////////////////////////////////////////
/** This is a dumping-ground for helper functions that need to be used across multiple files. */
class Helpers {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    private static readonly modules: table<Promise<any>> = {
        AdminModule:         import('app/content/admin/admin.module'),                   //as Promise<AdminModule>,
        DefaultModule:       import('app/content/default/default.module'),               //as Promise<DefaultModule>,
        ResponseCodesModule: import('app/content/response-codes/response-codes.module'), //as Promise<ResponseCodesModule>,
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
}
