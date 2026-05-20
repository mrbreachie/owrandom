// ============================================================
// OW Hero Tools — data.js
// All hero, perk, and counter data
// ============================================================

const HEROES = [
  // TANKS
  { name: "D.Va",         role: "Tank",    icon: "🎮",
    beats: ["Bastion","Pharah","Junkrat"],
    loses: ["Reaper","Zarya","Roadhog"],
    tip: "Defense Matrix eats entire abilities and ultimates. Fly into the backline with boosters to disrupt supports. Reaper melts her at close range with passive lifesteal.",
    perks: {
      minor: ["Nitro Boost — Boosters deal damage on impact", "System Overload — Micro Missiles fire faster"],
      major: ["Big Shot — Fusion Cannons deal bonus damage at close range", "Ejector Seat — Self-Destruct launches D.Va to safety"]
    }
  },
  { name: "Doomfist",     role: "Tank",    icon: "👊",
    beats: ["Ana","Zenyatta","Mercy"],
    loses: ["Brigitte","Cassidy","Roadhog"],
    tip: "His whole kit builds up to a one-shot combo on squishy targets. Target isolated supports. Crowd control completely counters him — one stun stops his entire rotation.",
    perks: {
      minor: ["Rising Tide — Rocket Punch grants bonus overhealth", "Aftershock — Seismic Slam leaves a shockwave"],
      major: ["Meteor Strike Override — Ult deals additional knockback", "Power Chord — Empowered Punch generates shields"]
    }
  },
  { name: "Junker Queen", role: "Tank",    icon: "👑",
    beats: ["Ana","Mercy","Moira"],
    loses: ["Roadhog","Orisa","Zarya"],
    tip: "Wounds apply Jagged Edge stacks that she heals from. Dash in with Carnage then use Rampage to lock enemies in combat. Armor-heavy heroes mitigate her wound output.",
    perks: {
      minor: ["Deep Wounds — Jagged Edge wounds last longer", "Commanding Shout cooldown reduced"],
      major: ["Adrenaline — Life steal from wounds doubled briefly after Rampage", "Warlord — Rampage also wounds through barriers"]
    }
  },
  { name: "Mauga",        role: "Tank",    icon: "🔥",
    beats: ["Roadhog","Orisa","Reinhardt"],
    loses: ["Zarya","Pharah","Ana"],
    tip: "Cardiac Overdrive lets him lifesteal massively during Overrun. Ignite both cannons on a burning enemy for maximum burst. Ana's sleep dart stops Overrun cold.",
    perks: {
      minor: ["Hot Pursuit — Overrun speed increased", "Berserker — Ignited enemies take bonus minigun damage"],
      major: ["Overdrive — Cardiac Overdrive grants brief invincibility", "Rampage — Cage Fight pulls enemies inward"]
    }
  },
  { name: "Orisa",        role: "Tank",    icon: "🐴",
    beats: ["Reinhardt","Bastion","Junkrat"],
    loses: ["Reaper","Doomfist","Zarya"],
    tip: "Fortify makes her unkillable through most burst combos. Javelin Spin absorbs projectiles and can push enemies off ledges. Reaper closes in during Fortify and sustains off her bulk.",
    perks: {
      minor: ["Hardened — Fortify grants extra armor", "Javelin Trail — Javelin leaves a slowing energy trail"],
      major: ["Terra Surge Overload — Terra Surge pulls enemies further", "Eternal — Fortify briefly activates on near-death"]
    }
  },
  { name: "Ramattra",     role: "Tank",    icon: "🤺",
    beats: ["Reinhardt","Orisa","Bastion"],
    loses: ["Reaper","Zarya","Roadhog"],
    tip: "Nemesis form shreds barriers and tanks up close. Annihilation drains enemies who can't escape the aura. Reaper lifesteal against his large hitbox is brutal.",
    perks: {
      minor: ["Vortex Extension — Ravenous Vortex lasts longer", "Barrier Rebuild — Void Barrier recharges faster"],
      major: ["Final Form — Nemesis Form becomes permanent during Annihilation", "Void Blight — Punches apply a damage-over-time debuff"]
    }
  },
  { name: "Reinhardt",    role: "Tank",    icon: "🔨",
    beats: ["Bastion","Symmetra","Torbjorn"],
    loses: ["Reaper","Pharah","Junkrat"],
    tip: "Barrier Field protects his whole team from projectiles and beams. Charge pins a single target to a wall instantly. Junkrat and Pharah arc over or bypass his shield.",
    perks: {
      minor: ["Stalwart Charge — Charge travels further", "Tectonic Slam — Earthshatter leaves aftershocks"],
      major: ["Onslaught — Fire Strike launches three projectiles", "Barrier Rebuild — Barrier regenerates while not held up"]
    }
  },
  { name: "Roadhog",      role: "Tank",    icon: "🪝",
    beats: ["Tracer","Genji","Ana"],
    loses: ["Kiriko","Orisa","Zarya"],
    tip: "Hook plus melee plus Scrap Gun is a one-shot combo on most heroes. Self-heal is massive but channels — protect it. Kiriko Suzu-cleanses the hook victim and heals them.",
    perks: {
      minor: ["Scrap Chain — Hook range increased", "Glutton — Take-A-Breather heals more over time"],
      major: ["Hog Wild — Whole Hog has no spread", "Tenderize — Hooked enemies take increased damage briefly"]
    }
  },
  { name: "Sigma",        role: "Tank",    icon: "🌌",
    beats: ["Pharah","Junkrat","Echo"],
    loses: ["Reaper","Doomfist","Tracer"],
    tip: "Kinetic Grasp absorbs projectiles and converts them to shields. Accretion stuns key targets before Gravitic Flux. Dive heroes bypass his shield by going behind it.",
    perks: {
      minor: ["Hyperspheres Bounce — Orbs ricochet once", "Kinetic Reserve — Grasp stores more energy"],
      major: ["Gravitic Flux Overload — Ult suspends enemies longer", "Accretion Impact — Stunned enemies drop ammo"]
    }
  },
  { name: "Winston",      role: "Tank",    icon: "🦍",
    beats: ["Widowmaker","Mercy","Zenyatta"],
    loses: ["Reaper","Moira","Brigitte"],
    tip: "Barrier Projector lets him dive in without dying immediately. Jump Pack repositions constantly. Reaper's lifesteal trivializes Winston's barrier and kills him faster than he can escape.",
    perks: {
      minor: ["Leap of Faith — Jump Pack cooldown reduced on landing", "Barrier Boost — Projector grants brief overhealth on activation"],
      major: ["Primal Surge — Primal Rage also heals Winston", "Tesla Overdrive — Tesla Cannon chain-arcs to nearby targets"]
    }
  },
  { name: "Wrecking Ball", role: "Tank",   icon: "🐹",
    beats: ["Zenyatta","Ana","Mercy"],
    loses: ["Cassidy","Brigitte","Sombra"],
    tip: "Grappling Claw and Roll let him build momentum for massive knockback attacks. Minefield zones entire areas. One stun from Cassidy or Brigitte stops his entire momentum-based kit cold.",
    perks: {
      minor: ["Rolling Reload — Piledriver reloads Quad Cannons", "Mine Expansion — Minefield covers wider area"],
      major: ["Wrecking Crew — Piledriver stuns enemies on landing", "Adaptive Shield Surge — Shields scale more per enemy nearby"]
    }
  },
  { name: "Zarya",        role: "Tank",    icon: "💪",
    beats: ["Reaper","D.Va","Roadhog"],
    loses: ["Pharah","Cassidy","Junkrat"],
    tip: "Bubble yourself or teammates to absorb burst and gain charge. High charge turns Graviton Surge into a team wipe setup. Ranged poke heroes build her energy quickly if not careful.",
    perks: {
      minor: ["Power Surge — Particle Cannon deals more damage at high charge", "Barrier Reserve — Bubbles recharge faster"],
      major: ["Graviton Pulse — Graviton Surge also damages over time", "Energy Overload — At max charge, Zarya gains movement speed"]
    }
  },

  // DAMAGE
  { name: "Ashe",         role: "Damage",  icon: "🤠",
    beats: ["Pharah","Mercy","Ana"],
    loses: ["Winston","Tracer","Doomfist"],
    tip: "Dynamite comboed with her rifle's scoped shot melts grouped enemies. Keep distance. Diving heroes close the gap before she can react.",
    perks: {
      minor: ["Powder Keg — Dynamite explosion radius increased", "B.O.B. On Call — B.O.B. cooldown reduced"],
      major: ["Deadeye — Scoped shot deals bonus headshot damage", "Explosive Coaching — Dynamite detonation triggers faster"]
    }
  },
  { name: "Bastion",      role: "Damage",  icon: "🤖",
    beats: ["Reinhardt","Orisa","Roadhog"],
    loses: ["Genji","Pharah","Winston"],
    tip: "Sentry form melts tanks at close-mid range. Always have cover nearby to escape. Pharah owns him from above. Genji deflects his spray back for massive damage.",
    perks: {
      minor: ["Ironclad — Sentry mode grants passive damage reduction", "Grenade Cache — Artillery fires an extra shell"],
      major: ["Overclock — Recon mode fires in short bursts with increased damage", "Tank Protocol — Sentry can slowly move while firing"]
    }
  },
  { name: "Cassidy",      role: "Damage",  icon: "🔫",
    beats: ["Tracer","Genji","Winston"],
    loses: ["Pharah","Sombra","Symmetra"],
    tip: "Magnetic Grenade is an anti-flanker masterpiece — throw it right before they escape around a corner. Fan the Hammer up close. Pharah in the air is his nightmare.",
    perks: {
      minor: ["Magnet Pull — Magnetic Grenade pulls enemies closer", "Quick Draw — Combat Roll grants brief speed boost"],
      major: ["Flashpoint — Deadeye locks onto targets faster", "Grenade Storm — Magnetic Grenade chains to nearby enemies"]
    }
  },
  { name: "Echo",         role: "Damage",  icon: "🦋",
    beats: ["Bastion","Pharah","Junkrat"],
    loses: ["Cassidy","Winston","Tracer"],
    tip: "Sticky Bombs plus Charged shot is a devastating combo. Flight lets her pressure Pharah. Duplicate enemy ultimates at clutch moments. Cassidy's grenades stick to her even airborne.",
    perks: {
      minor: ["Adaptive Flight — Flight cooldown reduced after eliminations", "Glide Bomb — Sticky Bombs attach to walls"],
      major: ["Resonance — Focusing Beam also heals Echo", "Accelerated Clone — Duplicate builds ult charge faster"]
    }
  },
  { name: "Genji",        role: "Damage",  icon: "🥷",
    beats: ["Ana","Zenyatta","Mercy"],
    loses: ["Cassidy","Brigitte","Moira"],
    tip: "Deflect counters hitscan and projectile heroes. Swift Strike resets on kill — chain it through backlines. Moira's healing orbs cannot be deflected and her damage is hard to dodge.",
    perks: {
      minor: ["Blade Storm — Shuriken volley fires an extra projectile", "Agile Recovery — Cyber-Agility heals briefly"],
      major: ["Dragonblade Extend — Dragonblade duration extended on kills", "Deflect Return — Deflecting fully recharges shuriken ammo"]
    }
  },
  { name: "Hanzo",        role: "Damage",  icon: "🏹",
    beats: ["Reinhardt","Orisa","Roadhog"],
    loses: ["Tracer","Winston","Genji"],
    tip: "Storm Arrows shred tanks at close range despite his sniper role. Sonic Arrow plus Scatter for zone control. Mobile heroes close the gap before he can react.",
    perks: {
      minor: ["Lunge Reload — Wall Climb fully reloads on landing", "Sonic Pulse — Sonic Arrow reveals enemies through walls briefly"],
      major: ["Piercing Dragon — Dragonstrike pierces barriers", "Storm Surge — Storm Arrows grant bonus movement speed"]
    }
  },
  { name: "Junkrat",      role: "Damage",  icon: "💣",
    beats: ["Reinhardt","Orisa","Bastion"],
    loses: ["D.Va","Pharah","Brigitte"],
    tip: "Spam choke points and corners where enemies can't dodge. Concussion Mine for escape or bonus burst. D.Va's Matrix eats every projectile he fires, including RIP-Tire.",
    perks: {
      minor: ["Chain Reaction — Grenades explode twice", "Frag Booster — Concussion Mine deals bonus damage"],
      major: ["Total Mayhem — Grenades on death count deal full damage", "Minefield Mania — RIP-Tire leaves mines on explosion"]
    }
  },
  { name: "Mei",          role: "Damage",  icon: "❄️",
    beats: ["Tracer","Reaper","Genji"],
    loses: ["Pharah","Bastion","Junkrat"],
    tip: "Cryo-Freeze is a self-heal and anti-burst cooldown. Wall off flankers or split enemy teams. Pharah simply flies over her ice walls. Bastion shreds her ice from range before she can close in.",
    perks: {
      minor: ["Permafrost — Blizzard freezes enemies instantly", "Cold Snap — Cryo-Freeze ends with a small ice burst"],
      major: ["Ice Fortress — Ice Wall gains additional pillars", "Absolute Zero — Blizzard radius significantly increased"]
    }
  },
  { name: "Pharah",       role: "Damage",  icon: "🚀",
    beats: ["Mei","Junkrat","Symmetra"],
    loses: ["Soldier: 76","Cassidy","Ashe"],
    tip: "Concussive Blast pushes enemies off ledges and away from health packs. Stay airborne and fire down. Any hitscan hero with practice can delete her before she gets shots off.",
    perks: {
      minor: ["Rocket Barrage — Concussive Blast fires multiple rockets", "Hover Jets — Hovering consumes less fuel"],
      major: ["Rocket Salvo — Barrage fires rockets more rapidly", "Afterburner — Jet Dash cooldown reset on elimination"]
    }
  },
  { name: "Reaper",       role: "Damage",  icon: "💀",
    beats: ["Reinhardt","D.Va","Orisa"],
    loses: ["Pharah","Soldier: 76","Lucio"],
    tip: "Wraith Form escapes CC and reloads. Shadow Step repositions before the enemy notices. He heals on every shot — dive tanks enable his lifesteal. Any ranged hero at medium-long range trivially keeps him out.",
    perks: {
      minor: ["Death Bloom — Death Blossom has reduced wind-up", "Dire Triggers — Shotguns deal bonus damage after ability use"],
      major: ["Wraithwalk — Wraith Form moves faster", "Soulfire — Killing with shotguns reduces Wraith Form cooldown"]
    }
  },
  { name: "Sojourn",      role: "Damage",  icon: "⚡",
    beats: ["Roadhog","Reinhardt","Orisa"],
    loses: ["Genji","Winston","Tracer"],
    tip: "Disrupt Shot slows enemies and charges her railgun. A fully charged railgun headshot is an instant kill on most heroes. Mobile heroes can disrupt her charge cycles.",
    perks: {
      minor: ["Sharpshooter — Power Slide fully recharges railgun", "Overdrive — Overclock charges railgun instantly"],
      major: ["Critical Charge — Railgun headshots add extra charge", "Ionic Burst — Disrupt Shot also slows ability use"]
    }
  },
  { name: "Soldier: 76",  role: "Damage",  icon: "🎖️",
    beats: ["Pharah","Mercy","Echo"],
    loses: ["Winston","Tracer","Genji"],
    tip: "Helix Rockets add burst to his sustained damage. Sprint lets him reposition for better angles. Flankers close in fast.",
    perks: {
      minor: ["Sprint Reload — Sprint while reloading", "Pulse Charge — Helix Rockets generate more ultimate charge"],
      major: ["Tactical Visor Extend — Tactical Visor duration increased", "Armor-Piercing Rounds — Bullets penetrate barriers"]
    }
  },
  { name: "Sombra",       role: "Damage",  icon: "💻",
    beats: ["Ana","Mercy","Kiriko"],
    loses: ["Moira","Reaper","Roadhog"],
    tip: "Hack completely disables abilities and ultimates. Virus stacks damage onto hacked targets. Always focus isolated supports. Heroes who rely purely on primary fire still destroy her after being hacked.",
    perks: {
      minor: ["Virus Spread — Virus applies to nearby enemies", "EMP Expand — EMP radius increased"],
      major: ["Opportunist Overload — Translocator leaves a decoy", "System Crash — Hack prevents health pack use"]
    }
  },
  { name: "Symmetra",     role: "Damage",  icon: "💠",
    beats: ["Reinhardt","Roadhog","Orisa"],
    loses: ["Pharah","Reaper","Tracer"],
    tip: "Turrets slow enemies and provide info about flanks. Teleporter lets the team bypass chokepoints. Nearly useless against teams that rush or fly — she needs structured fights.",
    perks: {
      minor: ["Sentry Network — Extra turret deployed at once", "Photon Barrier — Photon Projector blocks damage briefly"],
      major: ["Singularity — Orb of Destruction leaves a slow zone", "Turret Overcharge — Turrets deal bonus damage to slowed enemies"]
    }
  },
  { name: "Torbjorn",     role: "Damage",  icon: "🔧",
    beats: ["Pharah","Reaper","Tracer"],
    loses: ["Bastion","Junkrat","Sombra"],
    tip: "Place turrets in positions enemies approach from unexpected angles. Overload makes him briefly unkillable in fights. Sombra hacks his turret out of existence.",
    perks: {
      minor: ["Slag Hammer — Rivet Gun's shotgun mode fires more pellets", "Overload Extension — Overload lasts slightly longer"],
      major: ["Turret Upgrade — Turret gains extra health and damage", "Molten Core Overflow — Molten Core lasts longer"]
    }
  },
  { name: "Tracer",       role: "Damage",  icon: "⏱️",
    beats: ["Ana","Mercy","Zenyatta"],
    loses: ["Cassidy","Brigitte","Mei"],
    tip: "Blink and Recall together make her nearly un-killable with good mechanics. Stick bomb isolated supports. Cassidy's grenade sticks through Blink and Brigitte stuns her out of flanks.",
    perks: {
      minor: ["Accelerated Blink — One extra Blink charge", "Pulse Drive — Recall also restores Blink charges"],
      major: ["Sticky Surge — Pulse Bomb deals bonus damage at close range", "Chain Recall — Recall can be activated a second time"]
    }
  },
  { name: "Widowmaker",   role: "Damage",  icon: "🕷️",
    beats: ["Mercy","Ana","Zenyatta"],
    loses: ["Winston","Tracer","Doomfist"],
    tip: "Grapple to a position enemies don't expect. Full charge headshot kills most heroes instantly. Any dive hero reaches her before her grapple cooldown resets.",
    perks: {
      minor: ["Venom Trap Chain — Venom Mine links to a second mine", "Long Shot — Scope charge speed increased"],
      major: ["Widow's Kiss Extended — Scope holds charge longer", "Infrared Rounds — Infra-Sight reveals enemies to Widowmaker specifically"]
    }
  },

  // SUPPORT
  { name: "Ana",          role: "Support", icon: "💉",
    beats: ["Reinhardt","Roadhog","Orisa"],
    loses: ["Genji","Tracer","Sombra"],
    tip: "Sleep Dart is her biggest tool — use it to shut down diving tanks or cancel ultimates. Stay far back. Genji can deflect her darts and Sombra will hack her out of effectiveness.",
    perks: {
      minor: ["Nano Burst — Nano Boost grants extra speed", "Somnolent — Sleep Dart applies anti-heal briefly after waking"],
      major: ["Nano Storm — Nano Boost also boosts nearby allies", "Biotic Grenade Expand — Grenade affects a larger area"]
    }
  },
  { name: "Baptiste",     role: "Support", icon: "🏥",
    beats: ["Pharah","Reaper","Bastion"],
    loses: ["Sombra","Tracer","Genji"],
    tip: "Immortality Field is a game-changer — deploy it reactively. Amplification Matrix doubles damage and healing through it. Agile divers make his life miserable.",
    perks: {
      minor: ["Regenerative Burst Expand — Burst heals a wider area", "Exo Boost — Exo Boots provide extra height"],
      major: ["Matrix Overcharge — Amplification Matrix also speeds projectiles", "Field Extension — Immortality Field lasts longer"]
    }
  },
  { name: "Brigitte",     role: "Support", icon: "🛡️",
    beats: ["Tracer","Genji","Doomfist"],
    loses: ["Pharah","Junkrat","Bastion"],
    tip: "Stun flankers mid-dive with Shield Bash. Her passive armor heals nearby allies. She can't reach airborne enemies and struggles with sustained ranged poke.",
    perks: {
      minor: ["Bash Reset — Shield Bash cooldown resets on elimination", "Inspire Boost — Inspire heals for more per hit"],
      major: ["Rally Extended — Rally duration increased", "Whipshot Chain — Whipshot bounces to a second target"]
    }
  },
  { name: "Illari",       role: "Support", icon: "☀️",
    beats: ["Pharah","Mercy","Echo"],
    loses: ["Winston","Tracer","Genji"],
    tip: "Outburst gives escape mobility — use it to dodge dives. Her pylon is a deployable healing engine; protect it. Dive tanks destroy her if she can't create distance.",
    perks: {
      minor: ["Solar Burst — Outburst deals damage on activation", "Pylon Pulse — Pylon heals at a faster rate briefly"],
      major: ["Captive Sun Extend — Captive Sun slows detonation", "Pylon Overcharge — Pylon damage increased"]
    }
  },
  { name: "Kiriko",       role: "Support", icon: "🦊",
    beats: ["Ana","Roadhog","Cassidy"],
    loses: ["Tracer","Genji","Winston"],
    tip: "Suzu cleanses almost any negative effect — save it for anti-heals or crowd control. Swift Step teleports through walls to allies. Dive heroes pressure her before Suzu can save herself.",
    perks: {
      minor: ["Suzu Extend — Protection Suzu lasts longer", "Kunai Mastery — Kunai critical hit box increased"],
      major: ["Kitsune Rush Overload — Kitsune Rush also boosts ability cooldowns", "Wall Step — Swift Step can reach through barriers"]
    }
  },
  { name: "Lifeweaver",   role: "Support", icon: "🌸",
    beats: ["Roadhog","Doomfist","Pharah"],
    loses: ["Sombra","Tracer","Winston"],
    tip: "Life Grip pulls allies out of danger or ults — communication is key. Tree of Life blocks sightlines and heals. Sombra hacking him prevents both his main abilities.",
    perks: {
      minor: ["Rejuvenating Dash — Petal Platform briefly boosts jump height", "Thorn Volley Burst — Thorn Volley fires faster briefly"],
      major: ["Immortal Blossom — Tree of Life also prevents death briefly", "Life Grip Extend — Grip reaches further"]
    }
  },
  { name: "Lucio",        role: "Support", icon: "🎵",
    beats: ["Roadhog","Junkrat","Reaper"],
    loses: ["Tracer","Sombra","Ana"],
    tip: "Speed boost is one of the best abilities in the game — keep it active in fights. Amp It Up at key moments. He can boop enemies off the map. Sombra hacking him silences his aura entirely.",
    perks: {
      minor: ["Reverb — Soundwave has increased range", "Beat Drop — Sound Barrier instantly heals on landing"],
      major: ["Accelerando — Speed boost also increases fire rate", "Sound Surge — Amp It Up boosts aura radius"]
    }
  },
  { name: "Mercy",        role: "Support", icon: "😇",
    beats: ["Bastion","Symmetra","Torbjorn"],
    loses: ["Tracer","Widowmaker","Sombra"],
    tip: "Damage boost Hanzo or Ashe to delete tanks instantly. Resurrect in cover, never in the open. Tracer can kill her faster than she can Guardian Angel away.",
    perks: {
      minor: ["Winged Reach — Guardian Angel range increased by 30%", "Flash Heal — Guardian Angel briefly heals on arrival"],
      major: ["Angelic Ascent — Resurrect grants Mercy and target temporary invulnerability", "Caduceus Overcharge — Damage boost increases crit damage"]
    }
  },
  { name: "Moira",        role: "Support", icon: "🧬",
    beats: ["Genji","Tracer","Winston"],
    loses: ["Bastion","Pharah","Junkrat"],
    tip: "Biotic Orbs cannot be deflected. Fade escapes almost every dive. Coalescence heals through barriers. She falls off against ranged poke since her damage fades at distance.",
    perks: {
      minor: ["Biotic Grasp Reach — Healing stream range increased", "Fade Frequency — Fade cooldown reduced"],
      major: ["Coalescence Extend — Coalescence duration increased", "Orb Overload — Orbs travel faster and last longer"]
    }
  },
  { name: "Zenyatta",     role: "Support", icon: "🔮",
    beats: ["Roadhog","Reaper","Reinhardt"],
    loses: ["Tracer","Genji","Winston"],
    tip: "Discord Orb amplifies all damage taken by a target — focus the discord target as a team. Transcendence counters almost every ultimate in the game. He has zero mobility — any flanker reaches him easily.",
    perks: {
      minor: ["Empowered Orbs — Orbs of Destruction deal bonus damage when Discord is active", "Rapid Discord — Discord Orb attaches faster"],
      major: ["Transcendence Surge — Transcendence also boosts allies' movement speed", "Harmony Overflow — Harmony Orb also generates overhealth"]
    }
  },
  // Missing tanks — added after roster audit
  { name: "Hazard",       role: "Tank",    icon: "🦷",
    beats: ["Zenyatta","Mercy","Widowmaker"],
    loses: ["Ashe","Hanzo","Sombra"],
    tip: "Jagged Wall cuts off escape routes and funnels enemies into your shotgun range. Spike Guard lets you trade aggressively — activate it early in a brawl. Any hitscan hero who out-ranges you wins easily; don't fight at distance.",
    perks: {
      minor: ["Spike Surge — Bonespur burst fires an extra projectile", "Jagged Reload — Wall placement reloads Bonespur"],
      major: ["Downpour — Ultimate immobilizes enemies in a wider area", "Vault Boost — Violent Leap cooldown resets on kill"]
    }
  },
  { name: "Domina",       role: "Tank",    icon: "🔭",
    beats: ["Bastion","Symmetra","Reinhardt"],
    loses: ["Reaper","Vendetta","Winston"],
    tip: "Barrier Array blocks most frontal damage — poke from safety and punish whoever steps into your beam. Sonic Repulsors push divers away. Reaper walks through your barrier and melts you at close range where your beam is weakest.",
    perks: {
      minor: ["Crystal Cluster — Crystal projectile splits on impact", "Sonic Pulse — Repulsors slow enemies hit"],
      major: ["Panopticon Extend — Ultimate duration increased", "Barrier Reinforce — Barrier Array segments regenerate faster"]
    }
  },
];

