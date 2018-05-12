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

import {TemplateBuilder} from "./TemplateBuilder";
import * as fs from "fs";
import * as path from "path";

/**
 * A helper class that provides methods for writting file built from JEC
 * templates.
 */
export class FileWriter {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>FileWriter</code> instance.
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Writes a JEC component in a new file, depending on the specified options.
   * 
   * @param {any} generatorClass the reference to the
   *                             <code>TemplateGenerator<code> class used to
   *                             build the JEC component.
   * @param {any} config the config object used to customize the JEC component.
   * @param {Function} callback the callback method called once the file is
   *                            written.
   */
  public write(generatorClass:any, config:any, callback:Function):void {
    const builder:TemplateBuilder = new TemplateBuilder();
    const template:string = builder.build(generatorClass, config);
    const name:string = config.name;
    fs.writeFile(`${name}.ts`, template, (err:NodeJS.ErrnoException | null) => {
      callback(err);
    });
  }
}