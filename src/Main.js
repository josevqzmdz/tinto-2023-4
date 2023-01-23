import * as Sentry from "@sentry/svelte";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
	dsn: "https://examplePublicKey@o0.ingest.sentry.io/0",
	integrations: [new BrowserTracing()],
  
	// Set tracesSampleRate to 1.0 to capture 100%
	// of transactions for performance monitoring.
	// We recommend adjusting this value in production
	tracesSampleRate: 1.0,
  });

new App({
	target: document.body,
	props: {
		name: "tinto"
	}
});

export default app;