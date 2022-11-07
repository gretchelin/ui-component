import{_ as n,o as t,c as o,a as e,b as s,r as l}from"./app.6b3e5641.js";const b=JSON.parse('{"title":"Pagination","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Basic Usage","slug":"basic-usage","link":"#basic-usage","children":[]},{"level":3,"title":"Small","slug":"small","link":"#small","children":[]},{"level":3,"title":"Large","slug":"large","link":"#large","children":[]},{"level":3,"title":"Simple","slug":"simple","link":"#simple","children":[]}]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[]},{"level":2,"title":"Events","slug":"events","link":"#events","children":[]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":2,"title":"CSS Variables","slug":"css-variables","link":"#css-variables","children":[]},{"level":2,"title":"Manual Installation","slug":"manual-installation","link":"#manual-installation","children":[]},{"level":2,"title":"Storybook","slug":"storybook","link":"#storybook","children":[]}],"relativePath":"components/pagination.md"}'),p={name:"components/pagination.md"},c=s(`<h1 id="pagination" tabindex="-1">Pagination <a class="header-anchor" href="#pagination" aria-hidden="true">#</a></h1><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><h3 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h3><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">&lt;!-- VPagination is registered globally --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VPagination</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">total-items</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">items-per-page</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,4),r=s(`<div class="info custom-block"><p class="custom-block-title">INFO</p><p>The <code>VPagination</code> component is registered globally when you install with <code>@gits-id/ui</code>. So you don&#39;t need to import it manually.</p></div><h3 id="small" tabindex="-1">Small <a class="header-anchor" href="#small" aria-hidden="true">#</a></h3><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VPagination</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">total-items</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">items-per-page</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">small</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,3),d=s(`<h3 id="large" tabindex="-1">Large <a class="header-anchor" href="#large" aria-hidden="true">#</a></h3><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VPagination</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">total-items</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">items-per-page</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">large</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,2),i=s(`<h3 id="simple" tabindex="-1">Simple <a class="header-anchor" href="#simple" aria-hidden="true">#</a></h3><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VPagination</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">total-items</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">items-per-page</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">simple</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,2),F=s(`<h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><a href="#modelValue"><code>modelValue</code></a></td><td><code>number</code></td><td><code>1</code></td></tr><tr><td><a href="#showFirst"><code>showFirst</code></a></td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><a href="#showPrevious"><code>showPrevious</code></a></td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><a href="#showNext"><code>showNext</code></a></td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><a href="#showLast"><code>showLast</code></a></td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><a href="#totalItems"><code>totalItems</code></a></td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><a href="#siblingCount"><code>siblingCount</code></a></td><td><code>number</code></td><td><code>1</code></td></tr><tr><td><a href="#boundaryCount"><code>boundaryCount</code></a></td><td><code>number</code></td><td><code>1</code></td></tr><tr><td><a href="#itemsPerPage"><code>itemsPerPage</code></a></td><td><code>number</code></td><td><code>10</code></td></tr><tr><td><a href="#activeClass"><code>activeClass</code></a></td><td><code>string</code></td><td><code>&#39;bg-primary-600 border-primary-600 hover:!bg-primary-700 text-white !font-semibold&#39;</code></td></tr><tr><td><a href="#defaultClass"><code>defaultClass</code></a></td><td><code>string</code></td><td><code>&#39;text-gray-700&#39;</code></td></tr><tr><td><a href="#simple"><code>simple</code></a></td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><p>None</p><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><p>None</p><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><p>None</p><h2 id="css-variables" tabindex="-1">CSS Variables <a class="header-anchor" href="#css-variables" aria-hidden="true">#</a></h2><p>None</p><h2 id="manual-installation" tabindex="-1">Manual Installation <a class="header-anchor" href="#manual-installation" aria-hidden="true">#</a></h2><p>You can also install the <code>Pagination</code> component individually via <code>@gits-id/pagination</code> package:</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn install @gits-id/pagination</span></span>
<span class="line"></span></code></pre></div><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> VPagination </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@gits-id/pagination</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VPagination</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="storybook" tabindex="-1">Storybook <a class="header-anchor" href="#storybook" aria-hidden="true">#</a></h2><p>View Storybook documentation <a href="https://gits-ui.web.app/?path=/story/components-pagination--default" target="_blank" rel="noreferrer">here</a>.</p>`,16);function D(y,h,u,g,m,_){const a=l("LivePreview");return t(),o("div",null,[c,e(a,{src:"components-pagination--default",height:"100"}),r,e(a,{src:"components-pagination--small",height:"100"}),d,e(a,{src:"components-pagination--large",height:"100"}),i,e(a,{src:"components-pagination--simple",height:"100"}),F])}const v=n(p,[["render",D]]);export{b as __pageData,v as default};
