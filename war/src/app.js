/*jslint node: true */
'use strict';

/**
 * Localizations
 */
var ui = {
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
};;/*jslint node: true */
/*global angular */
/*global basket */
'use strict';


/**
 * Declare app level module which depends on filters, and services
 */
angular.module('WebPaige', [
  'ngResource',
//  '$strap.directives',
  // modals
  'WebPaige.Modals.User',
  // 'WebPaige.Modals.Dashboard',
  'WebPaige.Modals.Core',
  // 'WebPaige.Modals.Profile',
  // 'WebPaige.Modals.Settings',
  // 'WebPaige.Modals.Help',
  // controller
  'WebPaige.Controllers.Login',
  'WebPaige.Controllers.Forgotpass',
  'WebPaige.Controllers.Register',
  'WebPaige.Controllers.Logout',
  // 'WebPaige.Controllers.Dashboard',
  'WebPaige.Controllers.Core',
  'WebPaige.Controllers.Purchaser',
  'WebPaige.Controllers.Manager',
  'WebPaige.Controllers.Notifier',
  'WebPaige.Controllers.Reporter',
  'WebPaige.Controllers.Guarder',
  // 'WebPaige.Controllers.Profile',
  // 'WebPaige.Controllers.Settings',
  // 'WebPaige.Controllers.Help',
  // services
  // 'WebPaige.Services.Timer',
  'WebPaige.Services.Session',
  // 'WebPaige.Services.Dater',
  // 'WebPaige.Services.EventBus',
  // 'WebPaige.Services.Interceptor',
  'WebPaige.Services.MD5',
  'WebPaige.Services.Storage',
  'WebPaige.Services.Strings',
  'WebPaige.Services.Generators',
  // 'WebPaige.Services.Sloter',
  // 'WebPaige.Services.Stats',
  // 'WebPaige.Services.Offsetter',
  // directives
  'WebPaige.Directives',
  // filters
  'WebPaige.Filters'
]);


///**
// * Fetch libraries with AMD (if they are not present) and save in localStorage
// * If a library is presnet it wont be fetched from server
// */
//if ('localStorage' in window && window['localStorage'] !== null)
//{
//  basket
//    .require(
//      { url: 'libs/chosen/chosen.jquery.min.js' }
////      { url: 'libs/chaps/timeline/2.4.0/timeline_modified.min.js' },
////      { url: 'libs/bootstrap-datepicker/bootstrap-datepicker.min.js' },
////      { url: 'libs/bootstrap-timepicker/bootstrap-timepicker.min.js' },
////      { url: 'libs/daterangepicker/1.1.0/daterangepicker.min.js' },
////      { url: 'libs/sugar/1.3.7/sugar.min.js' },
////      { url: 'libs/raphael/2.1.0/raphael-min.js' }
//    )
//    .then(function ()
//      {
////        basket
////          .require(
////            { url: 'libs/g-raphael/0.5.1/g.raphael-min.js' },
////            { url: 'libs/g-raphael/0.5.1/g.pie-min.js' }
////          )
////          .then(function ()
////          {
////            // console.warn('basket parsed scripts..');
////        });
//      }
//    );
//};/*jslint node: true */
/*global angular */
/*global profile */
'use strict';


/**
 * App configuration
 */
