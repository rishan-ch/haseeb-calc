import { useState, useMemo } from "react";

const T = {
  en: {
    appName: "Haseeb", subtitle: "Cost Calculator", tagline: "Turn your home business into a pro business",
    dashboard: "Dashboard", products: "Products", addProduct: "Add Another Product",
    newProduct: "New Product", productInfo: "Product Info", productName: "Product Name",
    productNamePh: "e.g. Chocolate Cake", batchMakes: "Batch Makes", unit: "Unit",
    ingredients: "Ingredients", ingredientsDesc: "Enter what you buy and how much final product it makes",
    ingredientName: "Ingredient Name", ingredientNamePh: "e.g. Chocolate",
    cost: "Purchase Cost", amount: "Amount Bought", makes: "Makes (final product)",
    addIngredient: "Add Ingredient",
    packaging: "Packaging", packagingDesc: "Enter total quantity bought and total cost — we calculate per-unit cost for you",
    packagingItem: "Item Name", packagingItemPh: "e.g. Cake Box",
    totalQty: "Total Qty Bought", totalCost: "Total Cost Paid", usedPerUnit: "Used Per Product",
    addPackaging: "Add Packaging Item",
    labor: "Labor", laborDesc: "Enter monthly salary and estimate how long each unit takes",
    monthlySalary: "Monthly Salary", monthlySalaryPh: "350.000",
    workDays: "Work Days/Mo", hrsDay: "Hrs/Day",
    minsPerUnit: "Minutes Per Unit", minsPerUnitPh: "e.g. 30",
    overhead: "Overhead & Fixed Costs", overheadDesc: "Monthly expenses split across your production",
    monthlyAmt: "Monthly Cost", monthlyAmtPh: "e.g. 200.000",
    estUnits: "Est. Units You Make / Month", estUnitsPh: "e.g. 500",
    addOverhead: "Add Expense", ohName: "Expense Name", ohNamePh: "e.g. Rent",
    delivery: "Delivery", deliveryDesc: "Cost of getting products to customers",
    delPerUnit: "Delivery Cost Per Unit", delPerUnitPh: "e.g. 0.500",
    delMonthly: "Or: Total Monthly Delivery Cost", delMonthlyPh: "e.g. 150.000",
    pricing: "Your Selling Price", pricingDesc: "Enter what you charge to see your real profit",
    sellPrice: "Selling Price Per Unit", sellPricePh: "e.g. 3.500",
    costUnit: "Cost / Unit", batchCost: "Batch Cost", profitUnit: "Profit / Unit",
    profitMargin: "Profit Margin", loss: "LOSS", noPrice: "Enter selling price to see profit",
    guide: "Quick Guide",
    s1: "Name your product and how many units one batch makes (e.g. 12 pieces).",
    s2: "Add ingredients: what you paid, how much you bought, and how much final product it makes.",
    s3: "Add packaging: total quantity bought + total price. We figure out the cost per item.",
    s4: "Add labor: monthly salary + estimated minutes each unit takes.",
    s5: "Add overhead (rent, electricity, gas) and estimate your monthly production.",
    s6: "Enter your selling price and instantly see your real profit per unit!",
    tip: "Don't have exact numbers? Estimate! Even rough numbers are better than guessing.",
    footer: "Made for home bakers & food entrepreneurs",
    breakdown: "Cost Breakdown", lang: "العربية",
    perItem: "per item", perHr: "per hr", or: "or",
    lIng: "Ingredients", lPkg: "Packaging", lLab: "Labor", lOh: "Overhead", lDel: "Delivery",
    visitSite: "Visit haseeb.app",
    downloadPdf: "Download Report (PDF)",
    pdfTitle: "Haseeb — Cost Report",
    pdfGenerated: "Generated on",
    pdfBatch: "Batch size",
    pdfNone: "Not entered",
    downloading: "Generating...",
  },
  ar: {
    appName: "حسيب", subtitle: "حاسبة التكاليف", tagline: "حوّل شغلك البيتي لبزنس محترف",
    dashboard: "لوحة التحكم", products: "منتجات", addProduct: "أضف منتج ثاني",
    newProduct: "منتج يديد", productInfo: "معلومات المنتج", productName: "اسم المنتج",
    productNamePh: "مثال: كيكة شوكولاتة", batchMakes: "الدفعة تسوي", unit: "الوحدة",
    ingredients: "المكونات", ingredientsDesc: "دخّل شنو تشتري وجم يطلع من المنتج النهائي",
    ingredientName: "اسم المكوّن", ingredientNamePh: "مثال: شوكولاتة",
    cost: "سعر الشراء", amount: "الكمية المشتراة", makes: "يسوي (منتج نهائي)",
    addIngredient: "أضف مكوّن",
    packaging: "التغليف", packagingDesc: "دخّل الكمية اللي شريتها والسعر الكلي — نحسبلك تكلفة الوحدة",
    packagingItem: "اسم الغرض", packagingItemPh: "مثال: علبة كيك",
    totalQty: "الكمية الكلية", totalCost: "السعر الكلي", usedPerUnit: "تستخدم لكل منتج",
    addPackaging: "أضف غرض تغليف",
    labor: "العمالة", laborDesc: "دخّل الراتب الشهري وجم دقيقة ياخذ كل منتج",
    monthlySalary: "الراتب الشهري", monthlySalaryPh: "350.000",
    workDays: "أيام العمل/شهر", hrsDay: "ساعات/يوم",
    minsPerUnit: "دقائق لكل وحدة", minsPerUnitPh: "مثال: 30",
    overhead: "مصاريف ثابتة", overheadDesc: "مصاريف شهرية توزع على إنتاجك",
    monthlyAmt: "المبلغ الشهري", monthlyAmtPh: "مثال: 200.000",
    estUnits: "تقريباً جم وحدة تنتج / شهر", estUnitsPh: "مثال: 500",
    addOverhead: "أضف مصروف", ohName: "اسم المصروف", ohNamePh: "مثال: إيجار",
    delivery: "التوصيل", deliveryDesc: "تكلفة توصيل منتجاتك للزبون",
    delPerUnit: "تكلفة التوصيل لكل وحدة", delPerUnitPh: "مثال: 0.500",
    delMonthly: "أو: مجموع التوصيل الشهري", delMonthlyPh: "مثال: 150.000",
    pricing: "سعر البيع", pricingDesc: "دخّل سعر بيعك عشان تشوف ربحك الحقيقي",
    sellPrice: "سعر البيع لكل وحدة", sellPricePh: "مثال: 3.500",
    costUnit: "التكلفة / وحدة", batchCost: "تكلفة الدفعة", profitUnit: "الربح / وحدة",
    profitMargin: "نسبة الربح", loss: "خسارة", noPrice: "دخّل سعر البيع عشان تشوف الربح",
    guide: "دليل سريع",
    s1: "سمّ منتجك وقول جم وحدة تطلع من الدفعة (مثال: 12 حبة).",
    s2: "أضف كل مكوّن: جم دفعت، جم شريت، وجم يطلع منه منتج نهائي.",
    s3: "أضف التغليف: الكمية اللي شريتها والسعر الكلي. نحسبلك تكلفة الحبة.",
    s4: "أضف العمالة: الراتب الشهري وجم دقيقة ياخذ المنتج الواحد.",
    s5: "أضف المصاريف الثابتة (إيجار، كهرباء، غاز) وقدّر إنتاجك الشهري.",
    s6: "دخّل سعر بيعك وشوف ربحك الحقيقي لكل وحدة فوراً!",
    tip: "ما عندك أرقام دقيقة؟ قدّر! حتى الأرقام التقريبية أحسن من التخمين.",
    footer: "صُنع لخبازين البيت ورواد الأعمال الغذائية",
    breakdown: "تفصيل التكاليف", lang: "English",
    perItem: "للحبة", perHr: "بالساعة", or: "أو",
    lIng: "المكونات", lPkg: "التغليف", lLab: "العمالة", lOh: "المصاريف", lDel: "التوصيل",
    visitSite: "زور haseeb.app",
    downloadPdf: "حمّل التقرير (PDF)",
    pdfTitle: "حسيب — تقرير التكاليف",
    pdfGenerated: "تم إنشاؤه في",
    pdfBatch: "حجم الدفعة",
    pdfNone: "ما تم إدخاله",
    downloading: "جاري التحميل...",
  },
};

