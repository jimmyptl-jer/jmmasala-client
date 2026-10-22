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

const css = `
@page{size:A4;margin:0}*{box-sizing:border-box}
body{margin:0;font-family:"Segoe UI",Arial,sans-serif;color:#2a2a2a;font-size:10.5pt;line-height:1.5}
.p{width:210mm;height:297mm;position:relative;page-break-after:always;overflow:hidden;background:#fdfbf7}
.p:last-child{page-break-after:auto}
h1,h2,h3{font-family:Georgia,serif;margin:0}
.lab{letter-spacing:.28em;font-size:8.5pt;text-transform:uppercase}
.cover{background:#3a2214 center/cover;color:#faf6ee}
.cover .ov{position:absolute;inset:0;background:linear-gradient(160deg,rgba(58,34,20,.93) 0%,rgba(58,34,20,.72) 55%,rgba(201,168,76,.35) 100%)}
.cover .in{position:absolute;left:22mm;right:22mm;top:60mm}
.cover img.lg{width:44mm;height:44mm;background:#fdfbf7;border-radius:12px;padding:3mm}
.cover h1{color:#fff;font-size:42pt;line-height:1.1;margin:10mm 0 6mm}
.cover .lab{color:#e2c97e;margin-top:10mm}
.cover p{font-size:14pt;max-width:135mm;color:#f3ecd9}
.cover .ct{position:absolute;left:22mm;right:22mm;bottom:22mm;border-top:2px solid #c9a84c;padding-top:5mm;font-size:10pt;color:#efe6cf}
.cover .bar{position:absolute;left:0;right:0;bottom:0;height:8mm;background:#c9a84c}
.band{background:#3a2214;color:#fff;padding:16mm 17mm 10mm}.band h2{color:#fff;font-size:26pt}.band .lab{color:#e2c97e;margin-bottom:2mm}
.photos{display:grid;grid-template-columns:repeat(3,1fr);gap:0;height:58mm}.photos div{background-size:cover;background-position:center}
.body{padding:9mm 17mm 0}
.tiles{display:grid;grid-template-columns:1fr 1fr;gap:6mm}
.tile{border-radius:10px;padding:5mm 6mm;color:#fff}
.tile h3{font-size:13pt;color:#fff;margin:0 0 2mm}.tile ul{margin:0;padding-left:5mm}.tile li{margin:1mm 0}
.g{background:linear-gradient(135deg,#5c3a1f,#3a2214)}.go{background:linear-gradient(135deg,#d9b650,#b8892f)}
.steps{display:grid;grid-template-columns:1fr 1fr;gap:4mm;margin-top:3mm}
.step{display:flex;gap:3mm;background:#fff;border:1px solid #f0e4c0;border-radius:10px;padding:3.5mm 4mm}
.step b{flex:none;width:8mm;height:8mm;border-radius:50%;background:#c9a84c;color:#3a2214;display:flex;align-items:center;justify-content:center;font-family:Georgia,serif}
.h3{font-family:Georgia,serif;font-size:14pt;color:#3a2214;margin:7mm 0 2mm}
.foot{position:absolute;left:0;right:0;bottom:0;background:#3a2214;color:#e9dfc8;padding:5mm 17mm;font-size:8.5pt;display:flex;justify-content:space-between}
.prod .hero{height:86mm;background-size:cover;background-position:center;position:relative}
.prod .hero .ov{position:absolute;left:0;right:0;bottom:0;padding:22mm 17mm 7mm;background:linear-gradient(to top,rgba(30,16,8,.88),rgba(30,16,8,0))}
.prod .hero h2{color:#fff;font-size:30pt;line-height:1.1}.prod .hero .names{color:#f3e7c4;font-style:italic;font-size:12pt}
.prod .hero .tag{position:absolute;top:10mm;left:17mm;background:rgba(255,255,255,.92);border-radius:8px;padding:2mm 3mm;display:flex;gap:2mm;align-items:center;font-size:8pt;color:#3a2214;letter-spacing:.2em;text-transform:uppercase}
.prod .hero .tag img{width:9mm;height:9mm}
.stripe{height:4mm}.prod.tight .hero{height:58mm}.prod.tight .hero .ov{padding-top:12mm}.prod.tight .h3{margin:4mm 0 1.5mm}.prod.tight th,.prod.tight td{padding:1.2mm 3mm}.prod.tight .tile{padding:3.5mm 5mm}.prod.tight .tile li{margin:.4mm 0}.prod.tight .step{padding:2.5mm 3mm}.prod.tight .contact{margin-top:4mm;padding:3mm 5mm}.prod.tight .body{padding-top:6mm}.tiles{margin-top:5mm}
.lead{font-size:12.5pt;color:#3a2214;margin:0 0 3mm}
table{width:100%;border-collapse:collapse;font-size:10pt;margin-top:2mm}th,td{padding:2mm 3mm;text-align:left;border-bottom:1px solid #eadfb8}th{background:#3a2214;color:#fff}
.contact{margin-top:6mm;display:flex;gap:6mm;align-items:center;background:#f6e9c8;border:1px solid #e6d291;border-radius:10px;padding:4mm 6mm}.contact div{font-size:9.5pt}
.thumbs{display:grid;grid-template-columns:repeat(5,1fr);gap:4mm}.th{border-radius:8px;overflow:hidden;background:#fff;border:1px solid #f0e4c0}.th i{display:block;height:24mm;background-size:cover;background-position:center}.th span{display:block;padding:1.5mm 2mm;font-size:8.5pt;text-align:center;color:#3a2214;font-weight:600}
`;