// New Season 1 & 2 heroes
const NEW_HEROES = [
  { name: "Anran",  role: "Damage",  icon: "🔥",
    beats: ["Zenyatta","Mercy","Lifeweaver"],
    loses: ["Zarya","Pharah","Kiriko"],
    tip: "Anran's kit revolves around burning enemies — her damage stacks over time, so stay on target. Zarya bubbles cleanse the burn debuff entirely. Kiriko Suzu does the same. Flyers like Pharah are out of her reach.",
    perks: {
      minor: ["Ember Trail — Burns spread to nearby enemies", "Flare Up — Burning enemies take bonus direct hit damage"],
      major: ["Inferno — Ultimate leaves a burn zone on detonation", "Heat Seeker — Primary fire homes slightly on burning targets"]
    }
  },
  { name: "Venture", role: "Damage", icon: "⛏️",
    beats: ["Reinhardt","Sigma","Bastion"],
    loses: ["Pharah","Widowmaker","Hanzo"],
    tip: "Burrow lets you travel underground and burst up on unsuspecting targets. Smart Excavator drill is great for breaking barriers. Any ranged hero on high ground shuts you down before you can close the distance.",
    perks: {
      minor: ["Deep Dig — Burrow range increased", "Rock Solid — Burrow grants brief damage reduction on emerge"],
      major: ["Seismic Slam — Emerge from Burrow creates a shockwave", "Drill Dash — Clobber gains a second charge at high perk level"]
    }
  },
  { name: "Vendetta", role: "Damage", icon: "⚔️",
    beats: ["Zenyatta","Ana","Mercy"],
    loses: ["Orisa","Sigma","Cassidy"],
    tip: "Soaring Slice can bypass barriers entirely — use it to dive backlines without needing to walk through. High win rate even post-nerf. Orisa and Sigma can bait and punish your predictable dive angles.",
    perks: {
      minor: ["Blade Rush — Soaring Slice cooldown reduced on elimination", "Lifesteal — Primary attack heals briefly on hit"],
      major: ["Vendetta Protocol — Ult also reveals nearby enemies through walls", "Phantom Strike — Soaring Slice leaves an after-image decoy"]
    }
  },
  { name: "Emre",   role: "Damage",  icon: "🔋",
    beats: ["Roadhog","Orisa","Reinhardt"],
    loses: ["Tracer","Genji","Sombra"],
    tip: "Siphon Blaster heals him as he deals damage — punish tanks up close. Cyber Frag detonates for burst damage. Was dominant but got hit with healing conversion nerfs (80% to 60%) this patch.",
    perks: {
      minor: ["Cyber Surge — Siphon Blaster briefly overcharges after a kill", "Frag Bounce — Cyber Frag bounces once before detonating"],
      major: ["Drain Field — Siphon Blaster creates a life-steal aura briefly", "System Overload — Cyber Frag minimum radius doubled"]
    }
  },
  { name: "Sierra", role: "Damage",  icon: "🎯",
    beats: ["Ana","Mercy","Bastion"],
    loses: ["Winston","D.Va","Kiriko"],
    tip: "Her drone lets her grapple to unexpected angles. Tracking Shot briefly auto-aims — Kiriko Suzu cleanses it. Got emergency buffs at launch and is climbing fast. D.Va and Sigma both negate her Tracking Shot with matrix and barrier.",
    perks: {
      minor: ["Drone Recall — Drone returns faster", "Tracer Lock — Tracer dart tracks targets longer"],
      major: ["Aerial Assault — Grapple dash deals damage on arrival", "Drone Strike — Drone detonates on command for burst damage"]
    }
  },
  { name: "Freja",  role: "Damage",  icon: "🪃",
    beats: ["Zenyatta","Ana","Mercy"],
    loses: ["D.Va","Tracer","Winston"],
    tip: "Updraft gives vertical mobility — reach high ground or escape dives. Bola Shot binds enemies in place for follow-up. Buffed this patch: Updraft CD 12s to 10s and Bounty Hunting ult charge up to 33%.",
    perks: {
      minor: ["Rising Winds — Updraft no longer reduces height gained", "Forager — Heal on elimination"],
      major: ["Bounty Hunting — Final blows grant 33% ult charge", "Volley — Bola fires in a rapid burst"]
    }
  },
  { name: "Jetpack Cat", role: "Support", icon: "🐱",
    beats: ["Bastion","Symmetra","Reinhardt"],
    loses: ["Cassidy","Soldier: 76","Domina"],
    tip: "Frenetic Flight lets her hover and heal from unusual angles enemies can't reach. Purr is a proximity heal that rewards staying close to your tank. Hitscan heroes track her small hitbox effectively — Domina and Mauga can also pressure her at close range.",
    perks: {
      minor: ["Nine Lives — Purr has a reduced cooldown", "Altitude — Frenetic Flight grants extra height ceiling"],
      major: ["Lifeline Overdrive — Lifeline heals more at low ally health", "Pounce — Jetpack Cat can dash to an ally's location"]
    }
  },
  { name: "Juno",   role: "Support", icon: "🛸",
    beats: ["Reinhardt","Bastion","Roadhog"],
    loses: ["D.Va","Winston","Sombra"],
    tip: "Orbital Ray is a powerful healing beam — use it to sustain aggressive tank pushes. Her jetpack lets her reposition constantly, making her hard to pin down. D.Va and Winston can close the gap before she flies out.",
    perks: {
      minor: ["Thruster Boost — Jetpack speed increased briefly after healing", "Orbital Extension — Orbital Ray duration increased"],
      major: ["Hyper Ring Spread — Hyper Ring applies to a wider path", "Mediblaster Burst — Clip empties in a single burst for high burst heal"]
    }
  },
  { name: "Mizuki", role: "Support", icon: "🌊",
    beats: ["Bastion","Symmetra","Torbjorn"],
    loses: ["Tracer","Genji","Sombra"],
    tip: "Kekkai Sanctuary now absorbs projectiles going both in and out. Healing reduced to 40/s and duration cut to 6s this patch. Strong barrier-oriented support — place it to create safe pockets for your tank.",
    perks: {
      minor: ["Sanctuary Pulse — Kekkai Sanctuary pulses extra healing on placement", "Current — Move speed increased inside Sanctuary"],
      major: ["Tidal Wave — Sanctuary absorbs ults briefly", "Flood — Sanctuary expands on activation"]
    }
  },
  { name: "Wuyang", role: "Support", icon: "🐉",
    beats: ["Roadhog","Reinhardt","Sigma"],
    loses: ["Tracer","Genji","Sombra"],
    tip: "Xuanwu Staff orbs apply armor reduction — fixed double-stack bug this patch. Strong sustained healing. Pairs well with barrier tanks. His orb damage was nerfed from 40% to 30% this patch.",
    perks: {
      minor: ["Splish Splash — Cooldown reduced to 10s", "Orb Bounce — Orbs ricochet on walls"],
      major: ["Paindrops — Orbs deal 30% bonus damage", "Dragon Form — Xuanwu Staff gains a transformation attack"]
    }
  },
];

const ALL_HEROES = [...HEROES, ...NEW_HEROES];
