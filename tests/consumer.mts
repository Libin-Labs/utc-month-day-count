import * as api from '@lp-labs/utc-month-day-count';
import { daysBetweenIso } from '@lp-labs/utc-month-day-count';
console.log(daysBetweenIso('2024-01-01', '2024-01-31'));
// @ts-expect-error invalid argument must be rejected by declarations
api.daysBetweenIso(20240101, '2024-01-02');