const stats = `<div class="tiles"><div class="tile g"><h3>Supply terms</h3><ul><li>Trial orders from 1 MT</li><li>Supply up to 200 MT per month</li><li>Dispatch 1-5 days after order confirmation</li><li>Samples can be arranged</li><li>Private label available</li></ul></div>
<div class="tile go"><h3>Packing</h3><ul><li>25 kg or 50 kg PP bags with inner liner</li><li>Retail packs on request</li><li>Private-label packaging on request</li></ul></div></div>`;
const steps = `<div class="h3">How to order</div><div class="steps">
<div class="step"><b>1</b><div>Send your enquiry: product, quantity, destination country and packing preference.</div></div>
<div class="step"><b>2</b><div>We reply with the specification and a quotation.</div></div>
<div class="step"><b>3</b><div>A sample can be arranged for your approval.</div></div>
<div class="step"><b>4</b><div>Confirm the order; dispatch follows within 1-5 days of confirmation.</div></div></div>`;
const grades = `<div class="h3">Commercial grades</div><table><tr><th>Grade</th><th>Purity</th><th>Cleaning</th></tr><tr><td>Singapore</td><td>99%</td><td>Machine cleaned</td></tr><tr><td>Singapore</td><td>99%</td><td>Sortex cleaned</td></tr><tr><td>Europe</td><td>99.5%</td><td>Sortex cleaned</td></tr><tr><td>Europe Bold</td><td>99.99%</td><td>Sortex cleaned</td></tr></table>`;
const contactBox = (slug) => `<div class="contact"><img src="${logo}" style="width:20mm;height:20mm"><div><b>JM Masala Trading LLP</b><br>A/18, Main Line, APMC Market Yard, Unjha, Mehsana District, Gujarat 384170, India<br>Phone / WhatsApp: +91 91067 66041 | +91 98245 10478<br>jmmasalaexports@gmail.com | jmmasalaexports.com${slug ? '/' + slug : ''}</div></div>`;

const cover = `<div class="p cover" style="background-image:url(${b64('hero-bg.jpg')})"><div class="ov"></div><div class="in"><img class="lg" src="${logo}"><div class="lab">Product Catalogue</div><h1>Premium Indian Spices for Global Markets</h1><p>Whole spices and seeds from Unjha, Gujarat, for importers, wholesalers, distributors and food manufacturers.</p></div>
<div class="ct"><b>JM Masala Trading LLP</b> &nbsp;|&nbsp; A/18, Main Line, APMC Market Yard, Unjha, Mehsana District, Gujarat 384170, India<br>+91 91067 66041 | +91 98245 10478 &nbsp;|&nbsp; jmmasalaexports@gmail.com | jmmasalaexports.com</div><div class="bar"></div></div>`;

