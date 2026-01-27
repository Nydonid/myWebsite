INSERT INTO recipes (title, prep_time, description, instructions, imageurls) VALUES
        ('Rotes Thai Curry',
         40,
         'Ein einfaches, aromatisches Rezept für ein rotes Thai Curry. Das Originalrezept eignet sich für 2-3 Portionen. Statt Rindfleisch kann auch sehr gut Poulet verwendet werden; und für die Feinschmecker: ein Spritzer Fischsauce. Inspiriert von Betty Bossi',
         ARRAY[
             'Öl im Wok oder in einer weiten Bratpfanne erhitzen. Rindfleisch ca. 4 Minuten anbraten, dann mit Salz und Pfeffer würzen. Herausnehmen und warmstellen.',
             'Parallel dazu Peperoni entkernen, und in Stücke gewünschter Grösse schneiden. Zucchini in Scheiben schneiden. Zwiebel schälen und in kleine Schnitze schneiden.',
             'Reis (besonders Basmati) unter fliessendem Wasser spülen, bis das Wasser klar ist. Mit Wasser aufkochen und zugedeckt bei kleinster Hitze ca. 15 Minuten quellen lassen.',
             'Wenig Öl in derselben Pfanne erhitzen. Peperoni, Zucchini und Zwiebel zusammen mit der roten Currypaste ca. 5 Minuten rührbraten.',
             'Wasser und Kokosmilch dazugiessen, aufkochen und die Hitze reduzieren. Das Curry ca. 10 Minuten köcheln lassen.',
             'Fleisch wieder beigeben und nur noch heiss werden lassen.',
             'Reis mit einer Gabel lockern und zusammen mit dem Curry servieren.'
             ],
         ARRAY[
             'https://raw.githubusercontent.com/Nydonid/myWebsite/master/assets/recipe_images/red_curry_recipe.jpg',
             'https://raw.githubusercontent.com/Nydonid/myWebsite/master/assets/recipe_images/red_curry_ingredients.jpg'
             ]
        );


INSERT INTO ingredients (recipe_id, amount, unit, name) VALUES
        (1, 1, NULL, 'Peperoni'),
        (1, 1,  NULL, 'Zucchini'),
        (1, 1, NULL, 'Zwiebel'),

        (1, 350, 'g', 'Geschnetzeltes Rindfleisch'),
        (1, NULL, 'Eine Prise', 'Salz'),
        (1, NULL, 'Etwas', 'Pfeffer'),
        (1, 2, 'EL', 'Rote Currypaste'),
        (1, 1.5, 'dl', 'Wasser'),
        (1, 2.5, 'dl', 'Kokosmilch'),

        (1, 187.5, 'g', 'Parfüm- oder Basmatireis'),
        (1, NULL, NULL, 'Doppelt so viel Wasser wie Reis');

INSERT INTO recipes (title, prep_time, description, instructions, imageurls) VALUES
    ('Spaghetti bolognese',
     50,
     'Der Klassiker - eines der beliebtesten Pasta-Rezepten überhaupt, nach diesen Mengenangaben für 2-3 Portionen. Statt Bouillon kann auch sehr gut Rotwein zum ablöschen verwendet werden. Abgeschaut von Swissmilk.',
     ARRAY[
         'Zu Beginn gleich das Hackfleisch in Bratbutter oder Bratcrème 4-5 min. kräftig anbraten.',
         'Parallel dazu Rüebli, Knoblauch und Zwiebeln schälen und klein hacken, gleich dem Fleisch in die Pfanne zugeben und mitdünsten.',
         'Spaghettiwasser aufkochen und Spaghettis kochen wenn das Wasser kocht.',
         'Wenn das Gemüse glasig wird und kein rotes Fleisch mehr sichtbar ist mit dem Wasser ablöschen und gleich Tomatenpüree, Pelati und Bouillon dazugeben.',
         'Nachdem die Sauce kurz eingekocht ist würzen und Kräuter dazugeben.',
         'Bei kleiner Hitze köcheln bis die Spaghetti angerichtet sind.',
         'Sauce vom Herd nehmen und mit Reibkäse anrichten.'
         ],
     ARRAY[
         'https://raw.githubusercontent.com/Nydonid/myWebsite/master/assets/recipe_images/spaghetti_bolognese_recipe.jpg',
         'https://raw.githubusercontent.com/Nydonid/myWebsite/master/assets/recipe_images/spaghetti_bolognese_ingredients.jpg'
         ]
    );


