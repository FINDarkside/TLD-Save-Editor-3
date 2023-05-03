import region from './types/generated/enums/GameRegion';
import { nanoid } from 'nanoid';

export interface AvailableLocation {
  name: string;
  id: string;
  position: [number, number, number];
  screenshot?: string;
}

const createAvailableLocation = (
  name: string,
  position: [number, number, number],
  screenshot?: string
) => {
  let screenshotPath = screenshot
    ? `/src/assets/${screenshot}/marker.png`
    : undefined;
  return {
    name,
    position,
    screenshotPath,
    id: nanoid(),
  };
};

export interface AvailableLocations {
  [region: string]: AvailableLocation[];
}

const availableLocations: AvailableLocations = {
  [region.CanneryRegion]: [
    createAvailableLocation('Fallen Lighthouse', [73.5, 84.7, -916.8]),
    createAvailableLocation('Cannery Worker Residences', [163.2, 31.8, -434.8]),
    createAvailableLocation('Last Resort Cannery', [-370.4, 39.2, -538.7]),
    createAvailableLocation('Trailers', [-746, 38.3, -392.9]),
    createAvailableLocation('Echo One Radio Tower', [-68.1, 138.4, 29]),
    createAvailableLocation('To Forlorn Muskeg', [-249.5, 120, 875.0]),
    createAvailableLocation('Pensive Lookout', [299.4, 240.9, 349.5]),
    createAvailableLocation("Hunters's Blind", [-573.7, 86.6, 710.1]),
    createAvailableLocation('Washed Out Trailers', [-639, 37.2, -79.3]),
    createAvailableLocation('Cabin', [681.1, 107.5, 418.1]),
  ],
  [region.CoastalRegion]: [
    createAvailableLocation('Trailer', [-255.6, 122.2, 1143.2]),
    createAvailableLocation('To Pleasant Valley', [-37, 177.9, 1336.7]),
    createAvailableLocation('Abandoned Lookout', [357.4, 205, 1158.4]),
    createAvailableLocation('Cabins', [340.1, 88.2, 1053.6]),
    createAvailableLocation('Cabin', [-499.9, 99.9, 1105.9]),
    createAvailableLocation('Trailer - Train unloading', [-758, 205.6, 1260.4]),
    createAvailableLocation('To Ravine', [-1153.3, 206.3, 1206.2]),
    createAvailableLocation('Rabbit Groove', [-1223.9, 129.1, 974.1]),
    createAvailableLocation('Fishing Camp', [-716, 29.4, 656.6]),
    createAvailableLocation('Log Sort', [-36.4, 26.5, 882.7]),
    createAvailableLocation('Aurora mine', [57.7, 39.5, 981]),
    createAvailableLocation('Ice Fishing Hut', [391.1, 25.1, 493.5]),
    createAvailableLocation("Misanthrope's Homestead", [368.7, 58.9, 227.5]),
    createAvailableLocation('Costal Townsite - Garage', [760.3, 25.7, 646.2]),
    createAvailableLocation('Trailer', [820.5, 85.3, 910.3]),
    createAvailableLocation('Waterfront Cottages', [705.8, 32.4, -145.1]),
    createAvailableLocation('To Crumbling Highway', [723.4, 33.2, -494.4]),
    createAvailableLocation('Jackrabbit Island', [-277, 75.7, 297.8]),
  ],
  [region.BlackrockRegion]: [
    createAvailableLocation("Cutty's Cave", [481.6, 186.8, -563.6]),
    createAvailableLocation("Foreman's Clearcut", [459.4, 211.6, -221]),
    createAvailableLocation('To Timberwolf Mountain', [628.7, 264.4, -299.9]),
    createAvailableLocation("Bricklayer's Retreat", [892.5, 232.8, -99.7]),
    createAvailableLocation('Whistling Perch', [850.8, 311.7, 352]),
    createAvailableLocation('Cliff Cave', [527.9, 242.2, 298.2]),
    createAvailableLocation('Cave', [535, 196.6, 513.4]),
    createAvailableLocation('Cave', [339.6, 348.8, 691]),
    createAvailableLocation('Abandoned Mine', [462.4, 372.7, 949.3]),
    createAvailableLocation('No Road Cave', [807.8, 309.6, 698.2]),
    createAvailableLocation('Prison Entrance', [-183.1, 226.9, 5.1]),
    createAvailableLocation('Old Substation', [-579.0, 107.9, -484.1]),
    createAvailableLocation('Trailer', [-665.9, 106.3, -25.5]),
    createAvailableLocation("To Keeper's Pass North", [-342.6, 144.5, -970.9]),
    createAvailableLocation('Barn', [-37.4, 129.2, -763.3]),
    createAvailableLocation("Cook's farm", [189.9, 181.1, -246.5]),
    createAvailableLocation('Power Plant', [-370.1, 78.2, 439]),
  ],
};

export default availableLocations;
