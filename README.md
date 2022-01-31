# Test technique 1 de HeyTeam

L'objectif est de restituer le tableau js ( var values ) ci-dessous en html (dans une <table> de 3 colonnes )

| 180 	| 195 	| 26  	|
| 161 	| 31  	| 98  	|
| 102 	| 102 	| 102 	|
| ... 	| ... 	| ... 	|

puis de colorer les cellules en appliquant ces 2 règles :

1/ Mettre en rouge les valeurs inférieures à 100 sur l'ensemble des colonnes. Chaque nombre peut être coloré une seule fois en le priorisant sur les colonnes de droite à gauche.
Ex: Le dernier "31" de la dernière colonne sera rouge mais pas les autres. 

2/ Mettre en vert les valeurs supérieures à 100 sur l'ensemble des colonnes. Chaque nombre peut être coloré deux fois en les priorisant sur les colonnes de gauche à droite.
Ex: Le 1er "102" de la colonne 1 sera vert ainsi que celui de la colonne 2 mais pas celui de la colonne 3.

var values = [[180,161,102,31,31,46,175,199,106,89,137,200,199,126,159,114,184,198,10,183,30,150,47,187,35,126,131,159,173,178,174,69,87,157,75,190,181,122,65,19,63,67,56,115,65,162,159,144,77,36],[195,31,102,148,119,28,190,197,145,190,84,91,62,101,72,178,81,92,119,103,183,57,122,47,170,12,19,193,196,199,47,43,85,152,158,151,42,26,112,44,163,186,50,121,152,49,169,136,198,98], [26,98,102,120,105,153,47,167,188,41,121,109,16,199,83,196,188,101,122,121,193,59,77,27,43,55,70,186,24,118,185,63,122,68,119,0,16,44,181,135,102,43,134,91,180,152,94,169,110,96]];