angular.module('WebPaige')
.value(
  '$config',
  {
    title:    'OneLine',
    version:  '0.1.0',
    lang:     'en',

    fullscreen: true,

    // REMOVE
    demo_users: false,

    profile: {
      meta:       profile.meta,
      title:      profile.title,
      mobileApp:  profile.mobileApp
    },

    statesall: {
      'com.ask-cs.State.Available':
      {
        className:'state-available',
        label:    'Beschikbaar',
        color:    '#4f824f',
        type:     'Beschikbaar'
      },
      'com.ask-cs.State.KNRM.BeschikbaarNoord':
      {
        className:'state-available-north',
        label:    'Beschikbaar voor Noord',
        color:    '#000',
        type:     'Beschikbaar'
      },
      'com.ask-cs.State.KNRM.BeschikbaarZuid':
      {
        className:'state-available-south',
        label:    'Beschikbaar voor Zuid',
        color:    '#e08a0c',
        type:     'Beschikbaar'
      },
      'com.ask-cs.State.Unavailable':
      {
        className:'state-unavailable',
        label:    'Niet Beschikbaar',
        color:    '#a93232',
        type:     'Niet Beschikbaar'
      },
      'com.ask-cs.State.KNRM.SchipperVanDienst':
      {
        className:'state-schipper-service',
        label:    'Schipper van Dienst',
        color:    '#e0c100',
        type:     'Beschikbaar'
      },
      'com.ask-cs.State.Unreached':
      {
        className:'state-unreached',
        label:    'Niet Bereikt',
        color:    '#65619b',
        type:     'Niet Beschikbaar'
      }
    },

    host: profile.host(),

    formats: {
      date:         'dd-MM-yyyy',
      time:         'HH:mm',
      datetime:     'dd-MM-yyyy HH:mm',
      datetimefull: 'dd-MM-yyyy HH:mm'
    },

    roles: profile.roles,

    timeline: {
      options: {
        axisOnTop:        true,
        width:            '100%',
        height:           'auto',
        selectable:       true,
        editable:         true,
        style:            'box',
        groupsWidth:      '150px',
        eventMarginAxis:  0,
        showCustomTime:   true,
        groupsChangeable: false,
        showNavigation:   false,
        intervalMin:      1000 * 60 * 60 * 1
      },
      config: {
        zoom:       '0.4',
        bar:        false,
        layouts:    profile.timeline.config.layouts,
        wishes:     false,
        legenda:    {},
        legendarer: false,
        states:     {},
        divisions:  profile.divisions,
        densities: {
          less:   '#a0a0a0',
          even:   '#ba6a24',
          one:    '#415e6b',
          two:    '#3d5865',
          three:  '#344c58',
          four:   '#2f4550',
          five:   '#2c424c',
          six:    '#253943',
          more:   '#486877'
        }
      }
    },

    pie: {
      colors: ['#415e6b', '#ba6a24', '#a0a0a0']
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

    // notifications: {
    //   webkit: {
    //     user: true,
    //     app: window.webkitNotifications && (window.webkitNotifications.checkPermission() == 0) ? true : false
    //   }
    // },

    init: function ()
    {
      var _this = this;

      angular.forEach(profile.states, function (state, index)
      {
        _this.timeline.config.states[state] = _this.statesall[state];
      });
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
        prices:{
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

    packages__: [
      {
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
      {
        id:    2,
        label: 'Virtual Numbers',
        prices:{
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
    ],


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
    ]

  }
);;/*jslint node: true */
/*global angular */
'use strict';


/**
 * Providers & Routes
 */
angular.module('WebPaige')
.config(
[
  '$locationProvider', '$routeProvider',
  function ($locationProvider, $routeProvider)
  {
    /**
     * Login router
     */
    $routeProvider
    .when('/login',
    {
      templateUrl: 'dist/views/login.html',
      controller: 'login'
    })


    /**
     * Forgot password router
     */
    .when('/forgotpass',
    {
      templateUrl: 'dist/views/forgotpass.html',
      controller: 'forgotpass'
    })



    /**
     * Register router
     */
    .when('/register',
    {
      templateUrl: 'dist/views/register.html',
      controller: 'register'
    })


    /**
     * Logout router
     */
    .when('/logout',
    {
      templateUrl: 'dist/views/logout.html',
      controller: 'logout'
    })


    /**
     * Core router
     */
    .when('/core',
    {
      templateUrl:    'dist/views/core.html',
      controller:     'coreCtrl',
      reloadOnSearch: false
    })


    /**
     * Router fallback
     */
    .otherwise({
      redirectTo: '/login'
    });
  }
]);;/*jslint node: true */
/*global angular */
/*global $ */
/*global ui */
/*global screenfull */
'use strict';


/**
 * Initial run functions
 */
angular.module('WebPaige')
.run(
[
  '$rootScope', '$location', '$timeout', 'Storage', '$config', '$window', 'User', 'Session', 'Core',
  function ($rootScope, $location, $timeout, Storage, $config, $window, User, Session, Core)
  {
    /**
     * Pass config and init dynamic config values
     */
    $rootScope.config = $config;

    $rootScope.config.init();





    /**
     * TODO
     * Move these checks to jquery.browser
     * 
     * Pass Jquery browser data to angular
     */
    $rootScope.browser = $.browser;

    angular.extend($rootScope.browser, {
      screen: $window.screen
    });

    if ($rootScope.browser.ios)
    {
      angular.extend($rootScope.browser, {
        landscape:    Math.abs($window.orientation) == 90 ? true : false,
        portrait:     Math.abs($window.orientation) != 90 ? true : false
      });
    }
    else
    {
      angular.extend($rootScope.browser, {
        landscape:    Math.abs($window.orientation) != 90 ? true : false,
        portrait:     Math.abs($window.orientation) == 90 ? true : false
      });
    }

    $window.onresize = function () { $rootScope.browser.screen = $window.screen; };

    $window.onorientationchange = function ()
    {
      $rootScope.$apply(function ()
      {
        if ($rootScope.browser.ios)
        {
          angular.extend($rootScope.browser, {
            landscape:    Math.abs($window.orientation) == 90 ? true : false,
            portrait:     Math.abs($window.orientation) != 90 ? true : false
          });
        }
        else
        {
          angular.extend($rootScope.browser, {
            landscape:    Math.abs($window.orientation) != 90 ? true : false,
            portrait:     Math.abs($window.orientation) == 90 ? true : false
          });
        }
      });
    };


    /**
     * Default language and change language
     */
    $rootScope.changeLanguage = function (lang) { $rootScope.ui = ui[lang]; };
    $rootScope.ui = ui[$rootScope.config.lang];




    /**
     * If periods are not present calculate them
     */
    // if (!Storage.get('periods')) Dater.registerPeriods();




    /**
     * Set important info back if refreshed
     */
    $rootScope.app = $rootScope.app || {};




    /**
     * Set up resources
     */
    User.owner.process(User.owner.get());


    /**
     * In any case of there is no session or neither resources stored in app cache
     */
    if (!$rootScope.app.resources)
    {
      $rootScope.app.resources = angular.fromJson(Storage.get('resources'));

      Session.check();
    }


    /**
     * Count unread messages
     */
    // if (!$rootScope.app.unreadMessages) Messages.unreadCount();




    /**
     * Show action loading messages
     */
    $rootScope.statusBar =
    {
      init: function ()
      {
        $rootScope.loading = {
          status:   false,
          message:  'Loading..'
        };

        // $rootScope.app.preloader = {
        //   status: false,
        //   total:  0,
        //   count:  0
        // }
      },

      display: function (message)
      {
        // $rootScope.app.preloader || {status: false};

        // $rootScope.app.preloader.status = false;

        $rootScope.loading = {
          status:   true,
          message:  message
        };
      },

      off: function ()
      {
        $rootScope.loading.status = false;
      }
    };

    $rootScope.statusBar.init();





//    $rootScope.notification = {
//      status:   false,
//      type:     '',
//      message:  ''
//    };





    /**
     * Show notifications
     */
//    $rootScope.notifier =
//    {
//      init: function (status, type, message)
//      {
//        $rootScope.notification.status = true;
//
//        if ($rootScope.browser.mobile && status == true)
//        {
//          $window.alert(message);
//        }
//        else
//        {
//          $rootScope.notification = {
//            status:   status,
//            type:     type,
//            message:  message
//          };
//        }
//      },
//
//      success: function (message, permanent)
//      {
//        console.log('success ->', message);
//
//        this.init(true, 'alert-success', message);
//
//        if (!permanent) this.destroy();
//      },
//
//      error: function (message, permanent)
//      {
//        this.init(true, 'alert-danger', message);
//
//        if (!permanent) this.destroy();
//      },
//
//      destroy: function ()
//      {
//        setTimeout(function ()
//        {
//          $rootScope.notification.status = false;
//        }, 5000);
//      }
//    };

//    $rootScope.notifier.init(false, '', '');





    /**
     * Allow webkit desktop notifications
     */
    // $rootScope.allowWebkitNotifications = function ()
    // {
    //   // Callback so it will work in Safari 
    //   $window.webkitNotifications.requestPermission(function () {});     
    // };


    /**
     * Set webkit notification
     */
    // $rootScope.setWebkitNotification = function (title, message, params)
    // {
    //   if ($window.webkitNotifications && $config.notifications.webkit.app)
    //   {
    //     var notification =  $window.webkitNotifications.createNotification(
    //                           location.protocol + "//" + location.hostname + (location.port && ":" + location.port) + 
    //                           '/js/profiles/' + $config.profile.meta + '/img/ico/apple-touch-icon-144x144-precomposed.png', 
    //                           title, 
    //                           message
    //                         );

    //     notification.onclick = function () 
    //     {
    //       $rootScope.$apply(function ()
    //       {            
    //         if (params.search && !params.hash)
    //         {
    //           $location.path('/' + params.path).search(params.search);
    //         }
    //         else if (!params.search && params.hash)
    //         {
    //           $location.path('/' + params.path).hash(params.hash); 
    //         }
    //         else if (!params.search && !params.hash)
    //         {
    //           $location.path('/' + params.path); 
    //         }
    //         else if (params.search && params.hash)
    //         {
    //           $location.path('/' + params.path).search(params.search).hash(params.hash); 
    //         }
    //       });
    //     };

    //     notification.show();
    //   };     
    // };






    /**
     * Detect route change start
     */
    $rootScope.$on('$routeChangeStart', function (event, next, current)
    {
      // function resetLoaders ()
      // {
      //   $rootScope.loaderIcons = {
      //     general:    false,
      //     dashboard:  false,
      //     planboard:  false,
      //     messages:   false,
      //     groups:     false,
      //     profile:    false,
      //     settings:   false
      //   };
      // }

      // resetLoaders();

      // switch ($location.path())
      // {
      //   case '/dashboard':
      //     $rootScope.loaderIcons.dashboard = true;

      //     $rootScope.location = 'dashboard';
      //   break;

      //   case '/planboard':
      //     $rootScope.loaderIcons.planboard = true;

      //     $rootScope.location = 'planboard';
      //   break;

      //   case '/messages':
      //     $rootScope.loaderIcons.messages = true;

      //     $rootScope.location = 'messages';
      //   break;

      //   case '/groups':
      //     $rootScope.loaderIcons.groups = true;

      //     $rootScope.location = 'groups';
      //   break;

      //   case '/settings':
      //     $rootScope.loaderIcons.settings = true;

      //     $rootScope.location = 'settings';
      //   break;

      //   default:
      //     if ($location.path().match(/profile/))
      //     {
      //       $rootScope.loaderIcons.profile = true;

      //       $rootScope.location = 'profile';
      //     }
      //     else
      //     {
      //       $rootScope.loaderIcons.general = true;
      //     }
      // }

      // if (!Session.check()) $location.path("/login");

      // $rootScope.loadingBig = true;

      $rootScope.statusBar.display('Loading..');





      // switch ($location.path())
      // {
      //   case '/dashboard':
      //     $rootScope.location = 'dashboard';
      //   break;

      //   case '/planboard':
      //     $rootScope.location = 'planboard';
      //   break;

      //   case '/messages':
      //     $rootScope.location = 'messages';
      //   break;

      //   case '/groups':
      //     $rootScope.location = 'groups';
      //   break;

      //   case '/settings':
      //     $rootScope.location = 'settings';
      //   break;

      //   default:
      //     if ($location.path().match(/profile/))
      //     {
      //       $rootScope.location = 'profile';
      //     }
      // }


      $rootScope.location = $location.path().substring(1);


      $('div[ng-view]').hide();
    });






    /**
     * Route change successfull
     */
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous)
    {
      $rootScope.newLocation = $location.path();

      $rootScope.loadingBig = false;

      $rootScope.statusBar.off();

      $('div[ng-view]').show();
    });






    /**
     * TODO
     * A better way of dealing with this error!
     * 
     * Route change is failed!
     */
    $rootScope.$on('$routeChangeError', function (event, current, previous, rejection)
    {
      $rootScope.notifier.error(rejection);
    });





    /**
     * Fix styles
     */
    $rootScope.fixStyles = function ()
    {
      var tabHeight = $('.tabs-left .nav-tabs').height();

      $.each($('.tab-content').children(), function () 
      {
        var $parent = $(this),
            $this = $(this).attr('id'),
            contentHeight = $('.tabs-left .tab-content #' + $this).height();

        /**
         * TODO
         * 
         * Append left border fix
         */
        // $parent.append('<div class="left-border-fix"></div>');
        // console.log('parent ->', $parent);
        // $('#' + $this + ' .left-border-fix').css({
        //   height: contentHeight
        // });
        /**
         * Check if one is bigger than another
         */

        if (tabHeight > contentHeight)
        {
          // console.log('tab is taller than content ->', $this);
          $('.tabs-left .tab-content #' + $this).css({
            height: $('.tabs-left .nav-tabs').height() + 6
          });
        }
        else if (contentHeight > tabHeight)
        {
          // console.log('content is taller than tabs ->', $this);
          // $('.tabs-left .nav-tabs').css( { height: contentHeight } );
        };
      });

      /**
       * Correct icon-font-library icons for mac and linux
       */
      if ($.os.mac || $.os.linux)
      {
        $('.nav-tabs-app li a span').css({
          paddingTop: '10px',
          marginBottom: '0px'
        });

        // $('#loading').css({
        //   //marginTop: '-160px'
        //   display: 'none'
        // });
      }

    };








    /**
     * Experimental full screen ability
     */
    $rootScope.fullScreen = function () { screenfull.toggle($('html')[0]); };





    /**
     * Detect OS for some specific styling issues
     */
    if ($.os.windows)
    {
      $('#loading p').css({
        paddingTop: '130px'
      });
    }







    // if (!$config.profile.mobileApp.status) $('#copyrights span.muted').css({right: 0});

    // $rootScope.downloadMobileApp = function ()
    // {
    //   $rootScope.statusBar.display('Instructies aan het verzenden...');

    //   Messages.email()
    //   .then(function (result)
    //   {
    //     $rootScope.notifier.success('Controleer uw inbox voor de instructies.');

    //     $rootScope.statusBar.off();
    //   })
    // }
    

  }
]);


/**
 * Sticky timeline header
 */
// $('#mainTimeline .timeline-frame div:first div:first').css({'top': '0px'});/*jslint node: true */
/*global angular */
'use strict';


angular.module('WebPaige.Modals.User', ['ngResource'])


/**
 * User
 */
.factory('User', 
[
	'$resource', '$config', '$q', '$location', 'Storage', '$rootScope',
	function ($resource, $config, $q, $location, Storage, $rootScope)
	{
    var User = $resource();


    var Login = $resource(
      $config.host + '/login',
      {},
      {
        process: {
          method: 'GET',
          params: {username: '', password: ''}
        }
      }
    );


    var Logout = $resource(
      $config.host + '/logout',
      {},
      {
        process: {
          method: 'GET',
          params: {}
        }
      }
    );


    var Owner = $resource(
      $config.host + '/accounts/contactinfos/owner',
      {},
      {
        query: {
          method:  'GET',
          params:  {},
          isArray: true
        },
        create: {
          method:  'POST',
          params:  {}
        },
        get: {
          method:  'GET',
          params:  {tag: ''}
          // < Name | Mobile| Fixed_Line | Email | Fax | Address | PURCHASED_NUMBER | Other >
        }
      }
    );


    /**
     * User login
     */
    User.prototype.login = function (username, password)
    {
      var deferred = $q.defer();

      Login.process({username: username, password: password},
        function (result)
        {
          if (angular.equals(result, []))
          {
            deferred.reject('Something went wrong with login!');
          }
          else
          {
            deferred.resolve(result);
          }
        },
        function (error)
        {
          deferred.resolve(error);
        }
      );

      return deferred.promise;
    };


    /**
     * User logout
     */
    User.prototype.logout = function ()
    {
      var deferred = $q.defer();

      Logout.process(null,
        function (result)
        {
          deferred.resolve(result);
        },
        function (error)
        {
          deferred.resolve({error: error});
        }
      );

      return deferred.promise;
    };


    /**
     * Get or set user resources
     */
    User.prototype.owner = {

      /**
       * Get user account from localStorage
       */
      get: function ()
      {
        return angular.fromJson(Storage.get('resources'));
      },

      /**
       * Set user account to localStorage
       */
      set: function (result)
      {
        Storage.add('resources', angular.toJson(result));

        this.process(result);
      },

      /**
       * Process back-end returned data for app itself
       */
      process: function (result)
      {
        if (result)
        {
          var account = {};
          angular.forEach(result, function (resource)
          {
            switch (resource.contactInfoTag)
            {
              case 'Name':
                account.name = resource.contactInfo;
                break;
              case 'Phone':
                account.phone = resource.contactInfo;
                break;
              case 'Email':
                account.email = resource.contactInfo;
                break;
              case 'Address':
                account.address = resource.contactInfo;
                break;
              case 'PURCHASED_NUMBER':
                account.purchasedNumber = resource.contactInfo;
                break;
            }
          });

          if (result[0])
          {
            account.id = result[0].ownerKey;
          }

          // TODO (Remove this later on)
          $rootScope.app.resources = account;
        }
      }
    };


    /**
     * Get user resources
     */
    User.prototype.resources = function ()
    {
      var deferred = $q.defer();

      Owner.query(null,
        function (result)
        {
          if (angular.equals(result, []))
          {
            deferred.reject('User has no resources!');
          }
          else
          {
            /**
             * Process resources for storing in dom and localStorage
             */
            User.prototype.owner.set(result);

            deferred.resolve(result);
          }
        },
        function (error)
        {
          deferred.resolve({error: error});
        }
      );

      return deferred.promise;
    };


    return new User();
	}
]);;/*jslint node: true */
/*global angular */
'use strict';


angular.module('WebPaige.Modals.Core', ['ngResource'])


/**
 * Core modal
 */
.factory('Core',
[
	'$rootScope', '$resource', '$config', '$q', 'Storage',
	function ($rootScope, $resource, $config, $q, Storage)
	{
    /**
     * Empty resource
     */
    var Core = $resource();


    /**
     * Contact Infos resource
     */
    var ContactInfos = $resource(
      $config.host + '/accounts/contactinfos/:id',
      {},
      {
        list: {
          method: 'GET',
          params: {},
          isArray: true
        },
        get: {
          method: 'GET',
          params: {id: ''}
        },
        create: {
          method: 'POST',
          params: {}
        },
        update: {
          method: 'PUT',
          params: {id: ''}
        },
        remove: {
          method: 'DELETE',
          params: {id: ''}
        }
      }
    );


    /**
     * Verification resource
     */
    var Verification = $resource(
      $config.host + '/products/verifyme/:action',
      {},
      {
        initiate: {
          method: 'POST',
          params: {action: 'initiate'}
        },
        confirm: {
          method: 'POST',
          params: {action: 'verify'}
        }
      }
    );


    /**
     * Settings resource
     */
    var Settings = $resource(
      $config.host + '/settings/notifications/:id',
      {},
      {
        list: {
          method: 'GET',
          params: {},
          isArray: true
        },
        get: {
          method: 'GET',
          params: {id: ''}
        },
        create: {
          method: 'POST',
          params: {}
        },
        update: {
          method: 'PUT',
          params: {id: ''}
        },
        remove: {
          method: 'DELETE',
          params: {id: ''}
        }
      }
    );


    /**
     * Group resource
     */
    var Groups = $resource(
      $config.host + '/accounts/groups/:id',
      {},
      {
        list: {
          method: 'GET',
          params: {},
          isArray: true
        },
        get: {
          method: 'GET',
          params: {id: ''}
        },
        update: {
          method: 'PUT',
          params: {id: ''}
        }
      }
    );


    /**
     * Notifications
     */
    Core.prototype.settings = {

      /**
       * Get localStorage cache for settings
       */
      local: function ()
      {
        return angular.fromJson(Storage.get('settings'));
      },

      /**
       * List notifications
       */
      list: function ()
      {
        var deferred = $q.defer();

        Settings.query(
          function (result)
          {
            Storage.add('settings', angular.toJson(result));

            deferred.resolve(result);
          },
          function (error)
          {
            deferred.resolve({error: error});
          }
        );

        return deferred.promise;
      },

      /**
       * Update a setting
       */
      update: function (options)
      {

      }
    };


    /**
     * Connected numbers
     */
    Core.prototype.connections = {

      /**
       * Get local cache for connected numbers
       */
      local: function ()
      {
        return angular.fromJson(Storage.get('connections'));
      },

      /**
       * List numbers
       */
      list: function ()
      {
        var deferred = $q.defer();

        ContactInfos.list(
          function (result)
          {
            Storage.add('connections', angular.toJson(result));

            deferred.resolve(result);
          },
          function (error)
          {
            deferred.resolve({error: error});
          }
        );

        return deferred.promise;
      },

      /**
       * Get contactinfo
       */
      get: function (id)
      {
        var deferred = $q.defer();

        ContactInfos.get(
          {
            id: id
          },
          function (result)
          {
            deferred.resolve(result);
          },
          function (error)
          {
            deferred.resolve({error: error});
          }
        );

        return deferred.promise;
      },

      /**
       * Save a number
       */
      save: function (connection)
      {
        var deferred = $q.defer();

        var payload = {
          contactInfo:    connection.contactInfo,
          contactInfoTag: 'Phone',
          label:          connection.label
        };

        if (connection.id)
        {
          payload.id = connection.id;

          ContactInfos.update({id: connection.id}, payload,
            function (result)
            {
              deferred.resolve(result);
            },
            function (error)
            {
              deferred.resolve({error: error});
            }
          );
        }
        else
        {
          ContactInfos.create(payload,
            function (result)
            {
              deferred.resolve(result);
            },
            function (error)
            {
              deferred.resolve({error: error});
            }
          );
        }

        return deferred.promise;
      },

      /**
       * Delete a connected number
       */
      remove: function (connection)
      {
        var deferred = $q.defer();

        ContactInfos.remove({
            id: connection.id
          },
          function (result)
          {
            deferred.resolve(result);
          },
          function (error)
          {
            deferred.resolve({error: error});
          }
        );

        return deferred.promise;
      },

      /**
       * Verify a connected number
       */
      verify: {

        /**
         * Initiate a verification
         */
        initiate: function (number)
        {
          var deferred = $q.defer();

          Verification.initiate(
            {
              verificationMedium: 'SMS',
              verificationInfo: {
                address:  number.contactInfo
              }
            },
            function (result)
            {
              deferred.resolve(result);
            },
            function (error)
            {
              deferred.resolve({error: error});
            }
          );

          return deferred.promise;
        },

        /**
         * Confirm verification
         */
        confirm: function (verificationCode, verificationInfoID)
        {
          var deferred = $q.defer();

          Verification.confirm(
            {
              verificationCode: verificationCode,
              id:               verificationInfoID
            },
            function (result)
            {
              deferred.resolve(result);
            },
            function (error)
            {
              deferred.resolve({error: error});
            }
          );

          return deferred.promise;
        }
      }
    };


    /**
     * Groups
     */
    Core.prototype.groups = {

      /**
       * Get localStorage value of groups
       */
      local: function ()
      {
        return angular.fromJson(Storage.get('groups'));
      },

      /**
       * List groups
       */
      list: function ()
      {
        var deferred = $q.defer();

        Groups.query(
          function (result)
          {
            Storage.add('groups', angular.toJson(result));

            deferred.resolve(result);
          },
          function (error)
          {
            deferred.resolve({error: error});
          }
        );

        return deferred.promise;
      },

      /**
       * Update groups
       */
      update: function (group)
      {
        var deferred = $q.defer();

        Groups.update({id: group.id}, {
            contactInfoIds: group.list
          },
          function (result)
          {
            deferred.resolve(result);
          },
          function (error)
          {
            deferred.resolve({error: error});
          }
        );

        return deferred.promise;
      }
    };

    /**
     * Blacklists
     */
    Core.prototype.blacklists = {

      /**
       * List blacklists
       */
      list: function ()
      {

      },

      save: function (blacklisted)
      {
        var deferred = $q.defer();

        ContactInfos.create({
            contactInfo:    blacklisted.contactInfo,
            contactInfoTag: 'Phone',
            label:          blacklisted.label
          },
          function (result)
          {
            console.log('it is created');

            deferred.resolve(result);

          },
          function (error)
          {
            deferred.resolve({error: error});
          }
        );

        return deferred.promise;
      }

    };


    /**
     * Data factory
     */
    Core.prototype.factory = {

      /**
       * Process data
       */
      process: function ()
      {
        // Prepare raw data
        var raws = {
            resources:    angular.fromJson(Storage.get('resources')),
            groups:       angular.fromJson(Storage.get('groups')),
            connections:  angular.fromJson(Storage.get('connections')),
            settings:     angular.fromJson(Storage.get('settings'))
          };

        // Prepare containers
        var nodes       = {},
            connections = {},
            blacklist   = {},
            settings    = {},
            account     = {},
            groups      = {},
            phones      = [],
            emails      = [],
            tmp         = [];

        // Initialize root container
        $rootScope.data = {};

        // Compile contactinfos
        angular.forEach(raws.connections, function (connection)
        {
          nodes[connection.id] = connection;
        });

        // Process resources information
        angular.forEach(raws.resources, function (resource)
        {
          switch (resource.contactInfoTag)
          {
          case 'Name':
            account.name = resource.contactInfo;
            break;
          case 'Phone':
            account.phone = resource.contactInfo;

            nodes[resource.id] = resource;
            break;
          case 'Email':
            account.email = resource.contactInfo;

            nodes[resource.id] = resource;
            break;
          case 'Address':
            account.address = resource.contactInfo;
            break;
          case 'PURCHASED_NUMBER':
            account.purchasedNumber = resource.contactInfo;
            break;
          }
        });

        // Setup user id
        account.id = raws.resources[0].ownerKey;

        // Get blacklisted items
        var blacklisted = raws.groups[0].contactInfoIds;

        // Build blacklisted group node
        groups.blacklist = raws.groups[0];

        // Pass connections
        connections = nodes;

        // Compile blacklist
        angular.forEach(blacklisted, function (listed)
        {
          blacklist[listed] = nodes[listed];

          delete connections[listed];
        });

        // Watch for parked blacklist items
//        if ($rootScope.data.tmp && $rootScope.data.tmp.length > 0)
//        {
//          console.log('there is one ! ->', $rootScope.data.tmp);
//
//          angular.forEach($rootScope.data.tmp, function (blacklisted)
//          {
//            blacklist[blacklisted.id] = blacklisted;
//          });
//
//          $rootScope.data.tmp = [];
//        }

        // Arrayize connections
        var cons = [];
        angular.forEach(connections, function (connection)
        {
          cons.push(connection);
        });
        connections = cons;

        // Arrayize blacklist
        var blacs = [];
        angular.forEach(blacklist, function (listed)
        {
          blacs.push(listed);
        });
        blacklist = blacs;

        // Process settings
        angular.forEach(nodes, function (node)
        {
          if (node.contactInfoTag === 'Phone')
          {
            phones.push(node);
          }

          if (node.contactInfoTag === 'Email')
          {
            emails.push(node);
          }
        });

        // Build notification list object
        settings = {
          sms: {
            status:   false,
            target:   phones[0].id,
            targets:  []
          },
          email: {
            status:   false,
            target:   emails[0].id,
            targets:  []
          }
        };

        // Setup selected ones
        angular.forEach(raws.settings, function (setting)
        {
          if (setting.medium === 'Email')
          {
            settings.email.id     = setting.id;
            settings.email.status = true;
            settings.email.target = (!setting.targetContactInfos[0] || setting.targetContactInfos[0] < 0) ?
                                      undefined :
                                      setting.targetContactInfos[0];
          }

          if (setting.medium === 'SMS')
          {
            settings.sms.id     = setting.id;
            settings.sms.status = true;
            settings.sms.target = (!setting.targetContactInfos[0] || setting.targetContactInfos[0] < 0) ?
                                    undefined :
                                    setting.targetContactInfos[0];
          }
        });

        // Build list of emails
        angular.forEach(emails, function (email)
        {
          settings.email.targets.push({
            id:     email.id,
            value:  email.contactInfo
          });
        });

        // Build list of phones
        angular.forEach(phones, function (phone)
        {
          settings.sms.targets.push({
            id:     phone.id,
            value:  phone.contactInfo
          });
        });

        // Pass data
        $rootScope.data = {
          account:      account,
          connections:  connections,
          blacklist:    blacklist,
          settings:     settings,
          groups:       groups,
          tmp:          tmp
        };

        console.warn('data ->', $rootScope.data);

        return true;
      }
    };


    return new Core();
	}
]);;/*jslint node: true */
/*global angular */
/*global $ */
'use strict';


angular.module('WebPaige.Directives', ['ngResource'])


/**
 * Chosen
 */
.directive('chosen',
  function ()
  {
    var linker = function (scope, element, attr)
    {
      scope.$watch('receviersList', function ()
      {
         element.trigger('liszt:updated');
      });

      scope.$watch('message.receviers', function ()
      {
        $(element[0]).trigger('liszt:updated');
      });

      element.chosen();
    };

    return {
      restrict: 'A',
      link:     linker
    };
  }
)

.factory('$modal', ['$rootScope', '$compile', '$http', '$timeout', '$q', '$templateCache',
    function($rootScope, $compile, $http, $timeout, $q, $templateCache) {

  var ModalFactory = function ModalFactory(options) {

    function Modal(options) {
      if(!options) options = {};

      var scope = options.scope || $rootScope.$new(),
        templateUrl = options.template;

      //@todo support {title, content} object

      return $q.when($templateCache.get(templateUrl) || $http.get(templateUrl, {cache: true}).then(function(res) { return res.data; }))
        .then(function onSuccess(template) {

          // Build modal object
          var id = templateUrl.replace('.html', '').replace(/[\/|\.|:]/g, "-") + '-' + scope.$id;
          var $modal = $('<div class="modal hide" tabindex="-1"></div>').attr('id', id).addClass('fade').html(template);
          if(options.modalClass) $modal.addClass(options.modalClass);

          $('body').append($modal);

          // Compile modal content
          $timeout(function() {
            $compile($modal)(scope);
          });

          // Provide scope display functions
          scope.$modal = function(name) {
            $modal.modal(name);
          };
          scope.hide = function() {
            $modal.modal('hide');
          };
          scope.show = function() {
            $modal.modal('show');
          };
          scope.dismiss = scope.hide;

          // Emit modal events
          angular.forEach(['show', 'shown', 'hide', 'hidden'], function(name) {
            $modal.on(name, function(ev) {
              scope.$emit('modal-' + name, ev);
            });
          });

          // Support autofocus attribute
          $modal.on('shown', function(event) {
            $('input[autofocus]', $modal).first().trigger('focus');
          });

          if(options.show) {
            $modal.modal('show');
          }

          return $modal;

        });

    }

    return new Modal(options);

  };

  return ModalFactory;

}]);


/**
 * Notification item
 */
// .directive('notificationItem',
//   function ($compile)
//   {
//     return {
//       restrict: 'E',
//       rep1ace:  true,
//       templateUrl: 'dist/views/messages-scheadule-item.html',
//       link: function (scope, element, attrs)
//       {
//         /**
//          * Pass the scheadule data
//          */
//         scope.s = scope.scheadule;

//         // element.html(template).show();
//         // $compile(element.contents())(scope);

//         /**
//          * Serve to the controller
//          */
//         scope.remover = function (key)
//         {
//           console.log('coming to remover');

//           scope.$parent.$parent.remover(key);
//         };
//       },
//       scope: {
//         scheadule: '='
//       }
//     };

//   }
// )


/**
 * Daterangepicker
 */
// .directive('daterangepicker',
// [
//   '$rootScope',
//   function ($rootScope)
//   {
//     return {
//       restrict: 'A',

//       link: function postLink(scope, element, attrs, controller)
//       {
//         // var startDate = Date.create().addDays(-6),
//         //     endDate   = Date.create();       
//         //element.val(startDate.format('{MM}-{dd}-{yyyy}') + ' / ' + endDate.format('{MM}-{dd}-{yyyy}'));

//         element.daterangepicker({
//           // startDate: startDate,
//           // endDate: endDate,
//           ranges: {
//             'Today':        ['today',     'tomorrow'],
//             'Tomorrow':     ['tomorrow',  new Date.today().addDays(2)],
//             'Yesterday':    ['yesterday', 'today'],
//             'Next 3 Days':  ['today',     new Date.create().addDays(3)],
//             'Next 7 Days':  ['today',     new Date.create().addDays(7)]
//           }
//         },
//         function (start, end)
//         {
//           scope.$apply(function ()
//           {
//             var diff = end.getTime() - start.getTime();

//             /**
//              * Scope is a day
//              */
//             if (diff <= 86400000)
//             {
//               scope.timeline.range = {
//                 start:  start,
//                 end:    start
//               };
//               scope.timeline.scope = {
//                 day:    true,
//                 week:   false,
//                 month:  false
//               };
//             }
//             /**
//              * Scope is less than a week
//              */
//             else if (diff < 604800000)
//             {
//               scope.timeline.range = {
//                 start:  start,
//                 end:    end
//               };
//               scope.timeline.scope = {
//                 day:    false,
//                 week:   true,
//                 month:  false
//               };
//             }
//             /**
//              * Scope is more than a week
//              */
//             else if (diff > 604800000)
//             {
//               scope.timeline.range = {
//                 start:  start,
//                 end:    end
//               };
//               scope.timeline.scope = {
//                 day:    false,
//                 week:   false,
//                 month:  true
//               };
//             }

//             $rootScope.$broadcast('timeliner', {
//               start:  start,
//               end:    end
//             });

//           });
//         });

//         /**
//          * Set data toggle
//          */
//         element.attr('data-toggle', 'daterangepicker');

//         /**
//          * TODO
//          * Investigate if its really needed!!
//          */
//         element.daterangepicker({
//           autoclose: true
//         });
//       }
//     };
//   }
// ])


/**
 * ???
 */
// .directive('wpName', 
// [
//   'Storage', 
//   function (Storage)
//   {
//     return {
//       restrict : 'A',
//       link : function linkfn(scope, element, attrs)
//       {
//         var getmemberName = function (uid)
//         {
//           var members = angular.fromJson(Storage.get('members')),
//               retName = uid;

//           angular.forEach(members , function (mem, i)
//           {
//             if (mem.uuid == uid)
//             {
//               retName = mem.name;

//               return false;
//             };
//           });

//           return retName;
//         };
//         scope.$watch(attrs.wpName, function (uid)
//         {
//           element.text(getmemberName(uid)); 
//         });
//       }
//     }
//   }
// ]);


/**
 * 
 */
// .directive('shortcuts', 
// [
//   '$rootScope', 
//   function ($rootScope)
//   {
//     return {
//       restrict: 'E',
//       template: '<link rel="shortcut icon" ng-href="js/profiles/{{profile}}/img/ico/favicon.ico">' +
//                 '<link rel="apple-touch-icon-precomposed" sizes="144x144" ng-href="js/profiles/{{profile}}/img/ico/apple-touch-icon-144-precomposed.png">' +
//                 '<link rel="apple-touch-icon-precomposed" sizes="114x114" ng-href="js/profiles/{{profile}}/img/ico/apple-touch-icon-114-precomposed.png">' +
//                 '<link rel="apple-touch-icon-precomposed" sizes="72x72"   ng-href="js/profiles/{{profile}}/img/ico/apple-touch-icon-72-precomposed.png">' +
//                 '<link rel="apple-touch-icon-precomposed" sizes="57x57"   ng-href="js/profiles/{{profile}}/img/ico/apple-touch-icon-57-precomposed.png">',
//       replace: true,
//       scope: {
//         profile: '@profile'
//       },
//       link: function (scope, element, attrs)
//       {
//       }
//     }
//   }
// ]);

;/**
 * AngularStrap - Twitter Bootstrap directives for AngularJS
 * @version v0.7.0 - 2013-03-11
 * @link http://mgcrea.github.com/angular-strap
 * @author Olivier Louvignes <olivier@mg-crea.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
angular.module("$strap.config",[]).value("$strap.config",{}),angular.module("$strap.filters",["$strap.config"]),angular.module("$strap.directives",["$strap.config"]),angular.module("$strap",["$strap.filters","$strap.directives","$strap.config"]),angular.module("$strap.directives").directive("bsAlert",["$parse","$timeout","$compile",function(t,e,n){"use strict";return{restrict:"A",link:function(e,i,a){var o=t(a.bsAlert),r=(o.assign,o(e));a.bsAlert?e.$watch(a.bsAlert,function(t,o){r=t,i.html((t.title?"<strong>"+t.title+"</strong>&nbsp;":"")+t.content||""),t.closed&&i.hide(),n(i.contents())(e),(t.type||o.type)&&(o.type&&i.removeClass("alert-"+o.type),t.type&&i.addClass("alert-"+t.type)),(angular.isUndefined(a.closeButton)||"0"!==a.closeButton&&"false"!==a.closeButton)&&i.prepend('<button type="button" class="close" data-dismiss="alert">&times;</button>')},!0):(angular.isUndefined(a.closeButton)||"0"!==a.closeButton&&"false"!==a.closeButton)&&i.prepend('<button type="button" class="close" data-dismiss="alert">&times;</button>'),i.addClass("alert").alert(),i.hasClass("fade")&&(i.removeClass("in"),setTimeout(function(){i.addClass("in")}));var s=a.ngRepeat&&a.ngRepeat.split(" in ").pop();i.on("close",function(t){var n;s?(t.preventDefault(),i.removeClass("in"),n=function(){i.trigger("closed"),e.$parent&&e.$parent.$apply(function(){for(var t=s.split("."),n=e.$parent,i=0;t.length>i;++i)n&&(n=n[t[i]]);n&&n.splice(e.$index,1)})},$.support.transition&&i.hasClass("fade")?i.on($.support.transition.end,n):n()):r&&(t.preventDefault(),i.removeClass("in"),n=function(){i.trigger("closed"),e.$apply(function(){r.closed=!0})},$.support.transition&&i.hasClass("fade")?i.on($.support.transition.end,n):n())})}}}]),angular.module("$strap.directives").directive("bsButton",["$parse","$timeout",function(t){"use strict";return{restrict:"A",require:"?ngModel",link:function(e,n,i,a){if(a){n.parent('[data-toggle="buttons-checkbox"], [data-toggle="buttons-radio"]').length||n.attr("data-toggle","button");var o=!!e.$eval(i.ngModel);o&&n.addClass("active"),e.$watch(i.ngModel,function(t,e){var i=!!t,a=!!e;i!==a?$.fn.button.Constructor.prototype.toggle.call(r):i&&!o&&n.addClass("active")})}n.hasClass("btn")||n.on("click.button.data-api",function(){n.button("toggle")}),n.button();var r=n.data("button");r.toggle=function(){if(!a)return $.fn.button.Constructor.prototype.toggle.call(this);var i=n.parent('[data-toggle="buttons-radio"]');i.length?(n.siblings("[ng-model]").each(function(n,i){t($(i).attr("ng-model")).assign(e,!1)}),e.$digest(),a.$modelValue||(a.$setViewValue(!a.$modelValue),e.$digest())):e.$apply(function(){a.$setViewValue(!a.$modelValue)})}}}}]).directive("bsButtonsCheckbox",["$parse",function(){"use strict";return{restrict:"A",require:"?ngModel",compile:function(t){t.attr("data-toggle","buttons-checkbox").find("a, button").each(function(t,e){$(e).attr("bs-button","")})}}}]).directive("bsButtonsRadio",["$parse",function(){"use strict";return{restrict:"A",require:"?ngModel",compile:function(t,e){return t.attr("data-toggle","buttons-radio"),e.ngModel||t.find("a, button").each(function(t,e){$(e).attr("bs-button","")}),function(t,e,n,i){i&&(e.find("[value]").button().filter('[value="'+t.$eval(n.ngModel)+'"]').addClass("active"),e.on("click.button.data-api",function(e){t.$apply(function(){i.$setViewValue($(e.target).closest("button").attr("value"))})}),t.$watch(n.ngModel,function(i,a){if(i!==a){var o=e.find('[value="'+t.$eval(n.ngModel)+'"]');o.length&&$.fn.button.Constructor.prototype.toggle.call(o.data("button"))}}))}}}}]),angular.module("$strap.directives").directive("bsButtonSelect",["$parse","$timeout",function(t){"use strict";return{restrict:"A",require:"?ngModel",link:function(e,n,i,a){var o=t(i.bsButtonSelect);o.assign,a&&(n.text(e.$eval(i.ngModel)),e.$watch(i.ngModel,function(t){n.text(t)}));var r,s,l,u;n.bind("click",function(){r=o(e),s=a?e.$eval(i.ngModel):n.text(),l=r.indexOf(s),u=l>r.length-2?r[0]:r[l+1],console.warn(r,u),e.$apply(function(){n.text(u),a&&a.$setViewValue(u)})})}}}]),angular.module("$strap.directives").directive("bsDatepicker",["$timeout",function(){"use strict";var t="ontouchstart"in window&&!window.navigator.userAgent.match(/PhantomJS/i),e={"/":"[\\/]","-":"[-]",".":"[.]",dd:"(?:(?:[0-2]?[0-9]{1})|(?:[3][01]{1}))",d:"(?:(?:[0-2]?[0-9]{1})|(?:[3][01]{1}))",mm:"(?:[0]?[1-9]|[1][012])",m:"(?:[0]?[1-9]|[1][012])",yyyy:"(?:(?:[1]{1}[0-9]{1}[0-9]{1}[0-9]{1})|(?:[2]{1}[0-9]{3}))(?![[0-9]])",yy:"(?:(?:[0-9]{1}[0-9]{1}))(?![[0-9]])"};return{restrict:"A",require:"?ngModel",link:function(n,i,a,o){var r=function(t,n){n||(n={});var i=t,a=e;return angular.forEach(a,function(t,e){i=i.split(e).join(t)}),RegExp("^"+i+"$",["i"])},s=t?"yyyy/mm/dd":r(a.dateFormat||"mm/dd/yyyy");o&&o.$parsers.unshift(function(t){return!t||s.test(t)?(o.$setValidity("date",!0),t):(o.$setValidity("date",!1),void 0)});var l=i.next('[data-toggle="datepicker"]');if(l.length&&l.on("click",function(){t?i.trigger("focus"):i.datepicker("show")}),t&&"text"===i.prop("type"))i.prop("type","date"),i.on("change",function(){n.$apply(function(){o.$setViewValue(i.val())})});else{o&&i.on("changeDate",function(){n.$apply(function(){o.$setViewValue(i.val())})});var u=i.closest(".popover");u&&u.on("hide",function(){var t=i.data("datepicker");t&&(t.picker.remove(),i.data("datepicker",null))}),i.attr("data-toggle","datepicker"),i.datepicker({autoclose:!0,forceParse:a.forceParse||!1,language:a.language||"en"})}}}}]),angular.module("$strap.directives").directive("bsDropdown",["$parse","$compile",function(t,e){"use strict";var n=Array.prototype.slice,i='<ul class="dropdown-menu" role="menu" aria-labelledby="drop1"><li ng-repeat="item in items" ng-class="{divider: !!item.divider, \'dropdown-submenu\': !!item.submenu && item.submenu.length}"><a ng-hide="!!item.divider" tabindex="-1" ng-href="{{item.href}}" ng-click="{{item.click}}" target="{{item.target}}" ng-bind-html-unsafe="item.text"></a></li></ul>',a=function(t,n,a){for(var r,s,l,u=0,c=t.length;c>u;u++)(r=t[u].submenu)&&(l=a.$new(),l.items=r,s=e(i)(l),s=s.appendTo(n.children("li:nth-child("+(u+1)+")")),o(r,s,l))},o=function(){var t=n.call(arguments);setTimeout(function(){a.apply(null,t)})};return{restrict:"EA",scope:!0,link:function(n,a,r){var s=t(r.bsDropdown);n.items=s(n);var l=e(i)(n);o(n.items,l,n),l.insertAfter(a),a.addClass("dropdown-toggle").attr("data-toggle","dropdown")}}}]),angular.module("$strap.directives").directive("bsModal",["$parse","$compile","$http","$timeout","$q","$templateCache",function(t,e,n,i,a,o){"use strict";return{restrict:"A",scope:!0,link:function(r,s,l){var u=t(l.bsModal),c=(u.assign,u(r));a.when(o.get(c)||n.get(c,{cache:!0})).then(function(t){angular.isObject(t)&&(t=t.data);var n=u(r).replace(".html","").replace(/[\/|\.|:]/g,"-")+"-"+r.$id,a=$('<div class="modal hide" tabindex="-1"></div>').attr("id",n).attr("data-backdrop",l.backdrop||!0).attr("data-keyboard",l.keyboard||!0).addClass(l.modalClass?"fade "+l.modalClass:"fade").html(t);$("body").append(a),s.attr("href","#"+n).attr("data-toggle","modal"),i(function(){e(a)(r)}),r._modal=function(t){a.modal(t)},r.hide=function(){a.modal("hide")},r.show=function(){a.modal("show")},r.dismiss=r.hide})}}}]),angular.module("$strap.directives").directive("bsNavbar",["$location",function(t){"use strict";return{restrict:"A",link:function(e,n){e.$watch(function(){return t.path()},function(t){n.find("li[data-match-route]").each(function(e,n){var i=angular.element(n),a=i.attr("data-match-route"),o=RegExp("^"+a+"$",["i"]);o.test(t)?i.addClass("active"):i.removeClass("active")})})}}}]),angular.module("$strap.directives").directive("bsPopover",["$parse","$compile","$http","$timeout","$q","$templateCache",function(t,e,n,i,a,o){"use strict";return $("body").on("keyup",function(t){27===t.keyCode&&$(".popover.in").each(function(){$(this).popover("hide")})}),{restrict:"A",scope:!0,link:function(i,r,s){var l=t(s.bsPopover),u=(l.assign,l(i)),c={};angular.isObject(u)&&(c=u),a.when(c.content||o.get(u)||n.get(u,{cache:!0})).then(function(t){angular.isObject(t)&&(t=t.data),s.unique&&r.on("show",function(){$(".popover.in").each(function(){var t=$(this),e=t.data("popover");e&&!e.$element.is(r)&&t.popover("hide")})}),s.hide&&i.$watch(s.hide,function(t,e){t?n.hide():t!==e&&n.show()}),r.popover(angular.extend({},c,{content:t,html:!0}));var n=r.data("popover");n.hasContent=function(){return this.getTitle()||t},n.getPosition=function(){var t=$.fn.popover.Constructor.prototype.getPosition.apply(this,arguments);return e(this.$tip)(i),i.$digest(),this.$tip.data("popover",this),t},i._popover=function(t){r.popover(t)},i.hide=function(){r.popover("hide")},i.show=function(){r.popover("show")},i.dismiss=i.hide})}}}]),angular.module("$strap.directives").directive("bsTabs",["$parse","$compile",function(t,e){"use strict";return{restrict:"A",link:function(t,n){var i=['<ul class="nav nav-tabs">',"</ul>"],a=['<div class="tab-content">',"</div>"];n.find("[data-tab]").each(function(e){var n=angular.element(this),o="tab-"+t.$id+"-"+e,r=n.hasClass("active"),s=n.hasClass("fade"),l=t.$eval(n.data("tab"));i.splice(e+1,0,"<li"+(r?' class="active"':"")+'><a href="#'+o+'" data-toggle="tab">'+l+"</a></li>"),a.splice(e+1,0,'<div class="tab-pane '+n.attr("class")+(s&&r?" in":"")+'" id="'+o+'">'+this.innerHTML+"</div>")}),n.html(i.join("")+a.join("")),e(n.children("div.tab-content"))(t)}}}]),angular.module("$strap.directives").directive("bsTimepicker",["$timeout",function(){"use strict";var t="((?:(?:[0-1][0-9])|(?:[2][0-3])|(?:[0-9])):(?:[0-5][0-9])(?::[0-5][0-9])?(?:\\s?(?:am|AM|pm|PM))?)";return{restrict:"A",require:"?ngModel",link:function(e,n,i,a){a&&n.on("change",function(){e.$apply(function(){a.$setViewValue(n.val())})});var o=RegExp("^"+t+"$",["i"]);a.$parsers.unshift(function(t){return!t||o.test(t)?(a.$setValidity("time",!0),t):(a.$setValidity("time",!1),void 0)});var r=n.closest(".popover");r&&r.on("hide",function(){var t=n.data("timepicker");t&&(t.$widget.remove(),n.data("timepicker",null))}),n.attr("data-toggle","timepicker"),n.timepicker()}}}]),angular.module("$strap.directives").directive("bsTooltip",["$parse","$compile",function(t){"use strict";return{restrict:"A",scope:!0,link:function(e,n,i){var a=t(i.bsTooltip),o=(a.assign,a(e));e.$watch(i.bsTooltip,function(t,e){t!==e&&(o=t)}),i.unique&&n.on("show",function(){$(".tooltip.in").each(function(){var t=$(this),e=t.data("tooltip");e&&!e.$element.is(n)&&t.tooltip("hide")})}),n.tooltip({title:function(){return angular.isFunction(o)?o.apply(null,arguments):o},html:!0});var r=n.data("tooltip");r.show=function(){var t=$.Event("show");if(this.$element.trigger(t),!t.isDefaultPrevented()){var e=$.fn.tooltip.Constructor.prototype.show.apply(this,arguments);return this.tip().data("tooltip",this),e}},r.hide=function(){var t=$.Event("hide");return this.$element.trigger(t),t.isDefaultPrevented()?void 0:$.fn.tooltip.Constructor.prototype.hide.apply(this,arguments)},e._tooltip=function(t){n.tooltip(t)},e.hide=function(){n.tooltip("hide")},e.show=function(){n.tooltip("show")},e.dismiss=e.hide}}}]),angular.module("$strap.directives").directive("bsTypeahead",["$parse",function(t){"use strict";return{restrict:"A",require:"?ngModel",link:function(e,n,i,a){var o=t(i.bsTypeahead),r=(o.assign,o(e));e.$watch(i.bsTypeahead,function(t,e){t!==e&&(r=t)}),n.attr("data-provide","typeahead"),n.typeahead({source:function(){return angular.isFunction(r)?r.apply(null,arguments):r},minLength:i.minLength||1,items:i.items,updater:function(t){return a&&e.$apply(function(){a.$setViewValue(t)}),t}});var s=n.data("typeahead");s.lookup=function(){var t;return this.query=this.$element.val()||"",this.query.length<this.options.minLength?this.shown?this.hide():this:(t=$.isFunction(this.source)?this.source(this.query,$.proxy(this.process,this)):this.source,t?this.process(t):this)},"0"===i.minLength&&setTimeout(function(){n.on("focus",function(){0===n.val().length&&setTimeout(n.typeahead.bind(n,"lookup"),200)})})}}}]);;'use strict';


angular.module('WebPaige.Services.Session', ['ngResource'])


/**
 * Session Service
 */
.factory('Session', 
[
  '$rootScope', '$http', 'Storage', 
  function ($rootScope, $http, Storage)
  {
    return {
      /**
       * Check session
       */
      check: function()
      {
        var session = angular.fromJson(Storage.cookie.get('session'));

        if (session)
        {
          this.set(session.id);

          return true;
        }
        else
        {
          return false;
        }
      },

      /**
       * Read cookie value
       */
      cookie: function (session)
      {
        var values,
            pairs = document.cookie.split(";");

        for (var i=0; i < pairs.length; i++)
        {
          values = pairs[i].split("=");

          if (values[0].trim() == "Oneline.session") return angular.fromJson(values[1]);
        }

      },

      /**
       * Get session
       * Prolong session time by every check
       */
      get: function(session)
      {
        this.check(session);

        this.set(session.id);

        return session.id;
      },

      /**
       * Set session
       */
      set: function(sessionId)
      {
        var session = {
          id:   sessionId,
          time: new Date()
        };

        Storage.cookie.add('session', angular.toJson(session));

        $rootScope.session = session;

        $http.defaults.headers.common['X-SESSION_ID'] = $rootScope.session.id;

        return session;
      },

      /**
       * Clear session
       */
      clear: function()
      {
        $rootScope.session = null;

        $http.defaults.headers.common['X-SESSION_ID'] = null;
      }
    }
  }
]);;'use strict';


angular.module('WebPaige.Services.MD5', ['ngResource'])


/**
 * MD5
 */
.factory('MD5', 
  function ()
  {
    return function (string)
    {
      function RotateLeft(lValue, iShiftBits)
      {
        return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
      }
     
      function AddUnsigned(lX,lY)
      {
        var lX4,lY4,lX8,lY8,lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);

        if (lX4 & lY4) return (lResult ^ 0x80000000 ^ lX8 ^ lY8);

        if (lX4 | lY4)
        {
          if (lResult & 0x40000000)
          {
            return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
          }
          else
          {
            return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
          }
        }
        else
        {
          return (lResult ^ lX8 ^ lY8);
        }
      }
     
      function F(x,y,z) { return (x & y) | ((~x) & z) }
      function G(x,y,z) { return (x & z) | (y & (~z)) }
      function H(x,y,z) { return (x ^ y ^ z) }
      function I(x,y,z) { return (y ^ (x | (~z))) }
     
      function FF(a,b,c,d,x,s,ac)
      {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));

        return AddUnsigned(RotateLeft(a, s), b);
      }
     
      function GG(a,b,c,d,x,s,ac)
      {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));

        return AddUnsigned(RotateLeft(a, s), b);
      }
     
      function HH(a,b,c,d,x,s,ac)
      {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));

        return AddUnsigned(RotateLeft(a, s), b);
      }
     
      function II(a,b,c,d,x,s,ac)
      {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));

        return AddUnsigned(RotateLeft(a, s), b);
      }
     
      function ConvertToWordArray(string)
      {
        var lWordCount,
            lMessageLength = string.length,
            lNumberOfWords_temp1 = lMessageLength + 8,
            lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64,
            lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16,
            lWordArray = Array(lNumberOfWords - 1),
            lBytePosition = 0,
            lByteCount = 0;

        while ( lByteCount < lMessageLength )
        {
          lWordCount = (lByteCount - (lByteCount % 4)) / 4;
          lBytePosition = (lByteCount % 4)*8;
          lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));
          lByteCount++;
        }

        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
        lWordArray[lNumberOfWords-2] = lMessageLength<<3;
        lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
        return lWordArray;
      }
     
      function WordToHex(lValue)
      {
        var WordToHexValue = "", 
            WordToHexValue_temp = "",
            lByte,
            lCount;

        for (lCount = 0; lCount<=3; lCount++)
        {
          lByte = (lValue>>>(lCount*8)) & 255;
          WordToHexValue_temp = "0" + lByte.toString(16);
          WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }

        return WordToHexValue;
      };
     
      function Utf8Encode(string)
      {
        string = string.replace(/\r\n/g, "\n");

        var utftext = "";
     
        for (var n = 0; n < string.length; n++)
        {
          var c = string.charCodeAt(n);
     
          if (c < 128)
          {
            utftext += String.fromCharCode(c);
          }
          else if((c > 127) && (c < 2048))
          {
            utftext += String.fromCharCode((c >> 6) | 192);
            utftext += String.fromCharCode((c & 63) | 128);
          }
          else
          {
            utftext += String.fromCharCode((c >> 12) | 224);
            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
            utftext += String.fromCharCode((c & 63) | 128);
          }
        }
     
        return utftext;
      };
     
      var x = Array();
      var k,AA,BB,CC,DD,a,b,c,d;
      var S11=7, S12=12, S13=17, S14=22;
      var S21=5, S22=9 , S23=14, S24=20;
      var S31=4, S32=11, S33=16, S34=23;
      var S41=6, S42=10, S43=15, S44=21;
     
      string = Utf8Encode(string);
     
      x = ConvertToWordArray(string);
     
      a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;
     
      for (k=0; k<x.length; k+=16)
      {
        AA=a; BB=b; CC=c; DD=d;
        a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
        d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
        c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
        b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
        a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
        d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
        c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
        b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
        a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
        d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
        c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
        b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
        a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
        d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
        c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
        b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
        a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
        d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
        c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
        b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
        a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
        d=GG(d,a,b,c,x[k+10],S22,0x2441453);
        c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
        b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
        a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
        d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
        c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
        b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
        a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
        d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
        c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
        b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
        a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
        d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
        c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
        b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
        a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
        d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
        c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
        b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
        a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
        d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
        c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
        b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
        a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
        d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
        c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
        b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
        a=II(a,b,c,d,x[k+0], S41,0xF4292244);
        d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
        c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
        b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
        a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
        d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
        c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
        b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
        a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
        d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
        c=II(c,d,a,b,x[k+6], S43,0xA3014314);
        b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
        a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
        d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
        c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
        b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
        a=AddUnsigned(a,AA);
        b=AddUnsigned(b,BB);
        c=AddUnsigned(c,CC);
        d=AddUnsigned(d,DD);
      }
     
      var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
     
      return temp.toLowerCase();
    }
  }
);;'use strict';


