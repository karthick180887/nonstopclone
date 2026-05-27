import { VEHICLES } from "./site-data";

/** Vehicle rows for nested city → city pages (synced with site tariff). */
export const DROP_TAXI_VEHICLES = VEHICLES.map((v) => ({
  name: v.label,
  rate: v.oneWayRate,
  image: v.image,
}));
