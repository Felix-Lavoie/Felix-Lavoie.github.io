let chapters = {
      debut: {
          titre: 'Survivre l\'empire',
          description: 'Darth Vader est en train d\'essayer de ranter dans votre vaisseau et vous menace de vous tuer toi et tes collegues. Tu a deux choix, t\'enfuire ou guarder ton poste.',
          image: './images/Vader.webp',
          bouton: [
            {titre: 'fuire', destination: 'mourrire'},
            {titre: 'rester', destination: 'stop'}
          ]
      },
      mourire: {
            titre: 'mort',
            description: 'Darth Vader vous tue',
            image: 'https://tenor.com/view/obi-wan-kenobi-death-darth-vader-gif-14092330',
            bouton: [
              {titre: 'retour au depart', destination: 'debut'}
            ]
      },
      stop: {
            titre: 'arreter vous!',
            description: 'Alors que vous vous mettez a courrir, votre superieur vous arrete et vous demande ce que vous faite. Tu a deux choix, continuer de courrire ou t\'arreter.',
            image: './images/superieur',
            bouton: [
              {titre: 'vous continuez de courrire', destination: 'shotDown'},
              {titre: 'vous vous arretez', destination: 'superieur'}
            ]
      },
      shotDown: {
            titre: 'trahison',
            description: 'votre superieur vous tire dans le dos et crie <AUCUN DESERTEUR!>',
            image: './imgages/shot-in-back.webp',
            bouton: [
              {titre: 'retour au depart', destination: 'debut'}
            ]
      },
      superieure: {
            titre: 'superieur',
            description: 'votre superieur vous demande pourquoi vous courrez.',
            image: './superieur-ask.webp',
            bouton: [
              {titre: 'J\'ais oublier le robinet ouvert.', destination: 'front'},
              {titre: 'J\'e veut fuire.', destination: 'front'},
              {titre: 'Je veut aller au toilette', destination: 'toilette'},
              {titre: 'Je veut aller au toilette pouver vous me donner la clee', destination: 'toilette'}
            ]
      },
      front: {
            titre: 'retour au front',
            description: 'votre superieur vous retourne au front',
            image: './images/superieur.webp',
            bouton: [
              {titre: 'continuer', destination: 'mourrire'}
            ]
      },
      toilette: {
            titre: 'toilette',
            description: 'vous vous dirigez au toilettes, mais allez-i vous vraiment.',
            image: './images/ship-int.jpg',
            bouton: [
              {titre: 'oui', destination: 'clef'},
              {titre: 'non', destination: 'vaisseau'}
            ]
      },
      vaisseau: {
            titre: 'vaisseau',
            description: 'vous vous metter a courire mais vous arriver rapidement a la fin du vaisseau',
            image: './images/ship-int.jpg',
            bouton: [
              {titre: 'continuer', destination: 'mourrire'}
            ]
      },
      clef: {
            titre: 'clef?',
            description: 'avez-vous la clef',
            image: './images/keys.jpg',
            bouton: [
              {titre: 'oui', destination: 'ending'},
              {titre: 'non', destination: 'vaisseau'}
            ]
      },
      ending: {
            titre: 'la fin?',
            description: 'pendant que vous fesiez vos besoin Darth Vader a fini de tuer tous les personne dans le vaisseau sauf toi, le chanceux qui est restez au toilette.',
            image: './images/bathroom.jpg',
            bouton: [
              {titre: 'une autre partie?', destination: 'debut'},
            ]
      },
      

  };
   
  function goToChapter(chapter) {
      if (typeof chapter === 'object') {
            console.log(chapter.titre);
            console.log(chapter.description);
            console.log(chapter.bouton);
            
      } else {
            console.log('Erreur');
      }};

      goToChapter(chapters.debut)