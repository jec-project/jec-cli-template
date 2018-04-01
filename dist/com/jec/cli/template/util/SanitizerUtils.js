"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SanitizerUtils {
    static sanitizeStringList(input) {
        const list = input.split(SanitizerUtils.COMA);
        let result = SanitizerUtils.EMPTY_STRING;
        let len = list.length;
        let coma = SanitizerUtils.EMPTY_STRING;
        while (len--) {
            coma = len > 0 ? SanitizerUtils.COMA : SanitizerUtils.EMPTY_STRING;
            result += `"${list[len].trim()}"${coma}`;
        }
        return result;
    }
}
SanitizerUtils.EMPTY_STRING = "";
SanitizerUtils.COMA = ",";
exports.SanitizerUtils = SanitizerUtils;
