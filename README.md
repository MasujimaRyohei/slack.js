# slack.js
Use slack on developing JavaScript ( and Google Apps Script)

# Usage
1. Get webhook url of Slack.

If you use slack.gs, you have to set script property.

  a. (On script editor) File > Project properties > Script properties

  b. Add row.

  c. Property → SLACK_WEBHOOK_URL

  d. Value → Your slack webhook url

```JavaScript
postSlack(webhookUrl, "HelloWorld");
```
```Google Apps Script
slack.post("HelloWorld");
```