angular.module('WebPaige.Services.Storage', ['ngResource'])


/**
 * Storage service for localStorage, Session and cookies management
 */
.factory('Storage', ['$rootScope', '$config', function ($rootScope, $config)
{
  // If there is a prefix set in the config lets use that with an appended 
  // period for readability
  // var prefix = angularLocalStorage.constant;
  
  if ($config.title.substr(-1) !== '.') $config.title = !!$config.title ? $config.title + '.' : '';

  // Checks the browser to see if local storage is supported
  var browserSupportsLocalStorage = function ()
  {
    try {
      return ('localStorage' in window && window['localStorage'] !== null);           
    }
    catch (e) {
      return false;
    }
  };

  // Directly adds a value to local storage
  // If local storage is not available in the browser use cookies
  // Example use: Storage.add('library','angular');
  var addToLocalStorage = function (key, value)
  {
    if (!browserSupportsLocalStorage()) return false;

    // 0 and "" is allowed as a value but let's limit other falsey values like "undefined"
    if (!value && value !== 0 && value !== "") return false;

    try {
      localStorage.setItem($config.title + key, value);
    }
    catch (e) {
      return false;
    };

    return true;
  };


  // Directly get a value from local storage
  // Example use: Storage.get('library'); // returns 'angular'
  var getFromLocalStorage = function (key)
  {
    if (!browserSupportsLocalStorage()) return false;

    var item = localStorage.getItem($config.title + key);

    if (!item) return null;

    return item;
  };


  // Remove an item from local storage
  // Example use: Storage.remove('library'); // removes the key/value pair of library='angular'
  var removeFromLocalStorage = function (key) 
  {
    if (!browserSupportsLocalStorage()) return false;

    try {
      localStorage.removeItem($config.title + key);
    } 
    catch (e) {
      return false;
    };

    return true;
  };


  // Remove all data for this app from local storage
  // Example use: Storage.clearAll();
  // Should be used mostly for development purposes
  var clearAllFromLocalStorage = function () 
  {
    if (!browserSupportsLocalStorage()) return false;

    var prefixLength = $config.title.length;

    for (var key in localStorage) 
    {
      // Only remove items that are for this app
      if (key.substr(0, prefixLength) === $config.title) 
      {
        try {
          removeFromLocalStorage(key.substr(prefixLength));
        } 
        catch (e) {
          return false;
        };
      };
    };

    return true;
  };


  /**
   * Checks the browser to see if session storage is supported
   */
  var browserSupportsSessionStorage = function ()
  {
    try {
      return ('sessionStorage' in window && window['sessionStorage'] !== null);           
    }
    catch (e) {
      return false;
    }
  };


  /**
   * Directly adds a value to session storage
   */
  var addToSessionStorage = function (key, value)
  {
    if (!browserSupportsSessionStorage()) return false;

    if (!value && value !== 0 && value !== "") return false;

    try {
      sessionStorage.setItem($config.title + key, value);
    }
    catch (e) {
      return false;
    };

    return true;
  };


  /**
   * Get value from session storage
   */
  var getFromSessionStorage = function (key)
  {
    if (!browserSupportsSessionStorage()) return false;

    var item = sessionStorage.getItem($config.title + key);

    if (!item) return null;

    return item;
  };


  /**
   * Remove item from session storage
   */
  var removeFromSessionStorage = function (key) 
  {
    if (!browserSupportsSessionStorage()) return false;

    try {
      sessionStorage.removeItem($config.title + key);
    } 
    catch (e) {
      return false;
    };

    return true;
  };


  /**
   * Remove all data from session storage
   */
  var clearAllFromSessionStorage = function () 
  {
    if (!browserSupportsSessionStorage()) return false;

    var prefixLength = $config.title.length;

    for (var key in sessionStorage) 
    {
      // Only remove items that are for this app
      if (key.substr(0, prefixLength) === $config.title) 
      {
        try {
          removeFromSessionStorage(key.substr(prefixLength));
        } 
        catch (e) {
          return false;
        };
      };
    };

    return true;
  };


  // Checks the browser to see if cookies are supported
  var browserSupportsCookies = function () 
  {
    try {
      return navigator.cookieEnabled ||
        ("cookie" in document && (document.cookie.length > 0 ||
        (document.cookie = "test").indexOf.call(document.cookie, "test") > -1));
    } 
    catch (e) {
      return false;
    }
  };


  // Directly adds a value to cookies
  // Typically used as a fallback is local storage is not available in the browser
  // Example use: Storage.cookie.add('library','angular');
  var addToCookies = function (key, value) 
  {
    if (typeof value == "undefined") return false;

    if (!browserSupportsCookies())  return false;

    try {
      var expiry      = '', 
          expiryDate  = new Date();

      if (value === null) 
      {
        $config.cookie.expiry = -1;

        value = '';
      };

      if ($config.cookie.expiry !== 0) 
      {
        expiryDate.setTime(expiryDate.getTime() + ($config.cookie.expiry * 60 * 60 * 1000));

        expiry = "; expires=" + expiryDate.toGMTString();
      };

      document.cookie = $config.title + 
                        key + 
                        "=" + 
                        //encodeURIComponent(value) + 
                        value + 
                        expiry + 
                        "; path=" + 
                        $config.cookie.path;
    } 
    catch (e) {
      return false;
    };

    return true;
  };


  // Directly get a value from a cookie
  // Example use: Storage.cookie.get('library'); // returns 'angular'
  var getFromCookies = function (key) 
  {
    if (!browserSupportsCookies()) 
    {
      $rootScope.$broadcast('StorageModule.notification.error', 'COOKIES_NOT_SUPPORTED');
      return false;
    }

    var cookies = document.cookie.split(';');
    
    for (var i=0; i < cookies.length; i++) 
    {
      var thisCookie = cookies[i];
      
      while (thisCookie.charAt(0)==' ')
        thisCookie = thisCookie.substring(1, thisCookie.length);

      if (thisCookie.indexOf($config.title + key + '=') == 0)
        return decodeURIComponent(thisCookie.substring($config.title.length + key.length + 1, thisCookie.length));
    };

    return null;
  };


  var removeFromCookies = function (key) 
  {
    addToCookies(key, null);
  };


  var clearAllFromCookies = function () 
  {
    var thisCookie    = null, 
        thisKey       = null,
        prefixLength  = $config.title.length,
        cookies       = document.cookie.split(';');
    
    for (var i=0; i < cookies.length; i++) 
    {
      thisCookie = cookies[i];
      
      while (thisCookie.charAt(0) == ' ') 
        thisCookie = thisCookie.substring(1, thisCookie.length);

      key = thisCookie.substring(prefixLength, thisCookie.indexOf('='));

      removeFromCookies(key);
    };
  };


  var storageSize = function (key)
  {
    var item = (key) ? localStorage.key : localStorage;

    return ((3 + ((item.length * 16) / (8 * 1024))) * 0.0009765625).toPrecision(2) + ' MB';
  }


  var getPeriods = function ()
  {
    return angular.fromJson(getFromLocalStorage('periods'));
  };


  var getGroups = function ()
  {
    return angular.fromJson(getFromLocalStorage('groups'));
  };


  var getMembers = function ()
  {
    return angular.fromJson(getFromLocalStorage('members'));
  };


  var getSettings = function ()
  {
    var settings = angular.fromJson(getFromLocalStorage('resources'));

    return (!settings.settingsWebPaige) ? $rootScope.config.defaults.settingsWebPaige : angular.fromJson(settings.settingsWebPaige);
  };


  return {
    isSupported: browserSupportsLocalStorage,
    add:        addToLocalStorage,
    get:        getFromLocalStorage,
    remove:     removeFromLocalStorage,
    clearAll:   clearAllFromLocalStorage,
    session: {
      add:      addToSessionStorage,
      get:      getFromSessionStorage,
      remove:   removeFromSessionStorage,
      clearAll: clearAllFromSessionStorage
    },
    cookie: {
      add:      addToCookies,
      get:      getFromCookies,
      remove:   removeFromCookies,
      clearAll: clearAllFromCookies
    },
    size: storageSize,
    local: {
      periods:  getPeriods,
      groups:   getGroups,
      members:  getMembers,
      settings: getSettings
    }
  }

}]);;'use strict';


