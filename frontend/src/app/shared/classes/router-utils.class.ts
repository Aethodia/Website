export {RouterUtils};

////////////////////////////////////////////////////////////////////////////////
/** This file provides some functions that facilitate routing. */
class RouterUtils {

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
                if(RouterUtils.modules[moduleName] === undefined) {
                    throw ReferenceError(`Invalid \`moduleName\`: ${moduleName}`);
                }
                return (await RouterUtils.modules[moduleName])[moduleName];
            } catch(error) {
                console.error(error);
            }
        }
    }
}
