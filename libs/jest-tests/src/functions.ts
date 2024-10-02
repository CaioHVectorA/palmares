import { TestFunctionsAdapter } from '@palmares/tests';

import type { CustomData } from './types';

export class JestTestFunctionsAdapter extends TestFunctionsAdapter {
  getDescribe(descriptionName: string, callback: () => void, custom: CustomData) {
    const describe = require('@jest/globals').describe;
    describe(descriptionName, () => {
      callback();
    });
  }

  getTest(testName: string, callback: () => Promise<void>, custom: CustomData): void {
    const test = require('@jest/globals').test;
    test(testName, async () => {
      await callback();
    });
  }

  getBeforeEach(callback: () => Promise<void>): void {
    const beforeEach = require('@jest/globals').beforeEach;
    beforeEach(async () => {
      await callback();
    });
  }

  getAfterEach(callback: () => Promise<void>): void {
    const afterEach = require('@jest/globals').afterEach;
    afterEach(async () => {
      await callback();
    });
  }

  getBeforeAll(callback: () => Promise<void>): void {
    const beforeAll = require('@jest/globals').beforeAll;
    beforeAll(async () => {
      await callback();
    });
  }

  getAfterAll(callback: () => Promise<void>): void {
    const afterAll = require('@jest/globals').afterAll;
    afterAll(() => {
      callback();
    });
  }
}