angular.module('WebPaige.Services.Strings', ['ngResource'])


/**
 * TODO
 * Add example usage!
 * 
 * String manupulators
 */
.factory('Strings', 
  function ()
  {
    return {

      /**
       * Truncate string from words with ..
       */
      truncate: function (txt, n, useWordBoundary)
      {
         var toLong = txt.length > n,
             s_ = toLong ? txt.substr(0, n-1) : txt,
             s_ = useWordBoundary && toLong ? s_.substr(0,s_.lastIndexOf(' ')) : s_;

         return toLong ? s_ + '..' : s_;
      },

      /**
       * To title case
       */
      toTitleCase: function (str)
      {
        if (str)
          return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
      }
    }
  }
);;'use strict';


angular.module('WebPaige.Services.Generators', ['ngResource'])


/**
 * Custom genrators
 */
.factory('Generators', 
  function ()
  {
    return {

      /**
       * Produce range
       */
      range: function ()
      {
        var min = 5,
            max = 120;

        return Math.floor( Math.random() * (max - min + 1) ) + min;
      },

      /**
       * Produce number
       */
      number: function ()
      {
        return Math.floor( Math.random() * 9000000 );
      },

      /**
       * Produce numbers list
       */
      list: function ()
      {
        var normals   = [],
            premiums  = ['1111111', '2222222', '3333333', '4444444', '5555555', '6666666', '7777777', '8888888', '9999999'];

        for (var i = 0; i < this.range(); i++)
        {
          var number = String(this.number());

          if (number.length > 6) normals.push(Number(number));
        }

        return {
          normals:  normals,
          premiums: premiums
        }
      }
    }
  }
);;'use strict';


