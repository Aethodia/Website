////////////////////////////////////////////////////////////////////////////////
/** This is a dumping-ground for helper functions that need to be used across multiple files. */
class Helpers {

    //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
    public static readonly loadChildren = (
        moduleName: string,
    ) => async() => {
        try {
            let module;
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

            //@ts-ignore: The above switch statement makes sure this is safe.
            return module[moduleName]();

        } catch(error) {
            console.error(error);
        }
    }
}

////////////////////////////////////////////////////////////////////////////////
export {Helpers};
