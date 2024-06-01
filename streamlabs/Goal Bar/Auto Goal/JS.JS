const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your YouTube Data API v3 key
const channelId = 'YOUR_CHANNEL_ID_HERE'; // Replace with your YouTube channel ID
const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`;

async function fetchSubscriberCount() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const subscriberCount = data.items[0].statistics.subscriberCount;
        $('#goal-current').text(subscriberCount);
        updateProgressBar();
        checkGoalStatus();
    } catch (error) {
        console.error('Error fetching subscriber count:', error);
    }
}

function updateProgressBar() {
    const currentCount = parseInt($('#goal-current').text(), 10);
    const totalCount = parseInt($('#goal-total').text(), 10);
    const progressPercentage = (currentCount / totalCount) * 100;
    $('#progress-bar').css('width', progressPercentage + '%');
}

function checkGoalStatus() {
    const currentCount = parseInt($('#goal-current').text(), 10);
    const totalCount = parseInt($('#goal-total').text(), 10);

    if (currentCount >= totalCount) {
        $('.goal-cont').addClass('hidden');
    } else {
        $('.goal-cont').removeClass('hidden');
    }
}

document.addEventListener('goalLoad', function(obj) {
    $('#goal-total').text(obj.detail.amount.target || 500);
    fetchSubscriberCount();
});

document.addEventListener('goalEvent', function(obj) {
    $('#goal-total').text(obj.detail.amount.target || $('#goal-total').text());
    fetchSubscriberCount();
});

fetchSubscriberCount();
setInterval(fetchSubscriberCount, 300000);
