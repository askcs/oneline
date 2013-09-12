define(
  {
    app: {
      version:  '@@version',
      released: '@@released'
    },






    meta: 'oneline',

    title: 'OneLine',

    lang:     'en',

    fullscreen: true,

    host: 'http://askfastmarket1.appspot.com',

    formats: {
      date:         'dd-MM-yyyy',
      time:         'HH:mm',
      datetime:     'dd-MM-yyyy HH:mm',
      datetimefull: 'dd-MM-yyyy HH:mm'
    },

    defaults: {
      settingsWebPaige: {
        user: {
          language: 'nl'
        },
        app: {
          widgets: {
            groups: {}
          }
        }
      }
    },

    cookie: {
      expiry: 30,
      path:   '/'
    },


    countries: [
      {
        id:     44,
        label: 'United Kingdom (44)'
      },
      {
        id:     32,
        label: 'Belgium (32)'
      },
      {
        id:     33,
        label: 'France (33)'
      },
      {
        id:     49,
        label: 'Germany (49)'
      },
      {
        id:     31,
        label: 'Netherlands (31)'
      },
      {
        id:     90,
        label: 'Turkey (90)'
      }
    ],


    regions: {
      31: [
        {
          id:     297,
          label:  'Aalsmeer (297)'
        },
        {
          id:     72,
          label:  'Alkmaar (72)'
        },
        {
          id:     546,
          label:  'Almelo (546)'
        },
        {
          id:     36,
          label:  'Almere (36)'
        },
        {
          id:     172,
          label:  'Alphen A/D Rijn (172)'
        },
        {
          id:     33,
          label:  'Amersfoort (33)'
        },
        {
          id:     20,
          label:  'Amsterdam (20)'
        },
        {
          id:     55,
          label:  'Apeldoorn (55)'
        },
        {
          id:     26,
          label:  'Arnhem (26)'
        },
        {
          id:     10,
          label:  'Rotterdam (10)'
        }
      ],
      90: [
        {
          id:     1,
          label:  'Turkey 1'
        },
        {
          id:     2,
          label:  'Turkey 2'
        }
      ],
      44: [
        {
          id:     1,
          label:  'United Kingdom 1'
        },
        {
          id:     2,
          label:  'United Kingdom 2'
        }
      ],
      49: [
        {
          id:     1,
          label:  'Germany 1'
        },
        {
          id:     2,
          label:  'Germany 2'
        }
      ],
      33: [
        {
          id:     1,
          label:  'France 1'
        },
        {
          id:     2,
          label:  'France 2'
        }
      ],
      32: [
        {
          id:     1,
          label:  'Belgium 1'
        },
        {
          id:     2,
          label:  'Belgium 2'
        }
      ]
    },

    packages: {
      1: {
        id:    1,
        label: 'Local Numbers',
        prices:{
          monthly: {
            normal:   5,
            premium:  15
          },
          yearly: {
            normal:   50,
            premium:  150
          }
        }
      },
      2: {
        id:    2,
        label: 'Virtual Numbers',
        prices: {
          monthly: {
            normal:   10,
            premium:  30
          },
          yearly: {
            normal:   100,
            premium:  300
          }
        }
      }
    },


    virtuals: [
      {
        id:     1,
        label:  'Personal assistant services (84-87)'
      },
      {
        id:     2,
        label:  'VPN (82)'
      },
      {
        id:     3,
        label:  'Elektronisch communicatie (85 - 91)'
      },
      {
        id:     4,
        label:  'Company numbers (88)'
      }
    ],

    ranges: {
      1: [84, 85, 86, 87],
      2: [82],
      3: [85, 86, 87, 88, 89, 90, 91],
      4: [88]
    },

    premiums: [
      {
        package:  1,
        country:  31,
        region:   10,
        number:   2222222
      },
    ],








    ui: {
      en: {
        meta: {
          name: 'en',
          label: 'English'
        },
        login: {
          header: "Please sign in",
          placeholder_username: "Please enter your username",
          placeholder_password: "Your password",
          label_rememberMe: "Remember Me",
          button_login: "Login",
          button_loggingIn: "Logging...",
          forgot_password: "forgot your password?",
          forgetPassword: "Forgot password",
          emailAddress: "Email address",
          resetPassword: "Reset Password",
          returnLogin: "return back to login",
          changePassword: "change password",
          downloadApp: "Download Mobile App",
          ph_username: "username",
          ph_newPass: "new  password",
          ph_retypePass: "retype password",
          alert_fillfiled: 'Please fill all fields!',
          alert_wrongUserPass: 'Wrong username or password!',
          loading_User: 'Loading user information...',
          loading_Message: 'Loading messages...',
          loading_Group:'Loading groups...',
          loading_Members: 'Loading members...',
          loading_everything: 'Everything loaded!',
          logout: 'Logout',
          loading: 'Loading..'
        },
        dashboard: {
          thisWeek: 'This Week',
          welcome: 'Welcome',
          newMessage: 'New Messages',
          goToInbox: 'Go to inbox',
          announcements: 'Announcements',
          loadingPie: 'Loading pie charts...',
          loadingP2000: 'Loading alarm messages',
          noP2000: 'There are no alarm messages'
        },
        planboard: {
          planboard: 'Agenda',
          newAvail: 'New Availability',
          day: 'Day',
          week: 'Week',
          month: 'Month',
          updateAvail: 'Update Availability',
          from: 'From',
          till: 'Till',
          state: 'State',
          selectAState: 'select a state',
          reoccuring: 'Re-occuring',
          lessPeople: 'There $v less people than needed!',
          samePeople: 'There are just as many peopleas needed.',
          morePeople: 'There are $v more people than needed!',
          wished: 'Wished' ,
          combine_reoccuring: 'This is a combined row of planning with re-occuring rows.',
          sendMsgToMember: 'Send Message To Members',
          add: 'Add',
          del: 'Delete',
          change: 'Change',
          setWish: 'Set Wish',
          timeline: 'Timeline',
          statistics: 'Statistics',
          barCharts: 'Bar charts',
          wishes: 'Wishes',
          legenda: 'Legenda',
          group: 'Group',
          groups: 'Groups',
          members: 'Members',
          bothAvailable: 'Both available',
          northAavailable: 'available North' ,
          southAvailable: 'available South',
          skipperOutService: 'Skipper Of Service',
          notAvailable: 'Not Available', // Niet Beschikbaar
          notachieve: 'Not Achieved',
          legendaLabels: {
            morePeople: 'More people',
            enoughPeople: 'Just enough people',
            lessPeople: 'Less people'
          },
          lastSyncTime: 'Last sync time:',
          dataRangeStart: 'Data range start: ',
          DataRangeEnd: 'Data range end: ',
          loadingTimeline: 'Loading timeline...',
          addTimeSlot: 'Adding a timeslot...',
          slotAdded: 'New timeslot added successfully.',
          changingSlot: 'Changing a timeslot...',
          slotChanged: 'Timeslot changed successfully.',
          changingWish: 'Changing wish value...',
          wishChanged: 'Wish value changed successfully.',
          deletingTimeslot: 'Deleting a timeslot...',
          timeslotDeleted: 'Timeslot deleted successfully.',
          refreshTimeline: 'Refreshing timeline...',
          preCompilingStortageMessage: 'Pre-compiling shortage message',
          weeklyPlanning: 'Weekly planning',
          planning: 'Planning',
          minNumber: 'Minimum number benodigden'
        },
        message: {
          messages: 'Messages',
          composeAMessage: 'Compose a message',
          compose: 'Compose',
          inbox: 'Inbox',
          outbox: 'Outbox',
          trash: 'Trash',
          composeMessage: 'Compose message',
          close: 'Close',
          broadcast: 'Broadcast',
          sms: 'SMS',
          email: 'Email',
          receviers: 'Recevier(s)',
          // troubled
          // chooseRecept: 'Choose a Recipient',
          //
          subject: 'Subject',
          message: 'Message',
          sendMessage: 'Send Message',
          sender: 'Sender',
          date: 'Date',
          questionText: 'Message',
          reply: 'Reply',
          del: 'Delete',
          noMessage: 'There are no messages.',
          from: 'From',
          newMsg: 'New',
          deleteSelected: 'Delete Selected Messages',
          someMessage: 'There are $v message(s)',
          emptyTrash: 'Empty Trash',
          noMsgInTrash: 'There are no messages in trash.',
          box: 'Box',
          persons: 'Person(s)',
          restoreSelected: 'Restore Selected Messages',
          loadingMessage: 'Loading message...',
          escalation: 'Escalation message',
          escalationBody: function (diff,startDate,startTime,endDate,endTime)
          {
            return 'We have ' +
              diff +
              ' shortage in between ' +
              startDate + ' ' +
              startTime + ' and ' +
              endDate + ' ' +
              endTime + '. ' +
              'Would you please make yourself available if you are available for that period?';
          },
          removed: 'Message removed successfully.',
          removing: 'Removing the message...',
          refreshing: 'Refreshing messages...',
          removingSelected: 'Removing selected messages...',
          restoring: 'Restoring the message back...',
          restored: 'Message restored successfully.',
          restoringSelected: 'Restoring selected messages...',
          emptying: 'Emptying trash...',
          emptied: 'Trash bin emptied successfully.',
          sending: 'Sending the message...',
          sent: 'Message sent.',
          typeSubject: 'Type a subject',
          // messages: 'Messages',
          ph_filterMessage: 'Filter messages..',
          noReceivers: 'Please select a receiver.'
        },
        groups: {
          groups: 'Groups',
          newGroup: 'New Group',
          newMember: 'New Member',
          serach: 'Search',
          addNewGroup: 'Add New Group',
          editGroup: 'Edit Group',
          searchResults: 'Search results',
          group: 'Group',
          close: 'Close',
          name: 'Name',
          saveGroup: 'Save Group',
          registerMember: 'Register Member',
          role: 'Role',
          selectRole: 'Select a role',
          selectGroup: 'Choose a group',
          email: 'Email',
          phone: 'Phone',
          address: 'Address',
          postCode: 'Postcode',
          tel: 'Tel',
          city: 'City',
          userName: 'Username',
          password: 'Password',
          saveMember: 'Save Member',
          serachFor: 'Search results for ',
          sorryCanNotFind: 'Sorry but we couldn\'t find what you are looking for.',
          // troubled
          // selectGroup: '-- select a group --',
          //
          addToGroup: 'Add to group',
          addMemberToGroup: 'Add Selected Members To Groups',
          resultCount: 'There are $v results in your query.',
          deleteGroup: 'Delete Group',
          noMembers: 'There are no members.',
          removeSelectedMembers: 'Remove Selected Members',
          memberCount:  'There are $v member(s)',
          searchingMembers: 'Searching members..',
          addingNewMember: 'Adding a new member..',
          memberAdded: 'Member added to group successfully.',
          refreshingGroupMember: 'Refreshing groups and members list..',
          removingMember: 'Removing member from group..',
          memberRemoved: 'Member removed from group successfully.',
          removingSelected: 'Removing selected members..',
          saving: 'Saving group..',
          groupSaved: 'Group saved successfully.',
          registerNew: 'Registering a new member..',
          memberRegstered: 'Member registered successfully.',
          deleting: 'Deleting group..',
          deleted: 'Group deleted successfully.',
          filterMembers: 'Filter members..',
          searchfor: 'firstname, lastname..'
        },
        profile: {
          profile: 'Profile',
          edit: 'Edit',
          password: 'Password',
          timeline: 'Timeline',
          profileView: 'Profile View',
          userGroups: 'User Groups',
          role: 'Role',
          email: 'Email',
          phone: 'Phone',
          address: 'Address',
          postcode: 'Postcode',
          city: 'City',
          editProfile: 'Edit Profile',
          name: 'Name',
          saveProfile: 'Save Profile',
          passChange: 'Password Change',
          currentPass: 'Current password',
          newPass: 'New password',
          newPassRepeat: 'New password (Repeat)',
          changePass: 'Change password',
          newAvail: 'New Availability',
          // saveProfile: 'Saving profile information..',
          refreshing: 'Refreshing profile information..',
          dataChanged: 'Profile data is succesfully changed.',
          pleaseFill: 'Please fill all fields!',
          passNotMatch: 'Provided passwords do not match! Please try it again.',
          changingPass: 'Changing password..',
          passChanged: 'Password is succesfully changed.',
          passwrong: 'Given current password is wrong! Please try it again.',
          newTimeslotAdded: 'New timeslot added successfully.',
          changingTimeslot: 'Changing a timeslot..',
          timeslotChanged: 'Timeslot is succesfully changed.'
        },
        settings: {
          settings: 'Settings',
          user: 'User',
          application: 'Application',
          userSettings: 'User Settings',
          appSettings: 'Application Settings',
          saveSettings: 'Save Settings',
          langSetting: 'Language',
          saving: 'Saving settings...',
          refreshing: 'Refreshing settings...',
          saved: 'Settings successfully saved.'
        },
        help: {
          header: 'Help & Support',
          support: 'Support'
        },
        downloads: {
          app: 'Soon it will be downloadable.<br>',
          manual: 'Download Manual'
        },
        loading: {
          general:    'Loading',
          dashboard:  'dashboard',
          planboard:  'agenda',
          messages:   'messages',
          groups:     'groups',
          profile:    'profile',
          settings:   'settings'
        }
      },
      nl: {
        meta: {
          name: 'nl',
          label: 'Nederlands'
        },
        login: {
          header: "Inloggen",
          placeholder_username: "Vul uw gebruikersnaam in",
          placeholder_password: "Vul uw wachtwoord in",
          label_rememberMe: "Onthoud mij",
          button_login: "Login",
          button_loggingIn: "Inloggen...",
          forgot_password: "Wachtwoord vergeten?",
          forgetPassword: "Wachtwoord vergeten",
          emailAddress: "Email adres",
          resetPassword: "Wachtwoord opnieuw instellen",
          returnLogin: "Terugkeren om in te loggen",
          changePassword: "Wachtwoord wijzigen",
          downloadApp: "Download Mobiele App",
          ph_username: "gebruikersnaam",
          ph_newPass: "nieuw wachtwoord",
          ph_retypePass: "Typ wachtwoord",
          alert_fillfiled: 'Vul alle velden in!',
          alert_wrongUserPass: 'Onjuiste gebruikersnaam of wachtwoord!',
          loading_User: 'Gebruikersinformatie laden...',
          loading_Message: 'Berichten laden...',
          loading_Group:'Groepen laden...',
          loading_Members: 'Leden laden...',
          loading_everything: 'Alles is geladen!',
          logout: 'Logout',
          loading: 'Loading..'
        },
        dashboard: {
          thisWeek: 'Deze week',
          welcome: 'Welkom',
          newMessage: 'Nieuwe berichten',
          goToInbox: 'Ga naar inbox',
          loadingPie: 'Cirkeldiagrammen laden...',
          announcements: 'Alarm berichten',
          loadingP2000: 'Alarm berichten laden...',
          noP2000: 'Er zijn geen alarm berichten.'
        },
        planboard : {
          planboard: 'Agenda',
          newAvail: 'Nieuwe beschikbaarheid',
          day: 'Dag',
          week: 'Week',
          month: 'Maand',
          updateAvail: 'Update beschikbaarheid',
          from: 'Van',
          till: 'Tot',
          state: 'Status',
          selectAState: 'selecteer een status',
          reoccuring: 'Herhaling',
          lessPeople: 'Er is een tekort van $v mens(en)!',
          samePeople: 'Er zijn precies genoeg mensen.',
          morePeople: 'Er is een overschot van $v mens(en)!',
          wished: 'Gewenst' ,
          combine_reoccuring: 'Dit is een gecombineerde planning.',
          sendMsgToMember: 'Stuur bericht naar leden',
          add: 'Toevoegen',
          del: 'Verwijderen',
          change: 'Wijzigen',
          setWish: 'Behoefte instellen',
          timeline: 'Tijdlijn',
          statistics: 'Statistieken',
          barCharts: 'Staafdiagrammen',
          wishes: 'Behoefte',
          legenda: 'Legenda',
          group: 'Groep',
          groups: 'Groepen',
          members: 'Leden',
          bothAvailable: 'Beiden beschikbaar',
          northAavailable: 'Beschikbaar Noord' ,
          southAvailable: 'Beschikbaar Zuid',
          skipperOutService: 'Schipper van dienst',
          notAvailable: 'Niet beschikbaar',
          notachieve: 'Niet behaald',
          legendaLabels: {
            morePeople: 'Meer mensen',
            enoughPeople: 'Precies genoeg mensen',
            lessPeople: 'Te weinig mensen'
          },
          lastSyncTime: 'Laatste synchronisatietijd:',
          dataRangeStart: 'Begin gegevensscala: ',
          DataRangeEnd: 'Eind gegevensscala: ',
          loadingTimeline: 'Tijdlijn laden...',
          addTimeSlot: 'Tijdslot toevoegen...',
          slotAdded: 'Tijdslot succesvol toegevoegd.',
          changingSlot: 'Tijdslot wijzigen...',
          slotChanged: 'Tijdslot succesvol gewijzigd.',
          changingWish: 'Behoefte veranderen...',
          wishChanged: 'Behoefte succesvol veranderd.',
          deletingTimeslot: 'Tijdslot verwijderen...',
          timeslotDeleted: 'Tijdslot succesvol verwijderd.',
          refreshTimeline: 'Tijdlijn vernieuwen...',
          preCompilingStortageMessage: 'Opstellen tekortbericht',
          weeklyPlanning: 'Wekelijkse planning',
          planning: 'Planning',
          minNumber: 'Minimum aantal benodigde mensen'
        },
        message: {
          messages: 'Berichten',
          composeAMessage: 'Bericht opstellen',
          compose: 'Opstellen',
          inbox: 'Inbox',
          outbox: 'Outbox',
          trash: 'Prullenbak',
          composeMessage: 'Bericht opstellen',
          close: 'Sluiten',
          broadcast: 'Extra medium',
          sms: 'SMS',
          email: 'Email',
          receviers: 'Ontvanger(s)',
          // troubled
          // chooseRecept: 'Ontvanger(s) selecteren',
          //
          subject: 'Onderwerp',
          message: 'Bericht',
          sendMessage: 'Bericht versturen',
          sender: 'Zender',
          date: 'Datum',
          questionText: 'Bericht',
          reply: 'Antwoorden',
          del: 'Verwijderen',
          noMessage: 'Er zijn geen berichten.',
          from: 'Van',
          newMsg: 'Nieuw',
          deleteSelected: 'Verwijder geselecteerde berichten',
          someMessage: 'Er zijn $v berichten',
          emptyTrash: 'Prullenbak legen',
          noMsgInTrash: 'Er zijn geen berichten.',
          box: 'Box',
          persons: 'Personen',
          restoreSelected: 'Geselecteerde berichten terugplaatsen',
          loadingMessage: 'Bericht laden...',
          escalation: 'Escalatiebericht',
          escalationBody: function(diff,startDate,startTime,endDate,endTime)
          {
            return 'Er is een tekort van ' +
              diff +
              ' mensen tussen ' +
              startDate + ' ' +
              startTime + ' en ' +
              endDate + ' ' +
              endTime + '. ' +
              'Zet uzelf a.u.b. op beschikbaar indien u beschikbaar bent voor die periode';
          },
          removed: 'Bericht succesvol verwijderd.',
          removing: 'Bericht verwijderen...',
          refreshing: 'Bericht vernieuwen...',
          removingSelected: 'Geselecteerde berichten verwijderen...',
          restoring: 'Bericht terugplaatsen...',
          restored: 'Bericht succesvol teruggeplaatst.',
          restoringSelected: 'Geselecteerde berichten terugplaatsen...',
          emptying: 'Prullenbak leegmaken...',
          emptied: 'Prullenbak succesvol geleegd.',
          sending: 'Bericht versturen...',
          sent: 'Bericht verstuurd.',
          typeSubject: 'Vul een onderwerp in',
          // messages: 'Berichten',
          ph_filterMessage: 'Berichten filteren...',
          noReceivers: 'Graag een ontvanger selecteren.'
        },
        groups: {
          groups: 'Groepen',
          newGroup: 'Nieuwe Group',
          newMember: 'Nieuw lid',
          serach: 'Zoeken',
          addNewGroup: 'Nieuwe groep toevoegen',
          editGroup: 'Groep wijzigen',
          searchResults: 'Zoekresultaten',
          group: 'Groep',
          close: 'Sluiten',
          name: 'Naam',
          saveGroup: 'Groep opslaan',
          registerMember: 'Lid registreren',
          role: 'Functie',
          selectRole: 'Selecteer een functie',
          // troubled
          // selectGroup: 'Selecteer een group',
          //
          email: 'Email',
          phone: 'Telefoon',
          address: 'Adres',
          postCode: 'Postcode',
          tel: 'Tel',
          city: 'Stad',
          userName: 'Gebruikersnaam',
          password: 'Wachtwoord',
          saveMember: 'Lid opslaan',
          serachFor: 'Zoekresultaten voor ',
          sorryCanNotFind: 'Sorry, geen resultaten.',
          addToGroup: 'Aan groep toevoegen',
          addMemberToGroup: 'Voeg geselecteerde leden aan groep toe',
          resultCount: 'Er zijn $v resultaten.',
          deleteGroup: 'Groep verwijderen',
          noMembers: 'Er zijn geen leden.',
          removeSelectedMembers: 'Geselecteerde leden verwijderen',
          memberCount:  'Er zijn $v leden',
          searchingMembers: 'Leden zoeken...',
          addingNewMember: 'Nieuw lid toevoegen...',
          memberAdded: 'Lid succesvol aan groep toegevoegd.',
          refreshingGroupMember: 'Groepen- en ledenlijst vernieuwen...',
          removingMember: 'Lid van groep verwijderen...',
          memberRemoved: 'Lid succesvol van groep verwijderd.',
          removingSelected: 'Geselecteerde leden verwijderen...',
          saving: 'Groep opslaan...',
          groupSaved: 'Groep succesvol opgeslagen.',
          registerNew: 'Nieuw lid registreren...',
          memberRegstered: 'Lid succesvol geregistreerd.',
          deleting: 'Groep verwijderen...',
          deleted: 'Groep succesvol verwijderd.',
          filterMembers: 'Leden filteren...',
          searchfor: 'voornaam, achternaam..'
        },
        profile: {
          profile: 'Profiel',
          edit: 'Wijzigen',
          password: 'Wachtwoord',
          timeline: 'Tijdlijn',
          profileView: 'Profiel weergave',
          userGroups: 'Gebruikersgroepen',
          role: 'Functie',
          email: 'Email',
          phone: 'Telefoon',
          address: 'Adres',
          postcode: 'Postcode',
          city: 'Stad',
          editProfile: 'Profiel wijzigen',
          name: 'Naam',
          saveProfile: 'Profiel opslaan',
          passChange: 'Wachtwoord wijzigen',
          currentPass: 'Huidig wachtwoord',
          newPass: 'Nieuw wachtwoord',
          newPassRepeat: 'Herhaal nieuw wachtwoord',
          changePass: 'Wachtwoord wijzigen',
          newAvail: 'Nieuwe beschikbaarheid',
          // saveProfile: 'Profielinformatie opslaan...',
          refreshing: 'Profielinformatie vernieuwen...',
          dataChanged: 'Profielgegevens succesvol gewijzigd.',
          pleaseFill: 'Vul a.u.b. alle velden in!',
          passNotMatch: 'Ingevoerd wachtwoord komt niet overeen. Probeer het opnieuw.',
          changingPass: 'Wachtwoord wijzigen...',
          passChanged: 'Wachtwoord succesvol gewijzigd.',
          passwrong: 'Ingevoerd wachtwoord is foutief! Probeer het opnieuw.',
          newTimeslotAdded: 'Nieuw tijdslot succesvol toegevoegd.',
          changingTimeslot: 'Tijdslot wijzigen...',
          timeslotChanged: 'Tijdslot succesvol gewijzigd.'
        },
        settings: {
          settings: 'Instellingen',
          user: 'Gebruiker',
          application: 'Applicatie',
          userSettings: 'Gebruikersinstellingen',
          appSettings: 'Applicatie-instellingen',
          saveSettings: 'Instellingen Opslaan',
          langSetting: 'Taal',
          saving: 'Instellingen wijzigen...',
          refreshing: 'Instellingen vernieuwen...',
          saved: 'Instellingen succesvol gewijzigd.'
        },
        help: {
          header: 'Hulp & Ondersteuning',
          support: 'Ondersteuning'
        },
        downloads: {
          app: 'Binnenkort te downloaden.',
          manual: 'Download Handleiding'
        },
        loading: {
          general:    'Laden',
          dashboard:  'dashboard',
          planboard:  'agenda',
          messages:   'berichten',
          groups:     'groepen',
          profile:    'profiel',
          settings:   'instellingen'
        }
      }
    }
  }
);