INSERT INTO ingredients (recipe_id, amount, unit, name) VALUES
        (2, 300, 'g', 'Spaghetti'),
        (2, 50,  'g', 'Reibkäse wie zum Bsp. Sbrinz'),

        (2, 350, 'g', 'Rindshackfleisch'),
        (2, 1, 'grosse', 'Zwiebel'),
        (2, 1, NULL, 'Rüebli'),
        (2, 1, NULL, 'Knoblauchzehe'),
        (2, 2, 'EL', 'Tomatenpüree'),
        (2, 1, 'Dose à 400g', 'Pelati'),
        (2, 1, 'dl', 'Wasser'),
        (2, 2, 'TL', 'Bouillon'),
        (2, NULL, NULL, 'Salz'),
        (2, NULL, NULL, 'Pfeffer aus der Mühle'),
        (2, NULL, NULL, 'Oregano, Basilikum, Thymian, gehackt'),
        (2, 1, NULL, 'Lorbeerblatt');

INSERT INTO recipes (title, prep_time, description, instructions, imageurls) VALUES
    (
        'Riz Casimir',
        25,
        'Ein sehr einfaches Lieblingsessen für Gross und Klein. Riz Casimir mit Äpfeln, Bananen und Aprikosenkonfitüre. Für ca. 2–3 Portionen, von Betty Bossi',
        ARRAY[
            'Reis im siedenden Salzwasser ca. 15 Minuten knapp weich kochen, abtropfen und dann auf tiefer Stufe warm halten.',
            'Poulet falls nötig in ca. 2 cm breite Streifen schneiden.',
            'Bratcrème in einer Bratpfanne erhitzen. Poulet ca. 5 Minuten braten, mit Salz, Pfeffer und Curry würzen, herausnehmen und warm stellen.',
            'Gleichzeitig Äpfel halbieren, Kerngehäuse entfernen und in Scheiben schneiden. Bananen in kleine Stücke schneiden.',
            'Äpfel und Bananen zu allen Seiten je ca. 1 Minuten anbraten, herausnehmen und warm stellen.',
            '1 EL Curry in derselben Pfanne für einige Sekunden trocken andämpfen, gleich den einen dl Wasser dazugiessen und mit zugegebener Bouillon aufkochen.',
            '1 EL Aprikosenkonfitüre, 1.5 dl Rahm und Poulet beigeben, nur noch heiss werden lassen und abschmecken.'
            ],
        ARRAY[
            'https://raw.githubusercontent.com/Nydonid/myWebsite/master/assets/recipe_images/riz_casimir_recipe.jpg',
            'https://raw.githubusercontent.com/Nydonid/myWebsite/master/assets/recipe_images/riz_casimir_ingredients.jpg'
            ]
    );

INSERT INTO ingredients (recipe_id, amount, unit, name) VALUES
        (3, 1, 'Tasse', 'Reis'),
        (3, 2, 'Tassen', 'Salzwasser'),

        (3, 300, 'g', 'Pouletbrüstli oder Geschnetzeltes'),
        (3, 1, 'EL', 'Bratbutter oder -crème'),

        (3, 2, NULL, 'Äpfel'),
        (3, 2, NULL, 'Bananen'),

        (3, 1, 'EL', 'Curry'),
        (3, 1.5, 'dl', 'Wasser'),
        (3, 2, 'TL', 'Bouillon'),
        (3, 1, 'EL', 'Aprikosenkonfitüre'),
        (3, 2, 'dl', 'Voll- oder Halbrahm'),
        (3, NULL, NULL, 'Salz nach Bedarf'),
        (3, NULL, NULL, 'Pfeffer nach Bedarf');

INSERT INTO recipes (title, prep_time, description, instructions, imageurls) VALUES (
       'Thunfisch Spaghetti',
       20,
       'Schnelles Pasta-Gericht mit Thunfisch, optionalen Champignons und Rahm für 2-3 Portionen. Gefunden auf gutekueche.at',
       ARRAY[
           'Spaghetti in Salzwasser al dente kochen, Pfanne beiseite stellen wenn diese durch sind.',
           'Thunfisch abtropfen lassen. Zwiebel und Knoblauch schälen, fein hacken und in Olivenöl andünsten.',
           'Thunfisch und Champignons zugeben, Tomatenmark und Rahm einrühren, mit Salz und Pfeffer abschmecken und etwas einkochen lassen.',
           'Dill und Spaghetti unterrühren, nochmals kurz erwärmen, ohne das die Sauce beginnt zu kochen.'
           ],
       ARRAY[
           'https://raw.githubusercontent.com/Nydonid/myWebsite/master/assets/recipe_images/tuna_spaghetti_recipe.jpg',
           'https://raw.githubusercontent.com/Nydonid/myWebsite/master/assets/recipe_images/tuna_spaghetti_ingredients.jpg']
       );

