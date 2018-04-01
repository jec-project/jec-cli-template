//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

/**
 * A helper class that lists all properties in a template and replaces them
 * by the corresponding predefined values.
 */
export class TemplatePropertiesProcessor {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>TemplatePropertiesProcessor</code> instance.
   */
  constructor() {}

  /**
   * The reference to the pattern used to find custom properties in a template.
   */
  private static readonly PROP_PATTERN:RegExp = /<%\s*.*?%>/gi;

  /**
   * The reference to the pattern used to find custom properties in a template.
   */
  private static readonly FUNCTION_PATTERN:RegExp = /-fn=[_a-zA-Z]*/gi;

  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Sanitizes the specified template and returns it, filled with the correct
   * values, according to the specified template generator sanitizer list.
   * 
   * @param {string} template the template to sanitize.
   * @param {string} input the placeholder that indicates the where to place
   *                       computed values.
   * @param {Map<string, any>} config the config map that contains properties
   *                                  associated with the specified template.
   * @param {Map<string, Function>} sanitizers an optional map of helper
   *                                           functions used to properties.
   */
  private sanitize(template:string, input:string,
                                    config:Map<string, any>,
                                    sanitizers:Map<string, Function>):string {
    const found:RegExpMatchArray =
                      input.match(TemplatePropertiesProcessor.FUNCTION_PATTERN);
    let innerInput:string = input.substring(2, input.length - 2).trim();
    let result:string = template;
    let value:string = null;
    if(found) {
      const sanitizerRef:string = found[0];
      const sanitizer:Function = sanitizers.get(sanitizerRef.substr(4));
      innerInput = innerInput.replace(sanitizerRef, "").trimRight();
      if(config.has(innerInput)) {
        value = sanitizer(config.get(innerInput));
      }
    } else {
      if(config.has(innerInput)) {
        value = config.get(innerInput);
      }
    }
    if(value) {
      result = result.replace(input, value);
    }
    return result;
  }

  /**
   * Returns the specified template filled with the correct values, according to
   * the specified configuration.
   * 
   * @param {string} template the template to fill.
   * @param {string} input the placeholder that indicates the where to place
   *                       computed values.
   * @param {Map<string, any>} config the config map that contains properties
   *                                  associated with the specified template.
   */
  private replace(template:string, input:string, config:any):string {
    const innerInput:string = input.substring(2, input.length - 2).trim();
    if(config.has(innerInput)) {
      const value:string = config.get(innerInput) ;
      template = template.replace(input, value);
    }
    return template;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Finds all properties defined in the specified template file and replaces 
   * them by the corresponding values defined in the config map.
   * 
   * @param {string} template the template file to process.
   * @param {Map<string, any>} config the config map that contains properties
   *                                  associated with the specified template.
   * @param {Map<string, Function>} sanitizers an optional map of helper
   *                                           functions used to properties.
   */
  public resolve(template:string, config:Map<string, any>,
                                  sanitizers:Map<string, Function>):string {
    const hasSanitizers:boolean = sanitizers !== null;
    let result:string = template;
    let found:Array<any> = null;
    let input:string = null;
    while(
      (found = TemplatePropertiesProcessor.PROP_PATTERN.exec(result)) !== null
    ) {
      input = found[0];
      result = hasSanitizers ? 
        this.sanitize(result, input, config, sanitizers) :
        this.replace(result, input, config);
    }
    return result;
  }
};