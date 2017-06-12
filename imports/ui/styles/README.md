# MaterializeCSS

##Mixins List

```scss
  animation($args)
  animation-delay($delay)
  animation-direction($direction)
  animation-duration($duration)
  animation-fill-mode($mode)
  animation-iteration-count($count)
  animation-name($name)
  animation-play-state($state)
  animation-timing-function($function)
  background-size($args)
  box-sizing($args)
      border-box()
      content-box()
  columns($args)
      column-count($count)
      column-gap($gap)
      column-rule($args)
      column-width($width)
  gradient($default,$start,$stop)
      linear-gradient-top($default,$color1,$stop1,$color2,$stop2,[$color3,$stop3,$color4,$stop4])
      linear-gradient-left($default,$color1,$stop1,$color2,$stop2,[$color3,$stop3,$color4,$stop4])
  transform($args)
      transform-origin($args)
      transform-style($style)
      rotate($deg)
      scale($factor)
      translate($x,$y)
      translate3d($x,$y,$z)
      translateHardware($x,$y)
  text-shadow($args)
  transition($args)
      transition-delay($delay)
      transition-duration($duration)
      transition-property($property)
      transition-timing-function($function)
```

##Media Queries

###CSS

```css
  /* These classes can be added to HTML Elements
   * to affect visibility on certain displays.
   */
  .hide-on-small-only
  .hide-on-small-and-down
  .hide-on-med-and-down
  .hide-on-med-and-up
  .hide-on-med-only
  .hide-on-large-only
  .show-on-large
  .show-on-medium
  .show-on-small
  .show-on-medium-and-up
  .show-on-medium-and-down
```

###Sass

```scss
  @media #{$small-and-down} {
    // styles for small screens and down
  }
  @media #{$medium-and-up} {
    // styles for medium screens and larger
  }
  @media #{$medium-and-down} {
    // styles for medium screens and down
  }
  @media #{$large-and-up} {
    // styles for large screens and up
  }
  @media #{$extra-large-and-up} {
    // styles for extra large screens and up
  }
```