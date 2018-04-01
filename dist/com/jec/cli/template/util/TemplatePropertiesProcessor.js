"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TemplatePropertiesProcessor {
    constructor() { }
    sanitize(template, input, config, sanitizers) {
        const found = input.match(TemplatePropertiesProcessor.FUNCTION_PATTERN);
        let innerInput = input.substring(2, input.length - 2).trim();
        let result = template;
        let value = null;
        if (found) {
            const sanitizerRef = found[0];
            const sanitizer = sanitizers.get(sanitizerRef.substr(4));
            innerInput = innerInput.replace(sanitizerRef, "").trimRight();
            if (config.has(innerInput)) {
                value = sanitizer(config.get(innerInput));
            }
        }
        else {
            if (config.has(innerInput)) {
                value = config.get(innerInput);
            }
        }
        if (value) {
            result = result.replace(input, value);
        }
        return result;
    }
    replace(template, input, config) {
        const innerInput = input.substring(2, input.length - 2).trim();
        if (config.has(innerInput)) {
            const value = config.get(innerInput);
            template = template.replace(input, value);
        }
        return template;
    }
    resolve(template, config, sanitizers) {
        const hasSanitizers = sanitizers !== null;
        let result = template;
        let found = null;
        let input = null;
        while ((found = TemplatePropertiesProcessor.PROP_PATTERN.exec(result)) !== null) {
            input = found[0];
            result = hasSanitizers ?
                this.sanitize(result, input, config, sanitizers) :
                this.replace(result, input, config);
        }
        return result;
    }
}
TemplatePropertiesProcessor.PROP_PATTERN = /<%\s*.*?%>/gi;
TemplatePropertiesProcessor.FUNCTION_PATTERN = /-fn=[_a-zA-Z]*/gi;
exports.TemplatePropertiesProcessor = TemplatePropertiesProcessor;
;
