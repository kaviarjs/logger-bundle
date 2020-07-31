import { Listener } from "@kaviar/core";
import { LogEvent } from "../events";
import { LogLevel } from "../defs";

export class ConsoleListener extends Listener {
  init() {
    this.on(LogEvent, (e: LogEvent) => {
      const log = e.data.log;

      if (log.level === LogLevel.INFO) {
        console.log(log);
      }
      if (log.level === LogLevel.WARNING) {
        console.warn(log);
      }
      if (log.level === LogLevel.ERROR) {
        console.error(log);
      }
      if (log.level === LogLevel.CRITICAL) {
        console.error(log);
      }
    });
  }
}
