var reglesChocholle = {"2": "Le joueur distribue 2 gorgées à la personne de son choix",
                     "3": "Le joueur distribue 3 gorgées à la personne de son choix",
                     "4": "Rien de prévu, a vous de jouer !",
                     "5": "Rien de prévu, a vous de jouer !",
                     "6": "Rien de prévu, a vous de jouer !",
                     "7": "Le joueur décide d’une nouvelle règle de son choix.",
                     "8": "Le joueur se trouvant à sa droite doit boire 2 gorgées",
                     "9": "Le joueur se trouvant à sa gauche doit boire 2 gorgées",
                     "10": "Le joueur doit boire 2 gorgées",
                     "Valet": "Le joueur choisi un thème (couleur, musique…) Tour après tour chacun doit citer une couleur, le premier à ne pas en trouver doit boire.",
                     "Dame": "Le joueur doit tirer 2 cartes supplémentaires",
                     "Roi": "À chaque fois qu’un roi est tiré, le joueur verse une partie de son verre dans le verre au milieu. Le joueur qui tire le 4ème roi doit boire le verre !",
                     "As": "Tout le monde pose son pouce sur son front et crie: Chochotte ! Le dernier à crier boit dans son verre"};

var cartes = [{carte: "2", couleur: "Pique"},{carte: "2", couleur: "Trefle"},{carte: "2", couleur: "Coeur"},{carte: "2", couleur: "Carreau"},
              {carte: "3", couleur: "Pique"},{carte: "3", couleur: "Trefle"},{carte: "3", couleur: "Coeur"},{carte: "3", couleur: "Carreau"},
              {carte: "4", couleur: "Pique"},{carte: "4", couleur: "Trefle"},{carte: "4", couleur: "Coeur"},{carte: "4", couleur: "Carreau"},
              {carte: "5", couleur: "Pique"},{carte: "5", couleur: "Trefle"},{carte: "5", couleur: "Coeur"},{carte: "6", couleur: "Carreau"},
              {carte: "6", couleur: "Pique"},{carte: "6", couleur: "Trefle"},{carte: "6", couleur: "Coeur"},{carte: "6", couleur: "Carreau"},
              {carte: "7", couleur: "Pique"},{carte: "7", couleur: "Trefle"},{carte: "7", couleur: "Coeur"},{carte: "7", couleur: "Carreau"},
              {carte: "8", couleur: "Pique"},{carte: "8", couleur: "Trefle"},{carte: "8", couleur: "Coeur"},{carte: "8", couleur: "Carreau"},
              {carte: "9", couleur: "Pique"},{carte: "9", couleur: "Trefle"},{carte: "9", couleur: "Coeur"},{carte: "9", couleur: "Carreau"},
              {carte: "10", couleur: "Pique"},{carte: "10", couleur: "Trefle"},{carte: "10", couleur: "Coeur"},{carte: "10", couleur: "Carreau"},
              {carte: "Valet", couleur: "Pique"},{carte: "Valet", couleur: "Trefle"},{carte: "Valet", couleur: "Coeur"},{carte: "Valet", couleur: "Carreau"},
              {carte: "Dame", couleur: "Pique"},{carte: "Dame", couleur: "Trefle"},{carte: "Dame", couleur: "Coeur"},{carte: "Dame", couleur: "Carreau"},
              {carte: "Roi", couleur: "Pique"},{carte: "Roi", couleur: "Trefle"},{carte: "Roi", couleur: "Coeur"},{carte: "Roi", couleur: "Carreau"},
              {carte: "As", couleur: "Pique"},{carte: "As", couleur: "Trefle"},{carte: "As", couleur: "Coeur"},{carte: "As", couleur: "Carreau"}];

