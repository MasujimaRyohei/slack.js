var slack = {
    post: function (message) {
        var slackWebhookUrl = PropertiesService.getScriptProperties().getProperty('SLACK_WEBHOOK_URL');;
        var body = { text: message };
        var payload = JSON.stringify(body);
        UrlFetchApp.fetch(slackWebhookUrl, {
            method: 'POST',
            headers: { "Content-Type": 'application/json' },
            payload: payload
        })
    }
}
