import { useEffect, useRef } from "react";
import { Engine, Render, Runner, Bodies, Composite } from "matter-js";

export default function MatterScene() {
  const sceneRef = useRef(null);

  useEffect(() => {
    // Crée le moteur
    const engine = Engine.create();

    // Crée le rendu dans la div (ref)
    const render = Render.create({
      element: sceneRef.current, // pas document.body
      engine: engine,
      options: {
        width: 800,
        height: 600,
        wireframes: false, // pour voir en mode couleur
      },
    });

    // Crée des objets
    const box = Bodies.rectangle(400, 200, 80, 80);
    const ground = Bodies.rectangle(400, 580, 810, 60, { isStatic: true });

    Composite.add(engine.world, [box, ground]);

    // Lance le rendu et le moteur
    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Nettoyage si le composant est démonté
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return <div ref={sceneRef} />; // la div qui accueille Matter
}