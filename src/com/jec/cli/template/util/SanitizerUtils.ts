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

import {JecTemplate} from "../JecTemplate";
import {TemplateGenerator} from "../TemplateGenerator";
import {TemplatePropertiesProcessor} from "../util/TemplatePropertiesProcessor";
import {MapUtils} from "../util/MapUtils";

/**
 * The <code>SanitizerUtils</code> provides static methods used to sanitize JEC
 * templates.
 */
export class SanitizerUtils {

  //////////////////////////////////////////////////////////////////////////////
  // Public properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The reference to an empty character.
   */
  public static readonly EMPTY_STRING:string = "";

  /**
   * The reference to the coma (<code>,</code>) character.
   */
  public static readonly COMA:string = ",";

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Sanitizes the <code>input</code> as an array of strings.
   * 
   * @param {string} input the string to sanitize.
   * @return {string} a string that can be used as an array of strings. 
   */
  
  public static sanitizeStringList(input:string):string {
    const list:string[] = input.split(SanitizerUtils.COMA);
    let result:string = SanitizerUtils.EMPTY_STRING;
    let len:number = list.length;
    let coma:string = SanitizerUtils.EMPTY_STRING;
    while(len--) {
      coma = len > 0 ? SanitizerUtils.COMA : SanitizerUtils.EMPTY_STRING;
      result += `"${list[len].trim()}"${coma}`;
    }
    return result;
  }
}