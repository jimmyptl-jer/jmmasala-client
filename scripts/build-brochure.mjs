import fs from 'fs';
import { chromium } from 'playwright';

// Rebuilds public/JMMasalaProducts.pdf and public/catalogue/*.pdf. Needs Playwright (not a project dependency):
// install it somewhere temporary and run: node scripts/build-brochure.mjs <output-dir-for-preview-images>
import path from 'path';
const ROOT = path.resolve(import.meta.dirname, '..');
const A = `${ROOT}/src/assets`;
const b64 = (f) => `data:image/${f.endsWith('.png') ? 'png' : 'jpeg'};base64,${fs.readFileSync(`${A}/${f}`).toString('base64')}`;
const logo = b64('JmMasala.png');

// Facts come only from the confirmed catalogue (October 2026). [slug, name, local/botanical names, description, priority, photo, accent]
const P = [
  ['cumin-seeds-exporter-india', 'Cumin Seeds', 'Jeera | Cuminum cyminum', 'Our flagship export from Unjha, Gujarat, offered in four commercial grades.', true, 'cumin.jpg', '#8b5e3c'],
  ['coriander-seeds-exporter-india', 'Coriander Seeds', 'Dhania | Coriandrum sativum', 'Whole coriander seeds for spice processors, wholesalers and food manufacturers.', true, 'CorianderSeeds.jpg', '#5d8a3a'],
  ['fennel-seeds-exporter-india', 'Fennel Seeds', 'Saunf | Foeniculum vulgare', 'Whole fennel seeds for wholesale, food processing and export.', true, 'FennelSeeds.jpg', '#7a9a2e'],
  ['sesame-seeds-exporter-india', 'Sesame Seeds', 'Til | Sesamum indicum', 'Natural and hulled sesame seeds for food manufacturing, wholesale and export.', true, 'SesameSeeds.jpg', '#b8892f'],
  ['ajwain-seeds-exporter-india', 'Ajwain (Carom) Seeds', 'Ajmo | Trachyspermum ammi', 'Ajwain seeds for spice blenders and food manufacturers.', true, 'AjwainSeeds.jpg', '#7b6a3a'],
  ['mustard-seeds-exporter-india', 'Mustard Seeds', 'Rai, Sarson | Brassica juncea', 'Whole mustard seeds (the seed, not the oil) for wholesale, food processing and export.', true, 'MustardSeeds.jpg', '#c9a020'],
  ['fenugreek-seeds-exporter-india', 'Fenugreek Seeds', 'Methi', '', false, 'FenugreekSeeds.jpg', '#a3761f'],
  ['nigella-seeds-exporter-india', 'Nigella Seeds', 'Kalonji', '', false, 'NigellaSeeds.jpg', '#3d3d4a'],
  ['psyllium-husk-exporter-india', 'Psyllium Husk', 'Isabgol', '', false, 'PsylliumHusk.jpg', '#a8875a'],
  ['psyllium-seeds-exporter-india', 'Psyllium Seeds', '', '', false, 'PsylliumSeeds.jpg', '#8a6a4a'],
  ['red-chilli-exporter-india', 'Red Chilli', '', '', false, 'RedChilli.jpg', '#b3261e'],
  ['teja-chilli-exporter-india', 'Teja Chilli', '', '', false, 'TejaChilli.jpg', '#c0392b'],
  ['bird-eye-chilli-exporter-india', "Bird's Eye Chilli", '', '', false, 'BirdEyeChilli.jpg', '#d35400'],
  ['king-chilli-exporter-india', 'King Chilli', '', '', false, 'KingChilli.jpg', '#922b21'],
  ['turmeric-exporter-india', 'Turmeric', 'Haldi', '', false, 'Turmeric.jpg', '#d68910'],
  ['cardamom-exporter-india', 'Green and Black Cardamom', '', '', false, 'Cardamom.jpg', '#4f7a3a'],
  ['dry-ginger-exporter-india', 'Dry Ginger', 'Sonth', '', false, 'DryGinger.jpg', '#b9873a'],
  ['cumin-powder-exporter-india', 'Cumin Powder', '', '', false, 'CuminPowder.jpg', '#8b5e3c'],
  ['coriander-powder-exporter-india', 'Coriander Powder', '', '', false, 'CorianderPowder.jpg', '#5d8a3a'],
  ['turmeric-powder-exporter-india', 'Turmeric Powder', '', '', false, 'TurmericPowder.jpg', '#e08e0b'],
  ['red-chilli-powder-exporter-india', 'Red Chilli Powder', '', '', false, 'RedChilliPowder.jpg', '#b3261e'],
  ['ginger-powder-exporter-india', 'Ginger Powder', '', '', false, 'GingerPowder.jpg', '#b9873a'],
  ['fenugreek-powder-exporter-india', 'Fenugreek Powder', '', '', false, 'FenugreekPowder.jpg', '#a3761f'],
  ['agro-commodities-exporter-india', 'Agro Commodities', '', '', false, 'AgroCommodities.jpg', '#4f7a3a'],
];
const img = Object.fromEntries(P.map((x) => [x[0], b64(x[5])]));
const TOTAL = 28;
const FIRST_PRODUCT_PAGE = 4;
const pg = (n) => `${String(n).padStart(2, '0')} / ${TOTAL}`;

