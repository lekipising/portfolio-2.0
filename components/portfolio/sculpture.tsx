import React from "react";
import { useEffect, useRef, useState } from "react";

export default function Sculpture() {
  const host = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const element = host.current;
    if (!element) return;
    let cancelled = false;
    let cleanup = () => {};
    async function start() {
      try {
        const THREE = await import("three");
        const { RoomEnvironment } = await import(
          "three/examples/jsm/environments/RoomEnvironment.js"
        );
        if (cancelled) return;
        const renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
          powerPreference: "low-power",
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
        renderer.setClearColor(0x000000, 0);
        element.appendChild(renderer.domElement);
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
        camera.position.set(0, 0, 9.5);
        const pmrem = new THREE.PMREMGenerator(renderer);
        const room = new RoomEnvironment();
        const environment = pmrem.fromScene(room);
        scene.environment = environment.texture;
        const material = new THREE.MeshPhysicalMaterial({
          color: 0xc8d2b5,
          metalness: 1,
          roughness: 0.25,
          clearcoat: 1,
          clearcoatRoughness: 0.18,
        });
        const shape = new THREE.Shape();
        shape.moveTo(-1.05, 1.65);
        shape.lineTo(-0.25, 1.65);
        shape.lineTo(-0.25, -0.75);
        shape.lineTo(1.3, -0.75);
        shape.lineTo(1.3, -1.55);
        shape.lineTo(-1.05, -1.55);
        shape.closePath();
        const geometry = new THREE.ExtrudeGeometry(shape, {
          depth: 0.65,
          bevelEnabled: true,
          bevelSegments: 12,
          steps: 1,
          bevelSize: 0.23,
          bevelThickness: 0.23,
          curveSegments: 24,
        });
        geometry.center();
        const group = new THREE.Group();
        const first = new THREE.Mesh(geometry, material);
        first.position.set(-0.55, 0.2, 0);
        const second = new THREE.Mesh(geometry, material);
        second.rotation.z = Math.PI;
        second.position.set(0.75, -0.15, -0.8);
        group.add(first, second);
        scene.add(group);
        const key = new THREE.DirectionalLight(0xfff4d9, 4);
        key.position.set(3, 5, 5);
        scene.add(key);
        const rim = new THREE.DirectionalLight(0xbfff72, 3);
        rim.position.set(-4, 0, 2);
        scene.add(rim);
        const fill = new THREE.DirectionalLight(0x8e9bff, 2);
        fill.position.set(0, -4, -2);
        scene.add(fill);
        const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
        let targetX = 0,
          targetY = 0,
          frame = 0,
          visible = true;
        const resize = new ResizeObserver(() => {
          const w = element.clientWidth,
            h = element.clientHeight;
          if (!w || !h) return;
          renderer.setSize(w, h);
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        });
        resize.observe(element);
        const onPointer = (event: PointerEvent) => {
          if (motion.matches || event.pointerType === "touch") return;
          const rect = element.getBoundingClientRect();
          targetY = ((event.clientX - rect.left) / rect.width - 0.5) * 0.6;
          targetX = ((event.clientY - rect.top) / rect.height - 0.5) * 0.3;
        };
        const onLeave = () => {
          targetX = 0;
          targetY = 0;
        };
        element.addEventListener("pointermove", onPointer);
        element.addEventListener("pointerleave", onLeave);
        const observer = new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting;
        });
        observer.observe(element);
        const render = (time: number) => {
          frame = requestAnimationFrame(render);
          if (!visible || document.hidden) return;
          const t = motion.matches ? 0 : time * 0.0003;
          group.rotation.x += (-0.22 + targetX - group.rotation.x) * 0.045;
          group.rotation.y +=
            (-0.5 + targetY + Math.sin(t) * 0.16 - group.rotation.y) * 0.045;
          group.rotation.z = -0.12;
          group.position.y = Math.sin(t * 1.4) * 0.1;
          renderer.render(scene, camera);
        };
        render(0);
        setReady(true);
        cleanup = () => {
          cancelAnimationFrame(frame);
          resize.disconnect();
          observer.disconnect();
          element.removeEventListener("pointermove", onPointer);
          element.removeEventListener("pointerleave", onLeave);
          geometry.dispose();
          material.dispose();
          environment.dispose();
          room.dispose();
          pmrem.dispose();
          renderer.dispose();
          renderer.domElement.remove();
        };
      } catch {
        setReady(false);
      }
    }
    start();
    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);
  return (
    <div className="sculpture" ref={host} aria-hidden="true">
      <div className={`sculpture-fallback ${ready ? "is-hidden" : ""}`}>
        L<span>L</span>
      </div>
    </div>
  );
}
