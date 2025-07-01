import { ENV } from '@/configs/env.config';

describe('Verificando as variaveis de ambiente', () => {
  test('PORT', () => expect(ENV.PORT).not.toBeNaN());

  test('DATABASE_URL', () => expect(ENV.DATABASE_URL).not.toBeTruthy());

  test('REDIS_URL', () => expect(ENV.REDIS_URL).not.toBeTruthy());
});
