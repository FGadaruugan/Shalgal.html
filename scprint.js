"use strict";
(() => {
  // app/titles-data.ts
  var categories = [
    { id: "race", label: "Race", short: "RACE" },
    { id: "bounty", label: "Bounty", short: "BOUNTY" },
    { id: "awakening", label: "Awakening", short: "AWAKEN" },
    { id: "special", label: "Special", short: "SPECIAL" },
    { id: "achievement", label: "Achievement", short: "ACHIEVE" },
    { id: "mastery", label: "Level & Mastery", short: "MASTERY" },
    { id: "raid", label: "Raid", short: "RAID" },
    { id: "wealth", label: "Fruit & Wealth", short: "WEALTH" },
    { id: "boss", label: "Boss & Unlock", short: "BOSS" },
    { id: "pvp", label: "PvP & Gacha", short: "PVP" },
    { id: "weapon", label: "Weapon & Aura", short: "WEAPON" },
    { id: "collection", label: "Collection", short: "COLLECT" },
    { id: "third-sea", label: "Third Sea", short: "SEA 3" },
    { id: "fishing", label: "Fishing", short: "FISHING" },
    { id: "creator", label: "Creators", short: "CREATOR" }
  ];
  var titleColors = [
    { name: "White", required: 0, hex: "#f4f7ff" },
    { name: "Spanish Pink", required: 10, hex: "#f5a5b8" },
    { name: "Deep Peach", required: 20, hex: "#ffb39b" },
    { name: "Blond", required: 30, hex: "#f6dc79" },
    { name: "Calamansi", required: 40, hex: "#d9e875" },
    { name: "Nyanza", required: 50, hex: "#d8f4df" },
    { name: "Pistachio", required: 60, hex: "#9dd477" },
    { name: "Tea Green", required: 70, hex: "#c4e7b1" },
    { name: "Diamond", required: 80, hex: "#79e8f2" },
    { name: "Powder Blue", required: 90, hex: "#a4d8f5" },
    { name: "Pale Lavender", required: 100, hex: "#d8c8ff" },
    { name: "Shampoo", required: 120, hex: "#ffb9ec" },
    { name: "Classic Rose", required: 140, hex: "#f5a0a8" },
    { name: "Aquamarine", required: 160, hex: "#75f1d0" }
  ];
  var titles = [
    { id: 1, name: "The Unleashed", how: "Human V2 \u043D\u044D\u044D\u0445.", category: "race", status: "available" },
    { id: 2, name: "Unmatched Speed", how: "Rabbit V2 \u043D\u044D\u044D\u0445.", category: "race", status: "available" },
    { id: 3, name: "Sea Monster", how: "Shark V2 \u043D\u044D\u044D\u0445.", category: "race", status: "available" },
    { id: 4, name: "Sacred Warrior", how: "Angel V2 \u043D\u044D\u044D\u0445.", category: "race", status: "available" },
    { id: 5, name: "The Ghoul", how: "Ghoul V2 \u043D\u044D\u044D\u0445.", category: "race", status: "available" },
    { id: 6, name: "The Cyborg", how: "Cyborg V2 \u043D\u044D\u044D\u0445.", category: "race", status: "available" },
    { id: 7, name: "Elder Wyrm", how: "Draco V2 \u043D\u044D\u044D\u0445.", category: "race", status: "available" },
    { id: 8, name: "Full Power", how: "Human V3 \u043D\u044D\u044D\u0445.", category: "race", status: "available" },
    { id: 9, name: "Godspeed", how: "Rabbit V3 \u043D\u044D\u044D\u0445.", category: "race", status: "available" },
    { id: 10, name: "Warrior of the Sea", how: "Shark V3 \u043D\u044D\u044D\u0445.", category: "race", status: "available" },
    { id: 11, name: "Perfect Being", how: "Angel V3 \u043D\u044D\u044D\u0445.", category: "race", status: "available" },
    { id: 12, name: "Hell Hound", how: "Ghoul V3 \u043D\u044D\u044D\u0445.", category: "race", status: "available" },
    { id: 13, name: "War Machine", how: "Cyborg V3 \u043D\u044D\u044D\u0445.", category: "race", status: "available" },
    { id: 14, name: "Berserker", how: "Human V4 \u043D\u044D\u044D\u0445.", category: "race", status: "available" },
    { id: 15, name: "Ancient Flame", how: "Draco V3 \u043D\u044D\u044D\u0445.", category: "race", status: "available" },
    { id: 16, name: "Thunderbolt", how: "Rabbit V4 \u043D\u044D\u044D\u0445.", category: "race", status: "available" },
    { id: 17, name: "Leviathan", how: "Shark V4 \u043D\u044D\u044D\u0445.", category: "race", status: "available" },
    { id: 18, name: "His Majesty", how: "Angel V4 \u043D\u044D\u044D\u0445.", category: "race", status: "available" },
    { id: 19, name: "Nightwalker", how: "Ghoul V4 \u043D\u044D\u044D\u0445.", category: "race", status: "available" },
    { id: 20, name: "Genesis", how: "Cyborg V4 \u043D\u044D\u044D\u0445.", category: "race", status: "available" },
    { id: 21, name: "Primordial Guardian", how: "Draco V4 \u043D\u044D\u044D\u0445.", category: "race", status: "available" },
    { id: 22, name: "Pirate Hunter", how: "5M+ Bounty \u044D\u0441\u0432\u044D\u043B Honor \u0445\u04AF\u0440\u044D\u0445.", category: "bounty", status: "available" },
    { id: 23, name: "Bounty Hunter", how: "5M+ Bounty \u044D\u0441\u0432\u044D\u043B Honor \u0445\u04AF\u0440\u044D\u0445.", category: "bounty", status: "available" },
    { id: 24, name: "Warlord of the Sea", how: "10M+ Bounty \u0445\u04AF\u0440\u044D\u0445.", category: "bounty", status: "rare" },
    { id: 25, name: "Emperor of the Sea", how: "20M+ Bounty \u0445\u04AF\u0440\u044D\u0445.", category: "bounty", status: "rare" },
    { id: 26, name: "Empress of the Sea", how: "20M+ Bounty \u0445\u04AF\u0440\u044D\u0445.", category: "bounty", status: "rare" },
    { id: 27, name: "Admiral", how: "10M+ Honor \u0445\u04AF\u0440\u044D\u0445.", category: "bounty", status: "rare" },
    { id: 28, name: "Fleet Admiral", how: "20M+ Honor \u0445\u04AF\u0440\u044D\u0445.", category: "bounty", status: "rare" },
    { id: 29, name: "Enlightened One", how: "\u0414\u0443\u0440\u044B\u043D Fruit Awakening \u043D\u044D\u044D\u0445.", category: "awakening", status: "available" },
    { id: 30, name: "Awakened One", how: "\u0414\u0443\u0440\u044B\u043D Fruit Awakening \u043D\u044D\u044D\u0445.", category: "awakening", status: "available" },
    { id: 31, name: "Over Heaven", how: "\u0414\u0443\u0440\u044B\u043D Fruit Awakening \u043D\u044D\u044D\u0445.", category: "awakening", status: "available" },
    { id: 32, name: "Over Hell", how: "\u0414\u0443\u0440\u044B\u043D Fruit Awakening \u043D\u044D\u044D\u0445.", category: "awakening", status: "available" },
    { id: 33, name: "Flame Fist", how: "Flame Fruit-\u0438\u0439\u0433 \u0431\u04AF\u0440\u044D\u043D awaken \u0445\u0438\u0439\u0445.", category: "awakening", status: "available" },
    { id: 34, name: "The Ice Queen", how: "Ice Fruit-\u0438\u0439\u0433 \u0431\u04AF\u0440\u044D\u043D awaken \u0445\u0438\u0439\u0445.", category: "awakening", status: "available" },
    { id: 35, name: "The Ice King", how: "Ice Fruit-\u0438\u0439\u0433 \u0431\u04AF\u0440\u044D\u043D awaken \u0445\u0438\u0439\u0445.", category: "awakening", status: "available" },
    { id: 36, name: "The Strongest One", how: "Quake Fruit-\u0438\u0439\u0433 \u0431\u04AF\u0440\u044D\u043D awaken \u0445\u0438\u0439\u0445.", category: "awakening", status: "available" },
    { id: 37, name: "The First Light", how: "Light Fruit-\u0438\u0439\u0433 \u0431\u04AF\u0440\u044D\u043D awaken \u0445\u0438\u0439\u0445.", category: "awakening", status: "available" },
    { id: 38, name: "Dark Lord", how: "Dark Fruit-\u0438\u0439\u0433 \u0431\u04AF\u0440\u044D\u043D awaken \u0445\u0438\u0439\u0445.", category: "awakening", status: "available" },
    { id: 39, name: "The Spider", how: "Spider Fruit-\u0438\u0439\u0433 \u0431\u04AF\u0440\u044D\u043D awaken \u0445\u0438\u0439\u0445.", category: "awakening", status: "available" },
    { id: 40, name: "Thunder God", how: "Rumble Fruit-\u0438\u0439\u0433 awaken \u0445\u0438\u0439\u0445. Lightning rework-\u043E\u043E\u0441 \u0445\u043E\u0439\u0448 \u0430\u0432\u0430\u0445 \u0431\u043E\u043B\u043E\u043C\u0436\u0433\u04AF\u0439.", category: "awakening", status: "unavailable" },
    { id: 41, name: "The Red Dog", how: "Magma Fruit-\u0438\u0439\u0433 \u0431\u04AF\u0440\u044D\u043D awaken \u0445\u0438\u0439\u0445.", category: "awakening", status: "available" },
    { id: 42, name: "Colossal God", how: "Buddha Fruit-\u0438\u0439\u0433 \u0431\u04AF\u0440\u044D\u043D awaken \u0445\u0438\u0439\u0445.", category: "awakening", status: "available" },
    { id: 43, name: "Desert Prince", how: "Sand Fruit-\u0438\u0439\u0433 \u0431\u04AF\u0440\u044D\u043D awaken \u0445\u0438\u0439\u0445.", category: "awakening", status: "available" },
    { id: 44, name: "The Phoenix", how: "Phoenix Fruit-\u0438\u0439\u0433 \u0431\u04AF\u0440\u044D\u043D awaken \u0445\u0438\u0439\u0445.", category: "awakening", status: "available" },
    { id: 45, name: "Bread Chaser", how: "Dough Fruit-\u0438\u0439\u0433 \u0431\u04AF\u0440\u044D\u043D awaken \u0445\u0438\u0439\u0445.", category: "awakening", status: "available" },
    { id: 46, name: "Innovator", how: "Roblox Innovation Awards 2024-\u0434 \u0441\u0430\u043D\u0430\u043B \u04E9\u0433\u0441\u04E9\u043D \u0431\u0430\u0439\u0445. Event \u0434\u0443\u0443\u0441\u0441\u0430\u043D.", category: "special", status: "unavailable" },
    { id: 47, name: "Pygglor, Devourer of Worlds", how: "Undercovertommy-\u0433 Title Drop \u0438\u0434\u044D\u0432\u0445\u0442\u044D\u0439 \u04AF\u0435\u0434 \u044F\u043B\u0430\u0445.", category: "special", status: "rare" },
    { id: 48, name: "Wen Lord Toad", how: "Wenlocktoad-\u0433 Title Drop \u0438\u0434\u044D\u0432\u0445\u0442\u044D\u0439 \u04AF\u0435\u0434 \u044F\u043B\u0430\u0445.", category: "special", status: "rare" },
    { id: 49, name: "Big News", how: "BIGNEWS \u043A\u043E\u0434\u044B\u0433 Redeem \u0445\u0438\u0439\u0445.", category: "special", status: "available" },
    { id: 50, name: "YouTuber", how: "Official Discord-\u0438\u0439\u043D YouTuber role-\u0442\u043E\u0439 creator-\u0434 \u0430\u0434\u043C\u0438\u043D \u043E\u043B\u0433\u043E\u0434\u043E\u0433.", category: "special", status: "rare" },
    { id: 51, name: "Ace Squad", how: "Creator TheGreatAce-\u0433 Title Drop \u0438\u0434\u044D\u0432\u0445\u0442\u044D\u0439 \u04AF\u0435\u0434 \u044F\u043B\u0430\u0445.", category: "creator", status: "rare" },
    { id: 52, name: "Officially a Noob", how: "Creator OfficialNoobie-\u0433 Title Drop \u0438\u0434\u044D\u0432\u0445\u0442\u044D\u0439 \u04AF\u0435\u0434 \u044F\u043B\u0430\u0445.", category: "creator", status: "rare" },
    { id: 53, name: "Water Gang", how: "Creator Daigrock-\u0433 Title Drop \u0438\u0434\u044D\u0432\u0445\u0442\u044D\u0439 \u04AF\u0435\u0434 \u044F\u043B\u0430\u0445.", category: "creator", status: "rare" },
    { id: 54, name: "Don Axiore Familia", how: "Creator Axiore-\u0433 Title Drop \u0438\u0434\u044D\u0432\u0445\u0442\u044D\u0439 \u04AF\u0435\u0434 \u044F\u043B\u0430\u0445.", category: "creator", status: "rare" },
    { id: 55, name: "Mafia Gang", how: "Creator Bluxxy Gaming-\u0433 Title Drop \u0438\u0434\u044D\u0432\u0445\u0442\u044D\u0439 \u04AF\u0435\u0434 \u044F\u043B\u0430\u0445.", category: "creator", status: "rare" },
    { id: 56, name: "Heorua Family", how: "Creator Heorua-\u0433 Title Drop \u0438\u0434\u044D\u0432\u0445\u0442\u044D\u0439 \u04AF\u0435\u0434 \u044F\u043B\u0430\u0445.", category: "creator", status: "rare" },
    { id: 57, name: "Magic Slayer", how: "Creator Magicbus-\u0433 Title Drop \u0438\u0434\u044D\u0432\u0445\u0442\u044D\u0439 \u04AF\u0435\u0434 \u044F\u043B\u0430\u0445.", category: "creator", status: "rare" },
    { id: 58, name: "Kitt Katt", how: "Creator Kitt Gaming-\u0433 Title Drop \u0438\u0434\u044D\u0432\u0445\u0442\u044D\u0439 \u04AF\u0435\u0434 \u044F\u043B\u0430\u0445.", category: "creator", status: "rare" },
    { id: 59, name: "Team JC", how: "Creator JCWK-\u0433 Title Drop \u0438\u0434\u044D\u0432\u0445\u0442\u044D\u0439 \u04AF\u0435\u0434 \u044F\u043B\u0430\u0445.", category: "creator", status: "rare" },
    { id: 60, name: "El Combo God", how: "Creator fer999-\u0433 Title Drop \u0438\u0434\u044D\u0432\u0445\u0442\u044D\u0439 \u04AF\u0435\u0434 \u044F\u043B\u0430\u0445.", category: "creator", status: "rare" },
    { id: 61, name: "Nakama Forever", how: "Creator MeEnyu-\u0433 Title Drop \u0438\u0434\u044D\u0432\u0445\u0442\u044D\u0439 \u04AF\u0435\u0434 \u044F\u043B\u0430\u0445.", category: "creator", status: "rare" },
    { id: 62, name: "Endless Fantasy", how: "Creator Rajo_END-\u0433 Title Drop \u0438\u0434\u044D\u0432\u0445\u0442\u044D\u0439 \u04AF\u0435\u0434 \u044F\u043B\u0430\u0445.", category: "creator", status: "rare" },
    { id: 63, name: "El Krazy Editor", how: "Editor Zioles-\u0433 Title Drop \u0438\u0434\u044D\u0432\u0445\u0442\u044D\u0439 \u04AF\u0435\u0434 \u044F\u043B\u0430\u0445.", category: "creator", status: "rare" },
    { id: 64, name: "rip_family", how: "rip_family Roblox group-\u0434 \u043E\u0440\u0436 higher role \u0430\u0432\u0430\u0445.", category: "special", status: "rare" },
    { id: 65, name: "red_legion", how: "red_legion Roblox group-\u0434 \u043E\u0440\u0436 higher role \u0430\u0432\u0430\u0445.", category: "special", status: "rare" },
    { id: 66, name: "Justice Seeker", how: "Marine \u0431\u043E\u043B\u0436 Pirate \u0442\u043E\u0433\u043B\u043E\u0433\u0447\u043E\u043E\u0441 bounty \u0430\u0432\u0430\u0445.", category: "achievement", status: "available" },
    { id: 67, name: "Empty Vessel", how: "Energy-\u0433\u044D\u044D 0 \u0431\u043E\u043B\u0442\u043E\u043B \u0437\u0430\u0440\u0446\u0443\u0443\u043B\u0430\u0445.", category: "achievement", status: "available" },
    { id: 68, name: "The Unlucky", how: "\u042D\u043D\u0433\u0438\u0439\u043D NPC-\u0434 \u044F\u043B\u0430\u0433\u0434\u0430\u0445.", category: "achievement", status: "available" },
    { id: 69, name: "The Vanquished", how: "\u0415\u0440\u0434\u0438\u0439\u043D Boss-\u0434 \u044F\u043B\u0430\u0433\u0434\u0430\u0445.", category: "achievement", status: "available" },
    { id: 70, name: "Fallen Hero", how: "Raid Boss-\u0434 \u044F\u043B\u0430\u0433\u0434\u0430\u0445.", category: "achievement", status: "available" },
    { id: 71, name: "Iron Man", how: "Aura-\u0433\u0430\u0430 max \u0431\u043E\u043B\u0433\u043E\u0445.", category: "achievement", status: "available" },
    { id: 72, name: "Ultra Instinct", how: "Instinct-\u044D\u044D max \u0431\u043E\u043B\u0433\u043E\u0445.", category: "achievement", status: "available" },
    { id: 73, name: "Mad Scientist", how: "Normal Raid-\u0438\u0439\u043D Microchip \u0445\u0443\u0434\u0430\u043B\u0434\u0430\u0436 \u0430\u0432\u0430\u0445.", category: "achievement", status: "available" },
    { id: 74, name: "The Professor", how: "Advanced Raid-\u0438\u0439\u043D Special Microchip \u0445\u0443\u0434\u0430\u043B\u0434\u0430\u0436 \u0430\u0432\u0430\u0445.", category: "achievement", status: "available" },
    { id: 75, name: "The Shadow", how: "\u041D\u044D\u0433 server-\u0442 \u0442\u0430\u0441\u0440\u0430\u043B\u0442\u0433\u04AF\u0439 1 \u0446\u0430\u0433 \u0431\u0430\u0439\u0445.", category: "achievement", status: "available" },
    { id: 76, name: "The Vampire", how: "\u041D\u044D\u0433 server-\u0442 \u0442\u0430\u0441\u0440\u0430\u043B\u0442\u0433\u04AF\u0439 4 \u0446\u0430\u0433 \u0431\u0430\u0439\u0445.", category: "achievement", status: "available" },
    { id: 77, name: "Dracula", how: "\u041D\u044D\u0433 server-\u0442 \u0442\u0430\u0441\u0440\u0430\u043B\u0442\u0433\u04AF\u0439 12 \u0446\u0430\u0433 \u0431\u0430\u0439\u0445.", category: "achievement", status: "rare" },
    { id: 78, name: "The Grandfather", how: "Tort-\u043E\u043E\u0441 Fragments \u0430\u0448\u0438\u0433\u043B\u0430\u043D Race Reroll \u0430\u0432\u0430\u0445.", category: "achievement", status: "available" },
    { id: 79, name: "Jack of All Trades", how: "Plokster-\u043E\u043E\u0441 Fragments \u0430\u0448\u0438\u0433\u043B\u0430\u043D Stat Refund \u0430\u0432\u0430\u0445.", category: "achievement", status: "available" },
    { id: 80, name: "The Undefeated One", how: "PvP damage \u0430\u0432\u0441\u043D\u044B \u0434\u0430\u0440\u0430\u0430 50-\u0430\u0430\u0441 \u0431\u0430\u0433\u0430 HP-\u0442\u0430\u0439 \u0430\u043C\u044C\u0434 \u04AF\u043B\u0434\u044D\u0445.", category: "achievement", status: "available" },
    { id: 81, name: "Immortal Being", how: "PvP damage \u0430\u0432\u0441\u043D\u044B \u0434\u0430\u0440\u0430\u0430 \u044F\u0433 1 HP-\u0442\u0430\u0439 \u0430\u043C\u044C\u0434 \u04AF\u043B\u0434\u044D\u0445.", category: "achievement", status: "rare" },
    { id: 82, name: "The Mad King", how: "Chess \u0442\u043E\u0433\u043B\u043E\u043E\u043C\u0434 castling \u0445\u0438\u0439\u0445.", category: "achievement", status: "available" },
    { id: 83, name: "The Mastermind", how: "Chess \u0442\u043E\u0433\u043B\u043E\u043E\u043C\u0434 \u04E9\u0440\u0441\u04E9\u043B\u0434\u04E9\u0433\u0447\u04E9\u04E9 \u0445\u043E\u0436\u0438\u0445.", category: "achievement", status: "available" },
    { id: 84, name: "The Dog", how: "Wenlock-\u0438\u0439\u043D Dog House-\u0442\u0430\u0439 \u0445\u0430\u0440\u0438\u043B\u0446\u0430\u0445.", category: "achievement", status: "available" },
    { id: 85, name: "Ship Destroyer", how: "\u0417\u0430\u0432\u0438\u043D\u044B cannon \u0430\u0448\u0438\u0433\u043B\u0430\u043D \u043D\u044D\u0433 ship \u0443\u0441\u0442\u0433\u0430\u0445.", category: "achievement", status: "available" },
    { id: 86, name: "The Explorer", how: "Level 800 \u0445\u04AF\u0440\u044D\u0445.", category: "mastery", status: "available" },
    { id: 87, name: "The Adventurer", how: "Level 1,000 \u0445\u04AF\u0440\u044D\u0445.", category: "mastery", status: "available" },
    { id: 88, name: "The Mercenary", how: "Level 1,200 \u0445\u04AF\u0440\u044D\u0445.", category: "mastery", status: "available" },
    { id: 89, name: "The Viking", how: "Level 1,600 \u0445\u04AF\u0440\u044D\u0445.", category: "mastery", status: "available" },
    { id: 90, name: "The Pioneer", how: "Level 2,000 \u0445\u04AF\u0440\u044D\u0445.", category: "mastery", status: "available" },
    { id: 91, name: "The Glorious", how: "Level 2,400 \u0445\u04AF\u0440\u044D\u0445.", category: "mastery", status: "available" },
    { id: 92, name: "The Master", how: "Fruit, Sword, Gun, Fighting Style \u044D\u0441\u0432\u044D\u043B Rod-\u044B\u043D \u043D\u044D\u0433\u0438\u0439\u0433 max mastery \u0431\u043E\u043B\u0433\u043E\u0445.", category: "mastery", status: "available" },
    { id: 93, name: "Unbreakable Will", how: "Fruit, Sword, Gun, Fighting Style \u044D\u0441\u0432\u044D\u043B Rod-\u044B\u043D \u043D\u044D\u0433\u0438\u0439\u0433 max mastery \u0431\u043E\u043B\u0433\u043E\u0445.", category: "mastery", status: "available" },
    { id: 94, name: "Fist of Death", how: "Fighting Style-\u0430\u0430 max mastery \u0431\u043E\u043B\u0433\u043E\u0445.", category: "mastery", status: "available" },
    { id: 95, name: "God Blade", how: "Sword-\u043E\u043E max mastery \u0431\u043E\u043B\u0433\u043E\u0445.", category: "mastery", status: "available" },
    { id: 96, name: "King Sniper", how: "Gun-\u0430\u0430 max mastery \u0431\u043E\u043B\u0433\u043E\u0445.", category: "mastery", status: "available" },
    { id: 97, name: "Beyond the Sea", how: "Blox Fruit-\u0430\u0430 max mastery \u0431\u043E\u043B\u0433\u043E\u0445.", category: "mastery", status: "available" },
    { id: 98, name: "Broken Heart", how: "Raid-\u0438\u0439\u043D timer-\u0438\u0439\u0433 \u0434\u0443\u0443\u0441\u0433\u0430\u0445.", category: "raid", status: "available" },
    { id: 99, name: "The Conqueror", how: "Raid \u0430\u043C\u0436\u0438\u043B\u0442\u0442\u0430\u0439 \u0434\u0443\u0443\u0441\u0433\u0430\u0445.", category: "raid", status: "available" },
    { id: 100, name: "Last Hope", how: "Raid-\u0438\u0439\u043D \u0441\u04AF\u04AF\u043B\u0447\u0438\u0439\u043D \u0430\u043C\u044C\u0434 \u0442\u043E\u0433\u043B\u043E\u0433\u0447 \u0431\u043E\u043B\u0436 \u044F\u043B\u0430\u0445; solo \u0431\u0430\u0441 \u0442\u043E\u043E\u0446\u043D\u043E.", category: "raid", status: "available" },
    { id: 101, name: "The Supersonic", how: "Raid-\u0438\u0439\u0433 5 \u043C\u0438\u043D\u0443\u0442\u044B\u043D \u0434\u043E\u0442\u043E\u0440 \u0434\u0443\u0443\u0441\u0433\u0430\u0445.", category: "raid", status: "available" },
    { id: 102, name: "The Flash", how: "Raid-\u0438\u0439\u0433 3 \u043C\u0438\u043D\u0443\u0442 30 \u0441\u0435\u043A\u0443\u043D\u0434\u044B\u043D \u0434\u043E\u0442\u043E\u0440 \u0434\u0443\u0443\u0441\u0433\u0430\u0445.", category: "raid", status: "rare" },
    { id: 103, name: "The Champion", how: "Bartilo-\u0438\u0439\u043D Colosseum Quest-\u0438\u0439\u0433 \u0434\u0443\u0443\u0441\u0433\u0430\u0445.", category: "raid", status: "available" },
    { id: 104, name: "Tide Warrior", how: "\u0423\u0441\u043D\u044B damage-\u0434 \u044F\u043B\u0430\u0433\u0434\u0430\u0445.", category: "raid", status: "available" },
    { id: 105, name: "The Toxic", how: "Factory Event-\u0434 \u0445\u0430\u043C\u0433\u0438\u0439\u043D \u0438\u0445 damage \u04E9\u0433\u0447 Fruit \u0448\u0430\u0433\u043D\u0430\u043B \u0430\u0432\u0430\u0445.", category: "raid", status: "available" },
    { id: 106, name: "Blessed One", how: "\u0413\u0430\u0437\u0430\u0440\u0442 \u04E9\u04E9\u0440\u04E9\u04E9 spawn \u0431\u043E\u043B\u0441\u043E\u043D physical Fruit \u043E\u043B\u043E\u0445.", category: "wealth", status: "available" },
    { id: 107, name: "Equal to the Heavens", how: "Blox Fruits-\u0438\u0439\u043D official admin-\u0438\u0439\u0433 \u044F\u043B\u0430\u0445.", category: "special", status: "rare" },
    { id: 108, name: "The Rich", how: "\u041D\u044D\u0433 \u0434\u043E\u0440 5,000,000+ Beli-\u0442\u044D\u0439 \u0431\u043E\u043B\u043E\u0445.", category: "wealth", status: "available" },
    { id: 109, name: "Unlimited Money", how: "\u041D\u044D\u0433 \u0434\u043E\u0440 20,000,000+ Beli-\u0442\u044D\u0439 \u0431\u043E\u043B\u043E\u0445.", category: "wealth", status: "rare" },
    { id: 110, name: "The Richest in the World", how: "\u041D\u044D\u0433 \u0434\u043E\u0440 50,000,000+ Beli-\u0442\u044D\u0439 \u0431\u043E\u043B\u043E\u0445.", category: "wealth", status: "rare" },
    { id: 111, name: "The Swordsman", how: "Legendary Sword Dealer-\u0430\u0430\u0441 Sword \u0430\u0432\u0430\u0445.", category: "wealth", status: "available" },
    { id: 112, name: "The Collector", how: "Legendary Sword Dealer \u044D\u0441\u0432\u044D\u043B Master of Auras-\u0430\u0430\u0441 \u0437\u04AF\u0439\u043B \u0430\u0432\u0430\u0445.", category: "wealth", status: "available" },
    { id: 113, name: "Beast Hunter", how: "Sea Beast \u044F\u043B\u0430\u0445.", category: "wealth", status: "available" },
    { id: 114, name: "The Beast", how: "\u041D\u0438\u0439\u0442 25 Sea Beast \u044F\u043B\u0430\u0445. \u041E\u0434\u043E\u043E\u0433\u043E\u043E\u0440 \u0437\u0430\u0440\u0438\u043C \u0442\u043E\u0433\u043B\u043E\u0433\u0447 \u0434\u044D\u044D\u0440 bug-\u0442\u0430\u0439.", category: "wealth", status: "unavailable" },
    { id: 115, name: "The Lost Soul", how: "Factory-\u0438\u0439\u043D poison-\u0434 \u044F\u043B\u0430\u0433\u0434\u0430\u0445.", category: "wealth", status: "available" },
    { id: 116, name: "Forbidden One", how: "Chest-\u044D\u044D\u0441 Fist of Darkness \u043E\u043B\u043E\u0445.", category: "wealth", status: "rare" },
    { id: 117, name: "The Troll", how: "Hotbar-\u0434 physical Fruit \u0431\u0430\u0439\u0445\u0430\u0434 \u044F\u043B\u0430\u0433\u0434\u0430\u0445.", category: "wealth", status: "available" },
    { id: 118, name: "Hidden Power", how: "Physical Blox Fruit \u0438\u0434\u044D\u0445.", category: "wealth", status: "available" },
    { id: 119, name: "Heavenly Devil", how: "Don Swan-\u0438\u0439\u0433 \u044F\u043B\u0430\u0445.", category: "boss", status: "available" },
    { id: 120, name: "The Cursed One", how: "Darkbeard-\u0438\u0439\u0433 \u044F\u043B\u0430\u0445.", category: "boss", status: "available" },
    { id: 121, name: "Beyond Death", how: "Order raid boss-\u0438\u0439\u0433 \u044F\u043B\u0430\u0445.", category: "boss", status: "available" },
    { id: 122, name: "Night's Edge", how: "Cursed Captain-\u0438\u0439\u0433 \u044F\u043B\u0430\u0445.", category: "boss", status: "available" },
    { id: 123, name: "Kind-Hearted", how: "Physical Fruit-\u044D\u044D \u0433\u0430\u0437\u0430\u0440\u0442 drop \u0445\u0438\u0439\u0445.", category: "boss", status: "available" },
    { id: 124, name: "The Kraken", how: "Physical Fruit-\u044D\u044D \u0434\u0430\u043B\u0430\u0439 \u0440\u0443\u0443 drop \u0445\u0438\u0439\u0445.", category: "boss", status: "available" },
    { id: 125, name: "Lavish Living", how: "Blox Fruit Dealer-\u0430\u0430\u0441 \u0434\u0443\u0440\u044B\u043D Fruit \u0445\u0443\u0434\u0430\u043B\u0434\u0430\u0436 \u0430\u0432\u0430\u0445.", category: "boss", status: "available" },
    { id: 126, name: "Night Owl", how: "Dealer-\u0430\u0430\u0441 1,000,000+ Beli \u04AF\u043D\u044D\u0442\u044D\u0439 Fruit \u0445\u0443\u0434\u0430\u043B\u0434\u0430\u0436 \u0430\u0432\u0430\u0445.", category: "boss", status: "available" },
    { id: 127, name: "Wicked Captain", how: "Darkbeard-\u0430\u0430\u0441 Dark Coat \u0430\u0432\u0430\u0445.", category: "boss", status: "rare" },
    { id: 128, name: "Dragonborn", how: "Dragon Breath Fighting Style \u043D\u044D\u044D\u0445.", category: "boss", status: "available" },
    { id: 129, name: "Burning Leg", how: "Death Step Fighting Style \u043D\u044D\u044D\u0445.", category: "boss", status: "available" },
    { id: 130, name: "Sharkman", how: "Sharkman Karate Fighting Style \u043D\u044D\u044D\u0445.", category: "boss", status: "available" },
    { id: 131, name: "Samurai", how: "Rengoku Sword \u0430\u0432\u0447 equip \u0445\u0438\u0439\u0445.", category: "boss", status: "available" },
    { id: 132, name: "The Silent", how: "Level 800-\u0430\u0430\u0441 \u0434\u043E\u043E\u0448 \u0442\u043E\u0433\u043B\u043E\u0433\u0447\u0438\u0434 PvP-\u0434 \u044F\u043B\u0430\u0433\u0434\u0430\u0445.", category: "pvp", status: "available" },
    { id: 133, name: "The Executioner", how: "\u04E8\u04E9\u0440\u04E9\u04E9 max level \u0431\u0430\u0439\u0445\u0434\u0430\u0430 max-level \u0442\u043E\u0433\u043B\u043E\u0433\u0447\u0438\u0434 \u044F\u043B\u0430\u0433\u0434\u0430\u0445.", category: "pvp", status: "available" },
    { id: 134, name: "The Stalker", how: "\u04E8\u04E9\u0440\u0442\u044D\u0439\u0433\u04E9\u04E9 \u0438\u0436\u0438\u043B level-\u0442\u044D\u0439 \u0442\u043E\u0433\u043B\u043E\u0433\u0447\u0438\u0439\u0433 \u044F\u043B\u0430\u0445.", category: "pvp", status: "available" },
    { id: 135, name: "Risk Taker", how: "Blox Fruits Gacha-\u0430\u0430\u0441 Fruit \u0445\u0443\u0434\u0430\u043B\u0434\u0430\u0436 \u0430\u0432\u0430\u0445.", category: "pvp", status: "available" },
    { id: 136, name: "Luck of the Draw", how: "Gacha-\u0430\u0430\u0441 1M-\u044D\u044D\u0441 \u0434\u044D\u044D\u0448 \u04AF\u043D\u044D\u0442\u044D\u0439 Fruit \u0430\u0432\u0430\u0445.", category: "pvp", status: "rare" },
    { id: 137, name: "Unstoppable Force", how: "\u041D\u044D\u0433 server-\u0442 \u04AF\u0445\u044D\u043B\u0433\u04AF\u0439, bounty/honor \u04E9\u0433\u0441\u04E9\u043D 5 PvP \u044F\u043B\u0430\u043B\u0442 \u0445\u0438\u0439\u0445.", category: "pvp", status: "rare" },
    { id: 138, name: "Raging Demon", how: "\u041D\u044D\u0433 server-\u0442 \u04AF\u0445\u044D\u043B\u0433\u04AF\u0439, bounty/honor \u04E9\u0433\u0441\u04E9\u043D 20 PvP \u044F\u043B\u0430\u043B\u0442 \u0445\u0438\u0439\u0445.", category: "pvp", status: "rare" },
    { id: 139, name: "The Protagonist", how: "\u0425\u043E\u0451\u0440 \u0431\u0443\u044E\u0443 \u0442\u04AF\u04AF\u043D\u044D\u044D\u0441 \u043E\u043B\u043E\u043D \u0442\u043E\u0433\u043B\u043E\u0433\u0447\u0438\u0439\u0433 \u0437\u044D\u0440\u044D\u0433 \u044F\u043B\u0430\u0445.", category: "pvp", status: "rare" },
    { id: 140, name: "Coldblooded", how: "\u041D\u044D\u0433 server-\u0442 \u043D\u0438\u0439\u0442 10 \u0442\u043E\u0433\u043B\u043E\u0433\u0447 \u044F\u043B\u0430\u0445.", category: "pvp", status: "available" },
    { id: 141, name: "Apex Predator", how: "\u041D\u044D\u0433 server-\u0442 \u043D\u0438\u0439\u0442 25 \u0442\u043E\u0433\u043B\u043E\u0433\u0447 \u044F\u043B\u0430\u0445.", category: "pvp", status: "rare" },
    { id: 142, name: "The Killer", how: "Superhuman Fighting Style \u043D\u044D\u044D\u0445.", category: "weapon", status: "available" },
    { id: 143, name: "Human Weapon", how: "Superhuman Fighting Style \u043D\u044D\u044D\u0445.", category: "weapon", status: "available" },
    { id: 144, name: "Demon Eye", how: "True Triple Katana \u043D\u044D\u044D\u0445.", category: "weapon", status: "available" },
    { id: 145, name: "The Hurricane", how: "True Triple Katana \u043D\u044D\u044D\u0445.", category: "weapon", status: "available" },
    { id: 146, name: "The Enhancer", how: "\u0414\u0443\u0440\u044B\u043D Aura Color \u043D\u044D\u044D\u0445.", category: "weapon", status: "available" },
    { id: 147, name: "True Heart", how: "Snow White Aura Color \u0430\u0432\u0430\u0445.", category: "weapon", status: "available" },
    { id: 148, name: "Bringer of Doom", how: "Pure Red Aura Color \u0430\u0432\u0430\u0445.", category: "weapon", status: "available" },
    { id: 149, name: "Realm Creator", how: "Winter Sky Aura Color \u0430\u0432\u0430\u0445.", category: "weapon", status: "available" },
    { id: 150, name: "Hakaishin", how: "\u0425\u0443\u0434\u0430\u043B\u0434\u0430\u0436 \u0430\u0432\u0447 \u0431\u043E\u043B\u0434\u043E\u0433 \u0431\u04AF\u0445 Aura Color-\u0438\u0439\u0433 \u043D\u044D\u044D\u0445. \u041E\u0434\u043E\u043E\u0433\u043E\u043E\u0440 bug-\u0442\u0430\u0439.", category: "weapon", status: "unavailable" },
    { id: 151, name: "Slayer of God", how: "Dark Blade-\u0438\u0439\u043D Slayer Skin \u043D\u044D\u044D\u0445.", category: "weapon", status: "rare" },
    { id: 152, name: "The Ghost", how: "100 Ectoplasm \u0446\u0443\u0433\u043B\u0443\u0443\u043B\u0430\u0445.", category: "collection", status: "available" },
    { id: 153, name: "Ruler of Night", how: "250 Ectoplasm \u0446\u0443\u0433\u043B\u0443\u0443\u043B\u0430\u0445.", category: "collection", status: "available" },
    { id: 154, name: "Lonely Reaper", how: "1,000 Ectoplasm \u0446\u0443\u0433\u043B\u0443\u0443\u043B\u0430\u0445.", category: "collection", status: "rare" },
    { id: 155, name: "The Most Wanted", how: "\u04E8\u04E9\u0440\u0438\u0439\u043D Crew-\u0433 leaderboard-\u0438\u0439\u043D Top 100-\u0434 \u043E\u0440\u0443\u0443\u043B\u0430\u0445.", category: "collection", status: "rare" },
    { id: 156, name: "Pirate King", how: "Top 10 Crew-\u0438\u0439\u043D captain \u0431\u0430\u0439\u0445\u0434\u0430\u0430 \u043D\u0438\u0439\u0442 72 \u0446\u0430\u0433 online \u0431\u0430\u0439\u0445.", category: "collection", status: "rare" },
    { id: 157, name: "Sugar Rush", how: "Christmas Event-\u044D\u044D\u0440 100 Candies \u0446\u0443\u0433\u043B\u0443\u0443\u043B\u0430\u0445.", category: "collection", status: "limited" },
    { id: 158, name: "Christmas Spirit", how: "Christmas Event-\u044D\u044D\u0440 250 Candies \u0446\u0443\u0433\u043B\u0443\u0443\u043B\u0430\u0445.", category: "collection", status: "limited" },
    { id: 159, name: "Loco Verde", how: "Christmas Event-\u044D\u044D\u0440 1,000 Candies \u0446\u0443\u0433\u043B\u0443\u0443\u043B\u0430\u0445.", category: "collection", status: "limited" },
    { id: 160, name: "Raid Boss", how: "Castle on the Sea-\u0438\u0439\u043D Pirate Raid-\u0430\u0430\u0441 Fruit \u0448\u0430\u0433\u043D\u0430\u043B \u0430\u0432\u0430\u0445.", category: "third-sea", status: "available" },
    { id: 161, name: "The Real Deal", how: "Elite Pirate \u044F\u043B\u0430\u0445.", category: "third-sea", status: "available" },
    { id: 162, name: "Demon Mode", how: "Yama Sword \u043D\u044D\u044D\u0445.", category: "third-sea", status: "available" },
    { id: 163, name: "Celestial Swordsman", how: "Tushita Sword \u043D\u044D\u044D\u0445.", category: "third-sea", status: "available" },
    { id: 164, name: "Raiton", how: "Electric Claw Fighting Style \u043D\u044D\u044D\u0445.", category: "third-sea", status: "available" },
    { id: 165, name: "Shadow Sovereign", how: "rip_indra True Form-\u0438\u0439\u0433 \u044F\u043B\u0430\u0445.", category: "third-sea", status: "available" },
    { id: 166, name: "The Chosen One", how: "Chest-\u044D\u044D\u0441 God's Chalice \u043E\u043B\u043E\u0445.", category: "third-sea", status: "rare" },
    { id: 167, name: "Main Character", how: "Citizen Quest-\u0438\u0439\u0433 \u0434\u0443\u0443\u0441\u0433\u0430\u0445.", category: "third-sea", status: "available" },
    { id: 168, name: "Final Hero", how: "Rainbow Saviour Aura Color \u043D\u044D\u044D\u0445.", category: "third-sea", status: "available" },
    { id: 169, name: "Skeleton", how: "250 Bones \u0446\u0443\u0433\u043B\u0443\u0443\u043B\u0430\u0445.", category: "third-sea", status: "available" },
    { id: 170, name: "Undead Lord", how: "Halloween Event-\u044D\u044D\u0440 500 Bones \u0446\u0443\u0433\u043B\u0443\u0443\u043B\u0430\u0445.", category: "third-sea", status: "limited" },
    { id: 171, name: "Death King", how: "Halloween Event-\u044D\u044D\u0440 2,000 Bones \u0446\u0443\u0433\u043B\u0443\u0443\u043B\u0430\u0445.", category: "third-sea", status: "limited" },
    { id: 172, name: "Shinigami", how: "Soul Reaper-\u0438\u0439\u0433 \u044F\u043B\u0430\u0445.", category: "third-sea", status: "available" },
    { id: 173, name: "The Devil's Luck", how: "Gravestone-\u0434 Pray \u0445\u0438\u0439\u0436 Hallow Essence \u0431\u043E\u043B\u043E\u043D God's Chalice \u0445\u043E\u0451\u0443\u043B\u0430\u043D\u0433 \u0430\u0432\u0430\u0445.", category: "third-sea", status: "rare" },
    { id: 174, name: "Dough Commander", how: "Cake Prince-\u0438\u0439\u0433 \u044F\u043B\u0430\u0445.", category: "third-sea", status: "available" },
    { id: 175, name: "Dough King", how: "Dough King-\u0438\u0439\u0433 \u044F\u043B\u0430\u0445.", category: "third-sea", status: "available" },
    { id: 176, name: "Terrorbringer", how: "\u041D\u0438\u0439\u0442 10 Terrorshark \u044F\u043B\u0430\u0445.", category: "third-sea", status: "available" },
    { id: 177, name: "Serpent Slayer", how: "Leviathan-\u0438\u0439\u0433 \u044F\u043B\u0430\u0445.", category: "third-sea", status: "available" },
    { id: 178, name: "Abyss Tamer", how: "\u041D\u0438\u0439\u0442 50 Sea Event \u0434\u0443\u0443\u0441\u0433\u0430\u0445.", category: "third-sea", status: "available" },
    { id: 179, name: "Nautical Bane", how: "\u041D\u0438\u0439\u0442 200 Sea Event \u0434\u0443\u0443\u0441\u0433\u0430\u0445.", category: "third-sea", status: "rare" },
    { id: 180, name: "Tailed Beast", how: "Full Moon \u04AF\u0435\u0438\u0439\u043D Kitsune Shrine-\u0430\u0430\u0441 \u0448\u0430\u0433\u043D\u0430\u043B \u0431\u043E\u043B\u0433\u043E\u043D \u0430\u0432\u0430\u0445.", category: "third-sea", status: "rare" },
    { id: 181, name: "Liberator of the Sky", how: "Tyrant of the Skies-\u0438\u0439\u0433 \u044F\u043B\u0430\u0445.", category: "third-sea", status: "available" },
    { id: 182, name: "Coming Soon", how: "\u041E\u0434\u043E\u043E\u0433\u043E\u043E\u0440 \u043D\u044D\u0440 \u0431\u043E\u043B\u043E\u043D \u043D\u04E9\u0445\u0446\u04E9\u043B \u043D\u044D\u043C\u044D\u0433\u0434\u044D\u044D\u0433\u04AF\u0439.", category: "fishing", status: "upcoming" },
    { id: 183, name: "Treasure Catcher", how: "Fishing \u0430\u0448\u0438\u0433\u043B\u0430\u043D \u043D\u0438\u0439\u0442 500 Treasure Chest \u0431\u0430\u0440\u0438\u0445.", category: "fishing", status: "rare" },
    { id: 184, name: "Fish Wrangler", how: "Fishing Level 20 \u0445\u04AF\u0440\u044D\u0445.", category: "fishing", status: "available" },
    { id: 185, name: "Master Fisherman", how: "Fishing Profession Level 100 \u0445\u04AF\u0440\u044D\u0445.", category: "fishing", status: "rare" },
    { id: 186, name: "Coming Soon", how: "\u041E\u0434\u043E\u043E\u0433\u043E\u043E\u0440 \u043D\u044D\u0440 \u0431\u043E\u043B\u043E\u043D \u043D\u04E9\u0445\u0446\u04E9\u043B \u043D\u044D\u043C\u044D\u0433\u0434\u044D\u044D\u0433\u04AF\u0439.", category: "fishing", status: "upcoming" },
    { id: 187, name: "Fisherman", how: "Fishing Rod \u0430\u0432\u0430\u0445.", category: "fishing", status: "available" },
    { id: 188, name: "true egglord", how: "Easter Event-\u0438\u0439\u043D Indra Egg boss-\u0438\u0439\u0433 \u044F\u043B\u0430\u0445; title \u043D\u044C chance-\u0442\u0430\u0439.", category: "special", status: "limited" },
    { id: 189, name: "The Debugger", how: "Hacker Event-\u0438\u0439\u043D Luckymaxer boss-\u0438\u0439\u0433 \u044F\u043B\u0430\u0445.", category: "special", status: "limited" },
    { id: 190, name: "Coming Soon", how: "\u041E\u0434\u043E\u043E\u0433\u043E\u043E\u0440 \u043D\u044D\u0440 \u0431\u043E\u043B\u043E\u043D \u043D\u04E9\u0445\u0446\u04E9\u043B \u043D\u044D\u043C\u044D\u0433\u0434\u044D\u044D\u0433\u04AF\u0439.", category: "fishing", status: "upcoming" },
    { id: 191, name: "Dragon Talon Prodigy", how: "Creator Uzoth-\u0438\u0439\u0433 Title Drop \u0438\u0434\u044D\u0432\u0445\u0442\u044D\u0439 \u04AF\u0435\u0434 \u044F\u043B\u0430\u0445.", category: "creator", status: "rare" },
    { id: 192, name: "Brazilian Warrior", how: "Creator luanclashwar-\u044B\u0433 Title Drop \u0438\u0434\u044D\u0432\u0445\u0442\u044D\u0439 \u04AF\u0435\u0434 \u044F\u043B\u0430\u0445.", category: "creator", status: "rare" },
    { id: 193, name: "Coming Soon", how: "\u041E\u0434\u043E\u043E\u0433\u043E\u043E\u0440 \u043D\u044D\u0440 \u0431\u043E\u043B\u043E\u043D \u043D\u04E9\u0445\u0446\u04E9\u043B \u043D\u044D\u043C\u044D\u0433\u0434\u044D\u044D\u0433\u04AF\u0439.", category: "creator", status: "upcoming" },
    { id: 194, name: "Monkey King", how: "Creator jinn._-\u0438\u0439\u0433 Title Drop \u0438\u0434\u044D\u0432\u0445\u0442\u044D\u0439 \u04AF\u0435\u0434 \u044F\u043B\u0430\u0445.", category: "creator", status: "rare" },
    { id: 195, name: "Skull Squad", how: "Creator Numberskull_.-\u0438\u0439\u0433 Title Drop \u0438\u0434\u044D\u0432\u0445\u0442\u044D\u0439 \u04AF\u0435\u0434 \u044F\u043B\u0430\u0445.", category: "creator", status: "rare" },
    { id: 196, name: "LockGod", how: "Creator imfiji-\u0433 Title Drop \u0438\u0434\u044D\u0432\u0445\u0442\u044D\u0439 \u04AF\u0435\u0434 \u044F\u043B\u0430\u0445.", category: "creator", status: "rare" },
    { id: 197, name: "Touch Grass", how: "\u0410\u0432\u0430\u0445 \u0430\u0440\u0433\u0430 \u043D\u044C \u043D\u0438\u0439\u0442\u044D\u0434 \u0437\u0430\u0440\u043B\u0430\u0433\u0434\u0430\u0430\u0433\u04AF\u0439 \u043D\u0443\u0443\u0446.", category: "creator", status: "rare" },
    { id: 198, name: "Devious Bacon", how: "Creator koopekool-\u0438\u0439\u0433 Title Drop \u0438\u0434\u044D\u0432\u0445\u0442\u044D\u0439 \u04AF\u0435\u0434 \u044F\u043B\u0430\u0445.", category: "creator", status: "rare" },
    { id: 199, name: "AboveTheKloudz", how: "Creator WinterKloudz-\u0438\u0439\u0433 Title Drop \u0438\u0434\u044D\u0432\u0445\u0442\u044D\u0439 \u04AF\u0435\u0434 \u044F\u043B\u0430\u0445.", category: "creator", status: "rare" },
    { id: 200, name: "Mammoth Fan Club", how: "Creator Senpirates-\u0438\u0439\u0433 Title Drop \u0438\u0434\u044D\u0432\u0445\u0442\u044D\u0439 \u04AF\u0435\u0434 \u044F\u043B\u0430\u0445.", category: "creator", status: "rare" },
    { id: 201, name: "Dooly Gang", how: "Creator Vindooly-\u0433 Title Drop \u0438\u0434\u044D\u0432\u0445\u0442\u044D\u0439 \u04AF\u0435\u0434 \u044F\u043B\u0430\u0445.", category: "creator", status: "rare" },
    { id: 202, name: "Baldie", how: "Creator Woozer-\u0438\u0439\u0433 Title Drop \u0438\u0434\u044D\u0432\u0445\u0442\u044D\u0439 \u04AF\u0435\u0434 \u044F\u043B\u0430\u0445.", category: "creator", status: "rare" },
    { id: 203, name: "Light God", how: "Creator jujubotv-\u0433 Title Drop \u0438\u0434\u044D\u0432\u0445\u0442\u044D\u0439 \u04AF\u0435\u0434 \u044F\u043B\u0430\u0445.", category: "creator", status: "rare" },
    { id: 204, name: "The Living Cataclysm", how: "Creator HyperJay06-\u0433 Title Drop \u0438\u0434\u044D\u0432\u0445\u0442\u044D\u0439 \u04AF\u0435\u0434 \u044F\u043B\u0430\u0445.", category: "creator", status: "rare" },
    { id: 205, name: "God of Grinding", how: "Creator CRBoneMillion-\u0438\u0439\u0433 Title Drop \u0438\u0434\u044D\u0432\u0445\u0442\u044D\u0439 \u04AF\u0435\u0434 \u044F\u043B\u0430\u0445.", category: "creator", status: "rare" },
    { id: 206, name: "Pls Fruit", how: "Creator jetski2saucy-\u0433 Title Drop \u0438\u0434\u044D\u0432\u0445\u0442\u044D\u0439 \u04AF\u0435\u0434 \u044F\u043B\u0430\u0445.", category: "creator", status: "rare" },
    { id: 207, name: "Meteor Lord", how: "Creator MeteoricRBLX-\u0438\u0439\u0433 Title Drop \u0438\u0434\u044D\u0432\u0445\u0442\u044D\u0439 \u04AF\u0435\u0434 \u044F\u043B\u0430\u0445.", category: "creator", status: "rare" },
    { id: 208, name: "Divinely Inspired", how: "Creator divinityblox-\u0438\u0439\u0433 Title Drop \u0438\u0434\u044D\u0432\u0445\u0442\u044D\u0439 \u04AF\u0435\u0434 \u044F\u043B\u0430\u0445.", category: "creator", status: "rare" },
    { id: 209, name: "Coming Soon", how: "\u041E\u0434\u043E\u043E\u0433\u043E\u043E\u0440 \u043D\u044D\u0440 \u0431\u043E\u043B\u043E\u043D \u043D\u04E9\u0445\u0446\u04E9\u043B \u043D\u044D\u043C\u044D\u0433\u0434\u044D\u044D\u0433\u04AF\u0439.", category: "creator", status: "upcoming" },
    { id: 210, name: "Samurai Dorado", how: "Creator Bloxyy0-\u0433 Title Drop \u0438\u0434\u044D\u0432\u0445\u0442\u044D\u0439 \u04AF\u0435\u0434 \u044F\u043B\u0430\u0445.", category: "creator", status: "rare" },
    { id: 211, name: "Fica Frio A\xED", how: "Creator GeladoYT-\u0433 Title Drop \u0438\u0434\u044D\u0432\u0445\u0442\u044D\u0439 \u04AF\u0435\u0434 \u044F\u043B\u0430\u0445.", category: "creator", status: "rare" }
  ];

  // source-package/app.ts
  var STORAGE_KEY = "blox-fruits-title-tracker-v1";
  var statusCopy = {
    available: { label: "\u0411\u043E\u043B\u043E\u043C\u0436\u0442\u043E\u0439", icon: "\u25CF" },
    rare: { label: "\u0425\u043E\u0432\u043E\u0440", icon: "\u25C6" },
    limited: { label: "Event", icon: "\u25C8" },
    unavailable: { label: "\u0411\u043E\u043B\u043E\u043C\u0436\u0433\u04AF\u0439", icon: "\xD7" },
    upcoming: { label: "Coming soon", icon: "\u25C7" }
  };
  var $ = (selector) => document.querySelector(selector);
  var completed = /* @__PURE__ */ new Set();
  var query = "";
  var activeCategory = "all";
  var activeView = "all";
  var activeStatus = "all";
  function formatNumber(value) {
    return String(value).padStart(3, "0");
  }
  function loadProgress() {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      stored.forEach((id) => completed.add(id));
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }
  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]));
    } catch {
    }
  }
  function renderCategories() {
    const row = $("#categoryRow");
    row.innerHTML = [
      `<button class="${activeCategory === "all" ? "active" : ""}" data-category="all">\u0411\u04AF\u0433\u0434 <span>${titles.length}</span></button>`,
      ...categories.map((item) => `<button class="${activeCategory === item.id ? "active" : ""}" data-category="${item.id}">${item.label} <span>${titles.filter((title) => title.category === item.id).length}</span></button>`)
    ].join("");
  }
  function getFilteredTitles() {
    const normalized = query.trim().toLocaleLowerCase();
    return titles.filter((title) => {
      const matchesQuery = !normalized || title.name.toLocaleLowerCase().includes(normalized) || title.how.toLocaleLowerCase().includes(normalized) || formatNumber(title.id).includes(normalized);
      const matchesCategory = activeCategory === "all" || title.category === activeCategory;
      const matchesStatus = activeStatus === "all" || title.status === activeStatus;
      const done = completed.has(title.id);
      const matchesView = activeView === "all" || (activeView === "done" ? done : !done);
      return matchesQuery && matchesCategory && matchesStatus && matchesView;
    });
  }
  function renderTitles() {
    const filtered = getFilteredTitles();
    const grid = $("#titleGrid");
    const empty = $("#emptyState");
    $("#visibleCount").textContent = String(filtered.length);
    grid.hidden = filtered.length === 0;
    empty.hidden = filtered.length !== 0;
    grid.innerHTML = filtered.map((title) => {
      const done = completed.has(title.id);
      const meta = statusCopy[title.status];
      const category = categories.find((item) => item.id === title.category);
      return `<article class="title-card ${done ? "is-done" : ""}">
      <button class="card-toggle" data-title-id="${title.id}" aria-pressed="${done}" aria-label="${title.name} ${done ? "\u0430\u0432\u0430\u0430\u0433\u04AF\u0439 \u0431\u043E\u043B\u0433\u043E\u0445" : "\u0430\u0432\u0441\u0430\u043D \u0431\u043E\u043B\u0433\u043E\u0445"}">
        <span class="checkmark">${done ? "\u2713" : ""}</span><span>${done ? "\u0410\u0412\u0421\u0410\u041D" : "\u0410\u0412\u0410\u0410\u0413\u04AE\u0419"}</span>
      </button>
      <div class="card-number">#${formatNumber(title.id)}</div>
      <h3>${title.name}</h3><p>${title.how}</p>
      <footer><span class="status status-${title.status}"><i>${meta.icon}</i>${meta.label}</span><span class="category-tag">${category?.short || "TITLE"}</span></footer>
    </article>`;
    }).join("");
  }
  function renderProgress() {
    const count = completed.size;
    const progress = Math.round(count / titles.length * 100);
    const unlocked = [...titleColors].reverse().find((color) => count >= color.required) || titleColors[0];
    const next = titleColors.find((color) => color.required > count);
    $("#topCount").textContent = `${count}/${titles.length}`;
    $("#topBar").style.width = `${progress}%`;
    $("#doneCount").textContent = String(count);
    $("#leftCount").textContent = String(titles.length - count);
    $("#bestColor").textContent = unlocked.name;
    $("#nextAmount").textContent = String(next ? next.required - count : 0);
    $("#nextColor").textContent = next ? `${next.name} \u0425\u04AE\u0420\u0422\u042D\u041B` : "\u0411\u04AE\u0425 \u04E8\u041D\u0413\u04E8 \u041D\u042D\u042D\u041B\u0422\u0422\u042D\u0419";
    $("#progressPercent").textContent = String(progress);
    $("#progressCircle").style.setProperty("--progress", `${progress * 3.6}deg`);
    $("#resetButton").disabled = count === 0;
    $("#colorTrack").innerHTML = titleColors.map((color) => {
      const isUnlocked = count >= color.required;
      return `<div class="color-node ${isUnlocked ? "unlocked" : ""}"><span style="--swatch:${color.hex}">${isUnlocked ? "\u2713" : ""}</span><strong>${color.name}</strong><small>${color.required === 0 ? "Default" : `${color.required} Titles`}</small></div>`;
    }).join("");
  }
  function render() {
    renderCategories();
    renderTitles();
    renderProgress();
    document.querySelectorAll("[data-view]").forEach((button) => button.classList.toggle("active", button.dataset.view === activeView));
    $("#todoShortcut").textContent = activeView === "todo" ? "\u0411\u04AF\u0433\u0434\u0438\u0439\u0433 \u0445\u0430\u0440\u0430\u0445" : "\u0410\u0432\u0430\u0430\u0433\u04AF\u0439\u0433\u044D\u044D \u0445\u0430\u0440\u0430\u0445";
  }
  loadProgress();
  render();
  $("#searchInput").addEventListener("input", (event) => {
    query = event.target.value;
    renderTitles();
  });
  $("#statusFilter").addEventListener("change", (event) => {
    activeStatus = event.target.value;
    renderTitles();
  });
  $("#categoryRow").addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    activeCategory = button.dataset.category || "all";
    renderCategories();
    renderTitles();
  });
  document.querySelector(".segmented")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-view]");
    if (!button) return;
    activeView = button.dataset.view;
    render();
  });
  $("#titleGrid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-title-id]");
    if (!button) return;
    const id = Number(button.dataset.titleId);
    if (completed.has(id)) completed.delete(id);
    else completed.add(id);
    saveProgress();
    renderTitles();
    renderProgress();
  });
  $("#todoShortcut").addEventListener("click", () => {
    activeView = activeView === "todo" ? "all" : "todo";
    render();
    $("#collection").scrollIntoView({ behavior: "smooth" });
  });
  $("#clearFilters").addEventListener("click", () => {
    query = "";
    activeCategory = "all";
    activeView = "all";
    activeStatus = "all";
    $("#searchInput").value = "";
    $("#statusFilter").value = "all";
    render();
  });
  var modal = $("#resetModal");
  $("#resetButton").addEventListener("click", () => {
    $("#resetMessage").textContent = `\u0422\u044D\u043C\u0434\u044D\u0433\u043B\u044D\u0441\u044D\u043D ${completed.size} Title \u0431\u04AF\u0433\u0434 \u0430\u0432\u0430\u0430\u0433\u04AF\u0439 \u0442\u04E9\u043B\u04E9\u0432\u0442 \u043E\u0440\u043D\u043E.`;
    modal.hidden = false;
  });
  $("#cancelReset").addEventListener("click", () => {
    modal.hidden = true;
  });
  $("#confirmReset").addEventListener("click", () => {
    completed.clear();
    saveProgress();
    modal.hidden = true;
    render();
  });
  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.hidden = true;
  });
  document.addEventListener("keydown", (event) => {
    const input = $("#searchInput");
    if (event.key === "/" && document.activeElement !== input) {
      event.preventDefault();
      input.focus();
    }
    if (event.key === "Escape") {
      query = "";
      input.value = "";
      input.blur();
      modal.hidden = true;
      renderTitles();
    }
  });
})();
