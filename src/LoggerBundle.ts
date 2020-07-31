import { Bundle } from "@kaviar/core";
import { ILoggerBundleConfig } from "./defs";
import { ConsoleListener } from "./handlers/ConsoleListener";

export class LoggerBundle extends Bundle<ILoggerBundleConfig> {
  defaultConfig = {
    console: true,
  };

  async init() {
    // This will just listen to log event and print it into console
    if (this.config.console) {
      this.warmup([ConsoleListener]);
    }
  }
}