var reglesPicoloApero = [{"regle": "Le premier qui enlève 2 vêtements distribue ## gorgées.", "joueurs":0},
                    {"regle": "&& invente une nouvelle règle.", "joueurs":1},
                    {"regle":"Il fait soif.", "joueurs":0},
                    {"regle":"Il fait soif.", "joueurs":0},
                    {"regle":"Le plus faible boit ## gorgées (il faut se renforcer).", "joueurs":0},
                    {"regle":"&&, tu la fermes et tu bois ## gorgées.", "joueurs":1},
                    {"regle":"&&, tu la fermes et tu bois ## gorgées.", "joueurs":1},
                    {"regle":"Thème : Les moments gênants dans la vie. && commence. Le perdant boit ## gorgées.", "joueurs":1},
                    {"regle":"&& choisis un thème. Le perdant bois ## gorgées.", "joueurs":1},
                    {"regle":"&& choisis un thème. Le perdant bois ## gorgées.", "joueurs":1},
                    {"regle":"Les tatoués distribuent autant de gorgées quils ont de tatouages.", "joueurs":0},
                    {"regle":"&& et && forment un couple. Lorsque l'un boit, l'autre boit aussi.", "joueurs":2},
                    {"regle":"Les femmes distribuent ## gorgées chacune.", "joueurs":0},
                    {"regle":"Les hommes distribuent ## gorgées chacun.", "joueurs":0},
                    {"regle":"ManPower : Les hommes boivent ## gorgées.", "joueurs":0},
                    {"regle":"GirlPower : Les femmes boivent ## gorgées.", "joueurs":0},
                    {"regle":"Votez si && est un putain d'extrémiste. ## gorgées pour les minoritaires.", "joueurs":1},
                    {"regle":"Buvez ## gorgées si vous avez déja eu des emmerdes avec les flics.", "joueurs":0},
                    {"regle":"Faites un tour de \"Je n\'ai jamais\", buvez ## si vous l\'avez fait.", "joueurs":0},
                    {"regle":"Faites un tour de \"Je n\'ai jamais\", buvez ## si vous l\'avez fait.", "joueurs":0},
                    {"regle":"&& finit ton verre avant que && ait compté jusqu\'a 20.", "joueurs":2},
                    {"regle":"&&, fond toi dans le décor pendant 1 minutes ou bois ##0 gorgées.", "joueurs":1},
                    {"regle":"&& boit autant de gorgées qu\'il y a de bouteilles d\'alcool fort sur la table.", "joueurs":1},
                    {"regle":"&&, fais nous l'honneur de finir ton verre.", "joueurs":1},
                    {"regle":"&&, fais nous l'honneur de finir ton verre.", "joueurs":1},
                    {"regle":"Règle : Le premier a se rendre sur le trône boit 1 gorgées. Le deuxième boit 2 gorgées, le troisème en boit ##, etc...", "joueurs":0},
                    {"regle":"Le plus chauve boit ## gorgées.", "joueurs":0},
                    {"regle":"Combien font 2+6-9+7x0+2+0 ? Le premier qui trouve distribue le résultat en gorgée. Le lecteur ne joue pas.", "joueurs":0},
                    {"regle":"Règle : && devient DJ de la soirée, personne ne peux contester ses choixs musicaux.", "joueurs":1},
                    {"regle":"Vote : Plutôt lécher des toilettes turques ou lécher le cul ton voisin ?", "joueurs":0},
                    {"regle":"La prochaine personne qui boit prends le double.", "joueurs":0},
                    {"regle":"La prochaine personne qui boit prends le double.", "joueurs":0},
                    {"regle":"Le dernier arrivé à la soirée bois ## gorgées.", "joueurs":0},
                    {"regle":"Chacun raconte un moments dégueulasse sur lui ou tu finis ton verre.", "joueurs":0},
                    {"regle":"Bougeotte : Le dernier à se mettre debout boit ## gorgées.", "joueurs":0},
                    {"regle":"&& décris-nous puis imite la meilleure fellation, ou bois ## gorgées.", "joueurs":1},
                    {"regle":"Tous ceux qui dorment avec un doudou boivent une gorgée.", "joueurs":0},
                    {"regle":"Tour de l'amitié : tout le monde prends ## gorgées.", "joueurs":0},
                    {"regle":"&&, tu as une immunité pendant 5 minutes. Profites-en pour reposer ton estomac.", "joueurs":1},
                    {"regle":"&& devine l\'age de && et bois 1 gorgées par année d'écart.", "joueurs":2},
                    {"regle":"&& : interdiction de boire dans ton verre pendant ## minutes. Vole dans celui des autres pendant ce temps-la.", "joueurs":1},
                    {"regle":"&& et &&, dites une couleur en même temps. Si vous choisissez la même, buvez ## gorgées.", "joueurs":2},
                    {"regle":"Le Sam peut distribuer ## gorgées.", "joueurs":0},
                    {"regle":"La galanterie avant tout : les filles, vous pouvez échanger votre place avc qui vous voulez.", "joueurs":0},
                    {"regle":"&& : plutôt prendre un bain de sperme ou un bain de règles ? Puis distribue ## gorgées si tu as répondu.", "joueurs":1},
                    {"regle":"Thème : Les parties érogènes du corps. && commence.", "joueurs":1},
                    {"regle":"Thème : Les dictateurs. && commence.", "joueurs":1},
                    {"regle":"Thème : Pokemon. && commence.", "joueurs":1},
                    {"regle":"&&, tu n\'as plus le droit d'utiliser tes mains pour boire pendant 5 min.", "joueurs":1},
                    {"regle":"&& bois autant de gorgées qu\'il y a de filles dans la pièce.", "joueurs":1},
                    {"regle":"&& reçoit un teton-fire de && ou bois ## gorgées.", "joueurs":2},
                    {"regle":"Tous ceux qui ont déja fait une soirée dans les 2 jours boivent ## gorgées. (C\'est pas bien mais vous êtes les meilleurs)", "joueurs":0},
                    {"regle":"Tous ceux qui ont leur permis boivent ## gorgées.", "joueurs":0},
                    {"regle":"La sagesse est de mise : le plus vieux distribue ## gorgées.", "joueurs":0},
                    {"regle":"&& a le pouvoir du freeze. A chaque fois qu'il dit \'Freeze\' le dernier qui s'immobilise boit ## gorgées.", "joueurs":1},
                    {"regle":"Qui pourrait faire acteur porno ? Tu bois 1 gorgée pour chaque personne te désignant.", "joueurs":0},
                    {"regle":"Le joueur a gauche et a droite de celui qui lit cette règle boivent ## gorgées.", "joueurs":0},
                    {"regle":"Les gauchers distribuent ## gorgées.", "joueurs":0},
                    {"regle":"&& est le nouveau cupidon : désigne un nouveau couple. Lorsque l\'un boit, l\'autre boit aussi. Ils prendront leurs gorgées en croisant leurs bras...", "joueurs":1},
                    {"regle":"Défi : && converse avec un meuble. Si ce n\'est pas convaincant tu bois ## gorgées.", "joueurs":1},
                    {"regle":"&& est le roi des pouces. Lorsqu'il pose son pouce sur la table, le dernier à l\'imiter boit ## gorgées.", "joueurs":1},
                    {"regle":"&& choisit quelqu\'un qui distribuera ## gorgées.", "joueurs":1},
                    {"regle":"Défi : && récite l'alphabet à l'envers, si tu te trompes boit ## gorgées.", "joueurs":1},
                    {"regle":"Eh && ! T\'es garé où ? Laisse && te refaire le plein.", "joueurs":2},
                    {"regle":"Les filles, désignez un garçons qui sera considérer comme une fille pour le reste de la partie.", "joueurs":0},
                    {"regle":"Tous ceux qui sont debout boivent ## gorgées.", "joueurs":0},
                    {"regle":"&& choisis : Boire ## gorgées sans les mains ou boire ## gorgées avec les mains.", "joueurs":1},
                    {"regle":"Le / les propriétaires des lieux distribuent ## gorgées.", "joueurs":0},
                    {"regle":"Si tu es à une position impaire en partant de && (position 1), bois ## gorgées.", "joueurs":1},
                    {"regle":"Si tu es à une position paire en partant de && (position 1), bois ## gorgées.", "joueurs":1},
                    {"regle":"&& doit s'asseoir par terre pour le reste du jeu.", "joueurs":1},
                         {"regle":"A tour de rôle, bois ## et raconte un de tes rêves érotiques.", "joueurs":0},
                         {"regle":"&& lit sur les lèvres de && un mot, si tu échoues boit ## gorgées.", "joueurs":2},
                         {"regle":"Cascade : && commence a boire et tout le monde l'imite jusqu'a ce qu'il décide de s'arreter.", "joueurs":1},
                         {"regle":"&& boit ## de gorgées avec le verre sur le dos de la main", "joueurs":1},
                         {"regle":"&& boit ## de gorgées avec les coudes.", "joueurs":1},
                         {"regle":"&& boit ## de gorgées sans les mains.", "joueurs":1},
                         {"regle":"Thème : && choisit un pays qui deviendra le thème.", "joueurs":1},
                         {"regle":"&& prends 2 gorgées que tu gardes dans la bouche jusqu'a que tu sois a nouveau mentionné.", "joueurs":1},
                         {"regle":"Tous ceux qui portent du rouge à lèvre boivent ## gorgées.", "joueurs":0},
                         {"regle":"Tous ceux qui ne portent pas de rouge à lèvre boivent ## gorgées.", "joueurs":0},
                         {"regle":"Question : &&, avec qui aimerais-tu avoir une relation sexuelle ?", "joueurs":1},
                         {"regle":"Tous ceux qui ont déja pissé dans une piscine boivent ## gorgées.", "joueurs":0},
                         {"regle":"Tous ceux qui ont déja chié dans l'océan boivent ## gorgées.", "joueurs":0},
                         {"regle":"The floor is lava ! Le dernier a touché le sol boit ## gorgées.", "joueurs":0},
                         {"regle":"Tout le monde verse une partie de son verre dans celui de &&", "joueurs":1},
                         {"regle":"&& peut verser une partie de son verre dans celui des autres joueurs.", "joueurs":1},
                         {"regle":"&& est le chimiste, tu peux créer le verre que tu veux à qui tu veux.", "joueurs":1},
                         {"regle":"&&, si tu sais d'où vient la tequila, distribue ## gorgées, sinon prends les.", "joueurs":1},
                         {"regle":"&&, si tu arricves tes pieds en ayant les jambes tendues, distrbues ## gorgées, sinon prends les.", "joueurs":1},
                         {"regle":"Votez qui de && ou && est le plus intelligent, le perdant prends ## gorgées.", "joueurs":2},
                         {"regle":"Votez qui de && ou && est le plus moche, il prends ## gorgées.", "joueurs":2},
                         {"regle":"Le dernier à lever la main prends ## gorgées.", "joueurs":0},
                         {"regle":"Virus : && doit désormais parler avec l'accent africain", "joueurs":2},
                         {"regle":"&& joue un air de musique sur les fesses de &&. Si personne ne reconnait, tu bois ## gorgées", "joueurs":2},
                         {"regle":"&&, pose ton verre sur ton front puis boit le sans utiliser tes mains.", "joueurs":1},
                         {"regle":"Votez qui de && ou && est le plus intelligent, le perdant prends ## gorgées.", "joueurs":2},
                         {"regle":"&& distribue ## gorgées ou && en boit le double", "joueurs":2},
                         {"regle":"Tous ceux qui ne regardent pas Rick et Morty prennent ## gorgées", "joueurs":0},
                         {"regle":"Thème : Les choses qu'on peut trouver dans la bouche d'enfants. && commence.", "joueurs":1},
                         {"regle":"Tous ceux qui sont plus grands que && prennent ## gorgées.", "joueurs":1},
                         {"regle":"Tous ceux qui ont de plus grand pieds que && prennent ## gorgées.", "joueurs":1},
                   ];

