const { NEXT_BASE_PATH = '' } = process.env;

export default {
  assetPrefix: `${NEXT_BASE_PATH}/`,
  basePath: NEXT_BASE_PATH,
};