angular.module('WebPaige.Filters', ['ngResource'])


/**
 * Translate package
 */
.filter('translatePackage', 
[
	'$config', 
	function ($config)
	{
		return function (selected)
		{
			if (selected)
			{
				var gem;

				angular.forEach($config.packages, function (pack, index)
				{
					if (pack.id == selected) gem = pack;
				});

				return gem.label;
			}
		}
	}
])


/**
 * Translate country
 */
.filter('translateCountry', 
[
	'$config', 
	function ($config)
	{
		return function (selected)
		{
			if (selected)
			{
				var gem;

				angular.forEach($config.countries, function (country, index)
				{
					if (country.id == selected) gem = country;
				});

				return gem.label;
			}
		}
	}
])


/**
 * Translate region
 */
.filter('translateRegion', 
[
	'$config', 
	function ($config)
	{
		return function (selected, country)
		{
			if (selected && country)
			{
				var gem;

				angular.forEach($config.regions[country], function (region, index)
				{
					if (region.id == selected) gem = region;
				});

				return gem.label;
			}
		}
	}
])



/**
 * Translate service
 */
.filter('translateService', 
[
	'$config', 
	function ($config)
	{
		return function (selected)
		{
			if (selected)
			{
				var gem;

				angular.forEach($config.virtuals, function (virtual, index)
				{
					if (virtual.id == selected) gem = virtual;
				});

				return gem.label;
			}
		}
	}
])






















