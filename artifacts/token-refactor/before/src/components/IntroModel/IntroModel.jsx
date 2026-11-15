import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import './IntroModel.css';

const MODEL_URL = `${import.meta.env.BASE_URL}svg-3d-conversion.glb`;

export default function IntroModel() {
  const hostRef = useRef(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(28, 1, .1, 100);
    camera.position.set(0, .2, 8.4);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    host.appendChild(renderer.domElement);

    const key = new THREE.DirectionalLight(0x78abff, 3.2); key.position.set(-5, 6, 7);
    const fill = new THREE.DirectionalLight(0x9fc2ff, 1.1); fill.position.set(5, 1, 3);
    const rim = new THREE.DirectionalLight(0x1648b8, 2.1); rim.position.set(4, 5, -4);
    scene.add(new THREE.HemisphereLight(0xffffff, 0x526a9b, 1.35), key, fill, rim);

    const group = new THREE.Group();
    group.rotation.set(THREE.MathUtils.degToRad(-15), THREE.MathUtils.degToRad(-31), THREE.MathUtils.degToRad(-3));
    scene.add(group);
    let model;
    let raf = 0;
    let pointerX = 0;
    let pointerY = 0;
    let targetX = 0;
    let targetY = 0;

    const fit = () => {
      const { width, height } = host.getBoundingClientRect();
      if (!width || !height) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    const render = () => {
      targetX += (pointerX - targetX) * .055;
      targetY += (pointerY - targetY) * .055;
      if (model && !reduced) {
        group.rotation.y = THREE.MathUtils.degToRad(-31) + targetX * .105;
        group.rotation.x = THREE.MathUtils.degToRad(-15) - targetY * .07;
        group.position.y = targetY * .1;
        key.position.x = -5 + targetX * 1.1;
      }
      renderer.render(scene, camera);
      raf = requestAnimationFrame(render);
    };
    const onPointerMove = (event) => {
      const rect = host.getBoundingClientRect();
      pointerX = ((event.clientX - rect.left) / rect.width - .5) * 2;
      pointerY = ((event.clientY - rect.top) / rect.height - .5) * 2;
    };
    const onPointerLeave = () => { pointerX = 0; pointerY = 0; };
    const resizeObserver = new ResizeObserver(fit);
    resizeObserver.observe(host);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerleave', onPointerLeave, { passive: true });

    new GLTFLoader().load(MODEL_URL, (gltf) => {
      model = gltf.scene;
      model.traverse((node) => {
        if (!node.isMesh) return;
        node.castShadow = true;
        node.receiveShadow = true;
        const source = Array.isArray(node.material) ? node.material[0] : node.material;
        const material = source?.clone?.() || new THREE.MeshStandardMaterial();
        material.roughness = Math.max(material.roughness ?? .45, .38);
        material.metalness = Math.min(material.metalness ?? .06, .12);
        node.material = material;
      });
      const bounds = new THREE.Box3().setFromObject(model);
      const center = bounds.getCenter(new THREE.Vector3());
      const size = bounds.getSize(new THREE.Vector3());
      model.position.sub(center);
      model.scale.setScalar(3.45 / Math.max(size.x, size.y, size.z));
      group.add(model);
      setStatus('ready');
    }, undefined, () => setStatus('error'));

    fit(); render();
    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
      scene.traverse((node) => { if (node.isMesh) { node.geometry?.dispose(); node.material?.dispose(); } });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={hostRef} className={`intro-model intro-model--${status}`} aria-hidden="true" />;
}