INSERT INTO ingredients (recipe_id, amount, unit, name) VALUES
        (4, 300, 'g', 'Spaghetti'),
        (4, 1, NULL, 'Zwiebel'),
        (4, 1, 'Dose', 'Thunfisch'),
        (4, 1.5, 'EL', 'Olivenöl'),
        (4, 150, 'ml', 'Vollrahm'),
        (4, 200, 'g', 'Champignons'),
        (4, 2, 'EL', 'Tomatenmark'),
        (4, 5, 'EL', 'Schnittlauch'),
        (4, 1, 'Prise', 'Pfeffer'),
        (4, 1, 'Prise', 'Salz'),
        (4, 1, NULL, 'Knoblauchzehe');

INSERT INTO recipes (title, prep_time, description, instructions, imageurls) VALUES
    (
        'Fajitas mit Hackfleisch',
        30,
        'Herzhafte Fajitas mit Hackfleisch-Gemüse-Füllung, Guacamole und Cheddar. Natürlich kann für eine gute Schärfe jegliche Chilisosse zugegeben werden sowie Koriander für das gewisse Etwas. Originalrezept für 4-5 Portionen, von Betty Bossi.',
        ARRAY[
            'Für den effizientesten Ablauf erst nur die Peperoni in Streifen schneiden und entkernen.'
            'Danach Öl in einer Bratpfanne erhitzen, Hackfleisch ca. 4-5 Minuten anbraten. würzen mit Salz und Pfeffer, herausnehmen. Falls nötig portionenweise.',
            'In der Zwischenzeit noch die Zwiebel in Streifen, den Knoblauch in kleine Scheiben schneiden. Maisdose öffnen und abtropfen, Cherry-Tomaten halbieren.',
            'Wenig Öl in die gleiche Pfanne zugeben. Peperoni, Zwiebel, Knoblauch und Mais ca. 2-3 Minuten auf hoher Stufe rührbraten.',
            '4-5 dl Wasser zugeben, Cherry-Tomaten zusammen mit dem Fleisch beigeben. Bei kleiner Hitze ca. 15 Minuten köcheln.',
            'Währenddessen Avocados halbieren, Fruchtfleisch mit einer Gabel zerdrücken. Limettensaft zugeben, etwas salzen.',
            'Tortillas nach Packungsangabe erwärmen.',
            'Tortillas mit Crème fraîche bestreichen, Fleisch-Gemüse-Mischung und Käse darauf verteilen, falten oder aufrollen.',
            'Guacamole dazu servieren.'
            ],
        ARRAY[
            'https://raw.githubusercontent.com/Nydonid/myWebsite/master/assets/recipe_images/fajitas_minced_meat_recipe.jpg',
            'https://raw.githubusercontent.com/Nydonid/myWebsite/master/assets/recipe_images/fajitas_minced_meat_ingredients.jpg'
            ]
    );

INSERT INTO ingredients (recipe_id, amount, unit, name) VALUES
        (5, 1, NULL, 'rote Peperoni'),
        (5, 1, NULL, 'Zwiebel'),
        (5, 1, NULL, 'Knoblauchzehe'),
        (5, 1, 'Dose', 'Maiskörner (ca. 160 g)'),
        (5, NULL, NULL, 'Öl zum Braten'),
        (5, 500, 'g', 'Hackfleisch'),
        (5, NULL, NULL, 'Salz'),
        (5, NULL, NULL, 'Pfeffer'),
        (5, 0.4, 'dl', 'Wasser'),
        (5, 80, 'g', 'Cherry-Tomaten'),

        (5, 2, NULL, 'Avocados'),
        (5, 1, NULL, 'Limette'),

        (5, 8, NULL, 'Weizentortillas'),
        (5, 125, 'g', 'Cheddar'),
        (5, 1, 'Becher', 'Crème fraîche (ca 160 g)');

