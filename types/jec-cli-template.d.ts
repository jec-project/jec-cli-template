/*!
 * JEC CLI TEMPLATE Node Module
 * Copyright(c) 2017-2018 Pascal ECHEMANN
 * Apache 2.0 Licensed
 * This is a part of the JEC Projects: <https://github.com/pechemann/JEC>
 */

declare module "jec-cli-template" {

export class BootstrapTemplateGenerator implements TemplateGenerator {    constructor();    generate(config: any): string;}export class WebJsletTemplateGenerator implements TemplateGenerator {    constructor();    generate(config: any): string;}export interface JecTemplate {    getTemplate(): string;}export class BootstrapTemplate implements JecTemplate {    constructor();    getTemplate(): string;}export class WebJsletTemplate implements JecTemplate {    constructor();    getTemplate(): string;}export interface TemplateGenerator {    generate(config: any): string;}export class MapUtils {    static objectToMap(obj: any): Map<string, any>;}export class TemplateBuilder {    constructor();    build(generatorClass: any, config: any): string;}export class TemplatePropertiesProcessor {    constructor();    private static readonly PROP_PATTERN;    resolve(template: string, config: Map<string, any>): string;}
}