const UNITS = {
  en: ["kg","g","L","mL","pieces","bags","boxes","cups","tbsp","tsp","dozen"],
  ar: ["كيلو","غرام","لتر","مل","حبة","كيس","علبة","كوب","م.ك","م.ص","درزن"],
};
const PUNITS = {
  en: ["pieces","kg","g","boxes","dozen","batches","trays","L"],
  ar: ["حبة","كيلو","غرام","علبة","درزن","دفعة","صينية","لتر"],
};
const CANON = {};
UNITS.en.forEach((u,i)=>{ CANON[u]=u; CANON[UNITS.ar[i]]=u; });
PUNITS.en.forEach((u,i)=>{ CANON[u]=u; CANON[PUNITS.ar[i]]=u; });

const CUR = { en: "KD", ar: "د.ك" };
const gid = () => Math.random().toString(36).substr(2, 9);
const mkIng = () => ({ id:gid(), name:"", purchaseCost:"", purchaseAmount:"", purchaseUnit:"kg", yieldsAmount:"", yieldsUnit:"kg" });
const mkPkg = () => ({ id:gid(), name:"", totalQty:"", totalCost:"", usedPerUnit:"1" });
const mkOh = () => ({ id:gid(), name:"", monthlyAmount:"" });
const mkProd = () => ({
  id:gid(), name:"", productUnit:"pieces", batchYield:"",
  ingredients:[mkIng()], packaging:[mkPkg()],
  monthlySalary:"", workDays:"26", hrsDay:"8", minsPerUnit:"",
  overheads:[mkOh()], estUnits:"",
  delPerUnit:"", delMonthly:"",
  sellPrice:"", isExpanded:true,
});

const toBase = (n, unit) => {
  const v = parseFloat(n); if(isNaN(v)) return 0;
  const c = CANON[unit]||unit;
  if(c==="kg") return v*1000; if(c==="g") return v;
  if(c==="L") return v*1000; if(c==="mL") return v;
  return v;
};
const canConv = (a,b) => {
  const ca=CANON[a]||a, cb=CANON[b]||b;
  const m=["kg","g"], vo=["L","mL"];
  return (m.includes(ca)&&m.includes(cb))||(vo.includes(ca)&&vo.includes(cb))||ca===cb;
};

const doCalc = (p) => {
  const batch = parseFloat(p.batchYield)||0;
  const eu = parseFloat(p.estUnits)||0;
  const Z = { ingredientCost:0, packagingCost:0, laborCost:0, overheadCost:0, deliveryCost:0, totalCost:0, costPerUnit:0, profit:0, margin:0, valid:false };
  if(!batch) return Z;

  let ic=0;
  p.ingredients.forEach(ing => {
    const cost=parseFloat(ing.purchaseCost)||0, amt=parseFloat(ing.purchaseAmount)||0, yld=parseFloat(ing.yieldsAmount)||0;
    if(!cost||!amt||!yld) return;
    if(canConv(ing.yieldsUnit, p.productUnit)){
      const yb=toBase(yld,ing.yieldsUnit), bb=toBase(batch,p.productUnit);
      if(yb>0) ic += (bb/yb)*cost;
    } else { if(yld>0) ic += (batch/yld)*cost; }
  });

  let pc=0;
  p.packaging.forEach(pkg => {
    const q=parseFloat(pkg.totalQty)||0, c=parseFloat(pkg.totalCost)||0, u=parseFloat(pkg.usedPerUnit)||0;
    if(q>0&&c>0) pc += (c/q)*u*batch;
  });

  let lc=0;
  const sal=parseFloat(p.monthlySalary)||0, wd=parseFloat(p.workDays)||26, hd=parseFloat(p.hrsDay)||8, mpu=parseFloat(p.minsPerUnit)||0;
  if(sal>0&&mpu>0&&wd>0&&hd>0){ lc = (sal/(wd*hd))*(mpu/60)*batch; }

  let oc=0;
  if(eu>0){ p.overheads.forEach(oh=>{ const m=parseFloat(oh.monthlyAmount)||0; if(m>0) oc+=(m/eu)*batch; }); }

  let dc=0;
  const dpu=parseFloat(p.delPerUnit)||0, dmo=parseFloat(p.delMonthly)||0;
  if(dpu>0) dc=dpu*batch; else if(dmo>0&&eu>0) dc=(dmo/eu)*batch;

  const tot=ic+pc+lc+oc+dc, cpu=tot/batch;
  const sp=parseFloat(p.sellPrice)||0, prof=sp>0?sp-cpu:0, marg=sp>0?(prof/sp)*100:0;
  return { ingredientCost:ic, packagingCost:pc, laborCost:lc, overheadCost:oc, deliveryCost:dc, totalCost:tot, costPerUnit:cpu, profit:prof, margin:marg, valid:tot>0 };
};

