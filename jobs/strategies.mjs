import { cache } from "../plugins/caching.mjs";
import { yearn } from "../plugins/sdk.mjs";
import { StrategiesMetadataGetCacheTime } from "../routes/v1/chains/1/strategies/metadata/index.mjs";
import { StrategiesMetadataGetCacheKey } from "../routes/v1/chains/1/strategies/metadata/index.mjs";

(async () => {
  const strategies = await yearn.strategies.vaultsStrategiesMetadata();
  if (strategies.length) {
    cache.set(StrategiesMetadataGetCacheKey, strategies, StrategiesMetadataGetCacheTime);
  }
  process.exit(0);
})();
