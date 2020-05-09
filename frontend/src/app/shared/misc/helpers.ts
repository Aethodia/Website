export {Helpers};

////////////////////////////////////////////////////////////////////////////////
/** This is a dumping-ground for helper functions that need to be used across multiple files. */
class Helpers {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public static loadChildren(moduleName: string) {
        return async(): Promise<Class|void> => {try {

            let module: Class;
            switch(moduleName) {
                case 'AdminModule':
                    module = await import('app/content/admin/admin.module');
                    break;

                case 'DefaultModule':
                    module = await import('app/content/default/default.module');
                    break;

                case 'ResponseCodesModule':
                    module = await import('app/content/response-codes/response-codes.module');
                    break;

                default:
                    throw new ReferenceError(`'${moduleName}' doesn't exist!`);
            }
            return (module as any)[moduleName] as Class;

        } catch(error) {console.error(error);}}
    }
}
