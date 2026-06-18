import { Program, EcoTip, StatItem, ScanResult } from './types';

export const statsData: StatItem[] = [
  { value: "482,910+", label: "Items Classified", detail: "Scanned & categorized by AI" },
  { value: "34,850", label: "Booked Pickups", detail: "Completed by certified partners" },
  { value: "1,240 tons", label: "CO₂ Saved", detail: "Diverted from landfill emission" },
  { value: "142 Cities", label: "Partner Municipals", detail: "Active drop-off coverages" }
];

export const awarenessPrograms: Program[] = [
  {
    id: "prog-1",
    emoji: "🧹",
    title: "Swachh Bharat Cleanliness Drive",
    organizer: "Ministry of Housing & Urban Affairs",
    type: "Government",
    description: "National initiative emphasizing street sweeping, waste aggregation, and establishing green smart dump boxes across metropolitan clusters.",
    status: "Active - Happening This Saturday",
    joinedCount: 14502,
    featured: true
  },
  {
    id: "prog-2",
    emoji: "🎒",
    title: "School Waste-Free Champions",
    organizer: "Green Generations NGO",
    type: "NGO",
    description: "Training student panels to conduct classroom plastic audits, set up indoor compost tables, and implement zero-single-use campus protocols.",
    status: "Ongoing - Enroll School",
    joinedCount: 3820
  },
  {
    id: "prog-3",
    emoji: "🏢",
    title: "Corporate Zero-Waste Pledge",
    organizer: "SustainCorp Alliance",
    type: "Private",
    description: "Uniting corporate campuses to phase out single-use cups, track server room e-waste, and secure circular supply agreements with verified digesters.",
    status: "Ongoing - Signup Teams",
    joinedCount: 1205
  },
  {
    id: "prog-4",
    emoji: "⚡",
    title: "E-Waste Collection Camp",
    organizer: "Urban Pollution Control Board",
    type: "Government",
    description: "Establishing safe collection depots for expired lithium-ion batteries, laptop components, cables, and copper circuit boards.",
    status: "Starts July 1st",
    joinedCount: 7410,
    featured: true
  },
  {
    id: "prog-5",
    emoji: "🏖️",
    title: "Coastal Cleanup Coalition",
    organizer: "Oceanic Guard Foundation",
    type: "NGO",
    description: "Retrieving microplastics, lost fishing lines, and plastic bottles from intertidal ecosystems to catalog pollution sources.",
    status: "Active - Every Weekend",
    joinedCount: 9320
  },
  {
    id: "prog-6",
    emoji: "📱",
    title: "Digital Waste Marketplace Pilot",
    organizer: "Resellify Technologies Ltd",
    type: "Private",
    description: "A specialized app exchange enabling households to swap clean bulk cardboard, scrap metal, and glass cullet directly with municipal processors.",
    status: "Beta Active",
    joinedCount: 450
  }
];

export const dynamicEcoTips: EcoTip[] = [
  {
    id: "tip-1",
    iconName: "Battery",
    title: "Upgrade to Rechargeable Cells",
    description: "Standard alkaline battery cells leak highly toxic heavy chemicals in general trash streams. Rechargeable lithium cells last for many hundreds of re-use loops.",
    impact: "Saves up to 15 kg of chemical toxic byproduct"
  },
  {
    id: "tip-2",
    iconName: "ShoppingBag",
    title: "Stow Durable Canvas Grocery Bags",
    description: "Keep 2 thick weave canvas sacks in your car trunk or commute backpack to avoid bringing ultra-thin single-use grocery plastic bags home.",
    impact: "Eliminates ~500 single-use bags annually per person"
  },
  {
    id: "tip-3",
    iconName: "Leaf",
    title: "Compost Organic Peels & Grounds",
    description: "Aggregate coffee grounds, raw vegetable cuts, and eggshells into a backyard aerated container or indoor bokashi unit to generate nutritious organic crop-feed.",
    impact: "Cuts household greenhouse methane by 30%"
  },
  {
    id: "tip-4",
    iconName: "Maximize2",
    title: "Flatten Corrugated Cardboard Boxes",
    description: "Slit packing tape on shipping packages and squash them flat. Bulky non-crushed boxes fill up municipal sorting trucks with empty air, doubling fuel burns.",
    impact: "Saves 40% volume space in city sorting vehicles"
  }
];

// Lightweight SVG data as base64 string to simulate perfect drag & drop preset images or fast testing
export interface DemoPreset {
  id: string;
  name: string;
  emoji: string;
  mimeType: string;
  imageUrl: string; // inline base64 or colored placeholder
  scanData: ScanResult;
}

