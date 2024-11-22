/**这个东西的性质和 `any` 没什么不同。**慎防 AnyScript。***/
type anyObject = Record<string, any>;
module "*.module.css"{
    const classes :Immutable<anyObject>;
    export default classes;
}
module "*.png"{
    const URL :string;
    export default URL;
}