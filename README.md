<h1>🌸 Kammeliya</h1><p><div></div> <div></div> <div></div> <div></div> <div></div></p><p>Kammeliya is a simple yet powerful JavaScript library designed for those who work tirelessly behind the scenes but are too lazy to publish their portfolio works. This library makes it easy to manage and showcase your portfolio directly from your GitHub projects.</p><h2>🌟 Features</h2><ul><li>📝 <strong>Auto-Generate Portfolio</strong>: Automatically generate a portfolio from your GitHub repositories.</li><li>⚡ <strong>Easy to Use</strong>: Simple API to interact with your portfolio data.</li><li>🎨 <strong>Customizable</strong>: Easily customizable to fit your personal branding.</li><li>📦 <strong>Lightweight</strong>: Minimal dependencies, ensuring a fast and responsive experience.</li></ul><h2>📦 Installation</h2><p>Install Kammeliya using npm:</p><pre><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>sh</span><div class="flex items-center"><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon-sm"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg>Copy code</button></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-sh">npm install kammeliya
</code></div></div></pre><h2>🚀 Usage</h2><p>Here's a quick example to get you started:</p><pre><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>javascript</span><div class="flex items-center"><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon-sm"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg>Copy code</button></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-javascript"><span class="hljs-keyword">const</span> <span class="hljs-title class_">Kammeliya</span> = <span class="hljs-built_in">require</span>(<span class="hljs-string">'kammeliya'</span>);

<span class="hljs-comment">// Initialize Kammeliya</span>
<span class="hljs-keyword">const</span> kammeliya = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Kammeliya</span>();

<span class="hljs-comment">// Fetch and display portfolio data</span>
kammeliya.<span class="hljs-title function_">fetchPortfolio</span>().<span class="hljs-title function_">then</span>(<span class="hljs-function"><span class="hljs-params">portfolio</span> =&gt;</span> {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(portfolio);
}).<span class="hljs-title function_">catch</span>(<span class="hljs-function"><span class="hljs-params">err</span> =&gt;</span> {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">error</span>(<span class="hljs-string">'Error fetching portfolio:'</span>, err);
});
</code></div></div></pre><h2>🔧 API</h2><h3><code>fetchPortfolio()</code></h3><p>Fetches portfolio data from your GitHub repositories.</p><p><strong>Returns</strong>: <code>Promise&lt;Array&gt;</code> - A promise that resolves to an array of portfolio items.</p><h2>🛠️ Configuration</h2><p>You can customize Kammeliya to fit your needs by passing a configuration object when initializing:</p><pre><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>javascript</span><div class="flex items-center"><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon-sm"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg>Copy code</button></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-javascript"><span class="hljs-keyword">const</span> kammeliya = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Kammeliya</span>({
    <span class="hljs-attr">githubUsername</span>: <span class="hljs-string">'your-github-username'</span>,
    <span class="hljs-attr">includeRepos</span>: [<span class="hljs-string">'repo1'</span>, <span class="hljs-string">'repo2'</span>], <span class="hljs-comment">// Optional: specify repos to include</span>
    <span class="hljs-attr">excludeRepos</span>: [<span class="hljs-string">'repo3'</span>], <span class="hljs-comment">// Optional: specify repos to exclude</span>
    <span class="hljs-attr">sortBy</span>: <span class="hljs-string">'stars'</span>, <span class="hljs-comment">// Optional: sort portfolio items by 'stars', 'updated', etc.</span>
});
</code></div></div></pre><h2>📚 Examples</h2><p>Here are some examples to demonstrate how you can use Kammeliya:</p><ul><li><a rel="noreferrer">Basic Usage</a></li><li><a rel="noreferrer">Advanced Configuration</a></li><li><a rel="noreferrer">Custom Portfolio Template</a></li></ul><h2>📖 Documentation</h2><p>For detailed documentation, please refer to the <a rel="noreferrer" target="_new" href="https://github.com/vendor/kammeliya/wiki">official documentation</a>.</p><h2>📝 License</h2><p>This project is licensed under the MIT License - see the <a rel="noreferrer">LICENSE</a> file for details.</p><h2>🤝 Contributing</h2><p>We welcome contributions to Kammeliya! Please check out our <a rel="noreferrer" href="CONTRIBUTING.md">contributing guidelines</a> for more information.</p><h2>🙏 Acknowledgements</h2><p>A special thanks to everyone who contributed to this project. Your hard work and dedication are greatly appreciated!</p>