const fmt = n => !isFinite(n)?"—":n.toFixed(3);
const fmtP = n => !isFinite(n)?"—":n.toFixed(1)+"%";

/* ── Icons ── */
const Plus = ()=><svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>;
const Trash = ()=><svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m2 0v14a2 2 0 01-2 2H8a2 2 0 01-2-2V6h12z"/></svg>;
const Chev = ({open})=><svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" style={{transition:"transform 0.2s",transform:open?"rotate(180deg)":"rotate(0)"}}><path d="M6 9l6 6 6-6"/></svg>;
const ExtLink = ()=><svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>;
const DownloadIcon = ()=><svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>;

/* ── PDF Generation ── */
const generatePDF = async (products, lang) => {
  const t = T[lang];
  const cur = CUR[lang];
  const isRtl = lang === "ar";

  // Dynamically load jsPDF
  const script = document.createElement("script");
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.2/jspdf.umd.min.js";
  document.head.appendChild(script);
  await new Promise((res, rej) => { script.onload = res; script.onerror = rej; });

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const W = 210, H = 297, M = 18;
  const pw = W - M * 2;
  let y = M;

  const addPage = () => { doc.addPage(); y = M; };
  const checkPage = (need) => { if (y + need > H - M) addPage(); };

  const drawLine = (y1, color = "#e0e0e0") => { doc.setDrawColor(color); doc.setLineWidth(0.3); doc.line(M, y1, W - M, y1); };

  const text = (str, x, yy, opts = {}) => {
    doc.setFont("helvetica", opts.bold ? "bold" : "normal");
    doc.setFontSize(opts.size || 10);
    doc.setTextColor(opts.color || "#0a0a0a");
    const align = opts.align || "left";
    doc.text(String(str), x, yy, { align });
  };

  const tableRow = (label, value, yy, opts = {}) => {
    text(label, M, yy, { size: 9, color: "#525252" });
    text(String(value), W - M, yy, { size: 9, bold: true, align: "right", ...opts });
  };

  // ─── HEADER ───
  doc.setFillColor("#0a0a0a");
  doc.rect(0, 0, W, 38, "F");
  text("Haseeb", M, 16, { size: 22, bold: true, color: "#ffffff" });
  text(t.subtitle, M, 24, { size: 11, color: "#a3a3a3" });
  text(t.tagline, M, 31, { size: 9, color: "#737373" });
  text("www.haseeb.app", W - M, 16, { size: 9, color: "#a3a3a3", align: "right" });
  const now = new Date();
  text(`${t.pdfGenerated}: ${now.toLocaleDateString(lang === "ar" ? "ar-KW" : "en-US")}`, W - M, 24, { size: 8, color: "#737373", align: "right" });
  y = 48;

  // ─── PRODUCTS ───
  products.forEach((p, pIdx) => {
    const c = doCalc(p);
    const name = p.name || t.newProduct;

    checkPage(60);

    // Product header
    doc.setFillColor("#f5f5f5");
    doc.roundedRect(M, y, pw, 12, 2, 2, "F");
    text(`${pIdx + 1}. ${name}`, M + 4, y + 8, { size: 12, bold: true });
    if (p.batchYield) text(`${t.pdfBatch}: ${p.batchYield} ${p.productUnit}`, W - M - 4, y + 8, { size: 9, color: "#525252", align: "right" });
    y += 18;

    // ── Results Summary ──
    if (c.valid) {
      doc.setFillColor("#0a0a0a");
      doc.roundedRect(M, y, pw, 30, 3, 3, "F");
      text(t.costUnit, M + 6, y + 8, { size: 8, color: "#a3a3a3" });
      text(`${cur} ${fmt(c.costPerUnit)}`, M + 6, y + 16, { size: 14, bold: true, color: "#ffffff" });
      const sp = parseFloat(p.sellPrice) || 0;
      if (sp > 0) {
        const isLoss = c.profit < 0;
        text(t.profitUnit, M + pw / 2 + 6, y + 8, { size: 8, color: "#a3a3a3" });
        text(`${isLoss ? "- " : ""}${cur} ${fmt(Math.abs(c.profit))}`, M + pw / 2 + 6, y + 16, { size: 14, bold: true, color: isLoss ? "#f87171" : "#4ade80" });
        text(`${t.profitMargin}: ${isLoss ? t.loss + " " : ""}${fmtP(Math.abs(c.margin))}`, M + 6, y + 25, { size: 8, color: "#a3a3a3" });
      }
      text(`${t.batchCost}: ${cur} ${fmt(c.totalCost)}`, W - M - 6, y + 25, { size: 8, color: "#a3a3a3", align: "right" });
      y += 36;

      // Cost breakdown
      checkPage(20);
      text(t.breakdown, M, y + 4, { size: 9, bold: true, color: "#525252" });
      y += 8;
      const segs = [
        { l: t.lIng, v: c.ingredientCost }, { l: t.lPkg, v: c.packagingCost },
        { l: t.lLab, v: c.laborCost }, { l: t.lOh, v: c.overheadCost }, { l: t.lDel, v: c.deliveryCost },
      ].filter(s => s.v > 0);
      const barY = y;
      const barH = 4;
      let barX = M;
      const grays = ["#0a0a0a", "#404040", "#737373", "#a3a3a3", "#d4d4d4"];
      segs.forEach((s, si) => {
        const w = (s.v / c.totalCost) * pw;
        doc.setFillColor(grays[si] || "#a3a3a3");
        if (si === 0) doc.roundedRect(barX, barY, w, barH, 1, 1, "F");
        else if (si === segs.length - 1) doc.roundedRect(barX, barY, w, barH, 1, 1, "F");
        else doc.rect(barX, barY, w, barH, "F");
        barX += w;
      });
      y += 8;
      segs.forEach(s => {
        checkPage(6);
        tableRow(`${s.l}`, `${cur} ${fmt(s.v)} (${((s.v / c.totalCost) * 100).toFixed(0)}%)`, y);
        y += 5;
      });
      y += 4;
    }

    // ── Ingredients Detail ──
    const ings = p.ingredients.filter(i => i.name || i.purchaseCost);
    if (ings.length) {
      checkPage(14 + ings.length * 6);
      drawLine(y); y += 4;
      text(t.ingredients, M, y + 4, { size: 9, bold: true }); y += 9;
      ings.forEach(ing => {
        const line = `${ing.name || "—"}: ${cur} ${ing.purchaseCost || "0"} for ${ing.purchaseAmount || "?"} ${ing.purchaseUnit} → makes ${ing.yieldsAmount || "?"} ${ing.yieldsUnit}`;
        text(line, M + 2, y, { size: 8, color: "#525252" });
        y += 5;
      });
      y += 2;
    }

    // ── Packaging Detail ──
    const pkgs = p.packaging.filter(pk => pk.name || pk.totalCost);
    if (pkgs.length) {
      checkPage(14 + pkgs.length * 6);
      drawLine(y); y += 4;
      text(t.packaging, M, y + 4, { size: 9, bold: true }); y += 9;
      pkgs.forEach(pkg => {
        const qty = parseFloat(pkg.totalQty) || 0;
        const cost = parseFloat(pkg.totalCost) || 0;
        const each = qty > 0 && cost > 0 ? ` (${fmt(cost / qty)} ${cur} each)` : "";
        const line = `${pkg.name || "—"}: ${pkg.totalQty || "?"} qty for ${cur} ${pkg.totalCost || "0"}${each}, ${pkg.usedPerUnit} per product`;
        text(line, M + 2, y, { size: 8, color: "#525252" });
        y += 5;
      });
      y += 2;
    }

    // ── Labor Detail ──
    if (parseFloat(p.monthlySalary) > 0) {
      checkPage(18);
      drawLine(y); y += 4;
      text(t.labor, M, y + 4, { size: 9, bold: true }); y += 9;
      tableRow(t.monthlySalary, `${cur} ${p.monthlySalary}`, y); y += 5;
      tableRow(t.minsPerUnit, p.minsPerUnit || t.pdfNone, y); y += 5;
      const wd = parseFloat(p.workDays) || 26, hd = parseFloat(p.hrsDay) || 8;
      if (wd > 0 && hd > 0) { tableRow(t.perHr, `${cur} ${fmt(parseFloat(p.monthlySalary) / (wd * hd))}`, y); y += 5; }
      y += 2;
    }

    // ── Overhead Detail ──
    const ohs = p.overheads.filter(o => o.name || o.monthlyAmount);
    if (ohs.length) {
      checkPage(14 + ohs.length * 6);
      drawLine(y); y += 4;
      text(t.overhead, M, y + 4, { size: 9, bold: true }); y += 9;
      ohs.forEach(oh => {
        tableRow(oh.name || "—", `${cur} ${oh.monthlyAmount || "0"} /mo`, y); y += 5;
      });
      if (p.estUnits) { tableRow(t.estUnits, p.estUnits, y); y += 5; }
      y += 2;
    }

    // ── Delivery Detail ──
    if (parseFloat(p.delPerUnit) > 0 || parseFloat(p.delMonthly) > 0) {
      checkPage(14);
      drawLine(y); y += 4;
      text(t.delivery, M, y + 4, { size: 9, bold: true }); y += 9;
      if (parseFloat(p.delPerUnit) > 0) { tableRow(t.delPerUnit, `${cur} ${p.delPerUnit}`, y); y += 5; }
      if (parseFloat(p.delMonthly) > 0) { tableRow(t.delMonthly, `${cur} ${p.delMonthly}`, y); y += 5; }
      y += 2;
    }

    // ── Selling Price ──
    if (parseFloat(p.sellPrice) > 0) {
      checkPage(10);
      drawLine(y); y += 4;
      tableRow(t.sellPrice, `${cur} ${p.sellPrice}`, y, { color: "#0a0a0a" }); y += 6;
    }

    y += 10;
  });

  // ─── FOOTER ───
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8); doc.setTextColor("#a3a3a3");
    doc.text("www.haseeb.app", W / 2, H - 10, { align: "center" });
    doc.text(`${i} / ${pageCount}`, W - M, H - 10, { align: "right" });
  }

  doc.save("haseeb-cost-report.pdf");
};

