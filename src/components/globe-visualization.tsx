

"use client"

import { useRef, useEffect, useState } from "react"

export default function GlobeVisualization(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isInteracting, setIsInteracting] = useState(false)
  const interactionRef = useRef({
    isMouseDown: false,
    lastMouseX: 0,
    lastMouseY: 0,
    rotationSpeedX: 0.003,
    rotationSpeedY: 0.001,
    rotationX: 0,
    rotationY: 0,
    zoom: 1,
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Function to set canvas dimensions with higher resolution for retina displays
    const setCanvasDimensions = () => {
      const container = canvas.parentElement
      if (container) {
        const devicePixelRatio = window.devicePixelRatio || 1
        canvas.width = container.clientWidth * devicePixelRatio
        canvas.height = container.clientHeight * devicePixelRatio
        canvas.style.width = `${container.clientWidth}px`
        canvas.style.height = `${container.clientHeight}px`
        ctx.scale(devicePixelRatio, devicePixelRatio)
      }
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Define connection points (major cities)
    const points = [
      { lat: 40.7128, lng: -74.006, name: "New York", size: 1.2 },
      { lat: 51.5074, lng: -0.1278, name: "London", size: 1.2 },
      { lat: 35.6762, lng: 139.6503, name: "Tokyo", size: 1.2 },
      { lat: -33.8688, lng: 151.2093, name: "Sydney", size: 1 },
      { lat: 37.7749, lng: -122.4194, name: "San Francisco", size: 1 },
      { lat: 19.076, lng: 72.8777, name: "Mumbai", size: 1 },
      { lat: -23.5505, lng: -46.6333, name: "São Paulo", size: 1 },
      { lat: 48.8566, lng: 2.3522, name: "Paris", size: 1 },
      { lat: 55.7558, lng: 37.6173, name: "Moscow", size: 1 },
      { lat: 31.2304, lng: 121.4737, name: "Shanghai", size: 1.1 },
      { lat: -6.2088, lng: 106.8456, name: "Jakarta", size: 1 },
      { lat: 28.6139, lng: 77.209, name: "New Delhi", size: 1 },
      { lat: 25.2048, lng: 55.2708, name: "Dubai", size: 1 },
      { lat: -34.6037, lng: -58.3816, name: "Buenos Aires", size: 1 },
      { lat: 30.0444, lng: 31.2357, name: "Cairo", size: 1 },
      { lat: 59.3293, lng: 18.0686, name: "Stockholm", size: 0.9 },
      { lat: -1.2921, lng: 36.8219, name: "Nairobi", size: 0.9 },
      { lat: 41.0082, lng: 28.9784, name: "Istanbul", size: 1 },
      { lat: 1.3521, lng: 103.8198, name: "Singapore", size: 1 },
      { lat: -26.2041, lng: 28.0473, name: "Johannesburg", size: 0.9 },
    ]

    // Create connection pairs (not all cities connect to all others)
    const connections = [
      [0, 1],
      [0, 4],
      [0, 6],
      [0, 7],
      [0, 9],
      [0, 13],
      [1, 7],
      [1, 8],
      [1, 11],
      [1, 12],
      [1, 17],
      [2, 4],
      [2, 9],
      [2, 10],
      [2, 18],
      [3, 6],
      [3, 10],
      [3, 18],
      [3, 19],
      [4, 9],
      [4, 18],
      [5, 11],
      [5, 12],
      [5, 18],
      [6, 13],
      [6, 19],
      [7, 8],
      [7, 17],
      [8, 11],
      [8, 17],
      [9, 10],
      [9, 11],
      [10, 18],
      [11, 12],
      [12, 16],
      [12, 19],
      [14, 16],
      [14, 17],
      [14, 19],
      [15, 17],
      [16, 19],
    ]

    // Animation properties
    const animationProps = {
      time: 0,
      pulseSpeed: 0.02,
      connectionAnimations: connections.map(() => ({ progress: Math.random(), speed: 0.002 + Math.random() * 0.003 })),
      hoverPoint: null as { x: number; y: number; index: number } | null,
      particleTime: 0,
    }

    // Generate random particles around the globe
    const numParticles = 150
    const particles = Array.from({ length: numParticles }, () => ({
      lat: Math.random() * 180 - 90,
      lng: Math.random() * 360 - 180,
      size: 0.2 + Math.random() * 0.5,
      speed: 0.1 + Math.random() * 0.3,
      offset: Math.random() * Math.PI * 2,
    }))

    // Function to convert latitude and longitude into 3D coordinates on the globe
    const latLngTo3D = (lat: number, lng: number, radius: number) => {
      const phi = (90 - lat) * (Math.PI / 180)
      const theta = (lng + 180) * (Math.PI / 180)
      const x = -radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.cos(phi)
      const z = radius * Math.sin(phi) * Math.sin(theta)
      return { x, y, z }
    }

    // Function to rotate a 3D point around the Y and X axes
    const rotatePoint = (point: { x: number; y: number; z: number }, rotationX: number, rotationY: number) => {
      // Rotate around Y axis
      const cosY = Math.cos(rotationY)
      const sinY = Math.sin(rotationY)
      const x1 = point.x * cosY - point.z * sinY
      const z1 = point.z * cosY + point.x * sinY

      // Rotate around X axis
      const cosX = Math.cos(rotationX)
      const sinX = Math.sin(rotationX)
      const y2 = point.y * cosX - z1 * sinX
      const z2 = z1 * cosX + point.y * sinX

      return { x: x1, y: y2, z: z2 }
    }

    // Function to project a 3D point onto the 2D canvas
    const project = (point: { x: number; y: number; z: number }, centerX: number, centerY: number, zoom: number) => {
      // Simple perspective projection
      const fov = 300
      const viewZ = fov + point.z * zoom
      const scale = fov / Math.max(1, viewZ)
      const x = centerX + point.x * scale * zoom
      const y = centerY + point.y * scale * zoom
      return { x, y, scale, depth: viewZ }
    }

    // Function to draw a glowing circle
    const drawGlowingCircle = (
      x: number,
      y: number,
      radius: number,
      color: string,
      glowColor: string,
      glowSize: number,
    ) => {
      // Draw outer glow
      const gradient = ctx.createRadialGradient(x, y, radius, x, y, radius + glowSize)
      gradient.addColorStop(0, glowColor)
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)")
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(x, y, radius + glowSize, 0, Math.PI * 2)
      ctx.fill()

      // Draw inner circle
      ctx.fillStyle = color
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fill()
    }

    // Function to draw the globe and its grid, points, and connections
    const drawGlobe = (timestamp: number) => {
      if (!ctx || !canvas) return

      const container = canvas.parentElement
      if (!container) return

      const width = container.clientWidth
      const height = container.clientHeight
      ctx.clearRect(0, 0, width, height)

      const centerX = width / 2
      const centerY = height / 2
      const baseRadius = Math.min(width, height) * 0.35
      const radius = baseRadius * interactionRef.current.zoom

      // Update rotation based on interaction or auto-rotation
      if (!interactionRef.current.isMouseDown) {
        interactionRef.current.rotationY += interactionRef.current.rotationSpeedY
        interactionRef.current.rotationX += interactionRef.current.rotationSpeedX
      }

      // Update animation time
      animationProps.time += 0.01
      animationProps.particleTime += 0.005

      // Draw the globe background (with gradient)
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius * 1.2)
      gradient.addColorStop(0, "rgba(30, 64, 175, 0.2)")
      gradient.addColorStop(0.5, "rgba(30, 64, 175, 0.15)")
      gradient.addColorStop(1, "rgba(30, 64, 175, 0)")

      ctx.beginPath()
      ctx.arc(centerX, centerY, radius * 1.2, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()

      // Draw the globe outer glow
      const glowGradient = ctx.createRadialGradient(centerX, centerY, radius * 0.9, centerX, centerY, radius * 1.3)
      glowGradient.addColorStop(0, "rgba(59, 130, 246, 0.2)")
      glowGradient.addColorStop(1, "rgba(59, 130, 246, 0)")

      ctx.beginPath()
      ctx.arc(centerX, centerY, radius * 1.3, 0, Math.PI * 2)
      ctx.fillStyle = glowGradient
      ctx.fill()

      // Draw the globe (circle with gradient)
      const sphereGradient = ctx.createRadialGradient(
        centerX - radius * 0.3,
        centerY - radius * 0.3,
        0,
        centerX,
        centerY,
        radius,
      )
      sphereGradient.addColorStop(0, "rgba(59, 130, 246, 0.4)")
      sphereGradient.addColorStop(0.7, "rgba(30, 64, 175, 0.3)")
      sphereGradient.addColorStop(1, "rgba(30, 64, 175, 0.2)")

      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.fillStyle = sphereGradient
      ctx.fill()

      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.strokeStyle = "rgba(59, 130, 246, 0.6)"
      ctx.lineWidth = 2
      ctx.stroke()

      // Store all projected points for later use
      const projectedPoints: Array<{
        x: number
        y: number
        z: number
        projX: number
        projY: number
        scale: number
        depth: number
        index: number
        size: number
      }> = []

      // Calculate and store all projected points
      points.forEach((point, index) => {
        const { x, y, z } = latLngTo3D(point.lat, point.lng, radius)
        const rotated = rotatePoint({ x, y, z }, interactionRef.current.rotationX, interactionRef.current.rotationY)
        const projected = project(rotated, centerX, centerY, interactionRef.current.zoom)

        projectedPoints.push({
          x: rotated.x,
          y: rotated.y,
          z: rotated.z,
          projX: projected.x,
          projY: projected.y,
          scale: projected.scale,
          depth: projected.depth,
          index,
          size: point.size || 1,
        })
      })

      // Sort points by z-depth for proper rendering
      projectedPoints.sort((a, b) => a.z - b.z)

      // Draw grid lines (latitude and longitude)
      const numLatLines = 10
      const numLngLines = 18

      // Draw longitude lines (vertical)
      for (let i = 0; i < numLngLines; i++) {
        const lng = (i / numLngLines) * 360 - 180
        const points = []

        for (let lat = -90; lat <= 90; lat += 5) {
          const { x, y, z } = latLngTo3D(lat, lng, radius)
          const rotated = rotatePoint({ x, y, z }, interactionRef.current.rotationX, interactionRef.current.rotationY)

          if (rotated.z < 0) {
            // Only draw points on the front hemisphere
            const projected = project(rotated, centerX, centerY, interactionRef.current.zoom)
            points.push(projected)
          }
        }

        if (points.length > 1) {
          ctx.beginPath()
          ctx.moveTo(points[0].x, points[0].y)

          for (let j = 1; j < points.length; j++) {
            ctx.lineTo(points[j].x, points[j].y)
          }

          ctx.strokeStyle = "rgba(59, 130, 246, 0.2)"
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      // Draw latitude lines (horizontal)
      for (let i = 1; i < numLatLines; i++) {
        const lat = (i / numLatLines) * 180 - 90
        const points = []

        for (let lng = -180; lng <= 180; lng += 5) {
          const { x, y, z } = latLngTo3D(lat, lng, radius)
          const rotated = rotatePoint({ x, y, z }, interactionRef.current.rotationX, interactionRef.current.rotationY)

          if (rotated.z < 0) {
            // Only draw points on the front hemisphere
            const projected = project(rotated, centerX, centerY, interactionRef.current.zoom)
            points.push(projected)
          }
        }

        if (points.length > 1) {
          ctx.beginPath()
          ctx.moveTo(points[0].x, points[0].y)

          for (let j = 1; j < points.length; j++) {
            ctx.lineTo(points[j].x, points[j].y)
          }

          ctx.strokeStyle = "rgba(59, 130, 246, 0.2)"
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      // Draw particles
      particles.forEach((particle, i) => {
        // Make particles move slowly around their position
        const offsetLng = particle.lng + Math.sin(animationProps.particleTime * particle.speed + particle.offset) * 5

        const { x, y, z } = latLngTo3D(particle.lat, offsetLng, radius * 1.02)
        const rotated = rotatePoint({ x, y, z }, interactionRef.current.rotationX, interactionRef.current.rotationY)

        if (rotated.z < 0) {
          // Only draw particles on the front hemisphere
          const projected = project(rotated, centerX, centerY, interactionRef.current.zoom)
          const particleSize = particle.size * projected.scale

          // Fade particles based on their z position
          const opacity = 0.3 + 0.7 * (-rotated.z / radius)

          ctx.beginPath()
          ctx.arc(projected.x, projected.y, particleSize, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(159, 220, 255, ${opacity})`
          ctx.fill()
        }
      })

      // Draw connections between points
      connections.forEach((connection, idx) => {
        const pointA = projectedPoints.find((p) => p.index === connection[0])
        const pointB = projectedPoints.find((p) => p.index === connection[1])

        if (pointA && pointB && pointA.z < 0 && pointB.z < 0) {
          // Calculate animation progress for this connection
          const animation = animationProps.connectionAnimations[idx]
          animation.progress += animation.speed
          if (animation.progress > 1) animation.progress = 0

          // Draw the connection line
          ctx.beginPath()
          ctx.moveTo(pointA.projX, pointA.projY)
          ctx.lineTo(pointB.projX, pointB.projY)

          // Line opacity based on depth
          const avgDepth = (pointA.z + pointB.z) / 2
          const depthFactor = Math.min(1, Math.max(0, -avgDepth / radius))
          const baseOpacity = 0.1 + 0.3 * depthFactor

          ctx.strokeStyle = `rgba(79, 195, 247, ${baseOpacity})`
          ctx.lineWidth = 1
          ctx.stroke()

          // Draw animated pulse along the connection
          const pulsePos = animation.progress
          const pulseX = pointA.projX + (pointB.projX - pointA.projX) * pulsePos
          const pulseY = pointA.projY + (pointB.projY - pointA.projY) * pulsePos

          ctx.beginPath()
          ctx.arc(pulseX, pulseY, 2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(79, 195, 247, ${0.7 * depthFactor})`
          ctx.fill()
        }
      })

      // Draw points on the globe
      projectedPoints.forEach((point) => {
        if (point.z < 0) {
          // Only draw points on the front hemisphere
          const isHovered = animationProps.hoverPoint && animationProps.hoverPoint.index === point.index

          // Calculate point size based on depth and hover state
          const baseSize = 3 * point.size
          const sizeMultiplier = isHovered ? 1.5 : 1
          const pointSize = baseSize * point.scale * sizeMultiplier

          // Calculate opacity based on depth
          const depthFactor = Math.min(1, Math.max(0, -point.z / radius))
          const baseOpacity = 0.5 + 0.5 * depthFactor

          // Pulse effect
          const pulseSize = isHovered
            ? 1.2 + 0.3 * Math.sin(animationProps.time * 5)
            : 1 + 0.1 * Math.sin(animationProps.time * 3)

          // Draw the point with glow effect
          drawGlowingCircle(
            point.projX,
            point.projY,
            pointSize * pulseSize,
            isHovered ? "rgba(255, 255, 255, 0.9)" : `rgba(79, 195, 247, ${baseOpacity})`,
            isHovered ? "rgba(255, 255, 255, 0.4)" : `rgba(79, 195, 247, ${baseOpacity * 0.5})`,
            pointSize * 2,
          )
        }
      })

      // Draw equator with special highlight
      ctx.beginPath()
      const equatorPoints = []

      for (let lng = -180; lng <= 180; lng += 5) {
        const { x, y, z } = latLngTo3D(0, lng, radius)
        const rotated = rotatePoint({ x, y, z }, interactionRef.current.rotationX, interactionRef.current.rotationY)

        if (rotated.z < 0) {
          // Only draw points on the front hemisphere
          const projected = project(rotated, centerX, centerY, interactionRef.current.zoom)
          equatorPoints.push(projected)
        }
      }

      if (equatorPoints.length > 1) {
        ctx.beginPath()
        ctx.moveTo(equatorPoints[0].x, equatorPoints[0].y)

        for (let j = 1; j < equatorPoints.length; j++) {
          ctx.lineTo(equatorPoints[j].x, equatorPoints[j].y)
        }

        ctx.strokeStyle = "rgba(79, 195, 247, 0.5)"
        ctx.lineWidth = 1.5
        ctx.stroke()
      }

      // Check if mouse is hovering over any point
      if (animationProps.hoverPoint) {
        const point = points[animationProps.hoverPoint.index]

        // Draw tooltip with city name
        ctx.font = "14px Arial"
        ctx.fillStyle = "white"
        ctx.textAlign = "center"
        ctx.fillText(point.name, animationProps.hoverPoint.x, animationProps.hoverPoint.y - 20)
      }
    }

    // Mouse event handlers
    const handleMouseDown = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      interactionRef.current.isMouseDown = true
      interactionRef.current.lastMouseX = e.clientX - rect.left
      interactionRef.current.lastMouseY = e.clientY - rect.top
      setIsInteracting(true)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top

      // Check if mouse is hovering over any point
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const radius = Math.min(rect.width, rect.height) * 0.35 * interactionRef.current.zoom

      let hoveredPoint = null

      // Calculate all points' positions
      for (let i = 0; i < points.length; i++) {
        const { x, y, z } = latLngTo3D(points[i].lat, points[i].lng, radius)
        const rotated = rotatePoint({ x, y, z }, interactionRef.current.rotationX, interactionRef.current.rotationY)

        if (rotated.z < 0) {
          // Only check points on the front hemisphere
          const projected = project(rotated, centerX, centerY, interactionRef.current.zoom)
          const distance = Math.sqrt(Math.pow(mouseX - projected.x, 2) + Math.pow(mouseY - projected.y, 2))

          if (distance < 15) {
            hoveredPoint = { x: projected.x, y: projected.y, index: i }
            break
          }
        }
      }

      animationProps.hoverPoint = hoveredPoint

      // Handle dragging for rotation
      if (interactionRef.current.isMouseDown) {
        const deltaX = mouseX - interactionRef.current.lastMouseX
        const deltaY = mouseY - interactionRef.current.lastMouseY

        interactionRef.current.rotationY += deltaX * 0.01
        interactionRef.current.rotationX += deltaY * 0.01

        interactionRef.current.lastMouseX = mouseX
        interactionRef.current.lastMouseY = mouseY
      }
    }

    const handleMouseUp = () => {
      interactionRef.current.isMouseDown = false
      setIsInteracting(false)
    }

    const handleMouseLeave = () => {
      interactionRef.current.isMouseDown = false
      setIsInteracting(false)
    }

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      // Adjust zoom level with mouse wheel
      const zoomDelta = e.deltaY * -0.001
      interactionRef.current.zoom = Math.max(0.5, Math.min(2, interactionRef.current.zoom + zoomDelta))
    }

    // Add event listeners
    canvas.addEventListener("mousedown", handleMouseDown)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseup", handleMouseUp)
    canvas.addEventListener("mouseleave", handleMouseLeave)
    canvas.addEventListener("wheel", handleWheel)

    // Animation loop
    let animationId: number
    const animate = (timestamp: number) => {
      drawGlobe(timestamp)
      animationId = requestAnimationFrame(animate)
    }
    animationId = requestAnimationFrame(animate)

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      canvas.removeEventListener("mousedown", handleMouseDown)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseup", handleMouseUp)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      canvas.removeEventListener("wheel", handleWheel)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`globe-canvas w-full h-full block ${isInteracting ? "shadow-[0_0_30px_rgba(59,130,246,0.5)]" : ""}`}
    />
  )
}

