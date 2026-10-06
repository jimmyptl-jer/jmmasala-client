import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import {
  RotateCw,
  ZoomIn,
  ZoomOut,
  Maximize2,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

// Asset imports
import pouchCumin from "@/assets/pouch-cumin-seeds.jpg";
import pouchChilli from "@/assets/pouch-red-chilli-teja.jpg";
import pouchTurmeric from "@/assets/pouch-turmeric-powder.jpg";
import pouchCoriander from "@/assets/pouch-coriander-powder.jpg";
import pouchBayLeaf from "@/assets/pouch-bay-leaf.jpg";
import pouchCardamom from "@/assets/pouch-black-cardamom.jpg";

export type ProductPouchConfig = {
  id: string;
  name: string;
  subName: string;
  botanical: string;
  weight: string;
  origin: string;
  image: string;
  tag: string;
  specs: {
    grade: string;
    shelfLife: string;
    form: string;
    features: string[];
  };
};

export const POUCH_PRODUCTS: ProductPouchConfig[] = [
  {
    id: "cumin-seeds",
    name: "Cumin Seeds",
    subName: "Jeera Whole",
    botanical: "Cuminum cyminum",
    weight: "500g",
    origin: "Unjha, Gujarat, India",
    image: pouchCumin,
    tag: "Flagship Mandi Origin",
    specs: {
      grade: "Singapore 99.5% / Europe Sortex 99.9%",
      shelfLife: "12 - 24 Months",
      form: "Machine Cleaned & Sortex Graded",
      features: ["Machine Cleaned", "Sortex Graded", "Whole Seed", "No Additives", "Natural Product"],
    },
  },
  {
    id: "red-chilli-teja",
    name: "Red Chilli",
    subName: "Teja Whole",
    botanical: "Capsicum annuum",
    weight: "500g",
    origin: "Guntur / Warangal, India",
    image: pouchChilli,
    tag: "High Pungency",
    specs: {
      grade: "70,000 – 100,000 SHU",
      shelfLife: "12 - 24 Months",
      form: "Whole Sun-Dried with Stem",
      features: ["Cleaned & Graded", "Rich Red Colour", "High Pungency", "No Additives", "Natural Product"],
    },
  },
  {
    id: "turmeric-powder",
    name: "Turmeric Powder",
    subName: "Haldi Powder",
    botanical: "Curcuma longa",
    weight: "500g",
    origin: "Salem / Nizamabad, India",
    image: pouchTurmeric,
    tag: "High Curcumin",
    specs: {
      grade: "Curcumin 3.0% – 5.0%+",
      shelfLife: "12 - 24 Months",
      form: "Ultra-Fine Cold Milled Powder",
      features: ["Machine Cleaned", "Sortex Cleaned", "Pure & Natural", "No Additives", "Non-GMO"],
    },
  },
  {
    id: "coriander-powder",
    name: "Coriander Powder",
    subName: "Dhania Powder",
    botanical: "Coriandrum sativum",
    weight: "500g",
    origin: "Unjha / Kota, India",
    image: pouchCoriander,
    tag: "Aromatic Pure Milled",
    specs: {
      grade: "100% Pure Milled Seed",
      shelfLife: "12 - 24 Months",
      form: "Fine Aromatic Greenish-Brown Powder",
      features: ["Machine Cleaned", "Sortex Cleaned", "Pure & Natural", "No Additives", "Non-GMO"],
    },
  },
  {
    id: "bay-leaf",
    name: "Bay Leaf",
    subName: "Tej Patta",
    botanical: "Cinnamomum tamala",
    weight: "500g",
    origin: "Northeast India (Himalayan)",
    image: pouchBayLeaf,
    tag: "Selected Whole Leaf",
    specs: {
      grade: "Premium Whole Selected Leaves",
      shelfLife: "12 - 24 Months",
      form: "Hand-Sorted Dried Leaves",
      features: ["Cleaned & Graded", "Natural Product", "Rich Aroma", "No Additives", "Non-GMO"],
    },
  },
  {
    id: "black-cardamom",
    name: "Black Cardamom",
    subName: "Badi Elaichi",
    botanical: "Amomum subulatum",
    weight: "500g",
    origin: "Sikkim / Northeast India",
    image: pouchCardamom,
    tag: "Bold Smoky Pods",
    specs: {
      grade: "Bold Extra Large Pods",
      shelfLife: "12 - 24 Months",
      form: "Whole Dried Smoke-Cured Pods",
      features: ["Cleaned & Graded", "Smoky Aroma", "Pure & Natural", "No Additives", "Export Grade"],
    },
  },
];

/**
 * Creates realistic stand-up pouch 3D geometry with:
 * - Top heat seal taper (thin at the top)
 * - Puffed belly (mid-lower swell)
 * - Oval bottom stand-up gusset
 * - Soft rounded edge bevels
 */
function createPouchGeometry(width = 1.8, height = 2.5, maxDepth = 0.52): THREE.BufferGeometry {
  const segmentsX = 40;
  const segmentsY = 50;
  const geometry = new THREE.BoxGeometry(width, height, maxDepth, segmentsX, segmentsY, 12);
  const position = geometry.attributes.position;

  for (let i = 0; i < position.count; i++) {
    const x = position.getX(i);
    const y = position.getY(i);
    const z = position.getZ(i);

    // Normalized height 0 at bottom, 1 at top
    const ny = (y + height / 2) / height;
    // Normalized x from center (-1 to 1)
    const nx = x / (width / 2);

    // Profile curve for depth taper:
    // Top seal (ny > 0.88): flat zipper strip
    // Middle-lower (ny 0.15 - 0.65): puffed full belly
    // Bottom (ny < 0.15): expands slightly into oval base
    let depthScale = 1.0;
    if (ny > 0.86) {
      // Top heat seal
      const topTaper = Math.max(0, (ny - 0.86) / 0.14);
      depthScale = 0.08 + (1 - topTaper) * 0.2;
    } else if (ny < 0.12) {
      // Bottom gusset
      depthScale = 0.75 + (1 - ny / 0.12) * 0.25;
    } else {
      // Belly bulge (sine curve peaking at 35% height)
      const belly = Math.sin((ny - 0.12) / (0.86 - 0.12) * Math.PI);
      depthScale = 0.45 + belly * 0.55;
    }

    // Side curvature (taper depth toward lateral edges)
    const edgeTaper = Math.cos(Math.min(Math.abs(nx), 1) * (Math.PI / 2.2));
    const newZ = z * depthScale * Math.max(0.18, edgeTaper);

    position.setZ(i, newZ);
  }

  geometry.computeVertexNormals();
  return geometry;
}

export const Product3DViewer: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductPouchConfig>(POUCH_PRODUCTS[0]);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [zoomLevel, setZoomLevel] = useState<number>(3.8);

  // Three.js mutable state refs
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const pouchMeshRef = useRef<THREE.Mesh | null>(null);
  const targetRotationYRef = useRef<number>(0);
  const currentRotationYRef = useRef<number>(0);
  const targetRotationXRef = useRef<number>(0);
  const currentRotationXRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);
  const previousPointerPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const autoRotateRef = useRef<boolean>(true);
  const animationFrameIdRef = useRef<number | null>(null);
  const textureCacheRef = useRef<Map<string, THREE.Texture>>(new Map());

  // Keep autoRotateRef in sync with state
  useEffect(() => {
    autoRotateRef.current = autoRotate;
  }, [autoRotate]);

  // Initialize Three.js scene once
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera setup
    const width = container.clientWidth;
    const height = container.clientHeight;
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, 3.8);
    cameraRef.current = camera;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // 4. Lighting setup for realistic satin food packaging
    const ambientLight = new THREE.AmbientLight(0xfff6ea, 1.25);
    scene.add(ambientLight);

    // Key studio light (front-right)
    const keyLight = new THREE.DirectionalLight(0xfff5e6, 2.2);
    keyLight.position.set(3, 4, 4.5);
    keyLight.castShadow = true;
    scene.add(keyLight);

    // Fill light (front-left soft)
    const fillLight = new THREE.DirectionalLight(0xe8f0ff, 1.1);
    fillLight.position.set(-3.5, 2, 3);
    scene.add(fillLight);

    // Back rim light (subtle highlights on edge)
    const rimLight = new THREE.DirectionalLight(0xffeed6, 1.4);
    rimLight.position.set(0, 3, -4);
    scene.add(rimLight);

    // Bottom bounce light
    const bounceLight = new THREE.DirectionalLight(0xfaf6ee, 0.6);
    bounceLight.position.set(0, -3, 2);
    scene.add(bounceLight);

    // Soft shadow disk below the pouch
    const shadowGeo = new THREE.PlaneGeometry(2.6, 1.2);
    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext("2d")!;
    const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    grad.addColorStop(0, "rgba(20, 30, 20, 0.38)");
    grad.addColorStop(0.5, "rgba(20, 30, 20, 0.15)");
    grad.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 128, 128);
    const shadowTex = new THREE.CanvasTexture(canvas);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -1.35;
    scene.add(shadowMesh);

    // 5. Build Pouch Mesh with Custom Geometry
    const geometry = createPouchGeometry(1.85, 2.5, 0.52);

    // Materials array for BoxGeometry faces:
    // [0]: +X (right side)
    // [1]: -X (left side)
    // [2]: +Y (top seal)
    // [3]: -Y (bottom gusset)
    // [4]: +Z (FRONT face)
    // [5]: -Z (BACK face)
    const edgeColor = 0xeee7d6; // Natural warm kraft/cream edge
    const sideMat = new THREE.MeshStandardMaterial({
      color: edgeColor,
      roughness: 0.55,
      metalness: 0.04,
    });
    const topMat = new THREE.MeshStandardMaterial({
      color: 0xd9cca9,
      roughness: 0.6,
      metalness: 0.08,
    });
    const bottomMat = new THREE.MeshStandardMaterial({
      color: edgeColor,
      roughness: 0.6,
      metalness: 0.02,
    });

    const initialTexture = new THREE.TextureLoader().load(POUCH_PRODUCTS[0].image);
    initialTexture.colorSpace = THREE.SRGBColorSpace;
    textureCacheRef.current.set(POUCH_PRODUCTS[0].image, initialTexture);

    // Front: Left half of uploaded packaging image
    const frontTex = initialTexture.clone();
    frontTex.repeat.set(0.5, 1);
    frontTex.offset.set(0, 0);

    // Back: Right half of uploaded packaging image (mirrored along X to read correctly)
    const backTex = initialTexture.clone();
    backTex.repeat.set(-0.5, 1);
    backTex.offset.set(1.0, 0);

    const frontMat = new THREE.MeshStandardMaterial({
      map: frontTex,
      roughness: 0.38,
      metalness: 0.05,
    });

    const backMat = new THREE.MeshStandardMaterial({
      map: backTex,
      roughness: 0.38,
      metalness: 0.05,
    });

    const materials = [
      sideMat,   // Right
      sideMat,   // Left
      topMat,    // Top Seal
      bottomMat, // Bottom Gusset
      frontMat,  // Front Face
      backMat,   // Back Face
    ];

    const pouchMesh = new THREE.Mesh(geometry, materials);
    pouchMesh.position.y = 0.05;
    scene.add(pouchMesh);
    pouchMeshRef.current = pouchMesh;

    // 6. Animation loop
    const animate = () => {
      animationFrameIdRef.current = requestAnimationFrame(animate);

      if (autoRotateRef.current && !isDraggingRef.current) {
        targetRotationYRef.current += 0.007;
      }

      // Smooth damping interpolation
      currentRotationYRef.current += (targetRotationYRef.current - currentRotationYRef.current) * 0.09;
      currentRotationXRef.current += (targetRotationXRef.current - currentRotationXRef.current) * 0.09;

      if (pouchMeshRef.current) {
        pouchMeshRef.current.rotation.y = currentRotationYRef.current;
        pouchMeshRef.current.rotation.x = currentRotationXRef.current;
      }

      renderer.render(scene, camera);
    };
    animate();

    // 7. Resize handling
    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      geometry.dispose();
      materials.forEach((m) => m.dispose());
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Update textures when selected product changes
  useEffect(() => {
    const pouchMesh = pouchMeshRef.current;
    if (!pouchMesh) return;

    let baseTexture = textureCacheRef.current.get(selectedProduct.image);
    if (!baseTexture) {
      baseTexture = new THREE.TextureLoader().load(selectedProduct.image);
      baseTexture.colorSpace = THREE.SRGBColorSpace;
      textureCacheRef.current.set(selectedProduct.image, baseTexture);
    }

    const frontTex = baseTexture.clone();
    frontTex.repeat.set(0.5, 1);
    frontTex.offset.set(0, 0);

    const backTex = baseTexture.clone();
    backTex.repeat.set(-0.5, 1);
    backTex.offset.set(1.0, 0);

    const materials = pouchMesh.material as THREE.MeshStandardMaterial[];
    if (materials && materials.length >= 6) {
      if (materials[4].map) materials[4].map.dispose();
      if (materials[5].map) materials[5].map.dispose();
      materials[4].map = frontTex;
      materials[5].map = backTex;
      materials[4].needsUpdate = true;
      materials[5].needsUpdate = true;
    }
  }, [selectedProduct]);

  // Update camera distance when zoom changes
  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.position.z = zoomLevel;
      cameraRef.current.updateProjectionMatrix();
    }
  }, [zoomLevel]);

  // Pointer event handlers for desktop & mobile interaction
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    previousPointerPosRef.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - previousPointerPosRef.current.x;
    const deltaY = e.clientY - previousPointerPosRef.current.y;

    targetRotationYRef.current += deltaX * 0.008;
    // Constrain vertical tilt to realistic ±25 degrees
    targetRotationXRef.current = Math.max(
      -0.35,
      Math.min(0.35, targetRotationXRef.current + deltaY * 0.006)
    );

    previousPointerPosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignored
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setZoomLevel((prev) => Math.max(2.8, Math.min(5.2, prev + e.deltaY * 0.0025)));
  };

  // Quick preset angle controls
  const rotateToFront = () => {
    targetRotationYRef.current = Math.round(targetRotationYRef.current / (Math.PI * 2)) * Math.PI * 2;
    targetRotationXRef.current = 0;
    setAutoRotate(false);
  };

  const rotateToBack = () => {
    const base = Math.round(targetRotationYRef.current / (Math.PI * 2)) * Math.PI * 2;
    targetRotationYRef.current = base + Math.PI;
    targetRotationXRef.current = 0;
    setAutoRotate(false);
  };

  const resetView = () => {
    targetRotationYRef.current = 0;
    targetRotationXRef.current = 0;
    setZoomLevel(3.8);
    setAutoRotate(true);
  };

  return (
    <div className="rounded-2xl border border-[rgba(201,168,76,0.32)] bg-[#121c12] p-4 text-[var(--brand-cream)] shadow-2xl md:p-8">
      {/* ── HEADER & PRODUCT SELECTOR TABS ── */}
      <div className="flex flex-col gap-4 border-b border-[rgba(201,168,76,0.22)] pb-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--brand-gold)] bg-[rgba(201,168,76,0.12)] px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[var(--brand-gold-light)]">
              <Sparkles className="h-3 w-3" /> Interactive 3D Pouch Viewer
            </span>
            <span className="rounded bg-white/10 px-2 py-0.5 text-[11px] text-gray-300">
              500g Retail Pack
            </span>
          </div>
          <h2 className="mt-2 font-[var(--font-display)] text-2xl font-bold text-white md:text-3xl">
            {selectedProduct.name} <span className="font-normal italic text-[var(--brand-gold-light)]">({selectedProduct.subName})</span>
          </h2>
          <p className="mt-1 text-xs text-gray-400">
            Botanical: <span className="italic text-gray-300">{selectedProduct.botanical}</span> · Origin: {selectedProduct.origin}
          </p>
        </div>

        {/* Quick Rotation Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={rotateToFront}
            className="rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white/15"
            title="Snap to front packaging view"
          >
            Front View
          </button>
          <button
            onClick={rotateToBack}
            className="rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white/15"
            title="Snap to back nutrition and specifications view"
          >
            Back Specs
          </button>
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
              autoRotate
                ? "border-[var(--brand-gold)] bg-[var(--brand-gold)]/20 text-[var(--brand-gold-light)]"
                : "border-white/20 bg-white/5 text-gray-300 hover:bg-white/15"
            }`}
            title="Toggle continuous auto-rotation"
          >
            <RotateCw className={`h-3.5 w-3.5 ${autoRotate ? "animate-spin" : ""}`} />
            {autoRotate ? "Auto-Rotate ON" : "Auto-Rotate OFF"}
          </button>
          <button
            onClick={resetView}
            className="rounded-lg border border-white/20 bg-white/5 p-1.5 text-gray-300 transition hover:bg-white/15 hover:text-white"
            title="Reset view orientation"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* ── SPICE PRODUCT SELECTOR CHIPS ── */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {POUCH_PRODUCTS.map((p) => {
          const isSelected = p.id === selectedProduct.id;
          return (
            <button
              key={p.id}
              onClick={() => setSelectedProduct(p)}
              className={`flex-shrink-0 rounded-xl border px-3.5 py-2 text-left transition-all ${
                isSelected
                  ? "border-[var(--brand-gold)] bg-[rgba(201,168,76,0.18)] shadow-md"
                  : "border-white/10 bg-white/5 opacity-75 hover:border-white/25 hover:opacity-100"
              }`}
            >
              <div className="text-xs font-bold text-white">{p.name}</div>
              <div className="text-[10px] text-[var(--brand-gold-light)]">{p.subName}</div>
            </button>
          );
        })}
      </div>

      {/* ── 3D CANVAS STAGE ── */}
      <div className="relative mt-6 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#182618] to-[#0c140c] shadow-inner">
        {/* Interaction hints */}
        <div className="pointer-events-none absolute left-4 top-4 z-10 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] text-gray-300 backdrop-blur-sm">
          ↔ Drag to rotate 360° · Scroll or pinch to zoom
        </div>

        {/* Floating zoom controls */}
        <div className="absolute bottom-4 right-4 z-10 flex flex-col gap-1.5">
          <button
            onClick={() => setZoomLevel((z) => Math.max(2.8, z - 0.3))}
            className="rounded-lg border border-white/15 bg-black/60 p-2 text-white shadow-lg backdrop-blur hover:bg-black/80"
            title="Zoom In"
          >
            <ZoomIn className="h-4 w-4" />
          </button>
          <button
            onClick={() => setZoomLevel((z) => Math.min(5.2, z + 0.3))}
            className="rounded-lg border border-white/15 bg-black/60 p-2 text-white shadow-lg backdrop-blur hover:bg-black/80"
            title="Zoom Out"
          >
            <ZoomOut className="h-4 w-4" />
          </button>
        </div>

        {/* Three.js Mount Container */}
        <div
          ref={mountRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onWheel={handleWheel}
          className="h-[460px] w-full cursor-grab active:cursor-grabbing md:h-[540px]"
          style={{ touchAction: "none" }}
        />
      </div>

      {/* ── SPECIFICATION SUMMARY FOOTER ── */}
      <div className="mt-6 grid gap-4 rounded-xl border border-white/10 bg-white/5 p-4 md:grid-cols-4 md:p-6">
        <div>
          <span className="text-[11px] uppercase tracking-wider text-[var(--brand-gold-light)]">Packaging Model</span>
          <p className="mt-1 font-semibold text-white">180 × 250 × 60 mm Zipper Pouch</p>
          <p className="text-xs text-gray-400">Net Weight: {selectedProduct.weight} · Stand-Up Gusset</p>
        </div>
        <div>
          <span className="text-[11px] uppercase tracking-wider text-[var(--brand-gold-light)]">Processing & Grade</span>
          <p className="mt-1 font-semibold text-white">{selectedProduct.specs.grade}</p>
          <p className="text-xs text-gray-400">{selectedProduct.specs.form}</p>
        </div>
        <div>
          <span className="text-[11px] uppercase tracking-wider text-[var(--brand-gold-light)]">Compliance & License</span>
          <p className="mt-1 font-semibold text-white">FSSAI Lic. 10723999000000</p>
          <p className="text-xs text-gray-400">APEDA · Spices Board · ISO 22000</p>
        </div>
        <div>
          <span className="text-[11px] uppercase tracking-wider text-[var(--brand-gold-light)]">Private Label OEM</span>
          <p className="mt-1 font-semibold text-white">Custom Branding Available</p>
          <p className="text-xs text-gray-400">Nitrogen flushed · Barcode & QR ready</p>
        </div>
      </div>

      {/* Badges strip */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 text-xs text-gray-400">
        <div className="flex flex-wrap gap-2">
          {selectedProduct.specs.features.map((feat) => (
            <span
              key={feat}
              className="inline-flex items-center gap-1 rounded bg-white/5 px-2.5 py-1 text-gray-300"
            >
              <CheckCircle2 className="h-3 w-3 text-[var(--brand-gold)]" />
              {feat}
            </span>
          ))}
        </div>
        <div className="text-[11px] text-[var(--brand-gold-light)]">
          Packed &amp; Marketed by JM Masala Trading LLP · APMC Market Yard, Unjha
        </div>
      </div>
    </div>
  );
};

export default Product3DViewer;
