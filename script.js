noise()
  .pixelate(20, 3)
  .scrollY(-0.1)
  .modulatePixelate(
    noise(4)
      .rotate(() => (time / 7) % 360)
      .scale(1, [1, 1.05].ease("easeInOutCubic").fast(3), 1),
    200,
    100
  )
  .out()