/**
 * Translate roles
 */
// .filter('translateRole', 
// [
// 	'$config', 
// 	function ($config)
// 	{
// 		return function (role)
// 		{
// 			var urole;

// 			angular.forEach($config.roles, function (prole, index)
// 			{
// 				if (prole.id == role) urole = prole.label;
// 			});

// 			return urole;
// 		}
// 	}
// ])








/**
 * Main range filter
 */
// .filter('rangeMainFilter', 
// [
// 	'Dater', 'Storage', 
// 	function (Dater, Storage)
// 	{
// 		var periods = Dater.getPeriods();

// 		return function (dates)
// 		{
// 			if ((new Date(dates.end).getTime() - new Date(dates.start).getTime()) == 86401000)
// 				dates.start = new Date(dates.end).addDays(-1);

// 			var dates = {
// 						start: {
// 							real: 	new Date(dates.start).toString('dddd, MMMM d'),
// 							month: 	new Date(dates.start).toString('MMMM'),
// 							day: 		new Date(dates.start).toString('d')
// 						},
// 						end: {
// 							real: 	new Date(dates.end).toString('dddd, MMMM d'),
// 							month: 	new Date(dates.end).toString('MMMM'),
// 							day: 		new Date(dates.end).toString('d')
// 						}
// 					},
// 					monthNumber = Date.getMonthNumberFromName(dates.start.month);

// 			if ((((Math.round(dates.start.day) + 1) == dates.end.day && dates.start.hour == dates.end.hour) || dates.start.day == dates.end.day) && dates.start.month == dates.end.month)
// 			{
// 				return 	dates.start.real + 
// 								', ' + 
// 								Dater.getThisYear();
// 			}
// 			else if(dates.start.day == 1 && dates.end.day == periods.months[monthNumber + 1].totalDays)
// 			{
// 				return 	dates.start.month + 
// 								', ' + 
// 								Dater.getThisYear();
// 			}
// 			else
// 			{
// 				return 	dates.start.real + 
// 								' / ' + 
// 								dates.end.real + 
// 								', ' + 
// 								Dater.getThisYear();
// 			};

// 		}
// 	}
// ])








/**
 * Main range week filter
 */
// .filter('rangeMainWeekFilter', 
// [
// 	'Dater', 'Storage', 
// 	function (Dater, Storage)
// 	{
// 		var periods = Dater.getPeriods();

// 		return function (dates)
// 		{
// 			if (dates)
// 			{
// 				var dates = {
// 					start: 	new Date(dates.start).toString('dddd, MMMM d'),
// 					end: 		new Date(dates.end).toString('dddd, MMMM d')
// 				};

// 				return 	dates.start + 
// 								' / ' + 
// 								dates.end + 
// 								', ' + 
// 								Dater.getThisYear();
// 			};
// 		}
// 	}
// ])








/**
 * Range info filter
 */
// .filter('rangeInfoFilter', 
// [
// 	'Dater', 'Storage', 
// 	function (Dater, Storage)
// 	{
// 		var periods = Dater.getPeriods();

// 		return function (timeline)
// 		{
// 			var diff = new Date(timeline.range.end).getTime() - new Date(timeline.range.start).getTime();

// 			if (diff > (2419200000 + 259200000))
// 			{
// 				return 'Total selected days: ' + Math.round(diff / 86400000);
// 			}
// 			else
// 			{
// 				if (timeline.scope.day)
// 				{
// 					var hours = {
// 						start: new Date(timeline.range.start).toString('HH:mm'),
// 						end: new Date(timeline.range.end).toString('HH:mm')
// 					};

// 					/**
// 					 *  00:00 fix => 24:00
// 					 */
// 					if (hours.end == '00:00') hours.end = '24:00';

// 					return 	'Time: ' + 
// 									hours.start + 
// 									' / ' + 
// 									hours.end;
// 				}
// 				else if (timeline.scope.week)
// 				{
// 					return 	'Week number: ' + 
// 									timeline.current.week;
// 				}
// 				else if (timeline.scope.month)
// 				{
// 					return 	'Month number: ' + 
// 									timeline.current.month + 
// 									', Total days: ' + 
// 									periods.months[timeline.current.month].totalDays;
// 				};
// 			};
// 		};
// 	}
// ])







/**
 * Range info week filter
 */
// .filter('rangeInfoWeekFilter', 
// [
// 	'Dater', 'Storage', 
// 	function (Dater, Storage)
// 	{
// 		var periods = Dater.getPeriods();

// 		return function (timeline)
// 		{
// 			if (timeline) return 'Week number: ' + timeline.current.week;
// 		};
// 	}
// ])








/**
 * BUG!
 * Maybe not replace bar- ?
 * 
 * TODO
 * Implement state conversion from config later on!
 * 
 * Convert ratios to readable formats
 */
// .filter('convertRatios', 
// [
// 	'$config', 
// 	function ($config)
// 	{
// 		return function (stats)
// 		{
// 			var ratios = '';

// 			angular.forEach(stats, function (stat, index)
// 			{
// 				ratios += stat.ratio.toFixed(1) + '% ' + stat.state.replace(/^bar-+/, '') + ', ';
// 			});

// 			return ratios.substring(0, ratios.length - 2);
// 		};
// 	}
// ])








/** 
 * Calculate time in days
 */
// .filter('calculateTimeInDays', 
// 	function ()
// 	{
// 		return function (stamp)
// 		{
// 			var day 		= 1000 * 60 * 60 * 24,
// 					hour		=	1000 * 60 * 60,
// 					days 		= 0,
// 					hours 	= 0,
// 					stamp 	= stamp * 1000,
// 					hours 	= stamp % day,
// 					days 		= stamp - hours;

// 			return 	Math.floor(days / day);
// 		};
// 	}
// )