var reglesPicolo100 = [{"regle":"&& boit ## de gorgées a chaque tour jusqu'a ce que tu sois appelé à nouveau.", "joueurs":1},
                      {"regle":"&& prends autant de gorgées que tu le souhaites, puis && en prendra le double.", "joueurs":2},
                      {"regle":"Il fait soif.", "joueurs":0},
                      {"regle":"Il fait soif.", "joueurs":0},
                      {"regle":"Il fait soif.", "joueurs":0},
                      {"regle":"Il fait soif.", "joueurs":0},
                      {"regle":"Il fait soif.", "joueurs":0},
                      {"regle":"Il fait soif.", "joueurs":0},
                      {"regle":"Il fait soif.", "joueurs":0},
                      {"regle":"Il fait soif.", "joueurs":0},
                      {"regle":"Il fait soif.", "joueurs":0},
                      {"regle":"Il fait soif.", "joueurs":0},
                      {"regle":"Il fait soif.", "joueurs":0},
                      {"regle":"Il fait soif.", "joueurs":0},
                      {"regle":"Il fait soif.", "joueurs":0},
                      {"regle":"Il fait soif.", "joueurs":0},
                      {"regle":"Il fait soif.", "joueurs":0},
                      {"regle":"Il fait soif.", "joueurs":0},
                      {"regle":"Il fait soif.", "joueurs":0},
                      {"regle":"Il fait soif.", "joueurs":0},
                      {"regle":"Il fait soif.", "joueurs":0},
                      {"regle":"Il fait soif.", "joueurs":0},
                      {"regle":"Il fait soif.", "joueurs":0},
                      {"regle":"Il fait soif.", "joueurs":0},
                      {"regle":"Il fait soif.", "joueurs":0},
                      {"regle":"Il fait soif.", "joueurs":0},
                      {"regle":"Il fait soif.", "joueurs":0},
                      {"regle":"Il fait soif.", "joueurs":0},
                      {"regle":"Il fait soif.", "joueurs":0},]