// Editorial layout: alternating dark-brown and cream pages, light serif headlines, italic gold subtitles,
// monospaced captions and a four-column strip, in the JM Masala export palette (dark brown, heritage gold, cream).
const css = `
@page{size:A4;margin:0}*{box-sizing:border-box}
body{margin:0;font-family:"Segoe UI",Arial,sans-serif;font-size:10.5pt;line-height:1.55}
.p{width:210mm;height:297mm;position:relative;page-break-after:always;overflow:hidden}
.p:last-child{page-break-after:auto}
.dark{background:#3a2214;color:#f3ead8}.cream{background:#f6f0e3;color:#2a2018}
.serif{font-family:"Palatino Linotype","Book Antiqua",Palatino,Georgia,serif;font-weight:400}
.mono{font-family:Consolas,"Courier New",monospace;text-transform:uppercase;letter-spacing:.14em}
.pad{padding:0 18mm}
.top{position:absolute;left:18mm;right:18mm;top:14mm;display:flex;justify-content:space-between;align-items:center;font-size:7.5pt}
.dark .top{color:#d9bf7c}.cream .top{color:#8a6a35}
.pill{border:1px solid currentColor;border-radius:99px;padding:1.4mm 4mm}
h1,h2{margin:0;font-family:"Palatino Linotype","Book Antiqua",Palatino,Georgia,serif;font-weight:400;line-height:1.1}
.dark h1,.dark h2{color:#f8f1e1}.cream h1,.cream h2{color:#2a2018}
.sub{font-family:"Palatino Linotype","Book Antiqua",Palatino,Georgia,serif;font-style:italic;font-size:15pt;margin:4mm 0 5mm}
.dark .sub{color:#d9bf7c}.cream .sub{color:#b0883f}
.lead{max-width:132mm;font-size:11.5pt;font-weight:300}.dark .lead{color:#e6dcc6}.cream .lead{color:#5b4c3a}
.rule{width:18mm;height:2px;background:#c9a84c;margin:6mm 0}
.strip{display:grid;grid-template-columns:repeat(4,1fr);gap:6mm;border-top:1px solid;padding-top:4mm}
.dark .strip{border-color:rgba(217,191,124,.35)}.cream .strip{border-color:#d9cdb2}
.strip b{display:block;font-weight:500;font-size:10.5pt}.strip span{display:block;font-size:7pt;margin-top:1mm;line-height:1.5}
.dark .strip span{color:#b9a98a}.cream .strip span{color:#8c7d66}
.bottom{position:absolute;left:18mm;right:18mm;bottom:12mm}
.foot{display:flex;justify-content:space-between;font-size:7pt;margin-top:4mm;padding-top:3mm;border-top:1px solid}
.dark .foot{border-color:rgba(217,191,124,.35);color:#b9a98a}.cream .foot{border-color:#d9cdb2;color:#8c7d66}
.ph{background-size:cover;background-position:center}
table{width:100%;border-collapse:collapse;font-size:9.5pt;margin:0 0 5mm}th,td{padding:1.6mm 0;text-align:left;border-bottom:1px solid}
.dark th,.dark td{border-color:rgba(217,191,124,.3)}.cream th,.cream td{border-color:#d9cdb2}
th{font-weight:400;font-size:7pt}.dark th{color:#d9bf7c}.cream th{color:#8a6a35}
.grid{display:grid;grid-template-columns:repeat(5,1fr);gap:4mm}
.th i{display:block;height:22mm;background-size:cover;background-position:center}.th b{display:block;font-weight:500;font-size:8.5pt;margin-top:1.5mm;line-height:1.25}.th span{display:block;font-size:6.5pt;color:#8c7d66;margin-top:.5mm}
.logo{width:16mm;height:16mm;border-radius:6px;background:#fdfbf7;padding:1.5mm}
.cover .shade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(58,34,20,.94) 0%,rgba(58,34,20,.82) 55%,rgba(58,34,20,.96) 100%)}
`;

