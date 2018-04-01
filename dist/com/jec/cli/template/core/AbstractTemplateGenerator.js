"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractTemplateGenerator {
    constructor() { }
    cleanPattern(template, pattern, replaceValue) {
        let result = template;
        if (result.indexOf(pattern) !== -1) {
            result = result.replace(pattern, replaceValue);
        }
        ;
        return result;
    }
    generate(config) {
        return null;
    }
    clean(template) {
        return template;
    }
}
exports.AbstractTemplateGenerator = AbstractTemplateGenerator;
