function postSlack(slackWebhookUrl, message) {
    var body = { text: message };
    var payload = JSON.stringify(body);
    UrlFetchApp.fetch(slackWebhookUrl, {
        method: 'POST',
        headers: { "Content-Type": 'application/json' },
        payload: payload
    })