const cover = `<div class="p dark cover" style="background-image:url(${b64('hero-bg.jpg')});background-size:cover;background-position:center"><div class="shade"></div>
<div class="top mono"><span>JM Masala Trading LLP</span><span>Product catalogue</span></div>
<div class="pad" style="position:absolute;top:84mm;left:0;right:0"><img class="logo" src="${logo}" style="width:22mm;height:22mm"><h1 style="font-size:50pt;margin:14mm 0 0">Premium Indian<br>Spices for<br>Global Markets.</h1><div class="rule"></div><p class="lead">Whole spices and seeds from Unjha, Gujarat, for importers, wholesalers, distributors and food manufacturers.</p></div>
<div class="bottom"><div class="strip"><div><b class="serif" style="font-size:15pt">Unjha</b><span class="mono">Gujarat, India</span></div><div><b class="serif" style="font-size:15pt">1 MT</b><span class="mono">Trial orders from</span></div><div><b class="serif" style="font-size:15pt">200 MT</b><span class="mono">Supply per month</span></div><div><b class="serif" style="font-size:15pt">1-5 days</b><span class="mono">Dispatch after confirmation</span></div></div></div></div>`;

const footer = (left, n) => `<div class="foot mono"><span>${left}</span><span>${pg(n)}</span></div>`;

const portfolio = () => `<div class="p cream"><div class="top mono"><span>01 — Product portfolio</span><span class="pill">What we supply</span></div>
<div class="pad" style="position:absolute;top:30mm;left:0;right:0"><h1 style="font-size:36pt">Everything we supply,<br>one page each.</h1><div class="sub">Every product has its own page in this catalogue.</div>
<div class="grid" style="margin-top:8mm">${P.map((x, i) => `<div class="th"><i style="background-image:url(${img[x[0]]})"></i><b>${x[1]}</b><span class="mono">Page ${FIRST_PRODUCT_PAGE + i}</span></div>`).join('')}<div class="th"><i style="background-image:url(${curryImg})"></i><b>Curry leaf</b><span class="mono">On request</span></div></div>
<p style="font-size:9pt;color:#5b4c3a;margin-top:6mm">Specifications for these products are shared on request with a sample.</p></div>
<div class="bottom">${footer('JM Masala Trading LLP', 2)}</div></div>`;

const about = `<div class="p dark"><div class="top mono"><span>02 — About us</span><span class="pill">JM Masala Trading LLP</span></div>
<div class="pad" style="position:absolute;top:34mm;left:0;right:0"><h1 style="font-size:36pt">A spice and seed supplier<br>in the heart of Unjha.</h1><div class="sub">Cumin is our flagship export.</div>
<p class="lead">JM Masala Trading LLP is based at the APMC Market Yard in Unjha, Gujarat. We supply spices and seeds for export and bulk wholesale. Specifications, grades and packing for each product are confirmed with your quotation.</p>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0;height:92mm;margin:10mm -18mm 0"><div class="ph" style="background-image:url(${b64('why-sourcing.jpg')})"></div><div class="ph" style="background-image:url(${b64('why-sorting.jpg')})"></div><div class="ph" style="background-image:url(${b64('why-packaging.jpg')})"></div></div></div>
<div class="bottom"><div class="strip" style="margin-bottom:6mm"><div><b>Trial orders</b><span class="mono">From 1 MT</span></div><div><b>Supply</b><span class="mono">Up to 200 MT per month</span></div><div><b>Dispatch</b><span class="mono">1-5 days after order confirmation</span></div><div><b>Samples</b><span class="mono">Can be arranged</span></div></div>
<div class="strip"><div><b>25 kg or 50 kg</b><span class="mono">PP bags with inner liner</span></div><div><b>Retail packs</b><span class="mono">On request</span></div><div><b>Private label</b><span class="mono">Available; packaging on request</span></div><div><b>How to order</b><span class="mono">Enquiry, quotation, sample, order</span></div></div>
${footer('About us', 3)}</div></div>`;

const grades = (cls) => `<table><tr class="mono"><th>Grade</th><th>Purity</th><th>Cleaning</th></tr><tr><td>Singapore</td><td>99%</td><td>Machine cleaned</td></tr><tr><td>Singapore</td><td>99%</td><td>Sortex cleaned</td></tr><tr><td>Europe</td><td>99.5%</td><td>Sortex cleaned</td></tr><tr><td>Europe Bold</td><td>99.99%</td><td>Sortex cleaned</td></tr></table>`;

