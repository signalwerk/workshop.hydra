noise()
  .pixelate(20,3)
  .scrollY(-.1)
  .modulatePixelate(
  	noise(
      () => ((time/6)%7)+3 
    )
  	.rotate( 
      () => (time/7)%360 
    )
  	.scale(1, [1,1.1].ease('easeInOutCubic').fast(5),1)
    ,200,100)
  .out(o0)