/* ── Theme colors ── */
const C = {
  bg: "#fafafa",
  card: "#ffffff",
  cardBorder: "#e5e5e5",
  cardHover: "#f5f5f5",
  inputBg: "#f5f5f5",
  inputBorder: "#e0e0e0",
  accent: "#000000",
  accentSoft: "#333333",
  accentMuted: "#666666",
  textPrimary: "#0a0a0a",
  textSecondary: "#525252",
  textTertiary: "#a3a3a3",
  green: "#16a34a",
  greenBg: "#f0fdf4",
  red: "#dc2626",
  redBg: "#fef2f2",
  summaryBg: "#0a0a0a",
  summaryText: "#ffffff",
  tagBg: "#f0f0f0",
};

/* ── Base UI ── */
const Inp = ({label,value,onChange,placeholder,type="text",prefix,suffix,small,style:s})=>(
  <div style={{display:"flex",flexDirection:"column",gap:4,flex:small?"0 0 auto":1,minWidth:small?80:0,...s}}>
    {label&&<label style={{fontSize:11,fontWeight:600,color:C.textSecondary,letterSpacing:0.3}}>{label}</label>}
    <div style={{display:"flex",alignItems:"center",background:C.inputBg,borderRadius:10,border:`1.5px solid ${C.inputBorder}`,padding:"10px 12px",gap:6,transition:"border-color 0.15s"}}>
      {prefix&&<span style={{color:C.accentMuted,fontWeight:600,fontSize:13,whiteSpace:"nowrap"}}>{prefix}</span>}
      <input type={type} inputMode={type==="number"?"decimal":undefined} value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} dir="auto"
        style={{border:"none",outline:"none",background:"transparent",fontSize:15,fontWeight:500,color:C.textPrimary,width:"100%",fontFamily:"inherit",textAlign:"inherit"}}/>
      {suffix&&<span style={{color:C.accentMuted,fontSize:12,fontWeight:600,whiteSpace:"nowrap"}}>{suffix}</span>}
    </div>
  </div>
);

