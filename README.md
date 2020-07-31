## Logging

```typescript
new LoggerBundle({
  // This will just print the log to console
  console: true,
});
```

If you want to use it:

```typescript
const logger = container.get(LoggerService);
logger.info("User access forbidden");

// Add more context to your log
logger.info("User access forbidden", { route: "/123" }); // Th

// Some other type of logs
logger.warning("User access forbidden");
logger.error("User access forbidden");
logger.critical("User access forbidden");
```

The log object created looks like this:

```typescript
export interface ILog {
  message: string;
  level: LogLevel; // INFO, ERROR, WARNING, CRITICAL
  context: any;
}
```

If you want to listen to event and email all the critical ones:

```typescript
import { Listener } from "@kaviar/core";
import { LogEvent, LogLevel } from "@kaviar/logger-bundle";

export class EmailCriticalLogs extends Listener {
  constructor(protected readonly emailService: EmailService) {}

  init() {
    this.on(LogEvent, (e: LogEvent) => {
      const log = e.data.log;

      if (log.level === LogLevel.CRITICAL) {
        // this.emailService.send()
      }
    });
  }
}
```

And this needs to be warmed up in your bundle:

```typescript
class AppBundle extends Bundle {
  async init() {
    // Warming up simply means instantiating and running init so it attaches events
    this.warmup([EmailCriticalLogs]);
  }
}
```
