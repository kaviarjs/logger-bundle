import { Listener } from "@kaviar/core";
import { LogEvent } from "../events";
import { LogLevel } from "../defs";

export class ConsoleListener extends Listener {
  init() {
    this.on(LogEvent, (e: LogEvent) => {
      const log = e.data.log;

      if (log.level === LogLevel.INFO) {
        console.log(`[info] ${log.message}`, log.context);
      }
      if (log.level === LogLevel.WARNING) {
        console.warn(`[warning] ${log.message}`, log.context);
      }
      if (log.level === LogLevel.ERROR) {
        console.error(`[error] ${log.message}`, log.context);
      }
      if (log.level === LogLevel.CRITICAL) {
        console.error(`[critical] ${log.message}`, log.context);
      }
    });
  }
}