/**
 * Calculate time in hours
 */
// .filter('calculateTimeInHours', 
// 	function ()
// 	{
// 		return function (stamp)
// 		{
// 			var day 		= 1000 * 60 * 60 * 24,
// 					hour		=	1000 * 60 * 60,
// 					days 		= 0,
// 					hours 	= 0,
// 					stamp 	= stamp * 1000,
// 					hours 	= stamp % day,
// 					days 		= stamp - hours;

// 			return 	Math.floor(hours / hour);
// 		};
// 	}
// )







/**
 * Calculate time in minutes
 */
// .filter('calculateTimeInMinutes', 
// 	function ()
// 	{
// 		return function (stamp)
// 		{
// 			var day 		= 1000 * 60 * 60 * 24,
// 					hour		=	1000 * 60 * 60,
// 					minute 	= 1000 * 60,
// 					days 		= 0,
// 					hours 	= 0,
// 					minutes = 0,
// 					stamp 	= stamp * 1000,
// 					hours 	= stamp % day,
// 					days 		= stamp - hours,
// 					minutes = stamp % hour;

// 			return 	Math.floor(minutes / minute);
// 		};
// 	}
// )







/**
 * Convert eve urls to ids
 */
// .filter('convertEve', 
// 	function ()
// 	{
// 	  return function (url)
// 	  {
// 	  	var eve = url;

// 	  	eve = (typeof url != "undefined") ? url.split("/") : ["", url, ""];

// 	    return eve[eve.length-2];
// 	  };
// 	}
// )







/** 
 * Convert user uuid to name
 */
// .filter('convertUserIdToName', 
// [
// 	'Storage', 
// 	function (Storage)
// 	{
// 		var members = angular.fromJson(Storage.get('members'));

// 		return function (id)
// 		{	
// 	    if (members == null || typeof members[id] == "undefined")
// 	    {
// 	      return id;
// 	    }
// 	    else
// 	    {
// 	      return members[id].name;
// 	    };
// 		};
// 	}
// ])







/**
 * Convert timeStamps to dates
 */
// .filter('nicelyDate', 
// [
// 	'$rootScope', 
// 	function ($rootScope)
// 	{
// 	 	return function (date)
// 	 	{
// 	 		if (typeof date == 'string') date = Number(date);

// 	 		return new Date(date).toString($rootScope.config.formats.datetime);
// 	 	};
// 	}
// ])







/**
 * TODO
 * Not used probably!
 *
 * Combine this either with nicelyDate or terminate!
 * 
 * Convert timeStamp to readable date and time
 */
// .filter('convertTimeStamp', 
// 	function ()
// 	{
// 		return function (stamp)
// 		{
// 			console.warn(typeof stamp);

// 			return new Date(stamp).toString('dd-MM-yyyy HH:mm');
// 		};
// 	}
// )







/**
 * TODO
 * Still used?
 * 
 * No title filter
 */
// .filter('noTitle',
// 	function ()
// 	{
// 		return function (title)
// 		{
// 			return (title == "") ? "- No Title -" : title;
// 		}
// 	}
// )







/**
 * TODO
 * Finish it!
 * 
 * Strip span tags
 */
// .filter('stripSpan', 
// 	function ()
// 	{
// 	  return function (string)
// 	  {
// 	    return string.match(/<span class="label">(.*)<\/span>/);
// 	  }
// 	}
// )







/**
 * Strip html tags
 */
// .filter('stripHtml', 
// 	function ()
// 	{
// 	  return function (string)
// 	  {
// 	  	if (string) return string.split('>')[1].split('<')[0];
// 	  }
// 	}
// )







/**
 * Convert group id to name
 */
// .filter('groupIdToName', 
// [
// 	'Storage', 
// 	function (Storage)
// 	{
// 	  return function (id)
// 	  {
// 	  	var groups = angular.fromJson(Storage.get('groups'));

// 	  	for (var i in groups)
// 	  	{
// 	  		if (groups[i].uuid == id) return groups[i].name;
// 	  	};
// 	  }
// 	}
// ])








/**
 * TODO
 * Unknown filter
 */
// .filter('i18n_spec',
// [
// 	'$rootScope', 
// 	function ($rootScope)
// 	{
// 		return function (string, type)
// 		{
// 			var types = type.split("."),
// 					ret 	= $rootScope.ui[types[0]][types[1]],
// 					ret 	= ret.replace('$v',string);
			
// 			return ret;
// 		}
// 	}
// ])







/**
 * Truncate group titles for dashboard pie widget
 */
// .filter('truncateGroupTitle', 
// [
// 	'Strings', 
// 	function (Strings) 
// 	{
// 		return function (title)
// 		{
// 	     return Strings.truncate(title, 20, true);
// 	  }
// 	}
// ])







/**
 * Make first letter capital
 */
// .filter('toTitleCase', 
// [
// 	'Strings', 
// 	function (Strings) 
// 	{
// 		return function (txt)
// 		{
// 	     return Strings.toTitleCase(txt);
// 	  }
// 	}
// ])







/**
 * Count messages in box
 */
// .filter('countBox',
// 	function () 
// 	{
// 		return function (box)
// 		{
// 			var total = 0;

// 			angular.forEach(box, function (bulk, index)
// 			{
// 				total = total + bulk.length;
// 			});

// 	    return total;
// 	  }
// 	}
// )








/**
 * Convert offsets array to nicely format in scheaduled jobs
 */
// .filter('nicelyOffsets', 
// [
// 	'Dater', 'Storage', 'Offsetter',
// 	function (Dater, Storage, Offsetter)
// 	{
// 		return function (data)
// 		{
// 			var offsets 	= Offsetter.factory(data),
// 					compiled 	= '';

// 			angular.forEach(offsets, function (offset, index)
// 			{
// 				compiled += '<div style="display:block; margin-bottom: 5px;">';

// 				compiled += '<span class="badge">' + offset.time + '</span>&nbsp;';

// 				if (offset.mon) compiled += '<span class="muted"><small><i> maandag,</i></small></span>';
// 				if (offset.tue) compiled += '<span class="muted"><small><i> dinsdag,</i></small></span>';
// 				if (offset.wed) compiled += '<span class="muted"><small><i> woensdag,</i></small></span>';
// 				if (offset.thu) compiled += '<span class="muted"><small><i> donderdag,</i></small></span>';
// 				if (offset.fri) compiled += '<span class="muted"><small><i> vrijdag,</i></small></span>';
// 				if (offset.sat) compiled += '<span class="muted"><small><i> zaterdag,</i></small></span>';
// 				if (offset.sun) compiled += '<span class="muted"><small><i> zondag,</i></small></span>';

// 				compiled = compiled.substring(0, compiled.length - 20);

// 				compiled = compiled += '</i></small></span>';

// 				compiled += '</div>';

// 				compiled = compiled.substring(0, compiled.length);
// 			});

// 			return compiled;
// 		}
// 	}
// ])








/**
 * Convert array of audience to a nice list
 */
// .filter('nicelyAudience', 
// [
// 	'Storage',
// 	function (Storage)
// 	{
// 		return function (data)
// 		{
// 			var members 	= angular.fromJson(Storage.get('members')),
// 	    		groups 		= angular.fromJson(Storage.get('groups')),
// 	    		audience 	= [];

// 			angular.forEach(data, function (recipient, index)
// 			{
// 	  		var name;

// 	  		if (members[recipient])
// 	  		{
// 		  		name = members[recipient].name;
// 	  		}
// 	  		else
// 	  		{
// 	  			angular.forEach(groups, function (group, index)
// 	  			{
// 	  				if (group.uuid == recipient) name = group.name;
// 	  			});
// 	  		}

// 		  	audience += name + ', ';
// 			});

// 			return audience.substring(0, audience.length - 2);
// 		}
// 	}
// ])
;;/*jslint node: true */
/*global angular */
'use strict';


angular.module('WebPaige.Controllers.Login', [])


/**
 * Login controller
 */
.controller('login',
[
  '$rootScope', '$location', '$q', '$scope', 'Session', 'User', 'Storage', '$routeParams', 'MD5', 'Core',
  function ($rootScope, $location, $q, $scope, Session, User, Storage, $routeParams, MD5, Core)
	{
    /**
     * Self this
     */
    var self = this;


    /**
     * Set default alerts
     */
    $scope.alert = {
      login: {
        display:  false,
        type:     '',
        message:  ''
      },
      forgot: {
        display:  false,
        type:     '',
        message:  ''
      }
    };


    /**
     * Init rootScope app info container
     */
    if (!Storage.session.get('app'))
    {
      Storage.session.add('app', '{}');
    }


    /**
     * TODO (Lose this jQuery stuff later on!)
     *
     * Jquery solution of toggling between login and app view
     */
    $('.navbar').hide();
    $('#footer').hide();
    $('#preloader').hide();


    /**
     * TODO (Use native JSON functions of angular and Store service)
     */
    var logindata = angular.fromJson(Storage.get('logindata'));

    if (logindata && logindata.remember)
    {
      $scope.logindata = logindata;
    }

    var loginBtn = $('#login button[type=submit]');


    /**
     * TODO (Remove unneccessary DOM manipulation Use cookies for user credentials)
     * Login trigger
     */
    $scope.login = function ()
    {
      $('#alertDiv').hide();

      if (!$scope.logindata ||
        !$scope.logindata.username ||
        !$scope.logindata.password)
      {
        $scope.alert = {
          login: {
            display:  true,
            type:     'alert-error',
            message:  'Please fill all fields!'
          }
        };

        loginBtn
          .text('Login')
          .removeAttr('disabled');

        return false;
      }

      loginBtn
        .text('Login..')
        .attr('disabled', 'disabled');

      Storage.add('logindata', angular.toJson({
        username: $scope.logindata.username,
        password: $scope.logindata.password,
        remember: $scope.logindata.remember
      }));

      self.auth($scope.logindata.username, MD5($scope.logindata.password));
    };


    /**
     * Authorize user
     */
    self.auth = function (username, password)
    {
      User.login(username.toLowerCase(), password)
        .then(function (result)
        {
          if (result.status === 403)
          {
            $scope.alert = {
              login: {
                display:  true,
                type:     'alert-error',
                message:  'Wrong username or password!'
              }
            };

            loginBtn
              .text('Login')
              .removeAttr('disabled');

            return false;
          }
          else
          {
            Session.set(result['X-SESSION_ID']);

            self.preloader();
          }
        });
    };


    /**
     * Preloader counters
     */
    $scope.preloader = {
      count:    0,
      total:    4,
      current:  0,
      fraction: function ()
      {
        return Math.abs(100 / (this.total * 2));
      }
    };


    /**
     * TODO (What happens if preloader stucks? Optimize preloader and messages)
     *
     * Initialize preloader
     */
    self.preloader = function ()
    {
      $('#login').hide();
      $('#download').hide();
      $('#preloader').show();


      self.progress('Loading app related information..');


      User.resources()
        .then(function ()
        {
          self.progress('User information loaded');

          self.appInit();
        });


      Core.connections.list()
        .then(function ()
        {
          self.progress('Connected numbers are loaded');

          self.appInit();
        });


      Core.settings.list()
        .then(function ()
        {
          self.progress('Notification settings loaded');

          self.appInit();
        });


      Core.groups.list()
        .then(function ()
        {
          self.progress('Groups loaded');

          self.appInit();
        });
    };


    /**
     * Redirect to dashboard
     */
    self.appInit = function ()
    {
      $scope.preloader.count++;

      self.progress();

      if ($scope.preloader.count === $scope.preloader.total)
      {
        if (Core.factory.process())
        {
          self.progress();

          $location.path('/core');

          setTimeout(function ()
          {
            $('.navbar').show();

            if (!$rootScope.browser.mobile)
            {
              $('#footer').show();
            }
          }, 100);
        }
      }
    };


    /**
     * Progress bar
     */
    self.progress = function (message)
    {
      $scope.preloader.current = $scope.preloader.current + $scope.preloader.fraction();

      $('#preloader .progress .bar').css({ width: $scope.preloader.current + '%' });

      $('#preloader span').text(message);
    };

	}
]);;/*jslint node: true */
/*global angular */
'use strict';


angular.module('WebPaige.Controllers.Forgotpass', [])


/**
 * Forgot password controller
 */
.controller('forgotpass',
[
	'$rootScope', '$scope', '$location',
	function ($rootScope, $scope, $location)
	{
		/**
		 * Fix styles
		 */
		$rootScope.fixStyles();

	}
]);;/*jslint node: true */
/*global angular */
'use strict';


angular.module('WebPaige.Controllers.Register', [])


/**
 * Forgot password controller
 */
.controller('register',
[
	'$rootScope', '$scope', '$location',
	function ($rootScope, $scope, $location)
	{
		/**
		 * Fix styles
		 */
		$rootScope.fixStyles();

	}
]);;/*jslint node: true */
/*global angular */
'use strict';


angular.module('WebPaige.Controllers.Logout', [])


/**
 * Logout controller
 */
