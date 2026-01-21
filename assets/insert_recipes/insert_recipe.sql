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
