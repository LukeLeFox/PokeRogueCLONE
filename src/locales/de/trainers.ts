import {SimpleTranslationEntries} from "#app/plugins/i18n";

// Titles of special trainers like gym leaders, elite four, and the champion
export const titles: SimpleTranslationEntries = {
    "elite_four": "Top Vier",
    "gym_leader": "Arenaleiter",
    "gym_leader_female": "Arenaleiterin",
    "champion": "Champion",
    "rival": "Rivale",
    "professor": "Professor",
    "frontier_brain": "Kampfkoryphäen",
    // Maybe if we add the evil teams we can add "Team Rocket" and "Team Aqua" etc. here as well as "Team Rocket Boss" and "Team Aqua Admin" etc.
} as const;

// Titles of trainers like "Youngster" or "Lass"
export const trainerClasses: SimpleTranslationEntries = {
    "ace_trainer": "Ass-Trainer",
    "ace_trainer_female": "Ass-Trainerin",
    "artist": "Künstler",
    "artist_female": "Künstlerin",
    "backers": "Anhänger",
    "backpacker": "Backpacker",
    "backpacker_female": "Backpackerin",
    "baker": "Bäckerin",
    "battle_girl": "Kämpferin",
    "beauty": "Schönheit",
    "biker": "Rowdy",
    "black_belt": "Schwarzgurt",
    "breeder": "Pokémon Züchter",
    "breeder_female": "Pokémon Züchterin",
    "clerk": "Angestellter",
    "clerk_female": "Angestellte",
    "cyclist": "Biker",
    "cyclist_female": "Bikerin",
    "dancer": "Tänzer",
    "dancer_female": "Tänzerin",
    "depot_agent": "Bahnangestellter",
    "doctor": "Arzt",
    "doctor_female": "Ärztin",
    "fishermen": "Angler",
    "fishermen_female": "Angler", // Seems to be the same in german but exists in other languages like italian
    "guitarist": "Gitarrist",
    "guitarist_female": "Gitarristin",
    "harlequin": "Kasper",
    "hiker": "Wanderer",
    "hooligans": "Rabauken",
    "hoopster": "Basketballer",
    "infielder": "Baseballer",
    "janitor": "Hausmeister",
    "lady": "Lady",
    "lass": "Göre",
    "linebacker": "Footballer",
    "maid": "Zofe",
    "madame": "Madam",
    "musican": "Musiker",
    "hex_manic": "Hexe",
    "nurse": "Pflegerin",
    "nursery_aide": "Erzieherin",
    "officer": "Polizist",
    "parasol_lady": "Schirmdame",
    "pilot": "Pilot",
    "pokefan": "Pokéfan",
    "preschooler": "Vorschüler",
    "preschooler_female": "Vorschülerin",
    "psychic": "Seher",
    "psychic_female": "Seherin",
    "ranger": "Ranger",
    "rich": "Gentleman", // Gentleman is the english name but the trainerType is rich
    "rich_kid": "Schnösel",
    "roughneck": "Raufbold",
    "scientist": "Forscher",
    "scientist_female": "Forscherin",
    "smasher": "Tennis-Ass",
    "snow_worker": "Schneearbeiter", // There is a trainer type for this but no actual trainer class? They seem to be just workers but dressed differently
    "snow_worker_female": "Schneearbeiterin",
    "striker": "Fußballer",
    "school_kid": "Schulkind",
    "school_kid_female": "Schulkind", // Same in german but different in italian
    "swimmer": "Schwimmer",
    "swimmer_female": "Schwimmerin",
    "twins": "Zwillinge",
    "veteran": "Veteran",
    "veteran_female": "Veteran", // same in german, different in other languages
    "waiter": "Servierer",
    "waitress": "Serviererin",
    "worker": "Arbeiter",
    "worker_female": "Arbeiterin",
    "youngster": "Knirps"


} as const;