INSERT INTO recipes (title, prep_time, description, instructions, imageurls) VALUES
    (
        'Original Wiener Schnitzel',
        90,
        'Ein wahres Festessen! Wiener Schnitzel mit knuspriger Panier, serviert mit Preiselbeer-Saucen und Altwiener Erdäpfelsalat. Originalrezepte aus austria.info und gutekueche.at. Für 2 Portionen.',
        ARRAY[
            'Reichlich Wasser mit einem Teelöffel Kümmel aufkochen, darin Kartoffeln für den Salat weich kochen.'
            'Schnitzel auflegen, mit viel Kraft mit einer Pfanne dünn klopfen und beidseitig mit Salz und Pfeffer würzen. Nicht vergessen Backpapier auf die Schnitzel zu legen zum klopfen. Mehl, Brösel und verquirlte Eier jeweils auf flache Teller geben.',
            'Schnitzel zuerst im Mehl wenden, dann durch die Eier ziehen und anschließend in den Bröseln panieren. Panier vorsichtig andrücken.',
            'Suppe erhitzen, mit Essig, Senf und Zucker mischen. Zwiebel würfeln, in Öl glasig dünsten.',
            'Erdäpfel abgiessen, heiss schälen und in Scheiben schneiden.',
            'Marinade über die Kartoffeln gießen, einen guten Esslöffel warme Butter unterheben, würzen und Petersilie einmischen.',
            'Nun muss man den Erdäpfelsalat eine gute Zeit, idealerweise über eine Stunde, ziehen lassen. Währenddessen die inzwischen wohl in Mitleidenschaft gezogene Küche aufräumen.',
            'Für die Preiselbeer-Saucen etwas Mehl in heißer Butter anschwitzen, Preiselbeeren einrühren, optional etwas Rotwein zugeben, kurz aufkochen lassen, abschmecken.',
            '15 min vor dem Servieren Butter oder Öl in einer großen Pfanne stark erhitzen, sodass die Schnitzel im Fett schwimmen können.',
            'Schnitzel einlegen, wenn das Fett heiss genug ist. Testen indem reingeworfene Brösel direkt zischen. Je nach Dicke 2–3 Minuten pro Seite goldbraun backen.',
            'Schnitzel herausheben, auf Küchenpapier abtropfen lassen und mit Zitronenscheiben servieren.',
            'Erdäpfelsalat nochmals abschmecken und ebenfalls mit der Preiselbeer-Saucen servieren.'
            ],
        ARRAY[
            'https://raw.githubusercontent.com/Nydonid/myWebsite/master/assets/recipe_images/wiener_schnitzel_ingredients.jpg',
            'https://raw.githubusercontent.com/Nydonid/myWebsite/master/assets/recipe_images/wiener_schnitzel_recipe.jpg'
            ]
    );

INSERT INTO ingredients (recipe_id, amount, unit, name) VALUES
        -- Wiener Schnitzel
        (6, 2, NULL, 'Kalbsschnitzel vom Metzger. (Evtl. als Schmetterling, je ca. 160g)'),
        (6, 1, NULL, 'Ei'),
        (6, 50, 'g', 'Mehl, bevorzugt etwas grober'),
        (6, 50, 'g', 'Semmelbrösel'),
        (6, NULL, 'viel', 'Butterschmalz oder Pflanzenöl'),
        (6, NULL, NULL, 'Zitronenscheiben'),

        -- Preiselbeer-Sauce
        (6, 200, 'g', 'Preiselbeeren (60-70%, aus dem Glas)'),
        (6, 1, 'TL', 'Mehl'),
        (6, 1, 'TL', 'Butter'),

        -- Altwiener Kartoffelsalat
        (6, 500, 'g', 'Erdäpfel (festkochend)'),
        (6, 1, 'TL', 'Kümmel'),
        (6, 2, 'EL', 'Sonnenblumen- oder Rapsöl'),
        (6, 1, 'EL', 'Butter (geschmolzen)'),
        (6, 2, 'EL', 'Petersilie'),

        -- Marinade
        (6, 250, 'ml', 'Rindsbouillon'),
        (6, 2, 'EL', 'Weissweinessig'),
        (6, 1, 'EL', 'Senf'),
        (6, 1, 'Prise', 'Zucker'),
        (6, 1, NULL, 'rote Zwiebel'),
        (6, NULL, NULL, 'Pfeffer'),
        (6, NULL, NULL, 'Salz');



