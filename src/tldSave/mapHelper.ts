import region from './types/generated/enums/GameRegion';

export interface Map {
  size: [number, number];
  originOffset: [number, number];
  path: string;
}

type mapItem = [region, Map];

const createMap = (
  region: region,
  size?: [number, number],
  originOffset?: [number, number],
  path?: string
): mapItem => {
  return [
    region,
    {
      size: size ? size : [2000, 2000],
      originOffset: originOffset ? originOffset : [-1000, -1000],
      path: path ? `/src/assets/maps/${path}` : '/src/assets/maps/unknown.svg',
    },
  ];
};

const mapHelper = new Map<region, Map>([
  createMap(
    region.AshCanyonRegion,
    [2274, 2655],
    [-1135, -1536],
    'ash_canyon_region.webp'
  ),
  createMap(
    region.BlackrockRegion,
    [2274, 2655],
    [-1135, -1537],
    'blackrock_region.webp'
  ),
  createMap(
    region.CanneryRegion,
    [2500, 2602],
    [-1399, -1200],
    'cannery_region.webp'
  ),
  createMap(
    region.CoastalRegion,
    [2687, 2065],
    [-1443, -639],
    'coastal_region.webp'
  ),
  createMap(
    region.CrashMountainRegion,
    [2158, 2387],
    [-65, -348],
    'crash_mountain_region.webp'
  ),
  createMap(region.FutureRegion, [2000, 2000], [-1000, -1000], 'unknown.svg'),
  createMap(region.LakeRegion),
  createMap(region.MarshRegion, [2121, 2580], [-141, -241], 'marsh_region.webp'),
  createMap(region.MountainTownRegion, [2300, 2781], [-42, -241], 'mountain_town_region.webp'),
  createMap(region.RandomRegion),
  createMap(region.RiverValleyRegion),
  createMap(region.RuralRegion, [3306, 3515], [-156, -152]),
  createMap(region.TracksRegion),
  createMap(region.WhalingStationRegion),
  createMap(region.UnknownRegion, [2000, 2000], [-1000, -1000], 'unknown.svg'),
]);

export default mapHelper;
