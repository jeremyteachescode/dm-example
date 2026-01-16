// slackNotificationHandler.js

const axios = require('axios');

async function sendSlackDealAlert(dealData) {
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
    
    const messageBlock = {
        blocks: [
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: `🚀 *New High-Value Deal Movement!* \n *Deal:* ${dealData.name} \n *Value:* $${dealData.amount}`
                }
            },
            {
                type: "actions",
                elements: [
                    {
                        type: "button",
                        text: { type: "plain_text", text: "View in HubSpot" },
                        url: dealData.hubspot_url
                    }
                ]
            }
        ]
    };

    await axios.post(slackWebhookUrl, messageBlock);
}
