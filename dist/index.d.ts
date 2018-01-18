/// <reference types="react" />
import * as React from "react";
import { BlockProps } from "./block";
export interface Options {
    renderNode?: (props: any) => React.Component<BlockProps, {}>;
    renderNodeFunctions?: [(props: any) => React.ReactNode];
}
export interface Plugin {
    renderNode: (props: any) => React.ReactNode;
}
export declare const ReactDnDPlugin: (options: Options) => Plugin;
export declare const inject: (plugins: [any], options: Options) => any[];