// Names of special trainers like gym leaders, elite four, and the champion
export const trainerNames: SimpleTranslationEntries = {
    "brock": "Rocko",
    "misty": "Misty",
    "lt_surge": "Major Bob",
    "erika": "Erika",
    "janine": "Janina",
    "sabrina": "Sabrina",
    "blaine": "Pyor",
    "giovanni": "Giovanni",
    "falkner": "Falk",
    "bugsy": "Kai",
    "whitney": "Bianka",
    "morty": "Jens",
    "chuck": "Hartwig",
    "jasmine": "Jasmin",
    "pryce": "Norbert",
    "clair": "Sandra",
    "roxanne": "Felizia",
    "brawly": "Kamillo",
    "wattson": "Walter",
    "flannery": "Flavia",
    "norman": "Norman",
    "winona": "Wibke",
    "tate": "Ben",
    "liza": "Svenja",
    "juan": "Juan",
    "roark": "Veit",
    "gardenia": "Silvana",
    "maylene": "Hilda",
    "crasher_wake": "Wellenbrecher Marinus",
    "fantina": "Lamina",
    "byron": "Adam",
    "candice": "Frida",
    "volkner": "Volkner",
    "cilan": "Benny",
    "chili": "Maik",
    "cress": "Colin",
    "cheren": "Cheren",
    "lenora": "Aloe",
    "roxie": "Mica",
    "burgh": "Artie",
    "elesa": "Kamilla",
    "clay": "Turner",
    "skyla": "Géraldine",
    "brycen": "Sandro",
    "drayden": "Lysander",
    "marlon": "Benson",
    "viola": "Viola",
    "grant": "Lino",
    "korrina": "Connie",
    "ramos": "Amaro",
    "clemont": "Citro",
    "valerie": "Valerie",
    "olympia": "Astrid",
    "wulfric": "Galantho",
    "milo": "Yarro",
    "nessa": "Kate",
    "kabu": "Kabu",
    "bea": "Saida",
    "allister": "Nio",
    "opal": "Papella",
    "bede": "Betys",
    "gordie": "Mac",
    "melony": "Mel",
    "piers": "Nezz",
    "marnie": "Mary",
    "raihan": "Roy",
    "katy": "Ronah",
    "brassius": "Colzo",
    "iono": "Enigmara",
    "kofu": "Kombu",
    "larry": "Aoki",
    "ryme": "Etta",
    "tulip": "Tulia",
    "grusha": "Grusha",
    "lorelei": "Lorelei",
    "bruno": "Bruno",
    "agatha": "Agathe",
    "lance": "Siegfried",
    "will": "Willi",
    "koga": "Koga",
    "karen": "Melanie",
    "sidney": "Ulrich",
    "phoebe": "Antonia",
    "glacia": "Frosina",
    "drake": "Dragan",
    "aaron": "Herbaro",
    "bertha": "Teresa",
    "flint": "Ignaz",
    "lucian": "Lucian",
    "shauntal": "Anissa",
    "marshal": "Eugen",
    "grimsley": "Astor",
    "caitlin": "Kattlea",
    "malva": "Pachira",
    "siebold": "Narcisse",
    "wikstrom": "Thymelot",
    "drasna": "Dracena",
    "hala": "Hala",
    "molayne": "Marlon",
    "olivia": "Mayla",
    "acerola": "Lola",
    "kahili": "Kahili",
    "rika": "Cay",
    "poppy": "Poppy",
    "larry_elite": "Aoki", // Does this really need to be an extra entry? (it is in trainer-type.ts so I added it here)
    "hassel": "Sinius",
    "crispin": "Matt",
    "amarys": "Erin",
    "lacey": "Tara",
    "drayton": "Levy",
    "blue": "Blau",
    "red": "Rot",
    "lance_champion": "Siegfried", // Does this really need to be an extra entry? (it is in trainer-type.ts so I added it here)
    "steven": "Troy",
    "wallace": "Wassili",
    "cynthia": "Cynthia",
    "alder": "Lauro",
    "iris": "Lilia",
    "diantha": "Diantha",
    "hau": "Tali",
    "geeta": "Sagaria",
    "nemona": "Nemila",
    "kieran": "Jo",
    "leon": "Delion",
    "rival": "Finn",
    "rival_female": "Ivy",
} as const;