const productPage = ([slug, name, names, desc, priority], i) => {
  const dark = i % 2 === 1;
  const cumin = slug === 'cumin-seeds-exporter-india';
  const n = FIRST_PRODUCT_PAGE + i;
  return `<div class="p ${dark ? 'dark' : 'cream'}"><div class="ph" style="height:${cumin ? 108 : 140}mm;background-image:url(${img[slug]})"></div>
<div class="top mono" style="color:#fff"><span style="background:rgba(58,34,20,.6);padding:1.4mm 3mm;border-radius:99px">${String(i + 1).padStart(2, "0")} — Product</span><span style="background:rgba(58,34,20,.6);padding:1.4mm 3mm;border-radius:99px">JM Masala</span></div>
<div class="pad" style="margin-top:${cumin ? 7 : 9}mm"><h2 style="font-size:${cumin ? 34 : 38}pt">${name}</h2>${names ? `<div class="sub" style="margin-bottom:3mm">${names}</div>` : '<div class="sub" style="margin-bottom:3mm">Supplied from Unjha, Gujarat</div>'}
<p class="lead">${desc || `${name} is part of the JM Masala range, for importers, wholesalers, distributors and food manufacturers.`} ${priority ? 'Specifications, grades and packing are confirmed with your quotation.' : 'Specifications for this product are shared on request with a sample.'}</p>
${cumin ? `<div style="margin-top:5mm">${grades()}</div>` : ''}</div>
<div class="bottom"><div class="strip" style="margin-bottom:${cumin ? 4 : 6}mm"><div><b>Trial orders</b><span class="mono">From 1 MT</span></div><div><b>Supply</b><span class="mono">Up to 200 MT per month</span></div><div><b>Dispatch</b><span class="mono">1-5 days after order confirmation</span></div><div><b>Samples</b><span class="mono">Can be arranged</span></div></div>
<div class="strip"><div><b>25 kg or 50 kg</b><span class="mono">PP bags with inner liner</span></div><div><b>Retail packs</b><span class="mono">On request</span></div><div><b>Private label</b><span class="mono">Packaging on request</span></div><div><b>Enquire</b><span class="mono">+91 91067 66041<br>jmmasalaexports.com/${slug}</span></div></div>
${footer(name, n)}</div></div>`;
};

const contactPage = () => `<div class="p dark"><div class="top mono"><span>03 — Contact</span><span class="pill">Request a quotation</span></div>
<div class="pad" style="position:absolute;top:70mm;left:0;right:0"><img class="logo" src="${logo}" style="width:22mm;height:22mm"><h1 style="font-size:40pt;margin-top:12mm">Tell us what you need,<br>we will quote.</h1><div class="rule"></div>
<p class="lead">Send your enquiry with the product, quantity, destination country and packing preference. We reply with the specification and a quotation, and a sample can be arranged for your approval. Dispatch follows within 1-5 days of order confirmation.</p></div>
<div class="bottom"><div class="strip" style="margin-bottom:6mm"><div><b>Phone / WhatsApp</b><span class="mono">+91 91067 66041<br>+91 98245 10478</span></div><div><b>Email</b><span class="mono" style="text-transform:none;letter-spacing:.04em">jmmasalaexports@gmail.com</span></div><div><b>Website</b><span class="mono" style="text-transform:none;letter-spacing:.04em">jmmasalaexports.com/contact</span></div><div><b>Office</b><span class="mono" style="line-height:1.5">A/18, Main Line, APMC Market Yard, Unjha, Gujarat 384170</span></div></div>
${footer('JM Masala Trading LLP', 28)}</div></div>`;

let curryImg = '';
const doc = (body) => `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>JM Masala Product Catalogue</title><style>${css}</style></head><body>${body}</body></html>`;

fs.mkdirSync(`${ROOT}/public/catalogue`, { recursive: true });
const br = await chromium.launch({ executablePath: process.env.CHROME_PATH || undefined });
const p = await br.newPage();
const shrink = (src) => p.evaluate(async (u) => { const i = new Image(); i.src = u; await i.decode(); const c = document.createElement('canvas'); c.width = 500; c.height = Math.round((500 * i.height) / i.width); c.getContext('2d').drawImage(i, 0, 0, c.width, c.height); return c.toDataURL('image/jpeg', 0.85); }, src);
curryImg = await shrink(b64('CurryLeaf.png'));
for (const [i, item] of P.entries()) {
  await p.setContent(doc(productPage(item, i)));
  await p.pdf({ path: `${ROOT}/public/catalogue/${item[0]}.pdf`, format: 'A4', printBackground: true, preferCSSPageSize: true });
}
await p.setContent(doc([cover, portfolio(), about, ...P.map(productPage), contactPage()].join('\n')));
await p.pdf({ path: `${ROOT}/public/JMMasalaProducts.pdf`, format: 'A4', printBackground: true, preferCSSPageSize: true });
await p.setViewportSize({ width: 794, height: 1123 });
for (const n of [1, 2, 3, 4, 5, 8, 28]) await p.locator('.p').nth(n - 1).screenshot({ path: (process.argv[2] || '.') + `/b${n}.png` });
await br.close();
console.log('done');
