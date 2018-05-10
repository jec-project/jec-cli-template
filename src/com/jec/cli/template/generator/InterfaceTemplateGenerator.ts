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
import {InterfaceTemplate} from "../resource/InterfaceTemplate";
import {JecTemplate} from "../JecTemplate";
import {AbstractTemplateGenerator} from "../core/AbstractTemplateGenerator";
import {SanitizerUtils} from "../util/SanitizerUtils";

/**
 * The template used to create JEC interface files.
 */
export class InterfaceTemplateGenerator extends AbstractTemplateGenerator
                                        implements TemplateGenerator {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>InterfaceTemplateGenerator</code> instance.
   */
  constructor() {
    super();
    this.initObj();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Initializes this object.
   */
  private initObj():void {
    this._sanitizerMap = new Map<string, Function>();
    this._sanitizerMap.set(
      "sanitizeStringList", SanitizerUtils.sanitizeStringList
    );
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public generate(config:any):string {
    const template:JecTemplate = new InterfaceTemplate();
    return template.getTemplate();
  }
  
  /**
   * @inheritDoc
   */
  public clean(template:string):string {
    return this.cleanPattern(template, "<% pkg %>.", "");
  }
}