.controller('logout', 
[
	'$rootScope', '$scope', '$window', 'Session', 'User', 'Storage', 
	function ($rootScope, $scope, $window, Session, User, Storage) 
	{
    $('.navbar').hide();
    $('#footer').hide();

    var logindata = angular.fromJson(Storage.get('logindata'));

    Storage.clearAll();

		User.logout()
		.then(function (result)
		{
      if (result.error)
      {
        console.warn('error ->', result);
      }

      // Storage.clearAll();

      Storage.session.clearAll();

      Storage.add('logindata', angular.toJson(logindata));

      $window.location.href = 'logout.html';
		});
	}
]);;/*jslint node: true */
/*global angular */
'use strict';


angular.module('WebPaige.Controllers.Core', [])


/**
 * Core controller
 */
.controller('coreCtrl',
[
	'$rootScope', '$scope', '$location', 'Core',
	function ($rootScope, $scope, $location, Core)
	{




    Core.factory.process();




    /**
     * View setter
     */
    function setView(hash)
    {
      $scope.views = {
        purchaser:  false,
        manager:    false,
        notifier:   false,
        reporter:   false,
        guarder:    false
      };

      $scope.views[hash] = true;
    }


    /**
     * Switch between the views and set hash accordingly
     */
    $scope.setViewTo = function (hash)
    {
      $scope.$watch(hash, function ()
      {
        $location.hash(hash);

        setView(hash);
      });
    };


    var view;

    /**
     * If no params or hashes given in url
     */
    if (!$location.hash())
    {
      view = 'manager';

      $location.hash('manager');
    }
    else
    {
      view = $location.hash();
    }


    /**
     * Set view
     */
    setView(view);


    /**
     * Listen for setView broadcasts
     */
    $rootScope.$on('setView', 'args', function ()
    {
      $scope.setViewTo(arguments[1]);
    });
	}
]);;/*jslint node: true */
/*global angular */
'use strict';


angular.module('WebPaige.Controllers.Purchaser', [])


/**
 * Purchaser controller
 */
  .controller('purchaserCtrl',
  [
    '$rootScope', '$scope', 'Generators',
    function ($rootScope, $scope, Generators)
    {
      /**
       * Fix styles
       */
      $rootScope.fixStyles();


      /**
       * General order container
       */
      $scope.order = {
        package:  null,
        country:  31
        // package: 1,
        // country: 31,
        // region:  10,
        // number:  1234567
      };

      // $scope.numbers = Generators.list();


      /**
       * Tabs arranger
       */
      $scope.tabs = {
        normals:  true,
        premiums: false
      };


      /**
       * Pass containers
       */
      $scope.packages   = $rootScope.config.packages;
      $scope.countries  = $rootScope.config.countries;
      $scope.virtuals   = $rootScope.config.virtuals;


      /**
       * Set defaults
       */
      $scope.defaults = {
        package:  1,
        country:  31
      };

      $scope.order.country = $scope.defaults.country;


      /**
       * Watcher on -order- container
       */
      $scope.$watch('order', function ()
      {
        $scope.regions	= $rootScope.config.regions[$scope.order.country];
        $scope.ranges   = $rootScope.config.ranges[$scope.order.virtual];

        if ($scope.order.package)
        {
          var prices = {
            monthly:  $rootScope.config.packages[$scope.order.package].prices.monthly,
            yearly:   $rootScope.config.packages[$scope.order.package].prices.yearly
          };

          $scope.prices = {
            monthly:  ($scope.order.premium) ? prices.monthly.premium : prices.monthly.normal,
            yearly:   ($scope.order.premium) ? prices.yearly.premium : prices.yearly.normal
          };
        }
      }, true);


      /**
       * Reset purchaser
       */
      $scope.resetPurchaser = function ()
      {
        $scope.order = {
          package:  null,
          country:  $scope.defaults.country,
          region:   null,
          virtual:  null,
          number:   null
        };

        $scope.switchStep(1);
      };


      /**
       * Set region
       */
      $scope.setRegion = function ()
      {
        if ($scope.order.region)
        {
          $scope.numbers = Generators.list();
        }
      };


      /**
       * Set virtual area code
       */
      $scope.setVirtualArea = function ()
      {
        if ($scope.order.virtual)
        {
          $scope.numbers = Generators.list();
        }
      };


      /**
       * Set number type
       */
      $scope.setPackage = function (pack)
      {
        $scope.order.package  = Number(pack);

        $scope.order.number   = null;
      };


      /**
       * Switch step
       */
      $scope.switchStep = function (step)
      {
        $scope.purchaser = {step: step};
      };


      /**
       * Switch step in default value
       */
      $scope.switchStep(1);


      /**
       * Go further in steps
       */
      $scope.increaseStep = function ()
      {
        if ($scope.purchaser.step < 3 && $scope.order.number)
        {
          $scope.switchStep($scope.purchaser.step + 1);
        }
      };


      /**
       * Go back in steps
       */
      $scope.decreaseStep = function ()
      {
        if ($scope.purchaser.step > 1)
        {
          $scope.switchStep($scope.purchaser.step - 1);
        }
      };
    }
  ]);;/*jslint node: true */
/*global angular */
'use strict';


angular.module('WebPaige.Controllers.Manager', [])


/**
 * Manager controller
 */
  .controller('managerCtrl',
  [
    '$rootScope', '$scope', '$modal', 'Core',
    function ($rootScope, $scope, $modal, Core)
    {
      /**
       * Fix styles
       */
      $rootScope.fixStyles();


      /**
       * Connected number container
       */
      $scope.connection = {
        label:        '',
        contactInfo:  ''
      };


      /**
       * Connected numbers verified switch
       */
      $scope.verified = {
        status: false,
        result: null
      };


      /**
       * Connected numbers
       */
      $scope.connections = {

        /**
         * Get local list
         */
        local: function ()
        {
          return Core.connections.local();
        },

        /**
         * List numbers
         */
        list: function ()
        {
          $rootScope.statusBar.display('Getting the list of connected numbers..');

          Core.connections.list()
            .then(function ()
            {
              $rootScope.statusBar.off();

              Core.factory.process();
            });
        },

        /**
         * Save a connected number
         */
        save: function ()
        {
          var self = this;

          $rootScope.statusBar.display('Saving the number..');

          Core.connections.save($scope.connection)
            .then(function ()
            {
              $rootScope.statusBar.off();

              self.list();
            });
        },

        /**
         * Delete a number
         */
        remove: function (number)
        {
          var self = this;

          $rootScope.statusBar.display('Deleting a number..');

          Core.connections.remove(number)
            .then(function ()
            {
              $rootScope.statusBar.off();

              self.list();
            });
        },

        /**
         * Edit a number
         */
        edit: function (number)
        {
          angular.forEach($scope.connectionsList, function (connection)
          {
            if (number.id === connection.id)
            {
              $scope.connection = connection;
            }
          });
        },

        /**
         * Verify a number
         */
        verify: {

          /**
           * Send a verification number
           */
          initiate: function (number)
          {
            $rootScope.statusBar.display('Verification call inited or message is being sent..');

            Core.connections.verify.initiate(number)
              .then(function (result)
              {
                $rootScope.statusBar.off();

                $scope.toBeVerified = number;

                $scope.verificationInfoID = result.verificationInfo.id;

                $modal({
                  template: '/js/views/elements/con_verification.html',
                  persist:  true,
                  show:     true,
                  backdrop: 'static',
                  scope:    $scope
                });
              });
          },

          /**
           * Confirm a verification
           */
          confirm: function (verificationCode, verificationInfoID)
          {
            $rootScope.statusBar.display('Verifying your number and code..');

            Core.connections.verify.confirm(verificationCode, verificationInfoID)
              .then(function (result)
              {
                $rootScope.statusBar.off();

                $scope.verified = {
                  status: true,
                  result: result.verified
                };

                $rootScope.$emit('setView', 'manager');
              });
          }
        }
      };
    }
  ]);;/*jslint node: true */
/*global angular */
'use strict';


angular.module('WebPaige.Controllers.Notifier', [])


/**
 * Notifier controller
 */
  .controller('notifierCtrl',
  [
    '$rootScope', '$scope', 'Core', 'User',
    function ($rootScope, $scope, Core, User)
    {
      /**
       * Fix styles
       */
      $rootScope.fixStyles();


      /**
       * Notifications
       */
      $scope.settings = {

        /**
         * Get local notifications
         */
        local: function ()
        {
          $scope.notificationSettings = Core.settings.local();
        },

        /**
         * List notifications
         */
        list: function ()
        {
          $rootScope.statusBar.display('Getting notifications information..');

          Core.settings.list()
            .then(function ()
            {
              $rootScope.statusBar.off();

              this.local();
            });
        },

        /**
         * Get a notification
         */
        get: function (type)
        {
          var i;

          for (i = 0; i < $scope.notificationSettings.length; i++)
          {
            if ($scope.notificationSettings[i].medium === type)
            {
              return $scope.notificationSettings[i].targetContactInfos[0];
            }
          }

          return false;
        },

        /**
         * Process settings
         */
        process: function (settings)
        {
          console.log('changing these settings ->', settings);

          if (settings.removed.length > 0)
          {
            console.log('there are some removals');
          }
        },

        /**
         * Change a setting
         */
        update: function (type, id)
        {
          console.log('updating for ->', type, id);

          $rootScope.statusBar.display('Getting notifications information..');

          Core.settings.list()
            .then(function ()
            {
              $rootScope.statusBar.off();

              this.local();
            });
        },

        /**
         * Delete a setting
         */
        remove: function (type)
        {
          console.log('deleting for ->', type);
        },

        /**
         * Add a setting
         */
        add: function (type, id)
        {
          console.log('creating for ->', type, id);
        },

        /**
         * Check whether a setting already exists
         */
        exists: function (type)
        {
          var exists = false;

          angular.forEach($scope.notificationSettings, function (setting)
          {
            if (setting.medium === type)
            {
              exists = true;
            }
          });

          return exists;
        },

        /**
         * Save notification settings
         */
        save: function ()
        {
          var settings = {
            changed: [],
            added:   [],
            removed: []
          };

          /**
           * SMS setting
           */
          if ($scope.notification.sms.status)
          {
            if (this.exists('SMS'))
            {
              if ($scope.notification.sms.target !== this.get('SMS'))
              {
                settings.changed.push('SMS', $scope.notification.sms.target);
              }
            }
            else
            {
              settings.added.push('SMS', $scope.notification.sms.target);
            }
          }
          else
          {
            if (this.exists('SMS'))
            {
              settings.removed.push('SMS');
            }
          }

          /**
           * Email setting
           */
          if ($scope.notification.email.status)
          {
            if (this.exists('Email'))
            {
              if ($scope.notification.email.target !== this.get('Email'))
              {
                settings.changed.push('Email', $scope.notification.email.target);
              }
            }
            else
            {
              settings.added.push('Email', $scope.notification.email.target);
            }
          }
          else
          {
            if (this.exists('Email'))
            {
              settings.removed.push('Email');
            }
          }
        }
      };


      /**
       * Initiate setup
       */
      $scope.settings.local();

    }
  ]);;/*jslint node: true */
/*global angular */
'use strict';


angular.module('WebPaige.Controllers.Reporter', [])


/**
 * Reporter controller
 */
  .controller('reporterCtrl',
  [
    '$rootScope', '$scope',
    function ($rootScope, $scope)
    {
      /**
       * Fix styles
       */
      $rootScope.fixStyles();
    }
  ]);;/*jslint node: true */
/*global angular */
'use strict';


angular.module('WebPaige.Controllers.Guarder', [])


/**
 * Guarder controller
 */
  .controller('guarderCtrl',
  [
    '$rootScope', '$scope', 'Core',
    function ($rootScope, $scope, Core)
    {
      /**
       * Fix styles
       */
      $rootScope.fixStyles();


      /**
       * Reset
       */
      $scope.blacklist = {};


      /**
       * Blacklists
       */
      $scope.blacklists = {

        /**
         * Get the locals
         */
        local: function ()
        {},

        /**
         * List blacklists
         */
        list: function ()
        {
          $rootScope.statusBar.display('Getting the list of blacklisted numbers..');

          Core.groups.list()
            .then(function ()
            {
              Core.connections.list()
                .then(function ()
                {
                  $rootScope.statusBar.off();

                  $scope.blacklist = {};

                  Core.factory.process();
                });
            });

        },

        /**
         * Save a blacklisted number
         */
        save: function ()
        {
          var self = this;

          $rootScope.statusBar.display('Adding a blacklisted number..');

          Core.blacklists.save($scope.blacklist)
            .then(function (result)
            {
              $rootScope.statusBar.display('Updating blacklist group..');

              // Populate blacklist
              var list = [];
              angular.forEach($rootScope.data.blacklist, function (listed)
              {
                list.push(listed.id);
              });
              list.push(result.id);

              // Park node temporarily
//              $rootScope.data.tmp.push(result);

              // Update blacklist group
              Core.groups.update({
                id:   $rootScope.data.groups.blacklist.id,
                list: list
              }).then(function ()
                {
                  $rootScope.statusBar.off();

                  self.list();
                });
            });
        },

        /**
         * Remove a blacklisted number
         */
        remove: function ()
        {

        }
      };
    }
  ]);