const Sel = ({label,value,onChange,options,small})=>(
  <div style={{display:"flex",flexDirection:"column",gap:4,flex:small?"0 0 auto":1,minWidth:small?75:0}}>
    {label&&<label style={{fontSize:11,fontWeight:600,color:C.textSecondary,letterSpacing:0.3}}>{label}</label>}
    <div style={{background:C.inputBg,borderRadius:10,border:`1.5px solid ${C.inputBorder}`,padding:"10px 8px"}}>
      <select value={value} onChange={e=>onChange(e.target.value)} style={{border:"none",outline:"none",background:"transparent",fontSize:14,fontWeight:500,color:C.textPrimary,width:"100%",fontFamily:"inherit",cursor:"pointer"}}>
        {options.map(o=><option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  </div>
);

const Btn = ({children,onClick,variant="primary",style:s})=>{
  const v={
    primary:{background:C.accent,color:"#fff",border:"none"},
    ghost:{background:"transparent",color:C.accent,border:"none"},
  };
  return <button onClick={onClick} style={{...v[variant],borderRadius:10,padding:"10px 16px",fontSize:13,fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:6,fontFamily:"inherit",...s}}>{children}</button>;
};
const XBtn = ({onClick})=><button onClick={onClick} style={{background:"none",border:"none",color:"#ccc",cursor:"pointer",padding:6,marginTop:18,flexShrink:0}}><Trash/></button>;
const Hint = ({children})=><div style={{fontSize:12,color:C.accentMuted,fontWeight:600,padding:"2px 4px"}}>{children}</div>;
const Sec = ({title,desc,children})=>(
  <div><div style={{fontSize:13,fontWeight:700,color:C.textPrimary,marginBottom:desc?4:12,textTransform:"uppercase",letterSpacing:0.5}}>{title}</div>
    {desc&&<div style={{fontSize:12,color:C.textTertiary,marginBottom:12,lineHeight:1.5}}>{desc}</div>}{children}</div>
);

/* ── Summary Card (black) ── */
const Summary = ({p,c,t,cur})=>{
  const sp=parseFloat(p.sellPrice)||0; const isLoss=c.profit<0;
  return(
    <div style={{background:C.summaryBg,borderRadius:18,padding:"24px 24px 20px",color:C.summaryText,display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px 24px"}}>
      <div>
        <div style={{fontSize:11,fontWeight:600,opacity:0.5,textTransform:"uppercase",letterSpacing:0.8,marginBottom:6}}>{t.costUnit}</div>
        <div style={{fontSize:13,opacity:0.4}}>{cur}</div>
        <div style={{fontSize:34,fontWeight:700,letterSpacing:-1,lineHeight:1.1}}>{fmt(c.costPerUnit)}</div>
      </div>
      <div>
        <div style={{fontSize:11,fontWeight:600,opacity:0.5,textTransform:"uppercase",letterSpacing:0.8,marginBottom:6}}>{t.profitUnit}</div>
        {sp>0?(<><div style={{fontSize:13,opacity:0.4}}>{cur}</div>
          <div style={{fontSize:34,fontWeight:700,letterSpacing:-1,lineHeight:1.1,color:isLoss?"#f87171":"#4ade80"}}>{isLoss?"- ":""}{fmt(Math.abs(c.profit))}</div>
        </>):<div style={{fontSize:14,opacity:0.35,marginTop:10,lineHeight:1.4}}>{t.noPrice}</div>}
      </div>
      <div style={{display:"flex",alignItems:"center",gap:8}}>
        <span style={{fontSize:12,opacity:0.5}}>{"📦"} {t.batchCost}</span>
        <span style={{fontWeight:700,fontSize:14}}>{cur} {fmt(c.totalCost)}</span>
      </div>
      <div style={{display:"flex",alignItems:"center",gap:8}}>
        {sp>0?(<><span style={{fontSize:12,opacity:0.5}}>{"📊"} {t.profitMargin}</span>
          <span style={{fontWeight:700,fontSize:14,color:isLoss?"#f87171":"#4ade80"}}>{isLoss?t.loss+" ":""}{fmtP(Math.abs(c.margin))}</span>
        </>):<span style={{fontSize:12,opacity:0.3}}>{"💰"} {t.pricingDesc}</span>}
      </div>
    </div>
  );
};

/* ── Cost Breakdown ── */
const BDBar = ({c,t})=>{
  const tot=c.totalCost||1;
  const segs=[
    {l:t.lIng,v:c.ingredientCost,bg:"#0a0a0a"},{l:t.lPkg,v:c.packagingCost,bg:"#404040"},
    {l:t.lLab,v:c.laborCost,bg:"#737373"},{l:t.lOh,v:c.overheadCost,bg:"#a3a3a3"},
    {l:t.lDel,v:c.deliveryCost,bg:"#d4d4d4"},
  ].filter(s=>s.v>0);
  if(!segs.length) return null;
  return(
    <div>
      <div style={{fontSize:11,fontWeight:600,color:C.textSecondary,textTransform:"uppercase",letterSpacing:0.5,marginBottom:8}}>{t.breakdown}</div>
      <div style={{display:"flex",borderRadius:6,overflow:"hidden",height:8}}>
        {segs.map(s=><div key={s.l} style={{width:`${(s.v/tot)*100}%`,background:s.bg,minWidth:3}}/>)}
      </div>
      <div style={{display:"flex",flexWrap:"wrap",gap:"6px 16px",marginTop:8}}>
        {segs.map(s=>(
          <div key={s.l} style={{display:"flex",alignItems:"center",gap:6,fontSize:12,color:C.textSecondary}}>
            <div style={{width:8,height:8,borderRadius:2,background:s.bg,flexShrink:0}}/>{s.l}: {fmt(s.v)} ({((s.v/tot)*100).toFixed(0)}%)
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── Product Card ── */
const ProductCard = ({product:p, onUpdate, onRemove, canRemove, lang}) => {
  const t=T[lang], cur=CUR[lang], units=UNITS[lang], pu=PUNITS[lang];
  const c = useMemo(()=>doCalc(p),[p]);
  const u = ch => onUpdate({...p,...ch});
  const uI = (i,v) => { const n=[...p.ingredients]; n[i]=v; u({ingredients:n}); };
  const uP = (i,v) => { const n=[...p.packaging]; n[i]=v; u({packaging:n}); };
  const uO = (i,v) => { const n=[...p.overheads]; n[i]=v; u({overheads:n}); };

  const card = (children, key) => (
    <div key={key} style={{background:C.inputBg,borderRadius:12,padding:16,border:`1px solid ${C.inputBorder}`,display:"flex",flexDirection:"column",gap:10}}>
      {children}
    </div>
  );

  return(
    <div style={{background:C.card,borderRadius:20,border:`1.5px solid ${C.cardBorder}`,overflow:"hidden",boxShadow:"0 1px 8px rgba(0,0,0,0.04)"}}>
      <div onClick={()=>u({isExpanded:!p.isExpanded})} style={{padding:"18px 20px",display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer",background:p.isExpanded?C.cardHover:C.card,borderBottom:p.isExpanded?`1.5px solid ${C.cardBorder}`:"none"}}>
        <div style={{flex:1,minWidth:0}}>
          <div style={{fontSize:18,fontWeight:700,color:C.textPrimary,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{p.name||t.newProduct}</div>
          {!p.isExpanded&&c.valid&&(
            <div style={{fontSize:13,color:C.accentMuted,fontWeight:600,marginTop:2}}>
              {t.costUnit}: {cur} {fmt(c.costPerUnit)}
              {parseFloat(p.sellPrice)>0&&(<span style={{color:c.profit<0?C.red:C.green}}> {" → "} {c.profit<0?t.loss:t.profitUnit}: {cur} {fmt(Math.abs(c.profit))}</span>)}
            </div>
          )}
        </div>
        <div style={{display:"flex",alignItems:"center",gap:8,flexShrink:0}}>
          {canRemove&&<button onClick={e=>{e.stopPropagation();onRemove();}} style={{background:"none",border:"none",color:"#ccc",cursor:"pointer",padding:4}}><Trash/></button>}
          <Chev open={p.isExpanded}/>
        </div>
      </div>

      {p.isExpanded&&(
        <div style={{padding:20,display:"flex",flexDirection:"column",gap:24}}>
          {c.valid&&<Summary p={p} c={c} t={t} cur={cur}/>}
          {c.valid&&<BDBar c={c} t={t}/>}

          <Sec title={t.productInfo}>
            <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
              <Inp label={t.productName} value={p.name} onChange={v=>u({name:v})} placeholder={t.productNamePh}/>
            </div>
            <div style={{display:"flex",gap:8,flexWrap:"wrap",marginTop:10}}>
              <Inp label={t.batchMakes} value={p.batchYield} onChange={v=>u({batchYield:v})} placeholder="12" type="number" small/>
              <Sel label={t.unit} value={p.productUnit} onChange={v=>u({productUnit:v})} options={pu} small/>
            </div>
          </Sec>

          <Sec title={t.ingredients} desc={t.ingredientsDesc}>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {p.ingredients.map((ing,i)=>card(<>
                <div style={{display:"flex",alignItems:"flex-start"}}>
                  <Inp label={t.ingredientName} value={ing.name} onChange={v=>uI(i,{...ing,name:v})} placeholder={t.ingredientNamePh} style={{flex:1,marginInlineEnd:8}}/>
                  {p.ingredients.length>1&&<XBtn onClick={()=>u({ingredients:p.ingredients.filter((_,j)=>j!==i)})}/>}
                </div>
                <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                  <Inp label={t.cost} value={ing.purchaseCost} onChange={v=>uI(i,{...ing,purchaseCost:v})} placeholder="5.250" prefix={cur} type="number" small/>
                  <Inp label={t.amount} value={ing.purchaseAmount} onChange={v=>uI(i,{...ing,purchaseAmount:v})} placeholder="1" type="number" small/>
                  <Sel label={t.unit} value={ing.purchaseUnit} onChange={v=>uI(i,{...ing,purchaseUnit:v})} options={units} small/>
                </div>
                <div style={{display:"flex",gap:8}}>
                  <Inp label={t.makes} value={ing.yieldsAmount} onChange={v=>uI(i,{...ing,yieldsAmount:v})} placeholder="2" type="number"/>
                  <Sel label={t.unit} value={ing.yieldsUnit} onChange={v=>uI(i,{...ing,yieldsUnit:v})} options={pu}/>
                </div>
              </>,ing.id))}
            </div>
            <Btn variant="ghost" onClick={()=>u({ingredients:[...p.ingredients,mkIng()]})} style={{marginTop:8}}><Plus/> {t.addIngredient}</Btn>
          </Sec>

          <Sec title={t.packaging} desc={t.packagingDesc}>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {p.packaging.map((pkg,i)=>card(<>
                <div style={{display:"flex",alignItems:"flex-start"}}>
                  <Inp label={t.packagingItem} value={pkg.name} onChange={v=>uP(i,{...pkg,name:v})} placeholder={t.packagingItemPh} style={{flex:1,marginInlineEnd:8}}/>
                  {p.packaging.length>1&&<XBtn onClick={()=>u({packaging:p.packaging.filter((_,j)=>j!==i)})}/>}
                </div>
                <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                  <Inp label={t.totalQty} value={pkg.totalQty} onChange={v=>uP(i,{...pkg,totalQty:v})} placeholder="100" type="number" small/>
                  <Inp label={t.totalCost} value={pkg.totalCost} onChange={v=>uP(i,{...pkg,totalCost:v})} placeholder="5.000" prefix={cur} type="number" small/>
                  <Inp label={t.usedPerUnit} value={pkg.usedPerUnit} onChange={v=>uP(i,{...pkg,usedPerUnit:v})} placeholder="1" type="number" small/>
                </div>
                {(parseFloat(pkg.totalQty)>0&&parseFloat(pkg.totalCost)>0)&&<Hint>= {fmt(parseFloat(pkg.totalCost)/parseFloat(pkg.totalQty))} {cur} {t.perItem}</Hint>}
              </>,pkg.id))}
            </div>
            <Btn variant="ghost" onClick={()=>u({packaging:[...p.packaging,mkPkg()]})} style={{marginTop:8}}><Plus/> {t.addPackaging}</Btn>
          </Sec>

          <Sec title={t.labor} desc={t.laborDesc}>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                <Inp label={t.monthlySalary} value={p.monthlySalary} onChange={v=>u({monthlySalary:v})} placeholder={t.monthlySalaryPh} prefix={cur} type="number"/>
                <Inp label={t.minsPerUnit} value={p.minsPerUnit} onChange={v=>u({minsPerUnit:v})} placeholder={t.minsPerUnitPh} type="number" small/>
              </div>
              <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                <Inp label={t.workDays} value={p.workDays} onChange={v=>u({workDays:v})} placeholder="26" type="number" small/>
                <Inp label={t.hrsDay} value={p.hrsDay} onChange={v=>u({hrsDay:v})} placeholder="8" type="number" small/>
              </div>
              {(parseFloat(p.monthlySalary)>0&&parseFloat(p.workDays)>0&&parseFloat(p.hrsDay)>0)&&
                <Hint>= {fmt(parseFloat(p.monthlySalary)/(parseFloat(p.workDays)*parseFloat(p.hrsDay)))} {cur} {t.perHr}</Hint>}
            </div>
          </Sec>

          <Sec title={t.overhead} desc={t.overheadDesc}>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {p.overheads.map((oh,i)=>(
                <div key={oh.id} style={{display:"flex",gap:8,alignItems:"flex-end"}}>
                  <Inp label={t.ohName} value={oh.name} onChange={v=>uO(i,{...oh,name:v})} placeholder={t.ohNamePh}/>
                  <Inp label={t.monthlyAmt} value={oh.monthlyAmount} onChange={v=>uO(i,{...oh,monthlyAmount:v})} placeholder={t.monthlyAmtPh} prefix={cur} type="number" small/>
                  {p.overheads.length>1&&<button onClick={()=>u({overheads:p.overheads.filter((_,j)=>j!==i)})} style={{background:"none",border:"none",color:"#ccc",cursor:"pointer",padding:"10px 4px"}}><Trash/></button>}
                </div>
              ))}
              <Btn variant="ghost" onClick={()=>u({overheads:[...p.overheads,mkOh()]})} style={{marginTop:4}}><Plus/> {t.addOverhead}</Btn>
              <Inp label={t.estUnits} value={p.estUnits} onChange={v=>u({estUnits:v})} placeholder={t.estUnitsPh} type="number"/>
            </div>
          </Sec>

          <Sec title={t.delivery} desc={t.deliveryDesc}>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              <Inp label={t.delPerUnit} value={p.delPerUnit} onChange={v=>u({delPerUnit:v})} placeholder={t.delPerUnitPh} prefix={cur} type="number"/>
              <div style={{fontSize:12,color:C.textTertiary,textAlign:"center"}}>— {t.or} —</div>
              <Inp label={t.delMonthly} value={p.delMonthly} onChange={v=>u({delMonthly:v})} placeholder={t.delMonthlyPh} prefix={cur} type="number"/>
            </div>
          </Sec>

          <Sec title={t.pricing} desc={t.pricingDesc}>
            <Inp label={t.sellPrice} value={p.sellPrice} onChange={v=>u({sellPrice:v})} placeholder={t.sellPricePh} prefix={cur} type="number"/>
          </Sec>
        </div>
      )}
    </div>
  );
};

/* ── Dashboard ── */
const Dash = ({products,lang})=>{
  const t=T[lang], cur=CUR[lang];
  const valid = products.map(p=>({...doCalc(p),p})).filter(x=>x.valid);
  if(!valid.length) return null;
  return(
    <div style={{background:C.summaryBg,borderRadius:18,padding:24,color:C.summaryText}}>
      <div style={{fontSize:11,fontWeight:600,opacity:0.5,textTransform:"uppercase",letterSpacing:1,marginBottom:16}}>{t.dashboard} — {valid.length} {t.products}</div>
      <div style={{display:"flex",flexDirection:"column",gap:12}}>
        {valid.map(x=>{
          const sp=parseFloat(x.p.sellPrice)||0; const isL=x.profit<0;
          return(
            <div key={x.p.id} style={{display:"flex",justifyContent:"space-between",alignItems:"center",background:"rgba(255,255,255,0.08)",borderRadius:12,padding:"12px 16px"}}>
              <div>
                <div style={{fontWeight:700,fontSize:15}}>{x.p.name||t.newProduct}</div>
                <div style={{fontSize:12,opacity:0.5,marginTop:2}}>{t.costUnit}: {cur} {fmt(x.costPerUnit)}</div>
              </div>
              <div style={{textAlign:lang==="ar"?"left":"right"}}>
                {sp>0?(<>
                  <div style={{fontWeight:700,fontSize:16,color:isL?"#f87171":"#4ade80"}}>{isL?"-":"+"}{cur} {fmt(Math.abs(x.profit))}</div>
                  <div style={{fontSize:11,opacity:0.5}}>{t.profitUnit}</div>
                </>):<div style={{fontSize:12,opacity:0.4}}>{t.noPrice}</div>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ── Quick Guide ── */
const Guide = ({onClose,lang})=>{
  const t=T[lang]; const steps=[t.s1,t.s2,t.s3,t.s4,t.s5,t.s6];
  return(
    <div style={{background:"#fff",borderRadius:18,padding:24,border:`1.5px solid ${C.cardBorder}`}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
        <div style={{fontSize:16,fontWeight:700,color:C.textPrimary}}>{"📖"} {t.guide}</div>
        <button onClick={onClose} style={{background:"none",border:"none",fontSize:18,color:C.textTertiary,cursor:"pointer"}}>✕</button>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:14,fontSize:14,color:C.textSecondary,lineHeight:1.7}}>
        {steps.map((s,i)=><div key={i}><strong style={{color:C.accent}}>{i+1}.</strong> {s}</div>)}
        <div style={{background:C.inputBg,borderRadius:10,padding:14,border:`1px solid ${C.inputBorder}`,marginTop:4}}>
          <strong style={{color:C.accent}}>{"💡"}</strong> {t.tip}
        </div>
      </div>
    </div>
  );
};

/* ════════════════════════════════════════════
   MAIN APP
   ════════════════════════════════════════════ */
export default function App(){
  const [lang,setLang] = useState("en");
  const [products,setProducts] = useState([mkProd()]);
  const [showGuide,setShowGuide] = useState(true);
  const [downloading,setDownloading] = useState(false);
  const t=T[lang]; const isRtl=lang==="ar";

  const uProd = (i,p) => { const n=[...products]; n[i]=p; setProducts(n); };
  const rProd = i => setProducts(products.filter((_,j)=>j!==i));
  const aProd = () => setProducts([...products.map(p=>({...p,isExpanded:false})),mkProd()]);

  const handleDownload = async () => {
    setDownloading(true);
    try { await generatePDF(products, lang); } catch(e) { console.error(e); }
    setDownloading(false);
  };

  return(
    <div dir={isRtl?"rtl":"ltr"} style={{minHeight:"100vh",background:C.bg,fontFamily:isRtl?"'Segoe UI','Arial','Tahoma',sans-serif":"-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif"}}>
      <div style={{maxWidth:540,margin:"0 auto",padding:"0 16px 80px"}}>

        {/* Header */}
        <div style={{paddingTop:48,paddingBottom:20,display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
          <div>
            <div style={{fontSize:38,fontWeight:800,color:C.textPrimary,letterSpacing:isRtl?0:-1.5,lineHeight:1}}>{t.appName}</div>
            <div style={{fontSize:14,color:C.textSecondary,fontWeight:600,marginTop:6}}>{t.subtitle}</div>
            <div style={{fontSize:13,color:C.textTertiary,marginTop:2,lineHeight:1.4}}>{t.tagline}</div>
          </div>
          <button onClick={()=>setLang(lang==="en"?"ar":"en")} style={{marginTop:4,padding:"8px 16px",borderRadius:10,border:`1.5px solid ${C.cardBorder}`,background:"#fff",color:C.textPrimary,fontWeight:700,fontSize:14,cursor:"pointer",fontFamily:"inherit"}}>{t.lang}</button>
        </div>

        {products.length>1&&<div style={{marginBottom:16}}><Dash products={products} lang={lang}/></div>}

        <div style={{display:"flex",flexDirection:"column",gap:16}}>
          {products.map((p,i)=><ProductCard key={p.id} product={p} onUpdate={v=>uProd(i,v)} onRemove={()=>rProd(i)} canRemove={products.length>1} lang={lang}/>)}
        </div>

        <div style={{marginTop:16}}>
          <Btn onClick={aProd} style={{width:"100%",justifyContent:"center",padding:"16px 20px",borderRadius:14,fontSize:15}}><Plus/> {t.addProduct}</Btn>
        </div>

        <div style={{marginTop:10}}>
          <button onClick={handleDownload} disabled={downloading} style={{width:"100%",padding:"14px 20px",borderRadius:14,fontSize:14,fontWeight:600,cursor:downloading?"default":"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",justifyContent:"center",gap:8,background:"#fff",color:C.textPrimary,border:`1.5px solid ${C.cardBorder}`,opacity:downloading?0.6:1,transition:"all 0.15s"}}>
            <DownloadIcon/> {downloading ? t.downloading : t.downloadPdf}
          </button>
        </div>

        {showGuide&&<div style={{marginTop:20}}><Guide onClose={()=>setShowGuide(false)} lang={lang}/></div>}

        {/* Footer with link */}
        <div style={{textAlign:"center",marginTop:40,display:"flex",flexDirection:"column",alignItems:"center",gap:10}}>
          <a href="https://www.haseeb.app" target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:6,padding:"10px 20px",borderRadius:10,border:`1.5px solid ${C.cardBorder}`,background:"#fff",color:C.textPrimary,fontWeight:600,fontSize:14,textDecoration:"none",fontFamily:"inherit",transition:"background 0.15s"}}>
            <ExtLink/> {t.visitSite}
          </a>
          <div style={{fontSize:12,color:C.textTertiary}}>{t.footer}</div>
        </div>
      </div>
    </div>
  );
}