export const presetDemos: DemoPreset[] = [
  {
    id: "preset-can",
    name: "Crumpled Soda Can",
    emoji: "🥫",
    mimeType: "image/svg+xml",
    imageUrl: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0iIzc4OTA5QyIvPjxwYXRoIGQ9Ik0zMCwzMCBMODAsNTAgTDMwLDcwIFoiIGZpbGw9IiNCNTBEMjEiIG9wYWNpdHk9IjAuNiIvPjx0ZXh0IHg9IjM1IiB5PSI1OCIgZm9udC1zaXplPSIyNCI+🥫PC90ZXh0Pjwvc3ZnPg==",
    scanData: {
      itemName: "Aluminium Beverage Can",
      recyclable: true,
      recyclabilityScore: 98,
      category: "Metal",
      summary: "This is a crushed aluminium refreshment container. Aluminium can be recycled indefinitely with zero structural degradation. Up to 95% less energy is required to recycle existing aluminium compared to refining raw metal bauxite.",
      disposalInstructions: "1. Empty out any remaining carbonated liquid.\n2. Rinse briefly to eliminate high sugar stickiness to deter insects.\n3. Keep the pop tab attached flat or throw it inside the can if separated.\n4. Recycle in your specialized metal and tin collection bins.",
      tags: ["#Aluminium", "#IndefinitelyRecyclable", "#TinMetal", "#CleanRinse"],
      co2Impact: "0.14 kg CO₂ prevented from smelting"
    }
  },
  {
    id: "preset-crate",
    name: "Cardboard Packaging Box",
    emoji: "📦",
    mimeType: "image/svg+xml",
    imageUrl: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0iI0QyQjQ4QyIvPjxwYXRoIGQ9Ik0yMCw0MCBMODAsNDAgTDgwLDcwIEwyMCw3MCBaIiBmaWxsPSIjOEU3QjNCIi8+PHRleHQgeD0iMzUiIHk9IjU4IiBmb250LXNpemU9IjI0Ij4📦PC90ZXh0Pjwvc3ZnPg==",
    scanData: {
      itemName: "Corrugated Cardboard Grid Box",
      recyclable: true,
      recyclabilityScore: 92,
      category: "Paper",
      summary: "Standard double-walled transport cardboard packaging. Paper fibers derived from timber can usually undergo 5 to 7 mechanical recycling processes before becoming too short to bond safely.",
      disposalInstructions: "1. Carefully peel or slit off thick heavy plastics packing and shipping tapes.\n2. Squash or slice the cardboard flat to conserve cubic volume in bins.\n3. Ensure cardboard is not heavily grease-laden (like dirty pizza oil boxes, which contaminate batch pulping chemistry).\n4. Place flat into your dry paper recycling bin.",
      tags: ["#FlattenCardboard", "#PaperBatch", "#DryClean", "#SustainForests"],
      co2Impact: "0.22 kg CO₂ saved in municipal sorting logistics"
    }
  },
  {
    id: "preset-bottle",
    name: "Clear Water Bottle",
    emoji: "🥤",
    mimeType: "image/svg+xml",
    imageUrl: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0iI0EwQzhENCIvPjxwYXRoIGQ9Ik00MCwyMCBMNjAsMjAgTDYwLDgwIEw0MCw4MCBaIiBmaWxsPSIjN0JDNjdFIiBvcGFjaXR5PSIwLjMiLz48dGV4dCB4PSIzNSIgeT0iNTgiIGZvbnQtc2l6ZT0iMjQiP🥤PC90ZXh0Pjwvc3ZnPg==",
    scanData: {
      itemName: "Polyethylene Terephthalate Bottle (PET 1)",
      recyclable: true,
      recyclabilityScore: 95,
      category: "Plastic",
      summary: "This is a standard clear food-grade PET (Polyethylene Terephthalate) bottled beverage container. Clear PET is highly valued by plastic recycling markets because it can easily be re-pulverized into clear plastic food jars.",
      disposalInstructions: "1. Drink or pour out all residual contents completely.\n2. Screw the rigid cap back on of the bottle or place inside municipal guidelines.\n3. Crush the container flat to reduce landfill air volume.\n4. Throw it into plastic-labeled blue containers.",
      tags: ["#PET1", "#PlasticCircular", "#CrushFlat", "#OceanFriendly"],
      co2Impact: "0.08 kg CO₂ prevented from virgin petroleum"
    }
  },
  {
    id: "preset-battery",
    name: "Expired Li-Ion Battery",
    emoji: "🔋",
    mimeType: "image/svg+xml",
    imageUrl: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0iIzM5MzkzOSIvPjxyZWN0IHg9IjMwIiB5PSIzMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNSIgZmlsbD0iI0ZGM0IzQiIvPjx0ZXh0IHg9IjM1IiB5PSI1OCIgZm9udC1zaXplPSIyNCI+🔋PC90ZXh0Pjwvc3ZnPg==",
    scanData: {
      itemName: "Lithium-Ion Polymer Battery",
      recyclable: false,
      recyclabilityScore: 10,
      category: "Hazardous",
      summary: "This is a consumer electronics lithium rechargeable cell. It cannot be recycled via routine household sorting curbside systems and presents extreme toxic chemical and fire explosion hazards if crushed inside general trash packaging trucks.",
      disposalInstructions: "1. Do NOT put this battery in any municipal dry curbside recycle or paper bin.\n2. Wrap the exposed positive/negative electrical nodes in masking or duct tape to block unintended short circuiting.\n3. Deliver the battery directly to a designated local electronics recycling drop-off, battery recycling tube at hardware retail outlets, or municipal hazardous waste camp site.",
      tags: ["#DOntThrowCurbside", "#HazardousWaste", "#SpecializedDropoff", "#FireHazard"],
      co2Impact: "Reduces heavy metals groundwater pollution threat by 100%"
    }
  }
];
