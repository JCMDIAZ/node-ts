import "dotenv/config";
import { IncomingWebhook } from "@slack/webhook";
import { StreamLikeType } from "morgan-body"
const webhook = new IncomingWebhook(<string>process.env.SLACK_WEBHOOK);

const loggerStream:any = {
    write: (message:any) => {
        (async () => {
            await webhook.send({
                text: message,
            });
        })();
        console.log('Capturando el LOG ', message);
        // do anything - emit to websocket? send message somewhere? log to cloud?
    },
};

export default loggerStream;