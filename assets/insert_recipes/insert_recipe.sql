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
