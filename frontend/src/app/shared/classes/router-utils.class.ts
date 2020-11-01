export {RouterUtils};

////////////////////////////////////////////////////////////////////////////////
/** This file provides some functions that facilitate routing. */
class RouterUtils {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    private static readonly modules: table<() => Promise<table<unknown>>> = {
        AdminModule: () => import('app/views/admin/admin.module'),
        AuthModule:  () => import('app/views/auth/auth.module'),
        HomeModule:  () => import('app/views/home/home.module'),
        ErrorModule: () => import('app/views/error/error.module'),
    };

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public static loadChildren(moduleName: string) /* LoadChildrenCallback */ {
        return async(): Promise<unknown> => {
            try {
                if(RouterUtils.modules[moduleName] === undefined) {
                    throw ReferenceError(`Invalid \`moduleName\`: ${moduleName}`);
                }
                const module = await RouterUtils.modules[moduleName]!();
                return module[moduleName];
            } catch(error: unknown) {
                console.error(error);
                return;
            }
        }
    }
}
