import React from 'react'
import Matter from 'matter-js'

import HTMLLogo from '../../assets/icons/HTML5.svg'
import CSSLogo from '../../assets/icons/HTML5.svg'
import BootstrapLogo from '../../assets/icons/Bootstrap.png'
import JavascriptLogo from '../../assets/icons/Javascript.png'
import ReactLogo from '../../assets/icons/React.png'

class Scene extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    let Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Composites = Matter.Composites,
      Common = Matter.Common,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      Composite = Matter.Composite,
      Bodies = Matter.Bodies

    // create engine
    var engine = Engine.create(),
      world = engine.world

    // create renderer
    var render = Render.create({
      element: this.refs.scene,
      engine: engine,
      options: {
        width: 320,
        height: 568,
        background: 'transparent',
      },
    })

    Render.run(render)

    // create runner
    var runner = Runner.create()
    Runner.run(runner, engine)

    // add bodies
    var stack = Composites.stack(20, 20, 10, 5, 0, 0, function (x, y) {
      var sides = Math.round(Common.random(1, 8))

      // triangles can be a little unstable, so avoid until fixed
      sides = sides === 3 ? 4 : sides

      // round the edges of some bodies
      var chamfer = null
      if (sides > 2 && Common.random() > 0.7) {
        chamfer = {
          radius: 10,
        }
      }

      switch (Math.round(Common.random(0, 1))) {
        case 0:
          if (Common.random() < 0.8) {
            return Bodies.rectangle(
              x,
              y,
              Common.random(25, 50),
              Common.random(25, 50),
              { chamfer: chamfer }
            )
          } else {
            return Bodies.rectangle(
              x,
              y,
              Common.random(80, 120),
              Common.random(25, 30),
              { chamfer: chamfer }
            )
          }
        case 1:
          return Bodies.polygon(x, y, sides, Common.random(25, 50), {
            chamfer: chamfer,
          })
      }
    })

    Composite.add(world, [
      stack,
      Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
      Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
      Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
      Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
    ])

    // add gyro control
    if (typeof window !== 'undefined') {
      var updateGravity = function (event) {
        var orientation =
            typeof window.orientation !== 'undefined' ? window.orientation : 0,
          gravity = engine.gravity

        if (orientation === 0) {
          gravity.x = Common.clamp(event.gamma, -90, 90) / 90
          gravity.y = Common.clamp(event.beta, -90, 90) / 90
        } else if (orientation === 180) {
          gravity.x = Common.clamp(event.gamma, -90, 90) / 90
          gravity.y = Common.clamp(-event.beta, -90, 90) / 90
        } else if (orientation === 90) {
          gravity.x = Common.clamp(event.beta, -90, 90) / 90
          gravity.y = Common.clamp(-event.gamma, -90, 90) / 90
        } else if (orientation === -90) {
          gravity.x = Common.clamp(-event.beta, -90, 90) / 90
          gravity.y = Common.clamp(event.gamma, -90, 90) / 90
        }
      }

      window.addEventListener('deviceorientation', updateGravity)
    }

    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      })

    Composite.add(world, mouseConstraint)

    // keep the mouse in sync with rendering
    render.mouse = mouse

    // fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: 800, y: 600 },
    })

    Matter.Runner.run(engine)

    Render.run(render)
  }

  render() {
    return <div ref="scene" />
  }
}
export default Scene
