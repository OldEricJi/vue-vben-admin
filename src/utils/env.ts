import { PermissionModeEnum } from '../enums/appEnum';
import type { GlobEnvConfig } from '/@/types/config';

export const getGlobEnvConfig = (): GlobEnvConfig => {
  const env = import.meta.env;
  return (env as unknown) as GlobEnvConfig;
};

/**
 * @description: 开发模式
 */
export const devMode = 'development';

/**
 * @description: 生产模式
 */
export const prodMode = 'production';

/**
 * @description: 获取环境变量
 * @param {type}
 * @returns:
 * @example:
 */
export const getEnv = (): string => import.meta.env.MODE;

/**
 * @description: 是否是开发模式
 * @param {type}
 * @returns:
 * @example:
 */
export const isDevMode = (): boolean => import.meta.env.DEV;

/**
 * @description: 是否是生产模式模式
 * @param {type}
 * @returns:
 * @example:
 */
export const isProdMode = (): boolean => import.meta.env.PROD;

/**
 * @description: 是否开启mock
 * @param {type}
 * @returns:
 * @example:
 */
export const isUseMock = (): boolean => import.meta.env.VITE_USE_MOCK === 'true';

/**
 * @description: 获取菜单生成方式
 * @param {type}
 * @returns:
 * @example:
 */
export const getRoleMode = (): PermissionModeEnum =>
  import.meta.env.VITE_GEN_MENU_MODE === PermissionModeEnum.ROLE
    ? PermissionModeEnum.ROLE
    : PermissionModeEnum.BACK;
