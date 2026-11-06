import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('counts forward distance', () => {
  assert.equal(api.daysBetweenIso('2024-01-01', '2024-01-31'), 30);
});
test('is symmetric', () => {
  assert.equal(api.daysBetweenIso('2024-03-01', '2024-02-28'), 2);
});
test('same date is zero', () => {
  assert.equal(api.daysBetweenIso('2024-01-01', '2024-01-01'), 0);
});
test('counts leap day', () => {
  assert.equal(api.daysBetweenIso('2024-02-28', '2024-03-01'), 2);
});
test('crosses year', () => {
  assert.equal(api.daysBetweenIso('2023-12-31', '2024-01-01'), 1);
});
test('rejects impossible date', () => {
  assert.throws(() => api.daysBetweenIso('2023-02-29', '2023-03-01'), RangeError);
});
