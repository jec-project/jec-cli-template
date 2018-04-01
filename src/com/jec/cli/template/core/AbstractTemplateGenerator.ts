//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2017 Pascal ECHEMANN.
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

import {TemplateGenerator} from "../TemplateGenerator";
import {BootstrapTemplate} from "../resource/BootstrapTemplate";
import {JecTemplate} from "../JecTemplate";

/**
 * The abstract class for all <code>TemplateGenerator</code> implementations.
 */
export abstract class AbstractTemplateGenerator implements TemplateGenerator {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>AbstractTemplateGenerator</code> instance.
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Protected properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The map that contains all functions used to sanitize specifiec properties
   * for tha associated template.
   */
  protected _sanitizerMap:Map<string, Function> = null;

  //////////////////////////////////////////////////////////////////////////////
  // Protected methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Removes the specified search pattern from <code>template</code> and
   * replaces it by the <code>replaceValue</code> parameter.
   * 
   * @param {string} template the template to clean.
   * @param {string} pattern the pattern to find and replace.
   * @param {string} replaceValue the value used for replacement.
   * @return {string} the cleaned template.
   */
  protected cleanPattern(template:string, pattern:string,
                                                   replaceValue:string):string {
    let result:string = template;
    if(result.indexOf(pattern) !== -1) {
      result = result.replace(pattern, replaceValue);
    };
    return result;
  }
  
  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public generate(config:any):string {
    return null;
  }
  
  /**
   * @inheritDoc
   */
  public clean(template:string):string {
    return template;
  }

  /**
   * @inheritDoc
   */
  public getSanitizers():Map<string, Function> {
    return this._sanitizerMap;
  }
}