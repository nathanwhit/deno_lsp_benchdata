import { LogRecord } from './LogRecord.d.ts';
export interface Logger {
    /**
     * Emit a log record. This method should only be used by log appenders.
     *
     * @param logRecord
     */
    emit(logRecord: LogRecord): void;
}
//# sourceMappingURL=Logger.d.ts.map
