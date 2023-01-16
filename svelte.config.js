import adapter from '@sveltejs/adapter-node';
import adapter from '@sveltejs/adapter-auto';
import cspDirectives from './csp-directives.mjs';

// https://rodneylab.com/sveltekit-node-app-deploy/

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({ postcss: true }),
	kit: {
		adapter: adapter({ precompress: true }),
		csp: {
			// Consult https://github.com/sveltejs/svelte-preprocess

 			// for more information about preprocessors
			mode: 'hash',

			directives: cspDirectives

		}
	}
};

export default config;

/*
Here we set up SvelteKit to use the node adapter. As well as that, in lines 13 – 16, 
we add Content Security Policy (CSP) hashes. CSP directives help protect sites from
cross site scripting (XSS) attacks. These are where a nefarious actor might inject
malicious code into the site before it arrives in the end user browser. SvelteKit
can automatically generate hashes or nonces which the user browser checks against
the actual code it receives. If things do not checkout the browsers can block
the potential threat. We go for hashes instead of nonces because every visitor
to the site will see the same content and we want to cache it. Nonces are 
cheaper to generate but should not be reused across requests. You can see more 
on CSP directives and XSS attacks in the post on SvelteKit Content Security Policy. 
*/
