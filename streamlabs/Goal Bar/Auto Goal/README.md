YouTube Subscriber Goal Widget
This project provides a custom Streamlabs widget to display your YouTube subscriber count in real-time. The widget visually represents the progress towards a subscriber goal using a dynamic progress bar.

Features
Real-time update of YouTube subscriber count.
Dynamic progress bar that visually represents the goal progress.
Hides the widget when the goal is reached.
Easily customizable with Streamlabs settings.
How to Use
Prerequisites
You will need a YouTube Data API v3 key and your YouTube channel ID.
Step-by-Step Guide
Clone or Download the Repository:
git clone https://github.com/yourusername/YouTube-Subscriber-Goal-Widget.git

Update API Key and Channel ID:
Open script.js and replace the placeholders with your actual YouTube Data API v3 key and your channel ID.
const apiKey = 'YOUR_API_KEY_HERE';
const channelId = 'YOUR_CHANNEL_ID_HERE';

Upload to Streamlabs:

Go to your Streamlabs dashboard.
Navigate to Widgets > Custom Widget.
Copy the contents of index.html into the HTML section.
Copy the contents of styles.css into the CSS section.
Copy the contents of script.js into the JavaScript section.
Configure the Widget in Streamlabs:

Set your goal title and target subscriber count in the Streamlabs widget settings.
Streamlabs Settings Explanation
Goal (Number): The total number of subscribers you aim to reach.
Goal Title (Text): The title of your subscriber goal (not displayed in this widget version).
Save and Test:
Save the widget and add it to your stream layout.
Verify that the subscriber count updates in real-time based on your Streamlabs goal settings.
File Overview
index.html
Defines the structure of the widget. Contains a container for the goal bar with progress and text elements.

styles.css
Styles the widget with a transparent background and a progress bar. The .hidden class hides the widget when the goal is reached.

script.js
Fetches the subscriber count from the YouTube API, updates the progress bar width based on the current subscriber count, checks if the goal is reached, and hides the widget if true. Listens for Streamlabs events to update the goal and fetch subscriber counts dynamically.