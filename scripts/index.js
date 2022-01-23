
  

      function send2gamedetail(id) {
        let idNum = { id };
        localStorage.setItem("idNum", JSON.stringify(idNum));
        window.location.href = "./pages/gameDetailsPage.html";
      }

      arr = [
        {
          id: 1,
          title: "Dauntless",
          strikeprice: "3999",
          price: "1000",
          thumbnail: "https://www.freetogame.com/g/1/thumbnail.jpg",
          status: "Live",
          short_description:
            "A free-to-play, co-op action RPG with gameplay similar to Monster Hunter.",
          //"description": "Dauntless is a free-to-play, co-op action RPG developed by independent studio Phoenix Labs — a studio made of of veteran developers from Bioware, Riot, Capcom, and Blizzard. Set in a science-fantasy world, Dauntless places players in the role of elite warriors called Slayers. These Slayers protect humanity from Behemoths that are consuming the land following a cataclysmic event that turned the landscape into ever-changing, floating islands.\r\n\r\nThe gameplay may remind players of Monster Hunter, or perhaps a cheerier version of Shadow of the Colossus, where the goal is to defeat massive creates in an vast landscape.\r\n\r\nDauntless is playable solo, although it is designed with co-op play in mind. It boasts a variety of unique encounters and rewards players with items that will allow them to upgrade weapons and armor — enabling them to become even stronger warriors.",
          game_url: "https://www.freetogame.com/open/dauntless",
          genre: "MMORPG",
          platform: "Windows",
          publisher: "Phoenix Labs",
          developer: "Phoenix Labs, Iron Galaxy",
          release_date: "2019-05-21",
          freetogame_profile_url: "https://www.freetogame.com/dauntless",
          minimum_system_requirements: {
            os: "Windows 7 DX11 Support",
            processor: "CPU: i5 SandyBridge",
            memory: "4GB",
            graphics: "GPU: nVidia 660Ti (DX11) or equivalent",
            storage: "15GB of storage space",
          },
          screenshots: [
            {
              id: 5,
              image: "https://www.freetogame.com/g/1/dauntless-1.jpg",
            },
            {
              id: 6,
              image: "https://www.freetogame.com/g/1/dauntless-2.jpg",
            },
            {
              id: 7,
              image: "https://www.freetogame.com/g/1/dauntless-3.jpg",
            },
            {
              id: 9,
              image: "https://www.freetogame.com/g/1/dauntless-4.jpg",
            },
          ],
        },
        {
          id: 2,
          title: "World of Tanks",
          strikeprice: "4000",
          price: "2000",
          thumbnail: "https://www.freetogame.com/g/2/thumbnail.jpg",
          status: "Live",
          short_description:
            "If you like blowing up tanks, with a quick and intense game style you will love this game!",
          //   //"description": "World of Tanks is a popular free to play multiplayer role playing team-based shooter game developed by Wargaming.net. World of Tanks is based around the middle of the 20th century, and features huge epic battles with various different game modes such as Standard, Assault, Encounter Battles, and an added bonus of 15 tanks vs 15 enemy tanks gameplay.\r\n\r\nThe game starts off with quite easy gameplay but eventuates into a more difficult game as you progress, and because a typical game only takes between 5-10 minutes the game can get quite intense as well. Unlike other games in World of Tanks you cannot respawn; so when your tank gets destroyed you tank gets destroy and you have to start a new game before you can play again. You can still watch the battlefield from a spectator but who wants to be a spectator when you can join in with action with a simple click of a button?\r\n\r\nA different aspect of World of Tanks is that you wait in a queue called a "lobby" and then are launched into a random map, with random enemy players. In World of Tanks depending on your gaming style you start off with a fast lightly armored tank, a middle of the range type of tank, or a slower, more heavily armored tank. The tanks are based on real authentic tanks that were in World War 2. There are approximately 150 tanks from 3 different countries, these being Germany, Russia, and the United States of America.\r\n\r\nThe tank you choose can be customized by performing various different upgrades, which you can acquire through winning experience and credits you gain by winning battles against other enemy tanks. There are 10 different tiers, with tier 1 being a very weak tank going all the way up to tier 10 tanks which are the most powerful. Just like your tanks in the game your crew has a set of skills which progresses as you move through the different tiers in the game.\r\n\r\nYou can own multiple tanks but can only pilot 1 tank in any one game. Depending on what nation you choose will determine what research tree you will advance through to unlock new, more powerful tanks, weapons, and crew members to help your battles against the other enemy tanks. Since World of Tanks initial release there have been numerous updates to improve the difficulty, the visual aspects, new fresh maps, and new tanks and allow more exciting clan features of the game. If you like blowing up tanks, with a quick and intense game style you will simply love this game!",
          game_url: "https://www.freetogame.com/open/world-of-tanks",
          genre: "Shooter",
          platform: "Windows",
          publisher: "Wargaming",
          developer: "Wargaming",
          release_date: "2011-04-12",
          freetogame_profile_url: "https://www.freetogame.com/world-of-tanks",
          minimum_system_requirements: {
            os: "Windows XP / Vista / 7 / 8",
            processor: "Intel Pentium 4 2.2 GHz",
            memory: "2 GB",
            graphics: "Nvidia GeForce 6800 / ATI X1800 with 256 mb ram",
            storage: "16 GB",
          },
          screenshots: [
            {
              id: 10,
              image: "https://www.freetogame.com/g/2/World-of-Tanks-1.jpg",
            },
            {
              id: 11,
              image: "https://www.freetogame.com/g/2/World-of-Tanks-2.jpg",
            },
            {
              id: 12,
              image: "https://www.freetogame.com/g/2/World-of-Tanks-3.jpg",
            },
            {
              id: 13,
              image: "https://www.freetogame.com/g/2/World-of-Tanks-4.jpg",
            },
          ],
        },
        {
          id: 3,
          title: "Warframe",
          strikeprice: "6000",
          price: "999",
          thumbnail: "https://www.freetogame.com/g/3/thumbnail.jpg",
          status: "Live",
          short_description:
            "A cooperative free-to-play third person online action shooter set in an stunning sci-fi world. ",
          //   //"description": "Warframe is a 3D free-to-play cooperative third-person shooter game set in an stunning sci-fi world. In the distant future, war against the Grineer Empire leads humanity to summon ancient warriors from the distant past. Called "Tenno," these agile fighters are equally skilled in blades and guns, able to carve their way through scores of enemies with skill and aplomb. A vast arsenal of these human weapons are called upon in mankind's darkest hour to rescue their brethren from total annihilation.\r\n\r\nAs one of these Tenno, staked with protecting humanity, you'll root out the Grineer from all their hiding places, scouring the Solar System and eliminating this nefarious threat. You'll choose from among dozens of deadly Warframes, each with its own set of skills and strengths. The game progresses through a series of levels, each themed around a planet or region of the Solar System, and each requiring a squad of four Tenno to clear. As you advance, you'll unlock more power for your Tenno, including new weapons and skills, letting you take on even tougher enemies.\r\n\r\nTenno have a number of sweet moves at their disposal, including the ability to "parkour" over and around obstacles, ziplines they can balance on, wall-latching and wall-dashing, and more. Tenno are also spiritual warriors, able to channel energy to spectacular results, including augmenting their weapon damage or activating special powers. Even when downed in battle, Tenno can continue to fight and rally to continue their missions.\r\n\r\nBetween missions, you can purchase better weapons for your Tenno or even entirely new Warframes, so you can try out a different play style. Some items cost credits (in-game currency) while others require platinum, which is purchased with real money. You can also craft your own weapons and insert mods to make them more powerful. Your ship, the Liset, is also where you'll select your next mission, which you can choose to be public, letting anyone join you, or private, which you can attempt with a pre-selected team.\r\n\r\nWarframe requires fast reflexes and split-second timing to execute a Tenno's most dynamic moves. Because the game demands constant progression, and the resources required to purchase those progressions, a high skill factor is required, not only to play, but to play quickly enough to advance at a reasonable rate – and to keep up with your teammates. As such, there's a lot of repetition required. If you want to quickly rip through content over and over, growing in power with each iteration, Warframe will suit you.",
          game_url: "https://www.freetogame.com/open/warframe",
          genre: "Shooter",
          platform: "Windows",
          publisher: "Digital Extremes",
          developer: "Digital Extremes",
          release_date: "2013-03-25",
          freetogame_profile_url: "https://www.freetogame.com/warframe",
          minimum_system_requirements: {
            os: "Windows XP SP 3 or higher ",
            processor: "Intel Core 2 Duo e6400 or AMD Athlon x64 4000+ ",
            memory: "2 GB RAM ",
            graphics: "Nvidia GeForce 8600 GT or ATI Radeon HD 3600 ",
            storage: "10 GB HD space ",
          },
          screenshots: [
            {
              id: 14,
              image: "https://www.freetogame.com/g/3/warframe-1.jpg",
            },
            {
              id: 15,
              image: "https://www.freetogame.com/g/3/warframe-2.jpg",
            },
            {
              id: 16,
              image: "https://www.freetogame.com/g/3/warframe-3.jpg",
            },
            {
              id: 17,
              image: "https://www.freetogame.com/g/3/warframe-4.jpg",
            },
          ],
        },
        {
          id: 4,
          title: "CRSED: F.O.A.D.",
          strikeprice: "5000",
          price: "99",
          thumbnail: "https://www.freetogame.com/g/4/thumbnail.jpg",
          status: "Live",
          short_description:
            "Take the battle royale genre and add  mystical powers and you have CRSED: F.O.A.D. (Aka Cuisine Royale: Second Edition)",
          //"description": "Darkflow Software's Cuisine Royale has been reincarnated as the 'brutal MMO last-man-standing shooter', CRSED: F.O.A.D (Cuisine Royale Second Edition) This game replaces the original and is focused on massive PvP battles filled with dozens of players fighting for supremacy in one of four highly detailed locations. Of course, this is a battle royale, so in addition to dealing with each other, players must contend with the ever-shrinking map.\r\n\r\nPlayers can choose between seven different champions, each with a unique super power. Speaking of powers, there's also a bit of mysticism involved, with ancient ritual, hex bags, blood magic, and more. Players can use these skills to flood the map, summon zombies, and even teleport.\r\n\r\nOf course, it's not all magick and powers. There are the standard weapons – all realistically modeled.These include anti-material guns, sniper rifles, Ars, rocket launchers and flamethrowers. Vehicles also have an impact on gameplay with players having access to military amphibians and speed boats.\r\n\r\nUnlike other battle royales, CRSED: F.O.A.D offers players a choice between third and first-person view when playing. This is achieved by equipping all players with a familiar with a camera that can see players peeking around a corner. \r\n\r\nPreviously described as an 'all-kitchen-warfare battle royale game', Cusine Royale started out as an April Fool's joke from the developers of the MMO shooter Enlisted, and eventually took on a life of its own due to how popular it was with fans. But the new season and reboot, changes everything!\r\n\r\n",
          game_url: "https://www.freetogame.com/open/crsed",
          genre: "Shooter",
          platform: "Windows",
          publisher: "Gaijin Distribution KFT",
          developer: "Darkflow Software",
          release_date: "2019-12-12",
          freetogame_profile_url: "https://www.freetogame.com/crsed",
          minimum_system_requirements: {
            os: "Windows 7 64bit /8 64bit /10 64bit",
            processor: "Intel Core i3",
            memory: "8 GB RAM",
            graphics: "Nvidia GeForce 560 or better, AMD Radeon 77XX or better",
            storage: "6 GB available space",
          },
          screenshots: [
            {
              id: 18,
              image: "https://www.freetogame.com/g/4/crsed-1.jpg",
            },
            {
              id: 19,
              image: "https://www.freetogame.com/g/4/crsed-2.jpg",
            },
            {
              id: 20,
              image: "https://www.freetogame.com/g/4/crsed-3.jpg",
            },
            {
              id: 21,
              image: "https://www.freetogame.com/g/4/crsed-4.jpg",
            },
          ],
        },
        {
          id: 5,
          title: "Crossout",
          strikeprice: "2999",
          price: "999",
          thumbnail: "https://www.freetogame.com/g/5/thumbnail.jpg",
          status: "Live",
          short_description: "A post-apocalyptic MMO vehicle combat game! ",
          //"description": "Crossout is a free to play post-apocalyptic MMO vehicle combat game! Gaijin Entertainment is taking the vehicular multiplayer shooter genre full gear with Crossout.\r\n\r\nFollowing the double catastrophes of a failed genetic testing project and an alien invasion, players are thrown into a wasteland world not unlike that of Mad Max. The harsh, post-apocalyptic terrain of Crossout forces players to build and customize their vehicles to fight and endure the elements and other players. Hunker down in the in-game Workshop and use the countless parts earned in battle to craft a formidable death machine capable of laying waste to opponents.\r\n\r\nWeapons in Crossout range from roof-mounted miniguns to vehicular chainsaws and everything in between the player can imagine. But combat isn't all there is to Crossout. The in-game economy is driven by the players, allowing them to trade the parts they've earned with one another to craft stronger, pitiless, machines. Vehicles in Crossout must be strong, for the damage a vehicle takes in battle will affect its performance. And when the enemy is charging with a vehicle-mounted powerdrill, peak performance is everything.  Crossout is everything players looking for the post-apocalyptic vehicular warfare experience could possibly want. Find a vehicle and turn it into a death-spitting chariot of war!",
          game_url: "https://www.freetogame.com/open/crossout",
          genre: "Shooter",
          platform: "Windows",
          publisher: "Targem",
          developer: "Gaijin",
          release_date: "2017-05-30",
          freetogame_profile_url: "https://www.freetogame.com/crossout",
          minimum_system_requirements: {
            os: "Windows 7 64bit /8 64bit /10 64bit",
            processor: "Intel Core i3",
            memory: "8 GB RAM",
            graphics: "Nvidia GeForce 560 or better, AMD Radeon 77XX or better",
            storage: "6 GB available space",
          },
          screenshots: [
            {
              id: 22,
              image: "https://www.freetogame.com/g/5/Crossout-1.jpg",
            },
            {
              id: 23,
              image: "https://www.freetogame.com/g/5/Crossout-2.jpg",
            },
            {
              id: 24,
              image: "https://www.freetogame.com/g/5/Crossout-3.jpg",
            },
            {
              id: 25,
              image: "https://www.freetogame.com/g/5/Crossout-4.jpg",
            },
          ],
        },
        {
          id: 6,
          title: "Blade and Soul",
          strikeprice: "3999",
          price: "1699",
          thumbnail: "https://www.freetogame.com/g/6/thumbnail.jpg",
          status: "Live",
          short_description:
            "A free-to-play martial arts MMORPG that tasks players with learning combination attacks.",
          //   //"description": "Blade & Soul is a free-to-play, action combat MMORPG from NCSoft that initially released in 2012 in Korea but finally saw a Western release in January 2016. Blade & Soul is a martial arts inspired MMORPG that tasks players with learning action combat based combination attacks for each class. Currently, there are 7 classes available in the game; Assassin, Blade Master, Destroyer, Force Master, Kung-Fu Master, Summoner, and Blade Dancer. New players will want to research the classes prior to starting a new character since classes fall under various race restrictions when choosing from one of the game's four currently available races.\r\n\r\nBlade & Soul's most notable feature is perhaps the game's combat. Skills are learned as you level up and are displayed on hotbars in the traditional MMORPG style, but the actual implementation of those skills differs from most other games in the genre. While you will work with "rotations" in combat, it is perhaps better to think of these rotations in the form of "combinations" as each class will have a plethora of skills that can be combined in succession to perform very well animated combination attacks. These combinations may only be two or three buttons or they could be MUCH longer. Unlike other action combat MMOs though, Blade & Soul isn't going to spoon feed you the combinations by hitting one key to trigger the next strike in the combination. Instead, Blade & Soul requires you to actually learn not only the combination itself, but each ability's timing, and the required position to execute certain parts of the combination (Your hot bar actually can change based on position. i.e. being knocked down may give you access to abilities that cannot be used while standing). Learning these combination, aiming them appropriately, and reacting to incoming attacks are the key to the game's fast paced and sometimes complex combat. If you liked TERA's combat, you'll probably enjoy Blade & Soul's quite a bit.\r\n\r\nLeveling brings the usual grind of story, side, and repeatable quests but the game's environments change so often and are very well rendered that you won't get bored by the scenery for quite some time. Transportaion is handled with sprint, glide, and even water walking abilities to speed up any backtracking you may have do. Instant teleports are available by spending in-game currency. Leveling requires completion of quests and along the way players will gain gear that can be upgraded along with your character. Feed equipment that you don't need to your sword, for example, and you get a sword that levels up as your character does. This primary upgrading mechanic applies to many different gear pieces and keeps players going after loot simply to "feed" their primary equipment.\r\n\r\nThe addition of a "Soul Shield" allows for extra stat customization provided you can find the pieces of the shield you desire. Skills can be further customized at about level 18 (it's actually a story completion point that triggers this mechanic) by spending points in your martial tome to increase ability effectiveness.\r\n\r\nIf you enjoy dungeons, Blade & Soul has quite a few options for you. Each dungeon (be it a full instance or just a cave on the world map) has numerous difficulty levels and varying party size requirements. This keeps the loot fest rolling as certain dungeons will drop the items needed to "Breakthrough" on your weapon and gear upgrading. The game's matchmaking system makes finding a party for these runs very easy.\r\n\r\nBlade & Soul's PvP is based on two main categories; World PvP and Arena PvP. Arena PvP is a 1v1 or 3v3/6v6 (currently only in Korea) affair. Versus matches are simply queued for while World PvP is based on what your character is wearing. You read that right. World PvP is based on what you are wearing. It's a creative way to "flag" for PvP. Simply donning the costume of one of the game's 2 factions makes you able to be attacked by a member of the opposing faction out in the world. Other costumes could turn normally friendly NPCs into enemy NPCs that will attack you on sight.\r\n\r\nBlade & Soul's cash shop varies by geographic location but for the most part contains the normal consumables, costumes, and cosmetics. However, some materials are also available in the shop. The multiple shops actually utilize multiple currency types and a currency exchange system is in place to provide free players with a means to acquire cash shop items. A subscription service is also available and provides additional perks to players that opt for the payment.",
          game_url: "https://www.freetogame.com/open/blade-and-soul",
          genre: "MMORPG",
          platform: "Windows",
          publisher: "NCSoft",
          developer: "NCSoft",
          release_date: "2016-01-19",
          freetogame_profile_url: "https://www.freetogame.com/blade-and-soul",
          minimum_system_requirements: {
            os: "Windows XP",
            processor:
              "Intel Core 2 DUo E6600 2.4 GHz / AMD Athlon 64 X2 Dual Core 4600+",
            memory: "2 GB",
            graphics: "GeForce 8600 GT / ATI Radeon HD 4650",
            storage: "15GB",
          },
          screenshots: [
            {
              id: 26,
              image: "https://www.freetogame.com/g/6/Blade-and-Soul-1.jpg",
            },
            {
              id: 27,
              image: "https://www.freetogame.com/g/6/Blade-and-Soul-2.jpg",
            },
            {
              id: 28,
              image: "https://www.freetogame.com/g/6/Blade-and-Soul-3.jpg",
            },
            {
              id: 29,
              image: "https://www.freetogame.com/g/6/Blade-and-Soul-4.jpg",
            },
          ],
        },
        {
          id: 7,
          title: "Armored Warfare",
          strikeprice: "7999",
          price: "1599",
          thumbnail: "https://www.freetogame.com/g/7/thumbnail.jpg",
          status: "Live",
          short_description:
            "A modern team-based MMO tank game from Obsidian Entertainment.",
          //"description": "Armored Warfare is a free to play 3D team-based MMO tank game from Obsidian Entertainment where you control combat vehicles from the 1950s all the way to modern day vehicles.  It is set in the modern day and is heavily focused on PvP, but it does have a selection of PvE game modes.\r\n\r\nYou can choose to play with one of five different classes: Main Battle Tanks, Light Tanks, Tank Destroyers, Armored Fighting Vehicles and Self-Propelled Guns. Each of the different classes comes with many different combat vehicles and many different combat styles.\r\n\r\nThe games main focus is PvP it does have a PvE side to it as well.  The PvE side of the game is split into two different categories during the missions: Primary and secondary. The Primary Objectives are things that you have to complete during the mission, with your co-op team, to successfully finish the mission. The Secondary Objectives do not have to be completed but they will offer you and your team a bigger reward if completed.\r\n\r\nThe PvP consists of two teams with 15 players each all of them using different vehicles and different classes of vehicles during the match. Players are thrown into a 15-minute match in which they have two different means to when the battle. They can either destroy all of the enemy team's vehicles or capture the enemy base during those 15-minutes.\r\n\r\nThe game boasts great graphics powered by the CryENGINE 3 with destructible terrain. In its current state the game has nine different maps that take you from frozen tundras to sun-scorched deserts as well as doing battle around oil refineries and large population centers.\r\n\r\nArmored Warfare is a large action packed game with modern graphics that you can spend hours upon hours playing and upgrading your different vehicles and crews while enjoying either PvE or PvP.\r\n\r\nArmored Warfare is a large action packed game with modern graphics that you can spend hours upon hours playing and upgrading your different vehicles and crews while enjoying either PvE or PvP.",
          game_url: "https://www.freetogame.com/open/armored-warfare",
          genre: "Shooter",
          platform: "Windows",
          publisher: "My.com (Mail.ru Group)",
          developer: "Obsidian Entertainment",
          release_date: "2015-10-08",
          freetogame_profile_url: "https://www.freetogame.com/armored-warfare",
          minimum_system_requirements: {
            os: "Windows Vista / 7 / 8 / 10 (64 Bit OS)",
            processor: "Core i5-4440 @ 3.1 GHz or better",
            memory: "4 GB",
            graphics: "GeForce GTX 275 or better",
            storage: "10 GB",
          },
          screenshots: [
            {
              id: 30,
              image: "https://www.freetogame.com/g/7/armored-warfare-1.jpg",
            },
            {
              id: 31,
              image: "https://www.freetogame.com/g/7/armored-warfare-2.jpg",
            },
            {
              id: 32,
              image: "https://www.freetogame.com/g/7/armored-warfare-3.jpg",
            },
            {
              id: 33,
              image: "https://www.freetogame.com/g/7/armored-warfare-4.jpg",
            },
          ],
        },
        {
          id: 8,
          title: "Trove",
          strikeprice: "8999",
          price: "3699",
          thumbnail: "https://www.freetogame.com/g/8/thumbnail.jpg",
          status: "Live",
          short_description:
            "A free to play Sandbox massively multiplayer online role-playing game! ",
          //"description": "If you're thirsting for danger and lusting for loot, then I have just the game for you! Grab your friends, hone your blades and set off for adventure in the free to play Sandbox MMORPG Trove. Developed and published by Trion Worlds, Trove is the story of The Sun Goddess, who has shattered the world into infinite realms. You're job is to explore build and protect those realms, all in the name of fun!\r\n\r\nIn Trove, you will play as a Knight, Gunslinger, Ice Sage, Dracolyte, Pirate with a Parrot, or any (or all) of the other Classes available to you, while mastering your abilities: from deadly ninja technologies, to deliciously deadly ice cream crushes. You will be able to upgrade your gear to tackle epic challenges and strut your stuff with killer looks, as well! In Trove, you will experience an infinite about of fully destructible realms, on the backs of fire breathing dragons and purrrrrrfectly whiskered Meownts! You'll jump into action tailored to any skill level as you conquer untamed wilds from the Treasure Isles to Candoria ­ home of the sweet toothed Candy Barbarians.\r\n\r\nTrove allows you to assemble groups of hardy cube kind and crawl your way through huge dungeons that are unique to each of the realms. You'll brave deadly minions, bosses and traps in an attempt to liberate powerful armor and weapons, or dip into smaller lairs for single servings of danger which are perfect for solo fun! You'll also rake in the loot with shimmering hoards of treasure and collectible items, from the deepest and darkest places in Trove. You'll load up on special gear, costumes, decorations, recipes, crafting ingredients, flying carpets, sea­faring ships, dragons of mighty renown, and more!\r\n\r\nBuild yourself a home, or an entire world ­ cornerstones are personal homes that you are able to build block by block, but they're also mobile bases. You are able to drop your Cornerstones at specially­ marked plots in any world you're visiting and viola! Your hand­crafted home ­away­ from­ home will appear, and give you a place to kick back and relax (and craft to your heart's content). When you build a world, you build an entire new Club World with friends. If you feel like making enormous geodesic domes in the desert, go for it! Magnificent castles in the sky? You can do that as well! The sky's the limit in the world of Trove! How will you play? Get started for free, today",
          game_url: "https://www.freetogame.com/open/trove",
          genre: "MMORPG",
          platform: "Windows",
          publisher: "Trion Worlds",
          developer: "Trion Worlds",
          release_date: "2015-07-09",
          freetogame_profile_url: "https://www.freetogame.com/trove",
          minimum_system_requirements: {
            os: "Vista 32-bit Service Pack 2 ",
            processor:
              "Intel Core i5-2XXX @ 2.0GHz / AMD Phenom II X4 @ 2.6GHz",
            memory: "1 GB RAM",
            graphics: "Intel HD Graphics 3000 or better ",
            storage: "1 GB available space",
          },
          screenshots: [
            {
              id: 34,
              image: "https://www.freetogame.com/g/8/trove-1.jpg",
            },
            {
              id: 35,
              image: "https://www.freetogame.com/g/8/trove-2.jpg",
            },
            {
              id: 36,
              image: "https://www.freetogame.com/g/8/trove-3.jpg",
            },
            {
              id: 37,
              image: "https://www.freetogame.com/g/8/trove-4.jpg",
            },
          ],
        },
        {
          id: 9,
          title: "World of Warships",
          strikeprice: "11999",
          price: "1000",
          thumbnail: "https://www.freetogame.com/g/9/thumbnail.jpg",
          status: "Live",
          short_description:
            "A 3D free to play naval action-themed MMO from the creators of World of Tanks! ",
          //"description": "World of Warships is a 3D free to play naval action-themed MMO (massively multiplayer online) from the creators of World of Tanks and World of Warplanes. The high seas cry out as the mightiest warships in history are brought back for a final round of all-out battle to the death in Wargaming's free-to-play World of Warships! Take command of the world's most famous classes of battleships, aircraft carriers, cruisers, and destroyers across dozens of detailed maps in pitched MMO battles against players the world over.\r\n\r\nWorld of Warships offers an unmatched experience in MMO combat. Hear the roar of the guns as the mighty Yamato catches sight of her prey. Guide your air squadrons in for precision torpedo and dive-bomb attacks from the deck of the carrier USS Independence. Get in up close & personal with your foes in a swift tin can destroyer and devastate them with a lethal broadside of explosive torpedoes. The battle is all around you so stay alert!\r\n\r\nAs you participate in battles, you can upgrade the ships in your fleet with more powerful armaments to give your enemies an even greater surprise. Your victory is dependent upon your ability to upgrade your vessel and prepare your crew to meet the enemy. The best captains ride the ocean waves atop their armored steeds. All others are sent to the bottom of the abyss.\r\n\r\nBut World of Warships isn't limited to team matches. Wargaming hosts tons of special events that create a unique challenge for players where the rewards could mean better upgrades to your fleet.\r\n\r\nJoin the navy of World of Warships and see the world of heart racing, fast thinking MMO combat like you've never seen it before!",
          game_url: "https://www.freetogame.com/open/world-of-warships",
          genre: "Shooter",
          platform: "Windows",
          publisher: "Wargaming",
          developer: "Wargaming",
          release_date: "2015-07-02",
          freetogame_profile_url:
            "https://www.freetogame.com/world-of-warships",
          minimum_system_requirements: {
            os: "Windows XP, Windows Vista, or Windows 7",
            processor: "Core2 Duo E6750 (Pentium 4 2.4GHz or Athlon XP 3100+)",
            memory: "4GB DDR2",
            graphics:
              "GeForce 9600GT (512 Mb) / GeForce 6800 GT or Radeon X800 GT",
            storage: "30 GB",
          },
          screenshots: [
            {
              id: 38,
              image: "https://www.freetogame.com/g/9/World-of-Warships-1.jpg",
            },
            {
              id: 39,
              image: "https://www.freetogame.com/g/9/World-of-Warships-2.jpg",
            },
            {
              id: 40,
              image: "https://www.freetogame.com/g/9/World-of-Warships-3.jpg",
            },
            {
              id: 41,
              image: "https://www.freetogame.com/g/9/World-of-Warships-4.jpg",
            },
          ],
        },
        {
          id: 10,
          title: "ArcheAge",
          strikeprice: "7999",
          price: "899",
          thumbnail: "https://www.freetogame.com/g/10/thumbnail.jpg",
          status: "Live",
          short_description:
            "A free-to-play, hybrid fantasy/sandbox MMORPG brought to you by Trion Worlds.",
          //"description": "ArcheAge is a free-to-play, hybrid fantasy/sandbox MMORPG brought to you by Trion Worlds. Set in the fantasy world of Erenor, players are sent out on a journey of their own choosing. Players start on one of two continents: Nuia, home of the elves or Harihara, home of the Ferres. After that, the choices are up to the player from where to go, to why, and what actions to perform.\r\n\r\nArcheAge offers four unique races which possess their own innate qualities with an additional ten skill trees that create up to one hundred and twenty class options. By choosing three of the ten basic skill types, players are essentially able to create their own class tailored to their own unique style of gameplay.\r\n\r\nPets can be purchased and trained into mounts or as companions on the battlefield. The crafting system features 21 professions whose actions are performed using labor points. Labor points are gained based on time spent in game (unless you are a premium member) and accumulate over time. There are 7 different levels of mastery for each profession and each level grants a crafting benefit of some sort to the player.\r\n\r\nArcheAge features both PvE and PvP options. PvE choices include the typical dungeons and quests, while PvP offers features such as the Justice System, Arenas, Naval Battles and World PvP. Community options go beyond what is typical for an MMORPG, and while guilds are a part of the community, there are also factions and families. Land ownership plays a great deal into the gameplay of ArcheAge with individual players and guilds vying for land any time a new zone is added into the game.\r\n\r\nWith so many options to choose from, ArcheAge affords players the unique opportunity to become completely immersed in their world.  From character creation, to the economy, to the community, to the sandbox style world; the choices are endless.",
          game_url: "https://www.freetogame.com/open/archeage",
          genre: "MMORPG",
          platform: "Windows",
          publisher: "Trion Worlds",
          developer: "XL Games",
          release_date: "2014-09-04",
          freetogame_profile_url: "https://www.freetogame.com/archeage",
          minimum_system_requirements: {
            os: "Windows XP / Sp3 / Vista / Windows 7 / Windows 8",
            processor: "Intel Core 2 Duo",
            memory: "2 GB",
            graphics:
              "nVidia GeForce 8000 series 512 MB / Radeon HD 4000 Series or better",
            storage: "40GB",
          },
          screenshots: [
            {
              id: 42,
              image: "https://www.freetogame.com/g/10/archeage-1.jpg",
            },
            {
              id: 43,
              image: "https://www.freetogame.com/g/10/archeage-2.jpg",
            },
            {
              id: 44,
              image: "https://www.freetogame.com/g/10/archeage-3.jpg",
            },
            {
              id: 45,
              image: "https://www.freetogame.com/g/10/archeage-4.jpg",
            },
          ],
        },
        {
          id: 11,
          title: "Neverwinter",
          strikeprice: "6899",
          price: "999",
          thumbnail: "https://www.freetogame.com/g/11/thumbnail.jpg",
          status: "Live",
          short_description:
            "A free-to-play 3D action MMORPG based on the acclaimed Dungeons & Dragons fantasy roleplaying game. ",
          //"description": "If you're a fan of Dungeons and Dragons, have I got a game for you! Neverwinter, developed by Cryptic Studios and published by Perfect World Entertainment, is based on the critically acclaimed fantasy role playing game and the best part is ­ it's free to play. In the world of Neverwinter, you will explore and defend one of the most beloved cities from the Dungeons and Dragons Forgotten Realms Campaign Setting, as it rises from the ashes of total destruction. In this totally immersive MMORPG you will go from the besieged walls of the city, to the subterranean passageways and search for forgotten secrets and lost treasure along the way.\r\n\r\nNeverwinter is completely free to play, from the very first level, all the way up to the level cap, so anyone is able to experience the engaging action and combat it brings. You don't have to worry about tab­targeting or auto­attacking to defeat your enemies, Neverwinter provides an amazing combat experience where every action will require planning and feel visceral and look spectacular.\r\n\r\nNeverwinter also comes with Foundry, which is a dynamic tool set that will provide you with the game assets and a sandbox environment that will allow you to create your own adventures ­ and when you are ready to unveil your creation to the world ­ you are able to hook it up directly to the existing work so everyone else in the community can experience it as well!\r\n\r\nWhether you are familiar with Dungeons and Dragons from the tabletop game or from the novels, Neverwinter has recreated many of the iconic classes, locations and encounters that you will know and love! You might choose to go on an adventure as a mighty Guardian Fighter, choose to deceive foes as a Trickster Rogue, or follow the righteous path as a Devoted Cleric, but whatever journey you decide to take in Neverwinter you will face Kobolds, Beholders, Mimics and many other creatures from the Dungeons and Dragons universe, and you will surely feel right at home!",
          game_url: "https://www.freetogame.com/open/neverwinter",
          genre: "MMORPG",
          platform: "Windows",
          publisher: "Perfect World Entertainment",
          developer: "Cryptic Studios",
          release_date: "2013-12-06",
          freetogame_profile_url: "https://www.freetogame.com/neverwinter",
          minimum_system_requirements: {
            os: "Windows® XP, Windows Vista, Windows 7 or Windows 8 ",
            processor: "Dual-core 2.0GHz CPU or better",
            memory: "1 GB RAM ",
            graphics:
              "Shader Model 2.0 or higher, GeForce 6800 or ATI Radeon X850 performance, 128MB+ video ram",
            storage: "4 GB available space ",
          },
          screenshots: [
            {
              id: 46,
              image: "https://www.freetogame.com/g/11/Neverwinter-1.jpg",
            },
            {
              id: 47,
              image: "https://www.freetogame.com/g/11/Neverwinter-2.jpg",
            },
            {
              id: 48,
              image: "https://www.freetogame.com/g/11/Neverwinter-3.jpg",
            },
            {
              id: 49,
              image: "https://www.freetogame.com/g/11/Neverwinter-4.jpg",
            },
          ],
        },
        {
          id: 12,
          title: "War Thunder",
          strikeprice: "5799",
          price: "499",
          thumbnail: "https://www.freetogame.com/g/12/thumbnail.jpg",
          status: "Live",
          short_description:
            "A MMO shooter that puts you in command of hundreds of the finest combat vehicles of World War II.",
          //"description": "War Thunder is a massively multiplayer shooter that puts you in command of hundreds of the finest combat vehicles of World War II. You'll pilot warplanes in exciting PvP dogfights and rumble across the battlefield in tanks, battling against foes on across several vintage maps, featuring diverse terrain and offering several strategic options. There are many different ways to play War Thunder, ranging from quick arcade mode-style combat to competitive, realistic battles.\r\n\r\nThe vehicles in War Thunder represent WWII-era tanks and planes from several different nations, including the United States, Great Britain, Germany, Japan, and the USSR. Battles earn you currency you can use to upgrade your vehicles with better engines, weaponry, and other modifications, and you'll also earn experience that you can use to unlock more vehicles and increase your crew's performance. Planes include quick and agile fighters, giant flying fortresses, and precision bombers, while tanks run the gamut from light to heavy to self-propelled artillery. Each has its own strengths and weaknesses and learning how to properly use your vehicles is the key to victory.\r\n\r\nThe most common game modes are PvP battles that revolve around a series of control points or that task players with destroying enemy vehicles, whether AI-controlled or belonging to other players. Each player brings a squad of up to five vehicles and, when your current vehicle is destroyed, you'll choose another one to ride back into combat. You can also adjust battle realism, opting for simpler controls with target reticles and other helpful guides, or complete realism, with very few artificial elements in the way of aid. In addition to PvP battles, there are also PvE campaigns and missions you can take on alone or with other players. No matter how you play War Thunder, the action will be easy to find and the battles will have you on the edge of your seat!",
          game_url: "https://www.freetogame.com/open/war-thunder",
          genre: "Shooter",
          platform: "Windows",
          publisher: "Gaijin Entertainment",
          developer: "Gaijin Entertainment",
          release_date: "2013-08-15",
          freetogame_profile_url: "https://www.freetogame.com/war-thunder",
          minimum_system_requirements: {
            os: "Windows XP SP2, Windows Vista SP1, Windows 7, Windows 8",
            processor: "2.2 GHz",
            memory: "1 GB RAM ",
            graphics: "Radeon X26XX / GeForce 7800 GT",
            storage: "3 GB available space ",
          },
          screenshots: [
            {
              id: 50,
              image: "https://www.freetogame.com/g/12/War-Thunder-1.jpg",
            },
            {
              id: 51,
              image: "https://www.freetogame.com/g/12/War-Thunder-2.jpg",
            },
            {
              id: 52,
              image: "https://www.freetogame.com/g/12/War-Thunder-3.jpg",
            },
            {
              id: 53,
              image: "https://www.freetogame.com/g/12/War-Thunder-4.jpg",
            },
          ],
        },
        {
          id: 13,
          title: "Guild Wars 2",
          strikeprice: "9999",
          price: "199",
          thumbnail: "https://www.freetogame.com/g/13/thumbnail.jpg",
          status: "Live",
          short_description:
            "A free-to-play MMORPG, the follow-up to ArenaNet's popular Guild Wars. ",
          //   //"description": "Guild Wars 2 is a free-to-play open-world MMORPG, the follow-up to ArenaNet's popular Guild Wars. Building on that first game's guiding principles, it offers a huge world to explore, populated with dynamic events that can start at any time and provide excellent variety in gameplay. It also features PvP, both open-world and instanced, dungeons, raiding, storytelling, and everything else you'd expect in a full-featured massively multiplayer online RPG.\r\n\r\nYou'll choose from among the five races of Tyria – human, norn, charr, sylvari, and asura – and one of several classes. Each class has remarkable versatility, allowing it to fill a number of roles in a party and reducing the need for a full MMO-style "trinity." Characters have limited skill bars of 10 slots; the first five are determined by your weapon and the second five by skills that you choose: a healing skill, three utility skills, and an elite skill. Different classes have ways to access other skills, and most classes have the ability to swap out weapons, so you'll still have some variety in exactly what tools you can bring to each fight.\r\n\r\nThe heart of Guild Wars 2 is its open-world content. While there is some static content, in the form of "hearts" that you can complete once for NPCs, most of the game revolves around dynamic events, which spring up in the world at various times and often require large groups of players to complete. There are no traditional quests that require you to speak to NPCs to accept or complete them; instead, you can simply go from event to event, helping the people of Tyria as you see fit. Some events are parts of larger chains that string together and culminate in a giant event against a great threat to Tyria and require a hundred or more players to complete.",
          game_url: "https://www.freetogame.com/open/guild-wars-2",
          genre: "MMORPG",
          platform: "Windows",
          publisher: "NCsoft",
          developer: "ArenaNet",
          release_date: "2012-08-28",
          freetogame_profile_url: "https://www.freetogame.com/guild-wars-2",
          minimum_system_requirements: {
            os: "Windows® XP Service Pack 3 or better",
            processor:
              "Intel® Core 2 Duo 2.0 GHz, Core i3 OR AMD Athlon 64 X2, or better",
            memory: "2 GB RAM",
            graphics:
              "NVIDIA® GeForce® 7800, ATI X1800, Intel HD 3000, or better (256 MB of video RAM and shader model 3.0 or better)",
            storage: "35 GB available HDD space",
          },
          screenshots: [
            {
              id: 54,
              image: "https://www.freetogame.com/g/13/Guil-Wars-2-1.jpg",
            },
            {
              id: 55,
              image: "https://www.freetogame.com/g/13/Guil-Wars-2-2.jpg",
            },
            {
              id: 56,
              image: "https://www.freetogame.com/g/13/Guil-Wars-2-3.jpg",
            },
            {
              id: 57,
              image: "https://www.freetogame.com/g/13/Guil-Wars-2-4.jpg",
            },
          ],
        },
        {
          id: 14,
          title: "Star Trek Online",
          strikeprice: "8999",
          price: "1000",
          thumbnail: "https://www.freetogame.com/g/14/thumbnail.jpg",
          status: "Live",
          short_description:
            "A free-to-play, 3D, Sci-Fi MMORPG based on the popular Star Trek series.",
          //"description": "Star Trek Online (STO) is a free-to-play, 3D, Sci-Fi MMORPG based on the popular Star Trek series. In this massively multiplayer online game brought to you by Cryptic Studios, players have many options to create their own destiny.\r\n\r\nDuring character creation players are afforded the ability to choose between three canonical races: Federation, Klingon and Romulan. Each of these races comes with their own inherent blend of racial traits and players have the opportunity to customize their own unique species.\r\n\r\nEnjoy a vast array of gameplay options as you explore iconic locations from the Star Trek series including Starfleet Academy, Deep Space Nine, The First City of Qo'nos, and many more.  Participate in many different mission types to advance your character such as Star Fleet missions (raids), Genesis System missions (exploration), and The Foundry, where you can create your own playable mission to share with your friends and the whole Star Trek Online Universe as well as participate in other user generated missions. With the Duty Officer System, there is opportunity for offline progression as well, though this is optional.\r\n\r\nStar Trek Online also has a skill-based crafting system which involves collecting various particles or data samples throughout the universe. With these particles and data samples, players are then able to craft items to assist them with their missions. As crafting skill increases, players are able to access a wider variety of more powerful items. Most items in the game can be upgraded for level and rarity and there is the opportunity to create Epic level items as well.\r\n\r\nThe MMORPG game can be downloaded for Windows from the Perfect World Entertainment platform, Arc Games, or from Steam. Perfect World Entertainment also offers a standalone Mac client download option.",
          game_url: "https://www.freetogame.com/open/star-trek-online",
          genre: "MMORPG",
          platform: "Windows",
          publisher: "Perfect World Entertainment",
          developer: " Cryptic Studios",
          release_date: "2010-02-02",
          freetogame_profile_url: "https://www.freetogame.com/star-trek-online",
          minimum_system_requirements: {
            os: "Windows XP SP2 / Windows Vista / Windows 7 ",
            processor: "Intel Core 2 Duo 1.8 Ghz or AMD Athlon X2 +3800 ",
            memory: "1GB RAM ",
            graphics:
              "NVIDIA GeForce 7800 / ATI Radeon X1800 / Intel HD Graphics",
            storage: "10GB Free Disk Space",
          },
          screenshots: [
            {
              id: 58,
              image: "https://www.freetogame.com/g/14/Star-Trek-Online-1.jpg",
            },
            {
              id: 59,
              image: "https://www.freetogame.com/g/14/Star-Trek-Online-2.jpg",
            },
            {
              id: 60,
              image: "https://www.freetogame.com/g/14/Star-Trek-Online-3.jpg",
            },
            {
              id: 61,
              image: "https://www.freetogame.com/g/14/Star-Trek-Online-4.jpg",
            },
          ],
        },
        {
          id: 15,
          title: "Crossfire",
          strikeprice: "6799",
          price: "999",
          thumbnail: "https://www.freetogame.com/g/15/thumbnail.jpg",
          status: "Live",
          short_description:
            "A first person tactical shooter with a huge selection of game modes!",
          //"description": "Crossfire is a first person tactical shooter that has a huge selection of game modes to try out, a decent amount of character customization, and loads of weapons for every situation you could find yourself in. Crossfire features two groups, Blacklist and Global Risk, that are constantly at odds with one another. Players must join an online team and participate in various game modes with their selected faction to destroy their enemies.\r\n\r\nNever fear about running out of game modes to try out, Crossfire boasts 19 different game modes that you can play through time and time again. Team Deathmatch, Destruction Mode, Elmination, Ghost Mode, Free for All, Mutation Mode, Escape Mode, Hero Mode, Zombie Apocalypse, Hero Mode X, Bounty Mode, Wave Mode, Shadow Mode, Ghosts vs. Mutants, Soccer mode, RPG Mode, Super Soldier TDM, Rapid Surge Mode, and Zombie Knight Mode.\r\n\r\nPlayers get to create their own unique characters that represent them in game. They can choose from tons of different cosmetic items that make their characters one of a kind. As players compete in Crossfire they level up and unlock more weapons and character customization options.",
          game_url: "https://www.freetogame.com/open/crossfire",
          genre: "Shooter",
          platform: "Windows",
          publisher: "Neowiz Games",
          developer: "SmileGate",
          release_date: "2007-05-03",
          freetogame_profile_url: "https://www.freetogame.com/crossfire",
          minimum_system_requirements: {
            os: "Windows Vista, And Windows 7",
            processor: "Pentium 4 - 1.5GHz",
            memory: "512mb",
            graphics: "GeForce 5600",
            storage: "1.7GB",
          },
          screenshots: [
            {
              id: 62,
              image: "https://www.freetogame.com/g/15/Cross-Fire-1.jpg",
            },
            {
              id: 63,
              image: "https://www.freetogame.com/g/15/Cross-Fire-2.jpg",
            },
            {
              id: 64,
              image: "https://www.freetogame.com/g/15/Cross-Fire-3.jpg",
            },
            {
              id: 963,
              image: "https://www.freetogame.com/g/15/Cross-Fire-2.jpg",
            },
          ],
        },
      ];

      let imageNo = 0;
      setInterval(() => {
        if (imageNo == 8) {
          document.querySelector(`#progress-bar${7}`).style.background = null;
          imageNo = 0;
        }

        let bigImage = document.querySelector("#bigImage");
        let progess_bar = document.querySelector(`#progress-bar${imageNo}`);
        let progess_bar_pre = document.querySelector(
          `#progress-bar${imageNo - 1}`
        );
        let title = document.querySelector("#title");
        let genre = document.querySelector("#genre");
        let short_description = document.querySelector("#short_description");
        let mainBuyNowButton = document.querySelector(".mainBuyNowButton");

        // console.log(arr[imageNo].screenshots[0].image);

        newImage = arr[imageNo].screenshots[0].image;
        title.innerHTML = arr[imageNo].title;
        genre.innerHTML = arr[imageNo].genre;
        short_description.innerHTML = arr[imageNo].short_description;
        mainBuyNowButton.id = arr[imageNo].id;
        // console.log(newImage, imageNo);
        if (imageNo !== 0) {
          progess_bar_pre.style.background = null;
        }

        let percentage = 0;
        setInterval(() => {
          percentage += 10;
          // console.log(percentage);
          // progess_bar.style.background= `linear-gradient(90deg, #A09DE2 ${percentage}%, black 50%)`;
          // if(percentage<=100){percentage=0};
        }, 300);

        bigImage.style.backgroundImage = "url(" + newImage + ")";

        progess_bar.style.background = `linear-gradient(90deg, #A09DE2 ${percentage}%, black 50%)`;

        if (imageNo !== 0) {
          progess_bar_pre.style.background = null;
        }
        imageNo++;
      }, 3000);
    

    !(function (t, e) {
      t.artibotApi = {
        l: [],
        t: [],
        on: function () {
          this.l.push(arguments);
        },
        trigger: function () {
          this.t.push(arguments);
        },
      };
      var a = !1,
        i = e.createElement("script");
      (i.async = !0),
        (i.type = "text/javascript"),
        (i.src = "https://app.artibot.ai/loader.js"),
        e.getElementsByTagName("head").item(0).appendChild(i),
        (i.onreadystatechange = i.onload =
          function () {
            if (
              !(
                a ||
                (this.readyState &&
                  "loaded" != this.readyState &&
                  "complete" != this.readyState)
              )
            ) {
              new window.ArtiBot({ i: "4fc2ac37-3d97-4f29-98cc-2a4e4858c5f7" });
              a = !0;
            }
          });
    })(window, document);
  
    
      var userName = JSON.parse(localStorage.getItem("UserName"));
      console.log(userName);
      if (userName !== null) {
        document.querySelector("#signin").textContent = userName;
      } else {
      }

      var signin = document.querySelector("#signin").textContent;
      //console.log(signin);
      if (signin === "sign in") {
        setInterval(() => {
          window.location.href = "./pages/signin.html";
        }, 5000);
      }

      document
        .querySelector("#navSearch")
        .addEventListener("keypress", getMainData);

      function getMainData(event) {
        let input = document.querySelector("#navSearch").value;

        if (event.key === "Enter") {
          console.log(input);
          var inp = [];
          inp.push(input);
          localStorage.setItem("inputTitle", JSON.stringify(inp));
          window.location.href = "/pages/Search.html";
        }
      }

      window.onscroll = function () {
        stickyNavbar();
      };

      var navbar = document.querySelector("#secondNav");
      var sticky = navbar.offsetTop;

      function stickyNavbar() {
        if (window.pageYOffset >= sticky) {
          navbar.classList.add("fixed", "w-full", "top-0");
        } else {
          navbar.classList.remove("fixed");
        }
      }

      // document.querySelector("#input").addEventListener("keypress", getData);
      //
      // import apiCall from "./fetch.js";

      function getData(event) {
        var input = document.querySelector("#input").value;

        if (event.key === "Enter") {
          console.log(input);
          let url = "http://127.0.0.1:4000/api/gameAllData?genre=" + input + "";

          let res = apiCall(url);
          res.then((res) => {
            //console.log(res)
            data = res;
            console.log(data.length);
            if (data.length === 0) {
              swal("Oops!", "No Result Found", "error");
            }
            appendData(res);
          });
          res.catch((error) => {
            console.log(error);
          });
        }
      }

      function showInputBoxInMobileView() {
        document.querySelector("#dicoverHide").classList.toggle("hidden");
        document.querySelector("#searchDiv").classList.toggle("hidden");
        document.querySelector("#searchicon").classList.add("hidden");
        document.querySelector("#secondNav").classList.toggle("justify-start");
      }
    
    // let gamesArr = JSON.parse(localStorage.getItem("cartGameData")) || [];
   
    // document.querySelector("#cartTotal").innerText = `${gamesArr.length}`;


  let gamesArr = JSON.parse(localStorage.getItem("cartGameData")) || [];
  document.querySelector("#cartTotal").innerText = `${gamesArr.length}`;