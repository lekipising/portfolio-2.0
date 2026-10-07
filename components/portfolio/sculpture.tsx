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
          color: 0xb8eadb,
          metalness: 1,
          roughness: 0.19,
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
        const key = new THREE.DirectionalLight(0xe5e9f0, 4);
        key.position.set(3, 5, 5);
        scene.add(key);
        const rim = new THREE.DirectionalLight(0x43d9ad, 3);
        rim.position.set(-4, 0, 2);
        scene.add(rim);
        const fill = new THREE.DirectionalLight(0x5565e8, 2);
        fill.position.set(0, -4, -2);
        scene.add(fill);
        const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
        const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
        let targetX = 0,
          targetY = 0,
          frame = 0,
          visible = false;
        let contextLost = false;
        let elapsed = 0,
          lastTime = 0;
        group.rotation.set(-0.22, -0.5, -0.12);
        const draw = () => renderer.render(scene, camera);
        const stop = () => {
          cancelAnimationFrame(frame);
          frame = 0;
          lastTime = 0;
        };
        const render = (time: number) => {
          frame = 0;
          if (!visible || document.hidden || motion.matches || contextLost)
            return;
          if (lastTime) elapsed += Math.min(time - lastTime, 50);
          lastTime = time;
          const t = elapsed * 0.0005;
          group.rotation.x += (-0.22 + targetX - group.rotation.x) * 0.045;
          group.rotation.y +=
            (-0.5 + targetY + Math.sin(t) * 0.24 - group.rotation.y) * 0.045;
          group.rotation.z = -0.12 + Math.sin(t * 0.7) * 0.045;
          group.position.y = Math.sin(t * 1.4) * 0.18;
          draw();
          frame = requestAnimationFrame(render);
        };
        const sync = () => {
          stop();
          if (motion.matches || !fine.matches) {
            targetX = 0;
            targetY = 0;
          }
          if (motion.matches) {
            group.rotation.set(-0.22, -0.5, -0.12);
            group.position.y = 0;
          }
          if (visible && !document.hidden && !contextLost) {
            draw();
            if (!motion.matches) frame = requestAnimationFrame(render);
          }
        };
        const resize = new ResizeObserver(() => {
          const w = element.clientWidth,
            h = element.clientHeight;
          if (!w || !h) return;
          renderer.setSize(w, h);
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          if (visible && !document.hidden && !contextLost) draw();
        });
        resize.observe(element);
        const onPointer = (event: PointerEvent) => {
          if (motion.matches || !fine.matches || event.pointerType === "touch")
            return;
          const rect = element.getBoundingClientRect();
          targetY = Math.max(
            -0.5,
            Math.min(0.5, ((event.clientX - rect.left) / rect.width - 0.5) * 1),
          );
          targetX = Math.max(
            -0.3,
            Math.min(
              0.3,
              ((event.clientY - rect.top) / rect.height - 0.5) * 0.6,
            ),
          );
        };
        const onLeave = () => {
          targetX = 0;
          targetY = 0;
        };
        const onContextLost = (event: Event) => {
          event.preventDefault();
          contextLost = true;
          stop();
          setReady(false);
        };
        const observer = new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting;
          sync();
        });
        observer.observe(element);
        element.addEventListener("pointermove", onPointer);
        element.addEventListener("pointerleave", onLeave);
        renderer.domElement.addEventListener("webglcontextlost", onContextLost);
        document.addEventListener("visibilitychange", sync);
        motion.addEventListener("change", sync);
        fine.addEventListener("change", sync);
        cleanup = () => {
          stop();
          resize.disconnect();
          observer.disconnect();
          element.removeEventListener("pointermove", onPointer);
          element.removeEventListener("pointerleave", onLeave);
          renderer.domElement.removeEventListener(
            "webglcontextlost",
            onContextLost,
          );
          document.removeEventListener("visibilitychange", sync);
          motion.removeEventListener("change", sync);
          fine.removeEventListener("change", sync);
          geometry.dispose();
          material.dispose();
          environment.dispose();
          room.dispose();
          pmrem.dispose();
          renderer.dispose();
          renderer.domElement.remove();
        };
        setReady(true);
      } catch {
        cleanup();
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
