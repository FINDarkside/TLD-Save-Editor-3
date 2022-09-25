import LiquidQuality from './types/generated/enums/LiquidQuality';
import store from 'src/store';

enum ItemCategory {
  FirstAid,
  Clothing,
  Food,
  Tools,
  Materials,
  Books,
  Collectible,
}

const tmpGearItem =
  store.currentSave?.data?.m_Dict?.global?.inventory?.items?.[0]?.gear;
type GearItem = NonNullable<typeof tmpGearItem>;

interface ItemInfo {
  name: string;
  category: ItemCategory;
  defaultData?: Partial<GearItem>;
}

const createClothing = (name: string) => ({
  name,
  category: ItemCategory.Clothing,
});

const availableItems: ItemInfo[] = [
  {
    name: 'GEAR_BottleAntibiotics',
    category: ItemCategory.FirstAid,
    defaultData: { stackable: { m_UnitsProxy: 6 } },
  },
  {
    name: 'GEAR_BottleHydrogenPeroxide',
    category: ItemCategory.FirstAid,
    defaultData: {
      liquid: {
        m_LiquidLitersProxy: 0.5,
        m_LiquidQuality: LiquidQuality.NonPotable,
      },
    },
  },
  {
    name: 'GEAR_BottlePainKillers',
    category: ItemCategory.FirstAid,
    defaultData: { stackable: { m_UnitsProxy: 6 } },
  },
  {
    name: 'GEAR_HeavyBandage',
    category: ItemCategory.FirstAid,
    defaultData: { stackable: { m_UnitsProxy: 1 } },
  },
  {
    name: 'GEAR_OldMansBeardDressing',
    category: ItemCategory.FirstAid,
    defaultData: { stackable: { m_UnitsProxy: 1 } },
  },
  {
    name: 'GEAR_WaterPurificationTablets',
    category: ItemCategory.FirstAid,
    defaultData: { stackable: { m_UnitsProxy: 1 } },
  },
  {
    name: 'GEAR_EmergencyStim',
    category: ItemCategory.FirstAid,
  },
  {
    name: 'GEAR_ReishiPrepared',
    category: ItemCategory.FirstAid,
    defaultData: { stackable: { m_UnitsProxy: 1 } },
  },
  {
    name: 'GEAR_RosehipsPrepared',
    category: ItemCategory.FirstAid,
    defaultData: { stackable: { m_UnitsProxy: 1 } },
  },
  {
    name: 'GEAR_BirchbarkPrepared',
    category: ItemCategory.FirstAid,
    defaultData: { stackable: { m_UnitsProxy: 1 } },
  },
  // Clothing
  createClothing('GEAR_AstridBoots'),
  createClothing('GEAR_AstridGloves'),
  createClothing('GEAR_AstridJacket'),
  createClothing('GEAR_AstridJeans'),

  // Food
  {
    name: 'GEAR_AirlineFoodChick',
    category: ItemCategory.Food,
    defaultData: { food: { m_CaloriesRemainingProxy: 620 } },
  },

  // Tools
  {
    name: 'GEAR_Accelerant',
    category: ItemCategory.Tools,
    defaultData: { stackable: { m_UnitsProxy: 1 } },
  },

  // Materials
  {
    name: 'GEAR_ArrowHead',
    category: ItemCategory.Materials,
    defaultData: {
      stackable: { m_UnitsProxy: 1 },
      inProgress: { m_PercentComplete: 100 },
    },
  },

  // Books
  {
    name: 'GEAR_BookCarcassHarvesting',
    category: ItemCategory.Books,
    defaultData: {
      stackable: { m_UnitsProxy: 1 },
      inProgress: { m_PercentComplete: 100 },
    },
  },
];

export default availableItems;
