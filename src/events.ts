import { Event } from "@kaviar/core";
import { ILog } from "./defs";

export class LogEvent extends Event<{ log: ILog }> {}