const about = `<div class="p"><div class="band"><div class="lab">About us</div><h2>JM Masala Trading LLP</h2></div>
<div class="photos"><div style="background-image:url(${b64('why-sourcing.jpg')})"></div><div style="background-image:url(${b64('why-sorting.jpg')})"></div><div style="background-image:url(${b64('why-packaging.jpg')})"></div></div>
<div class="body"><p class="lead">JM Masala Trading LLP is a spice and seed supplier based at the APMC Market Yard in Unjha, Gujarat. We supply spices and seeds for export and bulk wholesale, with cumin as our flagship export.</p>${stats}
<p style="margin:5mm 0 0">Specifications, grades and packing for each product are confirmed with your quotation. Tell us the product, quantity, destination port and packing you need.</p>${steps}</div>
<div class="foot"><span>JM Masala Trading LLP</span><span>Product Catalogue | October 2026</span></div></div>`;

const productPage = ([slug, name, names, desc, priority, , accent]) => `<div class="p prod${slug === 'cumin-seeds-exporter-india' ? ' tight' : ''}"><div class="hero" style="background-image:url(${img[slug]})"><div class="tag"><img src="${logo}">Product data sheet</div><div class="ov"><h2>${name}</h2>${names ? `<div class="names">${names}</div>` : ''}</div></div>
<div class="stripe" style="background:linear-gradient(90deg,#c9a84c,#e2c97e,#c9a84c)"></div>
<div class="body"><p class="lead">${desc || `${name} is part of the JM Masala range, supplied from Unjha, Gujarat for importers, wholesalers, distributors and food manufacturers.`}</p>
<p style="margin:0 0 4mm;color:#7a5a35">${priority ? 'Specifications, grades and packing are confirmed with your quotation.' : 'Specifications for this product are shared on request with a sample.'}</p>
${slug === 'cumin-seeds-exporter-india' ? grades : ''}${stats.replace('margin', 'margin')}${steps}${contactBox(slug)}</div>
<div class="foot"><span>JM Masala Trading LLP | ${name}</span><span>October 2026</span></div></div>`;

let curryImg = "";
const rangePage = () => `<div class="p"><div class="band"><div class="lab">Our range</div><h2>Also available</h2></div><div class="body"><div class="thumbs">${P.slice(6).map((x) => `<div class="th"><i style="background-image:url(${img[x[0]]})"></i><span>${x[1]}</span></div>`).join('')}<div class="th"><i style="background-image:url(${curryImg})"></i><span>Curry leaf</span></div></div>
<p style="margin-top:6mm">Specifications for these products are shared on request with a sample.</p><div class="h3">Contact us for a quotation</div>${contactBox('')}<p style="margin-top:4mm">Enquiry form: jmmasalaexports.com/contact</p></div>
<div class="foot"><span>JM Masala Trading LLP</span><span>Product Catalogue | October 2026</span></div></div>`;

const doc = (body) => `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>JM Masala Product Catalogue</title><style>${css}</style></head><body>${body}</body></html>`;

fs.mkdirSync(`${ROOT}/public/catalogue`, { recursive: true });
const br = await chromium.launch({ executablePath: process.env.CHROME_PATH || undefined });
const p = await br.newPage();
const shrink = (src) => p.evaluate(async (u) => { const i = new Image(); i.src = u; await i.decode(); const c = document.createElement("canvas"); c.width = 500; c.height = Math.round((500 * i.height) / i.width); c.getContext("2d").drawImage(i, 0, 0, c.width, c.height); return c.toDataURL("image/jpeg", 0.85); }, src);
curryImg = await shrink(b64("CurryLeaf.png"));
for (const item of P) {
  await p.setContent(doc(productPage(item)));
  await p.pdf({ path: `${ROOT}/public/catalogue/${item[0]}.pdf`, format: 'A4', printBackground: true, preferCSSPageSize: true });
}
await p.setContent(doc([cover, about, ...P.map(productPage), rangePage()].join('\n')));
await p.pdf({ path: `${ROOT}/public/JMMasalaProducts.pdf`, format: 'A4', printBackground: true, preferCSSPageSize: true });
await p.setViewportSize({ width: 794, height: 1123 });
for (const n of [1, 2, 3, 8, 11, 27]) await p.locator('.p').nth(n - 1).screenshot({ path: (process.argv[2] || '.') + `/b${n}.png` });
await br.close();
console.log('done');
