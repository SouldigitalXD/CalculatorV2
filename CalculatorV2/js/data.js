const priceCalc = {
  // Server Type Prices
  serverTypes: [
    { price: 7995, name: "16 Bay 8 Core", bays: 6995 }, //16 Bay 8 Core
    { price: 9995, name: "16 Bay 16 Core", bays: 6995 }, //16 Bay 16 Core
    { price: 9995, name: "24 Bay 8 Core", bays: 8995 }, //24 Bay 8 Core
    { price: 11995, name: "24 Bay 16 Core", bays: 8995 }, //24 Bay 16 Core
    { price: 6995, name: "Platform Studio 15 TB", bays: 8995, platform: true },
    { price: 9995, name: "Platform Studio 30 TB", bays: 8995, platform: true },
  ],

  // Switch
  switch: 3000,

  //Storage
  driveTypes: [
    { price: 425, name: "8 TB HDD", storage: 8 },
    { price: 550, name: "12 TB HDD", storage: 12 },
    { price: 850, name: "16 TB HDD", storage: 16 },
    { price: 850, name: "3.84 TB SSD", storage: 3.84 },
    { price: 1300, name: "7.68 TB SSD", storage: 7.68 },
  ],

  //Expansion
  expansionTypes: [
    { price: 4250, name: "Expansion 128 TB" },
    { price: 5550, name: "Expansion 192 TB" },
    { price: 8550, name: "Expansion 256 TB" },
    { price: 9250, name: "Expansion 384 TB" },
    { price: 19250, name: "Expansion 122 TB SSD" },
  ],

  // Typical Format
  typicalFormats: [
    { price: 0, name: "DSLR/Phone Footage" },
    { price: 0, name: "Mid Range Professional Cameras (Like Sony AS7, or similar)", selected: true },
    { price: 0, name: "High End Production (Like Red, Arri, BMD 8K, or similar)" },
  ],

  // Software Suites
  softwareSuites: [
    { price: 0, name: "Shared Storage Suite" },
    { price: 4995, name: "Media Management Suite" },
    { price: 7995, name: "Workflow Suite" },
    { price: 19995, name: "Enterprise Suite" },
  ],

  // MediaHub Sizes
  mediaHubSizes: [
    { price: 995, name: "0 TB" },
    { price: 2295, name: "7.68 TB" },
    { price: 1845, name: "3.84 TB", selected: true },
    { price: 1345, name: "1.92 TB" },
  ],

  // Platform Studio
  platormStudio: [
    { price: 6995, name: "15 TB" },
    { price: 9995, name: "30 TB" },
  ],

  acceleratedUpload: 400, // Accelerated Upload
  installation: 1595, //Installation
  workFlow: 1495, // Workflow training
  mediaHub: 95, // MediaHub setup

  user: 50, // please check this value
  mediaHubuser: 30, // please check this value
  numMH: 500, // Number of Media Hubs please check this value
};
