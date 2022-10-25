declare module 'react-ts-setting' {
    export interface IHomeData {
        title: string;
        description: string;
    }
}

declare module '*.scss';
declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}
