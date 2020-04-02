function postSlack(slackWebhookUrl, message) {
    const body = { text: message };
    const payload = JSON.stringify(body);
    UrlFetchApp.fetch(slackWebhookUrl, {
        method: 'POST',
        headers: { "Content-Type": 'application/json' },
        payload: payload
    })
