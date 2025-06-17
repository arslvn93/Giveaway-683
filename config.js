const config = {
  "modalQuestions": [
    {
      "id": "favorite_local_events",
      "questionText": "Which type of local events do you enjoy attending most in Toronto?",
      "options": [
        { "value": "major_league_sports_games", "text": "Major league sports games" },
        { "value": "food_and_wine_festivals", "text": "Food and wine festivals" },
        { "value": "music_concerts", "text": "Music concerts" },
        { "value": "art_exhibitions", "text": "Art exhibitions" }
      ]
    },
    {
      "id": "lifestyle_preferences",
      "questionText": "On a typical weekend, how do you prefer to spend your time?",
      "options": [
        { "value": "exploring_real_estate", "text": "Exploring new real estate developments or open houses" },
        { "value": "relaxing_at_home", "text": "Relaxing at home with friends and family" },
        { "value": "outdoor_activities", "text": "Engaging in outdoor activities like hiking or biking" },
        { "value": "dining_out", "text": "Dining at trendy restaurants or cafes" }
      ]
    },
    {
      "id": "travel_habits",
      "questionText": "How do you typically spend your vacations?",
      "options": [
        { "value": "international_destinations", "text": "Traveling to international destinations" },
        { "value": "local_attractions", "text": "Visiting local attractions around Toronto" },
        { "value": "staycations", "text": "Taking staycations in luxury accommodations" },
        { "value": "road_trips", "text": "Going on road trips to explore new areas" }
      ]
    },
    {
      "id": "community_engagement",
      "questionText": "How involved are you in community activities or neighborhood associations?",
      "options": [
        { "value": "very_involved", "text": "Very involved, I attend meetings and events regularly" },
        { "value": "somewhat_involved", "text": "Somewhat involved, I participate occasionally" },
        { "value": "not_very_involved_interested", "text": "Not very involved, but I’m interested in what's happening" },
        { "value": "not_involved", "text": "Not involved at all" }
      ]
    }
  ],
  "giveaway": {
    "name": "Toronto Blue Jays Tickets Giveaway",
    "heroHeadline": "<span class='highlight'>Win Tickets to a Toronto Blue Jays Game!</span>",
    "heroSubheadline": "Celebrate Canada Day with an unforgettable day at the ballpark!",
    "promotionDates": "Promotion runs from June 20, 2025 until July 1, 2025.",
    "endDate": "2025-07-02T23:59:59",
    "heroBackgroundImageUrl": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/v7ewkxnq4drm80cqfe7rhpt2bw.jpg",
    "heroCtaText": "Enter Now for a Home Run!",
    "entryFormCtaText": "Count Me In!",
    "successModalHeaderText": "⚾ You're Entered! ⚾",
    "successModalMainMessage": "Your entry for the <strong>Toronto Blue Jays Tickets Giveaway</strong> has been submitted. Good luck!",
    "successModalEmailPrompt": "Winner announced on July 2nd—keep an eye on your inbox!"
  },
  "prize": {
    "name": "Blue Jays Game Tickets",
    "value": "$100 Value",
    "description": "Win tickets to an exciting Toronto Blue Jays game! Join us at the Canada Day event and experience the thrill of live baseball—a perfect summer outing with friends or family.",
    "images": [
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/y8197eeeh5rme0cqfe7szrz9t0.jpg",
        "alt": "Blue Jays Game Tickets"
      },
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/wcsyk1f5c5rma0cqfe7tv0sxc4.jpg",
        "alt": "Blue Jays Fans at the Ballpark"
      },
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/wc38s3fvhsrm80cqfe7smyq07w.jpg",
        "alt": "Toronto Blue Jays Stadium"
      },
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/fed7a30kxnrm80cqfe8avkctwc.jpg",
        "alt": "Baseball Game Action"
      }
    ],
    "includedItems": [
      { "icon": "fas fa-ticket-alt", "text": "$100 value in tickets to a Blue Jays game" },
      { "icon": "fas fa-users", "text": "Great for families or friends" },
      { "icon": "fas fa-baseball-ball", "text": "Experience the excitement of live baseball" },
      { "icon": "fas fa-check-circle", "text": "No purchase necessary to enter or win" },
      { "icon": "fas fa-bolt", "text": "Quick and easy entry online!" }
    ],
    "limitedTimeOfferText": "⚾ Limited Time Giveaway!",
    "ctaButtonText": "I WANT TO WIN THIS!"
  },
  "howToEnter": {
    "steps": [
      {
        "icon": "fas fa-map-marker-alt",
        "title": "Visit Our Booth",
        "description": "Meet us at the Canada Day event on July 1st to enter the giveaway."
      },
      {
        "icon": "fas fa-keyboard",
        "title": "Complete the Entry",
        "description": "Fill out a quick and easy survey to register your chance to win."
      },
      {
        "icon": "fas fa-calendar-check",
        "title": "Wait for the Draw",
        "description": "The winner will be announced on July 2nd via email."
      }
    ],
    "highlights": [
      { "icon": "fas fa-stopwatch", "text": "Fast & Easy Entry" },
      { "icon": "fas fa-baseball-ball", "text": "Exciting Prize" },
      { "icon": "fas fa-smile", "text": "Free to Enter!" }
    ]
  },
  "entryForm": {
    "subtitle": "Enter your details below for a chance to win Blue Jays tickets!",
    "entryCountText": "Hundreds have already entered – don’t miss out!",
    "socialSharePrompt": "Share with your friends and family:",
    "sharePlatforms": {
      "facebook": "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href),
      "twitter": "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href) + "&text=" + encodeURIComponent("Win Toronto Blue Jays tickets this Canada Day!")
    }
  },
  "rules": {
    "fairSelectionInfo": {
      "title": "Fair & Random Selection",
      "text": "A random drawing will determine the winner on July 2nd, ensuring fairness to all participants."
    },
    "importantNotice": {
      "title": "Winner Notification",
      "text": "The winner will be contacted via the email provided. Please check your inbox and spam folders after the draw."
    },
    "faq": [
      {
        "q": "Who can enter?",
        "a": "Open to residents of Toronto and surrounding areas aged 18 and above."
      },
      {
        "q": "When is the giveaway period?",
        "a": "Starts June 20, 2025 and ends July 1, 2025 at 11:59 PM ET."
      },
      {
        "q": "How will the winner be chosen?",
        "a": "One winner will be selected randomly from all entries received by July 1."
      },
      {
        "q": "When will the winner be notified?",
        "a": "Notification will be sent via email on July 2, 2025."
      },
      {
        "q": "Can I enter multiple times?",
        "a": "Only one entry per person/email during the promotion. Duplicate entries are disqualified."
      },
      {
        "q": "Is my data safe?",
        "a": "Your privacy is respected; information is used solely for this giveaway and protected as per our privacy policy."
      }
    ],
    "tips": [
      "Make sure to enter with your correct email address.",
      "Add our email to your contact list to receive notifications.",
      "Follow Sky Group on social media for updates and winner announcements."
    ]
  },
  "footerContact": {
    "organizerName": "Sky Group",
    "organizerLogoUrl": "https://prod-files-secure.s3.us-west-2.amazonaws.com/8e0c10a0-da43-409c-b191-91135b7161ff/eed1f4ef-c781-4015-8092-dda5b2f860d9/68278639dbfc24a322fd422d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PMSJ5I%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T012310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgDNhTCUUEyvwQJBqwPMaHnJdr4OTXNrahzIVMDdnxbQIgdHXEQg2ahz7%2FL5X65R4yGptftWmNJbi4wdQ0MSnH%2FkMq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDPR9LLGKqI9vT%2FOmJyrcA0MUrGjJJFM4nMdCjDWy1oy0LmBFRtAeUxJu2EPSMQ23NoDqFR1kPBVXK2Xe1KOZWhpq1DPJgU23DSD9T0xSXreCzJ8U8u%2BHI6eyy2%2FVeuucVCVafwJXwT%2FErSPffLINj8ELcl9eDQ38QKjEuoEBlrlnKvLPyjkRgT1U%2Fhly7HN6Zu%2FzMwd5%2FjYxTCPwLEvyQtspbKkmRF0t93ByAHRHzuL4oYFppGFP8%2BbxraiforhQIp2rt1R0j0Ht5xFjRNOr7sHJHVx1GhTGBwrtx20R%2BrU2QkJYlCR8rLfNWwjWJXBlE9yGP5E5VZrmejW%2FYCNQcAmAJ33iQ%3Bi6NHip6QWoewZ88H5lMJ7npxpTGMkNMw7g5OEl3w4Gayv%2BYPGG70qx4IMgt9eVHvXmGbiPna2A679a%2Beis06X0GFMpHOKqx9%2F9AwQ%2B6xpmT9uVwmzm8FOWo%2FE3edBV8rMU8MmrdtrdA%2FBkDzqpnZ6ojf6GaTqNGu5uPtjKousK0lWEgV3IDBQVEqDJaz0sPhQiOkCW4K40EzD6CJ857%2FMZvaatohRUjVFPzoMUGGmc1t4lIp%2F2kpGCX7Or8Xgd67oPlxEQcL5LAge1JUrky1cVbyIc%2FXtxS29E5PMmWxFBX%2Bu3WNEDML7ewsIGOqUB5e3uZ%2F9N79jWYsm7ouzLAAJTykJUoHeqbwsGovEm9ZxUlIeQ8Uf97%2FbJxw0XSgkw6Jd%2BWw7PpRBiNXKnpazwNwrj%2FoqnKgeBf67R0KXzzcVFB38cdRL7rsH9S7MRqpXWrBBF4HbwF9fIH5IyQQ2ptw5QyWoiF22hUYEd%2FBvz0SznYNo9953u6RTLIrGTfXBEXdi9OstuwG5rC7XoSeHyEsdY0g2A",
    "email": "shar@theskygroup.ca",
    "phone": "1 647 887 4996",
    "address": "36 Distillery Lane Unit 500 Toronto M5A3C4",
    "social": {
      "facebook": "https://www.facebook.com/theskygroupre",
      "instagram": "https://www.instagram.com/theskygroup_re"
    },
    "copyrightOwner": "Sky Group"
  },
  "meta": {
    "pageTitle": "Win Toronto Blue Jays Tickets - Sky Group Giveaway!",
    "navBrandLogoText": "Sky Group",
    "privacyPolicyLink": "https://www.mls.theskygroup.ca/privacy-policy"
  },
  "settings": {
    "ghlWebhookUrl": "",
    "theme": "dark",
    "confettiColors": ["#0052CC", "#FF0000", "#FFE600", "#FFFFFF"],
    "showCountdownInHero": true
  },
  "deploymentInfo": {
    "repoName": "Giveaway-683",
    "repoUrl": "https://github.com/arslvn93/Giveaway-683",
    "netlifyUrl": "http://Giveaway-683.netlify.app"
  }
};